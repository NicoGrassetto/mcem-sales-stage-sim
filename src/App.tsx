import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { StageCard } from '@/components/StageCard'
import { ProgressBar } from '@/components/ProgressBar'
import { PixelLoader } from '@/components/PixelLoader'
import { MCEMInfoDialog } from '@/components/MCEMInfoDialog'
import { MCEMStateDiagram } from '@/components/MCEMStateDiagram'
import { TemplateSelector, ScenarioTemplate } from '@/components/TemplateSelector'
import { Footer } from '@/components/Footer'
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

// MCEM Stage Colors
const STAGE_COLORS = {
  'listen-consult': 'oklch(0.65 0.20 200)',
  'inspire-design': 'oklch(0.70 0.25 45)',
  'empower-achieve': 'oklch(0.45 0.15 260)',
  'realize-value': 'oklch(0.65 0.20 150)',
  'manage-optimize': 'oklch(0.75 0.18 85)'
}

const INITIAL_STAGES: MCEMStage[] = [
  { id: 'listen-consult', title: 'LISTEN & CONSULT', icon: '👂', status: 'locked', color: STAGE_COLORS['listen-consult'], roles: ['AE', 'ATS', 'SSP', 'CSAM', 'SAE'], unit: 'ATU' },
  { id: 'inspire-design', title: 'INSPIRE & DESIGN', icon: '💡', status: 'locked', color: STAGE_COLORS['inspire-design'], roles: ['SSP', 'SE', 'AE', 'ATS', 'CSAM', 'SAE'], unit: 'STU' },
  { id: 'empower-achieve', title: 'EMPOWER & ACHIEVE', icon: '🚀', status: 'locked', color: STAGE_COLORS['empower-achieve'], roles: ['SSP', 'SE', 'AE', 'CE', 'ATS', 'CSAM', 'SAE'], unit: 'STU' },
  { id: 'realize-value', title: 'REALIZE VALUE', icon: '✅', status: 'locked', color: STAGE_COLORS['realize-value'], roles: ['CSAM', 'CSA', 'SAE', 'Partner'], unit: 'CSU' },
  { id: 'manage-optimize', title: 'MANAGE & OPTIMIZE', icon: '🔄', status: 'locked', color: STAGE_COLORS['manage-optimize'], roles: ['CSAM', 'CSA', 'SAE', 'Partner'], unit: 'CSU' }
]

