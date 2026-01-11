import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { StageCard } from '@/components/StageCard'
import { ProgressBar } from '@/components/ProgressBar'
import { PixelLoader } from '@/components/PixelLoader'
import { MCEMInfoDialog } from '@/components/MCEMInfoDialog'
import { MCEMStateDiagram } from '@/components/MCEMStateDiagram'
import { TemplateSelector, ScenarioTemplate } from '@/components/TemplateSelector'
import { toast } from 'sonner'
import { motion } from 'framer-motion'

interface MCEMStage {
  id: string
  title: string
  icon: string
  status: 'locked' | 'unlocked' | 'completed'
  content?: string
  color: string
  roles: string[]
  unit: string
}

interface SampleOpportunity {
  id: string
  title: string
  text: string
}

// MCEM = Microsoft Customer Engagement Methodology
// 5 stages that map to the customer journey
const STAGE_COLORS = {
  'listen-consult': 'oklch(0.65 0.20 200)',    // Teal
  'inspire-design': 'oklch(0.70 0.25 45)',     // Orange
  'empower-achieve': 'oklch(0.45 0.15 260)',   // Purple
  'realize-value': 'oklch(0.65 0.20 150)',     // Green
  'manage-optimize': 'oklch(0.75 0.18 85)'     // Yellow
}

