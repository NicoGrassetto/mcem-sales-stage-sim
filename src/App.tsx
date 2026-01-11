import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { StageCard } from '@/components/StageCard'
import { ProgressBar } from '@/components/ProgressBar'
import { PixelLoader } from '@/components/PixelLoader'
import { MCEMInfoDialog } from '@/components/MCEMInfoDialog'
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
}

interface SampleOpportunity {
  id: string
  title: string
  text: string
}

const STAGE_COLORS = {
  map: 'oklch(0.65 0.20 150)',
  compete: 'oklch(0.70 0.25 45)',
  expand: 'oklch(0.45 0.15 260)',
  modernize: 'oklch(0.75 0.18 85)'
}

function App() {
  const [inputText, setInputText] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [currentStageIndex, setCurrentStageIndex] = useState(-1)
  const [sampleOpportunities, setSampleOpportunities] = useState<SampleOpportunity[]>([])
  const [showSamples, setShowSamples] = useState(false)
  const [stages, setStages] = useState<MCEMStage[]>([
    { id: 'map', title: 'MAP', icon: '🔍', status: 'locked', color: STAGE_COLORS.map, roles: ['AE', 'ATS', 'CS'] },
    { id: 'compete', title: 'COMPETE', icon: '⚔️', status: 'locked', color: STAGE_COLORS.compete, roles: ['SSP', 'ATS', 'AE'] },
    { id: 'expand', title: 'EXPAND', icon: '📈', status: 'locked', color: STAGE_COLORS.expand, roles: ['AE', 'SSP', 'CS'] },
    { id: 'modernize', title: 'MODERNIZE', icon: '⚙️', status: 'locked', color: STAGE_COLORS.modernize, roles: ['ATS', 'SSP', 'CS'] }
  ])

  useEffect(() => {
    const loadSamples = async () => {
      const samples = await window.spark.kv.get<SampleOpportunity[]>('sample-opportunities')
      if (samples) {
        setSampleOpportunities(samples)
      }
    }
    loadSamples()
  }, [])

  const MIN_CHARS = 100
  const MAX_CHARS = 5000
  const charCount = inputText.length
  const canSubmit = charCount >= MIN_CHARS && charCount <= MAX_CHARS && !isAnalyzing

  const analyzeWithLLM = async (stageName: string, stageDescription: string, roleGuidance: string): Promise<string> => {
    const prompt = window.spark.llmPrompt`You are an expert Microsoft sales analyst specializing in the MCEM (Map, Compete, Expand, Modernize) sales methodology.

Stage: ${stageName}
Stage Description: ${stageDescription}

Role Guidance for this stage:
${roleGuidance}

Opportunity/Engagement Text:
${inputText}

Analyze this opportunity specifically for the ${stageName} stage. Provide actionable insights, key considerations, and recommendations in 3-5 concise paragraphs. Be specific and reference details from the engagement text. Consider which Microsoft sales team members (Account Executive, SSP, Solutions Engineer/ATS, Customer Success) should be involved and what they should focus on.

Format your response as clear, professional paragraphs without bullet points or headers.`

    const result = await window.spark.llm(prompt, 'gpt-4o-mini')
    return result
  }

  const handleAnalyze = async () => {
    if (!canSubmit) return

    setIsAnalyzing(true)
    setCurrentStageIndex(-1)

    const stageDefinitions = [
      { 
        id: 'map', 
        name: 'MAP',
        description: 'Map the customer landscape - understand stakeholders, decision makers, business challenges, current state, and organizational dynamics',
        roleGuidance: 'Account Executive leads relationship mapping and stakeholder identification. Solutions Engineer (ATS) conducts technical discovery. Customer Success identifies business outcomes and success criteria.'
      },
      { 
        id: 'compete', 
        name: 'COMPETE',
        description: 'Competitive positioning - identify competitors, differentiation points, competitive advantages, risks, and win strategies',
        roleGuidance: 'Specialist Sales Professional (SSP) provides workload-specific competitive intelligence. Solutions Engineer (ATS) addresses technical differentiation. Account Executive develops overall win strategy.'
      },
      { 
        id: 'expand', 
        name: 'EXPAND',
        description: 'Expansion opportunities - identify upsell potential, cross-sell opportunities, additional use cases, and growth pathways',
        roleGuidance: 'Account Executive identifies account expansion opportunities. SSPs discover workload-specific upsell possibilities. Customer Success identifies adoption opportunities and additional use cases.'
      },
      { 
        id: 'modernize', 
        name: 'MODERNIZE',
        description: 'Modernization strategy - cloud migration paths, digital transformation opportunities, technical modernization, and innovation potential',
        roleGuidance: 'Solutions Engineer (ATS) designs cloud architecture and migration strategy. SSPs position modern workload capabilities. Customer Success creates transformation vision and change management plan.'
      }
    ]

    try {
      for (let i = 0; i < stageDefinitions.length; i++) {
        const stageDef = stageDefinitions[i]
        setCurrentStageIndex(i)

        setStages(prev => prev.map((stage, idx) => 
          idx === i ? { ...stage, status: 'unlocked' } : stage
        ))

        const content = await analyzeWithLLM(stageDef.name, stageDef.description, stageDef.roleGuidance)

        setStages(prev => prev.map((stage, idx) => 
          idx === i ? { ...stage, status: 'completed', content } : stage
        ))

        await new Promise(resolve => setTimeout(resolve, 500))
      }

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
    setStages([
      { id: 'map', title: 'MAP', icon: '🔍', status: 'locked', color: STAGE_COLORS.map, roles: ['AE', 'ATS', 'CS'] },
      { id: 'compete', title: 'COMPETE', icon: '⚔️', status: 'locked', color: STAGE_COLORS.compete, roles: ['SSP', 'ATS', 'AE'] },
      { id: 'expand', title: 'EXPAND', icon: '📈', status: 'locked', color: STAGE_COLORS.expand, roles: ['AE', 'SSP', 'CS'] },
      { id: 'modernize', title: 'MODERNIZE', icon: '⚙️', status: 'locked', color: STAGE_COLORS.modernize, roles: ['ATS', 'SSP', 'CS'] }
    ])
  }

  const loadSample = (sample: SampleOpportunity) => {
    setInputText(sample.text)
    setShowSamples(false)
    handleReset()
    toast.success(`📋 Loaded: ${sample.title}`)
  }

  const progress = stages.filter(s => s.status === 'completed').length * 25

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
            Transform your sales opportunity through the four stages of Microsoft's MCEM model
          </p>
          <div className="flex justify-center pt-2">
            <MCEMInfoDialog />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-card p-6 pixel-border"
        >
          <div className="flex justify-between items-center mb-4">
            <label className="pixel-font text-xs text-secondary">
              ENTER OPPORTUNITY
            </label>
            {sampleOpportunities.length > 0 && (
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
            onChange={(e) => setInputText(e.target.value.slice(0, MAX_CHARS))}
            placeholder="Paste your sales opportunity, project description, or customer engagement details here. Include context about the customer, their challenges, stakeholders, current solutions, and business objectives..."
            className="min-h-[200px] bg-muted border-2 border-border focus:border-accent transition-colors space-font text-sm resize-none"
            disabled={isAnalyzing}
          />
          <div className="flex justify-between items-center mt-4">
            <span className={`space-font text-xs ${
              charCount < MIN_CHARS ? 'text-destructive' : 
              charCount > MAX_CHARS ? 'text-destructive' : 
              'text-success'
            }`}>
              {charCount} / {MAX_CHARS} chars {charCount < MIN_CHARS && `(min ${MIN_CHARS})`}
            </span>
            <div className="flex gap-2">
              {inputText && (
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="pixel-button space-font text-xs font-medium"
                  disabled={isAnalyzing}
                >
                  RESET
                </Button>
              )}
              <Button
                onClick={handleAnalyze}
                disabled={!canSubmit}
                className="pixel-button bg-accent text-accent-foreground hover:bg-accent space-font text-xs font-medium"
                style={{ color: 'var(--color-accent-foreground)' }}
              >
                {isAnalyzing ? 'ANALYZING...' : 'ANALYZE'}
              </Button>
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