function App() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [currentStageIndex, setCurrentStageIndex] = useState(-1)
  const [activeJourneyStage, setActiveJourneyStage] = useState<string | undefined>(undefined)
  const [completedJourneyStages, setCompletedJourneyStages] = useState<string[]>([])
  const [activeTemplate, setActiveTemplate] = useState<ScenarioTemplate | null>(null)
  const [stages, setStages] = useState<MCEMStage[]>(INITIAL_STAGES)

  const progress = stages.filter(s => s.status === 'completed').length * 20

  // Handle template selection
  const handleTemplateSelect = (template: ScenarioTemplate) => {
    setCurrentStageIndex(-1)
    setActiveJourneyStage(undefined)
    setCompletedJourneyStages([])
    setStages(INITIAL_STAGES)
    setActiveTemplate(template)
    toast.success(`📋 Loaded: ${template.title}`)
  }

  // Run the scenario simulation
  const runScenario = async () => {
    if (!activeTemplate) return

    setIsAnalyzing(true)
    setCurrentStageIndex(-1)
    setCompletedJourneyStages([])

    const stageIds = ['listen-consult', 'inspire-design', 'empower-achieve', 'realize-value', 'manage-optimize'] as const

    try {
      for (let i = 0; i < stageIds.length; i++) {
        const stageId = stageIds[i]
        setCurrentStageIndex(i)
        setActiveJourneyStage(stageId)

        // Unlock stage
        setStages(prev => prev.map((stage, idx) => 
          idx === i ? { ...stage, status: 'unlocked' } : stage
        ))

        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 800))

        // Complete stage with template content
        const content = activeTemplate.stages[stageId].content
        setStages(prev => prev.map((stage, idx) => 
          idx === i ? { ...stage, status: 'completed', content } : stage
        ))
        
        setCompletedJourneyStages(prev => [...prev, stageId])
        await new Promise(resolve => setTimeout(resolve, 300))
      }

      setActiveJourneyStage(undefined)
      toast.success(`🎮 Analysis Complete! ${activeTemplate.customer} scenario finished.`)
    } catch (error) {
      toast.error('⚠️ Analysis failed. Please try again.')
      console.error('Scenario error:', error)
    } finally {
      setIsAnalyzing(false)
      setCurrentStageIndex(-1)
    }
  }

  // Reset everything
  const handleReset = () => {
    setStages(INITIAL_STAGES)
    setActiveTemplate(null)
    setCurrentStageIndex(-1)
    setActiveJourneyStage(undefined)
    setCompletedJourneyStages([])
    toast.success('🔄 Reset complete')
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <motion.header 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="text-4xl">🎯</span>
            <h1 className="pixel-font text-2xl md:text-3xl text-accent tracking-wider">
              MCEM STAGE SIMULATOR
            </h1>
          </div>
          <p className="space-font text-sm text-muted-foreground max-w-2xl mx-auto">
            Explore the Microsoft Customer Engagement Methodology through interactive scenarios.
            Select a pre-built scenario to see how different sales situations map to MCEM stages.
          </p>
        </motion.header>

        {/* Controls */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <TemplateSelector 
            onSelectTemplate={handleTemplateSelect} 
            disabled={isAnalyzing}
          />
          <MCEMInfoDialog />
        </motion.div>

        {/* State Diagram */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <MCEMStateDiagram 
            activeStage={activeJourneyStage}
            completedStages={completedJourneyStages}
          />
        </motion.div>

        {/* Active Scenario */}
        {activeTemplate && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-accent/10 border-2 border-accent/30 p-4 rounded-lg"
          >
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <h3 className="pixel-font text-xs text-accent">{activeTemplate.title}</h3>
                  <p className="space-font text-xs text-muted-foreground">
                    {activeTemplate.customer} • {activeTemplate.industry} • Partner: {activeTemplate.partner}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={runScenario}
                  disabled={isAnalyzing || stages.some(s => s.status === 'completed')}
                  className="pixel-button bg-accent text-accent-foreground hover:bg-accent space-font text-xs font-medium"
                  style={{ color: 'var(--color-accent-foreground)' }}
                >
                  {isAnalyzing ? '⏳ ANALYZING...' : '▶ RUN SCENARIO'}
                </Button>
                <Button
                  onClick={handleReset}
                  variant="ghost"
                  size="sm"
                  className="space-font text-xs text-muted-foreground hover:text-destructive"
                  disabled={isAnalyzing}
                >
                  ✕ Clear
                </Button>
              </div>
            </div>
            
            {/* Opportunity Text Preview */}
            <div className="mt-4 pt-4 border-t border-accent/20">
              <p className="space-font text-xs text-muted-foreground line-clamp-3">
                {activeTemplate.opportunityText}
              </p>
            </div>
          </motion.div>
        )}

        {/* Results Area */}
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
              {stages.map((stage) => (
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

        {/* Empty State */}
        {!activeTemplate && stages.every(s => s.status === 'locked') && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center py-16 space-y-6"
          >
            <div className="text-6xl">🎮</div>
            <div className="space-y-2">
              <h3 className="pixel-font text-lg text-accent">SELECT A SCENARIO</h3>
              <p className="space-font text-sm text-muted-foreground max-w-md mx-auto">
                Click "LOAD SCENARIO" above to explore pre-built sales scenarios and see how they map to MCEM stages.
              </p>
            </div>
          </motion.div>
        )}

        <Footer />
      </div>
    </div>
  )
}

export default App