function App() {
  const [inputText, setInputText] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [currentStageIndex, setCurrentStageIndex] = useState(-1)
  const [sampleOpportunities, setSampleOpportunities] = useState<SampleOpportunity[]>([])
  const [showSamples, setShowSamples] = useState(false)
  const [activeJourneyStage, setActiveJourneyStage] = useState<string | undefined>(undefined)
  const [completedJourneyStages, setCompletedJourneyStages] = useState<string[]>([])
  const [activeTemplate, setActiveTemplate] = useState<ScenarioTemplate | null>(null)
  
  // MCEM = Microsoft Customer Engagement Methodology - 5 stages mapping to customer journey
  const [stages, setStages] = useState<MCEMStage[]>([
    { id: 'listen-consult', title: 'LISTEN & CONSULT', icon: '👂', status: 'locked', color: STAGE_COLORS['listen-consult'], roles: ['AE', 'ATS', 'SSP', 'CSAM', 'SAE'], unit: 'ATU' },
    { id: 'inspire-design', title: 'INSPIRE & DESIGN', icon: '💡', status: 'locked', color: STAGE_COLORS['inspire-design'], roles: ['SSP', 'SE', 'AE', 'ATS', 'CSAM', 'SAE'], unit: 'STU' },
    { id: 'empower-achieve', title: 'EMPOWER & ACHIEVE', icon: '🚀', status: 'locked', color: STAGE_COLORS['empower-achieve'], roles: ['SSP', 'SE', 'AE', 'CE', 'ATS', 'CSAM', 'SAE'], unit: 'STU' },
    { id: 'realize-value', title: 'REALIZE VALUE', icon: '✅', status: 'locked', color: STAGE_COLORS['realize-value'], roles: ['CSAM', 'CSA', 'SAE', 'Partner'], unit: 'CSU' },
    { id: 'manage-optimize', title: 'MANAGE & OPTIMIZE', icon: '🔄', status: 'locked', color: STAGE_COLORS['manage-optimize'], roles: ['CSAM', 'CSA', 'SAE', 'Partner'], unit: 'CSU' }
  ])

  useEffect(() => {
    const loadSamples = async () => {
      try {
        if (window.spark?.kv?.get) {
          const samples = await window.spark.kv.get<SampleOpportunity[]>('sample-opportunities')
          if (samples) {
            setSampleOpportunities(samples)
          }
        }
      } catch (error) {
        console.warn('Spark KV not available, skipping sample load:', error)
      }
    }
    loadSamples()
  }, [])

  const MIN_CHARS = 100
  const MAX_CHARS = 5000
  const charCount = inputText.length
  const canSubmit = (charCount >= MIN_CHARS && charCount <= MAX_CHARS && !isAnalyzing) || activeTemplate !== null

  // Handle template selection
  const handleTemplateSelect = (template: ScenarioTemplate) => {
    // Reset stages first, then set template and text
    setCurrentStageIndex(-1)
    setActiveJourneyStage(undefined)
    setCompletedJourneyStages([])
    setStages([
      { id: 'listen-consult', title: 'LISTEN & CONSULT', icon: '👂', status: 'locked', color: STAGE_COLORS['listen-consult'], roles: ['AE', 'ATS', 'SSP', 'CSAM', 'SAE'], unit: 'ATU' },
      { id: 'inspire-design', title: 'INSPIRE & DESIGN', icon: '💡', status: 'locked', color: STAGE_COLORS['inspire-design'], roles: ['SSP', 'SE', 'AE', 'ATS', 'CSAM', 'SAE'], unit: 'STU' },
      { id: 'empower-achieve', title: 'EMPOWER & ACHIEVE', icon: '🚀', status: 'locked', color: STAGE_COLORS['empower-achieve'], roles: ['SSP', 'SE', 'AE', 'CE', 'ATS', 'CSAM', 'SAE'], unit: 'STU' },
      { id: 'realize-value', title: 'REALIZE VALUE', icon: '✅', status: 'locked', color: STAGE_COLORS['realize-value'], roles: ['CSAM', 'CSA', 'SAE', 'Partner'], unit: 'CSU' },
      { id: 'manage-optimize', title: 'MANAGE & OPTIMIZE', icon: '🔄', status: 'locked', color: STAGE_COLORS['manage-optimize'], roles: ['CSAM', 'CSA', 'SAE', 'Partner'], unit: 'CSU' }
    ])
    // Now set the template and text
    setActiveTemplate(template)
    setInputText(template.opportunityText)
    toast.success(`📋 Loaded scenario: ${template.title}`)
  }

  // Run scenario from template (no LLM needed)
  const runScenarioFromTemplate = async () => {
    if (!activeTemplate) return

    setIsAnalyzing(true)
    setCurrentStageIndex(-1)
    setCompletedJourneyStages([])

    const stageIds: (keyof ScenarioTemplate['stages'])[] = [
      'listen-consult',
      'inspire-design',
      'empower-achieve',
      'realize-value',
      'manage-optimize'
    ]

    try {
      for (let i = 0; i < stageIds.length; i++) {
        const stageId = stageIds[i]
        setCurrentStageIndex(i)
        
        // Update journey diagram - set active stage
        setActiveJourneyStage(stageId)

        setStages(prev => prev.map((stage, idx) => 
          idx === i ? { ...stage, status: 'unlocked' } : stage
        ))

        // Simulate processing delay for visual effect
        await new Promise(resolve => setTimeout(resolve, 800))

        // Get content from template
        const content = activeTemplate.stages[stageId].content

        setStages(prev => prev.map((stage, idx) => 
          idx === i ? { ...stage, status: 'completed', content } : stage
        ))
        
        // Mark journey stage as completed
        setCompletedJourneyStages(prev => [...prev, stageId])

        await new Promise(resolve => setTimeout(resolve, 300))
      }

      setActiveJourneyStage(undefined)

      toast.success(`🎮 Quest Complete! ${activeTemplate.customer} scenario fully simulated.`)
    } catch (error) {
      toast.error('⚠️ Scenario simulation failed. Please try again.')
      console.error('Scenario error:', error)
    } finally {
      setIsAnalyzing(false)
      setCurrentStageIndex(-1)
    }
  }

  const analyzeWithLLM = async (stageName: string, stageDescription: string, roleGuidance: string): Promise<string> => {
    // Check if Spark LLM is available
    if (!window.spark?.llm || !window.spark?.llmPrompt) {
      // Return mock response when running outside Spark environment
      return `[Running in local mode - Spark LLM not available]\n\nThis is a placeholder analysis for the ${stageName} stage.\n\nIn the full Spark environment, this would provide AI-powered insights analyzing:\n- ${stageDescription}\n\nRole guidance considered: ${roleGuidance}\n\nTo get real analysis, run this app in the GitHub Spark environment.`
    }

    const prompt = window.spark.llmPrompt`You are an expert Microsoft sales analyst specializing in MCEM (Microsoft Customer Engagement Methodology).

MCEM is Microsoft's unified framework for engaging customers across the entire lifecycle, connecting all customer-facing roles (sales, customer success, industry solutions, and partners) into one team to deliver consistent, customer-centric engagements.

Stage: ${stageName}
Stage Description: ${stageDescription}

Role Guidance for this stage:
${roleGuidance}

Opportunity/Engagement Text:
${inputText}

Analyze this opportunity specifically for the ${stageName} stage. Provide actionable insights, key considerations, and recommendations in 3-5 concise paragraphs. Be specific and reference details from the engagement text. Consider which Microsoft sales team members should be involved based on the role guidance and what they should focus on to successfully progress through this stage.

Format your response as clear, professional paragraphs without bullet points or headers.`

    const result = await window.spark.llm(prompt, 'gpt-4o-mini')
    return result
  }

  const handleAnalyze = async () => {
    if (!canSubmit) return

    setIsAnalyzing(true)
    setCurrentStageIndex(-1)
    setCompletedJourneyStages([])

    // MCEM = Microsoft Customer Engagement Methodology - 5 stages
    const stageDefinitions = [
      { 
        id: 'listen-consult', 
        name: 'LISTEN & CONSULT',
        description: 'Understand customer needs and desired outcomes. Customer believes Microsoft could solve the problem. Map the customer landscape - stakeholders, decision makers, business challenges, current state, and organizational dynamics.',
        roleGuidance: `Lead Roles: AE/ATS (ATU - Account Team Unit)
Supporting: SSP, CSAM, SAE, Partner

ATU (AE/ATS) Responsibilities:
- Engaging CxOs/Stakeholders across Rooms of the House to identify Customer Priorities
- Creating and mapping Stage 1 Opptys to Customer Priorities and Stakeholders
- Qualifying and transitioning Opptys to Stage 2 in collaboration with STU

Role Activities:
- AE: Develop account plan, meet customer & qualify, engages partner
- ATS: Develop Customer Secure AI Assessment, CxO TDM relationship, MACC Consumption Plan
- IA: Create and qualify industry use case pipeline in partnership with AE for CSA and SDC/ISV
- SSP: Support qualification, identify Solution Play
- SAE: Meet customer and qualify services opportunity (Consulting + Unified), contributes to AP
- Partner: Discover Co-sell opportunities, submit inbound referral

Stage 1 Opportunity Qualification Criteria (ATU + STU collaboration):
- Customer Outcomes identified
- Customer Decision maker/s (business and technical) identified
- Major technical blockers identified with resolution plan
- Approval Process determined and customer ready for Stage 2
- Budget availability validated
- Timing confirmed

Stage 1 Milestone Criteria:
- Create initial Uncommitted Milestone when creating Stage 1 Consumption Opportunity in MSX
- Milestone Est. Due date and Est. Value (not $0) is required
- Focus on materiality of scope: Workloads, high-level sizing
- Reflect major timing/phasing constraints for commitment, deployment

Exit Criteria: Qualified pipeline

REQUIRED HANDOFF: ATU-to-STU Opportunity Handoff and Milestone transition discussion
- ATU & SSP to agree on Milestone value and Due Date before Oppty is moved to Stage 2`
      },
      { 
        id: 'inspire-design', 
        name: 'INSPIRE & DESIGN',
        description: 'Co-create solutions aligned to business priorities. Customer has interest in proposed solution. Execute workshops, assessments, and finalize value proposition.',
        roleGuidance: `Lead Roles: SSP/SE (STU - Solution Team Unit)
Supporting: AE, ATS, SAE, PSS/PDM

STU (Specialist) Responsibilities:
- Receiving and understanding qualified opportunity and supporting ATU in additional qualification if needed
- Within 7 business days after transition discussion, taking ownership from ATU of Uncommitted milestones in MSX
- Working with Customer to move Uncommitted milestones to Committed

Role Activities:
- AE: Orchestrate pursuit team
- ATS: Drive tech efforts, ensure solution fits customer tech landscape and Customer Secure AI Assessment
- SSP: Execute Solution Play, engage Partner and/or Services
- SE: Technical assessment, initial architecture, and proof
- Hub SE: Engagement journey mapped to Secure AI Plan
- CSAM: Create Customer Success Plan (CSP)
- SAE: Orchestrate Services teams with support from Custom Consulting Sales teams or Unified GBB
- PSS/PDM: Accept outbound opportunities, collaborate on planning, leverage incentives

Exit Criteria: Customer aligned to solution and business case`
      },
      { 
        id: 'empower-achieve', 
        name: 'EMPOWER & ACHIEVE',
        description: 'Prove business case and technology. Secure technical and business decisions, negotiate terms, and process contract.',
        roleGuidance: `Lead Roles: SSP/SE (STU - Solution Team Unit)
Supporting: AE, ATS, CE, SAE, PSS/PDM

Customer Outcome: Prove business case and technology
Exit Criteria: Customer Agreement in Place

Key Activities:
- Technical and Business Proof
- Deal Shaping
- Negotiate Terms
- Process Contract

Role Activities:
- AE: Facilitate negotiation and deal closure
- CE: Drive deal strategy, negotiation and deal execution
- ATS: Secure tech agreements, ensures consumption plan covers at least 1st year of MACC value
- SSP: Secure business decision
- SE: Secure technical decision
- Hub SE: Secure technical decision
- CSAM: Prepare for milestone transition to delivery, validate and confirm CSP
- SAE: Drives negotiation and services deal closure
- PSS/PDM: Deliver PoC, business value, accelerate & secure agreement

STU End-of-Stage Responsibilities:
- Commit the Consumption Opportunity once customer has committed to proposed workloads, timeline, and revenue is confirmed
- Move Opportunity (Consumption Intent) to Stage 4 "Realize Value" in MSX
- Transition Consumption Opportunity to CSU

REQUIRED: STU-to-CSU Handoff
- SSP should transition ownership of Stage 4 Opportunity to CSU within 7 days
- STU & CSU (CSAM/CSA) should meet and validate Consumption Opportunity details before ownership transfer`
      },
      { 
        id: 'realize-value', 
        name: 'REALIZE VALUE',
        description: 'Ensure successful adoption and measurable outcomes. Customer satisfied with implementation.',
        roleGuidance: `Lead Roles: CSAM/CSA (CSU - Customer Success Unit)
Supporting: SAE, Services, Partner

Customer Outcome: Customer satisfied with implementation
Exit Criteria: Outcomes Met and Baseline Metrics in Place

Key Activities:
- Technical Implementation
- Change Management and Training
- Business Value Metric Baseline

CSU (CSA/CSAM) Responsibilities:
- Work with STU (SSP and SE) to confirm customer agreement details and any closing billed opportunity comments
- Take ownership of Consumption Opportunity in MSX from SSP when it moves to Stage 4
- Drive Consumption Opportunity to closure, updating status in MSX up to Est. Date

Role Activities:
- CSA: Drive delivery and consumption/usage for committed milestones
- CSAM: Coordinate CSP delivery, lead committed milestones to completion (Unified). Engages CSA as needed
- SAE: Stays engaged with Consulting CPM or Unified CSDR activities during project delivery
- Partner: Drive delivery of partner delivered milestones

Resources for Handoff:
- For Unified Accounts: Check aka.ms/whoistheCSAM to identify the right CSAM owner
- For Non-Unified Accounts: Transition to the CSA manager accountable for your Area/OU`
      },
      { 
        id: 'manage-optimize', 
        name: 'MANAGE & OPTIMIZE',
        description: 'Continuously improve and expand value. Customer expectations are met with solution health achieved.',
        roleGuidance: `Lead Roles: CSAM/CSA (CSU - Customer Success Unit)
Supporting: SAE, Services, Partner, AE, ATS

Customer Outcome: Customer expectations are met
Exit Criteria: Opportunity Done and Next Steps Identified

Key Activities:
- Solution Health Achieved
- Business Value Metrics Achieved
- Rightsizing/Legacy Removal/Backlog Identification

Role Activities:
- CSA: Drive solution health, identify expansion opportunities
- CSAM: Achieve customer health outcomes, accelerate customer value and identify expansion opportunities
- SAE: Identifies services expansion opportunities
- Partner: Optimize solution architecture, identify expansion opportunities

Cycle Back: After this stage, opportunities may cycle back to Listen & Consult for expansion opportunities, creating a continuous engagement loop.`
      }
    ]

    try {
      for (let i = 0; i < stageDefinitions.length; i++) {
        const stageDef = stageDefinitions[i]
        setCurrentStageIndex(i)
        
        // Update journey diagram - set active stage
        setActiveJourneyStage(stageDef.id)

        setStages(prev => prev.map((stage, idx) => 
          idx === i ? { ...stage, status: 'unlocked' } : stage
        ))

        const content = await analyzeWithLLM(stageDef.name, stageDef.description, stageDef.roleGuidance)

        setStages(prev => prev.map((stage, idx) => 
          idx === i ? { ...stage, status: 'completed', content } : stage
        ))
        
        // Mark journey stage as completed
        setCompletedJourneyStages(prev => [...prev, stageDef.id])

        await new Promise(resolve => setTimeout(resolve, 500))
      }

      setActiveJourneyStage(undefined)

      toast.success('🎮 Quest Complete! All MCEM stages analyzed.')
    } catch (error) {
      toast.error('⚠️ Analysis failed. Please try again.')
      console.error('Analysis error:', error)
    } finally {
      setIsAnalyzing(false)
      setCurrentStageIndex(-1)
    }
  }

  const handleReset = () => {
    setInputText('')
    setCurrentStageIndex(-1)
    setActiveJourneyStage(undefined)
    setCompletedJourneyStages([])
    setActiveTemplate(null)
    setStages([
      { id: 'listen-consult', title: 'LISTEN & CONSULT', icon: '👂', status: 'locked', color: STAGE_COLORS['listen-consult'], roles: ['AE', 'ATS', 'SSP', 'CSAM', 'SAE'], unit: 'ATU' },
      { id: 'inspire-design', title: 'INSPIRE & DESIGN', icon: '💡', status: 'locked', color: STAGE_COLORS['inspire-design'], roles: ['SSP', 'SE', 'AE', 'ATS', 'CSAM', 'SAE'], unit: 'STU' },
      { id: 'empower-achieve', title: 'EMPOWER & ACHIEVE', icon: '🚀', status: 'locked', color: STAGE_COLORS['empower-achieve'], roles: ['SSP', 'SE', 'AE', 'CE', 'ATS', 'CSAM', 'SAE'], unit: 'STU' },
      { id: 'realize-value', title: 'REALIZE VALUE', icon: '✅', status: 'locked', color: STAGE_COLORS['realize-value'], roles: ['CSAM', 'CSA', 'SAE', 'Partner'], unit: 'CSU' },
      { id: 'manage-optimize', title: 'MANAGE & OPTIMIZE', icon: '🔄', status: 'locked', color: STAGE_COLORS['manage-optimize'], roles: ['CSAM', 'CSA', 'SAE', 'Partner'], unit: 'CSU' }
    ])
  }

  const handleFullReset = () => {
    handleReset()
    setActiveTemplate(null)
    toast.success('🔄 Reset complete')
  }

  const loadSample = (sample: SampleOpportunity) => {
    setInputText(sample.text)
    setShowSamples(false)
    setActiveTemplate(null)
    handleReset()
    toast.success(`📋 Loaded: ${sample.title}`)
  }

  const progress = stages.filter(s => s.status === 'completed').length * 20

  return (
    <div className="min-h-screen bg-background pixel-bg p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center space-y-4"
        >
          <h1 className="pixel-font text-2xl md:text-4xl text-accent drop-shadow-lg">
            MCEM QUEST
          </h1>
          <p className="space-font text-sm md:text-base text-foreground/80">
            Microsoft Customer Engagement Methodology - Journey through the five stages of customer success
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <MCEMInfoDialog />
            <TemplateSelector 
              onSelectTemplate={handleTemplateSelect}
              disabled={isAnalyzing}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05 }}
        >
          <MCEMStateDiagram 
            activeStage={activeJourneyStage}
            completedStages={completedJourneyStages}
          />
        </motion.div>

        {/* Active Scenario Banner */}
        {activeTemplate && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-accent/10 border-2 border-accent/30 p-4 rounded-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <h3 className="pixel-font text-xs text-accent">{activeTemplate.title}</h3>
                  <p className="space-font text-xs text-muted-foreground">
                    {activeTemplate.customer} • {activeTemplate.industry} • Partner: {activeTemplate.partner}
                  </p>
                </div>
              </div>
              <Button
                onClick={handleFullReset}
                variant="ghost"
                size="sm"
                className="space-font text-xs text-muted-foreground hover:text-destructive"
                disabled={isAnalyzing}
              >
                ✕ Clear
              </Button>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-card p-6 pixel-border"
        >
          <div className="flex justify-between items-center mb-4">
            <label className="pixel-font text-xs text-secondary">
              {activeTemplate ? 'SCENARIO OPPORTUNITY' : 'ENTER OPPORTUNITY'}
            </label>
            {sampleOpportunities.length > 0 && !activeTemplate && (
              <Button
                onClick={() => setShowSamples(!showSamples)}
                variant="ghost"
                className="space-font text-xs text-secondary hover:text-accent"
                disabled={isAnalyzing}
              >
                {showSamples ? 'HIDE SAMPLES' : 'LOAD SAMPLE'}
              </Button>
            )}
          </div>

          {showSamples && sampleOpportunities.length > 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="mb-4 space-y-2"
            >
              {sampleOpportunities.map(sample => (
                <button
                  key={sample.id}
                  onClick={() => loadSample(sample)}
                  className="w-full text-left p-3 bg-muted hover:bg-muted/70 transition-colors space-font text-xs border-2 border-border"
                >
                  <span className="text-accent">▶</span> {sample.title}
                </button>
              ))}
            </motion.div>
          )}

          <Textarea
            value={inputText}
            onChange={(e) => !activeTemplate && setInputText(e.target.value.slice(0, MAX_CHARS))}
            placeholder="Paste your sales opportunity, project description, or customer engagement details here. Include context about the customer, their challenges, stakeholders, current solutions, and business objectives..."
            className={`min-h-[200px] bg-muted border-2 border-border focus:border-accent transition-colors space-font text-sm resize-none ${activeTemplate ? 'opacity-80' : ''}`}
            disabled={isAnalyzing}
            readOnly={!!activeTemplate}
          />
          <div className="flex justify-between items-center mt-4">
            <span className={`space-font text-xs ${
              charCount < MIN_CHARS ? 'text-destructive' : 
              charCount > MAX_CHARS ? 'text-destructive' : 
              'text-success'
            }`}>
              {activeTemplate ? (
                <span className="text-success">📋 Scenario loaded - ready to simulate</span>
              ) : (
                <>{charCount} / {MAX_CHARS} chars {charCount < MIN_CHARS && `(min ${MIN_CHARS})`}</>
              )}
            </span>
            <div className="flex gap-2">
              {(inputText || activeTemplate) && (
                <Button
                  onClick={handleFullReset}
                  variant="outline"
                  className="pixel-button space-font text-xs font-medium"
                  disabled={isAnalyzing}
                >
                  RESET
                </Button>
              )}
              {activeTemplate ? (
                <Button
                  onClick={runScenarioFromTemplate}
                  disabled={isAnalyzing}
                  className="pixel-button bg-accent text-accent-foreground hover:bg-accent space-font text-xs font-medium"
                  style={{ color: 'var(--color-accent-foreground)' }}
                >
                  {isAnalyzing ? 'SIMULATING...' : '▶ RUN SCENARIO'}
                </Button>
              ) : (
                <Button
                  onClick={handleAnalyze}
                  disabled={!canSubmit}
                  className="pixel-button bg-accent text-accent-foreground hover:bg-accent space-font text-xs font-medium"
                  style={{ color: 'var(--color-accent-foreground)' }}
                >
                  {isAnalyzing ? 'ANALYZING...' : 'ANALYZE'}
                </Button>
              )}
            </div>
          </div>
        </motion.div>

        {(isAnalyzing || stages.some(s => s.status !== 'locked')) && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="pixel-font text-xs text-secondary">PROGRESS</span>
                <span className="space-font text-xs text-foreground">{progress}%</span>
              </div>
              <ProgressBar progress={progress} />
            </div>

            {isAnalyzing && currentStageIndex >= 0 && (
              <PixelLoader />
            )}

            <div className="space-y-4">
              {stages.map((stage, index) => (
                <StageCard
                  key={stage.id}
                  title={stage.title}
                  icon={stage.icon}
                  status={stage.status}
                  content={stage.content}
                  color={stage.color}
                  roles={stage.roles}
                  unit={stage.unit}
                />
              ))}
            </div>
          </motion.div>
        )}

        {!isAnalyzing && stages.every(s => s.status === 'locked') && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center py-12 space-y-4"
          >
            <div className="text-6xl">🎮</div>
            <p className="space-font text-sm text-muted-foreground">
              Enter your opportunity details above to begin the MCEM analysis quest
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default App
