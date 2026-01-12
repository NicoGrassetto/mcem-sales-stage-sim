import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { motion } from 'framer-motion'
import templatesData from '@/data/templates.json'

export interface TemplateStages {
  'listen-consult': { content: string }
  'inspire-design': { content: string }
  'empower-achieve': { content: string }
  'realize-value': { content: string }
  'manage-optimize': { content: string }
}

export interface ScenarioTemplate {
  id: string
  title: string
  industry: string
  customer: string
  partner: string
  description: string
  opportunityText: string
  stages: TemplateStages
}

interface TemplatesData {
  templates: ScenarioTemplate[]
}

interface TemplateSelectorProps {
  onSelectTemplate: (template: ScenarioTemplate) => void
  disabled?: boolean
}

const industryIcons: Record<string, string> = {
  'Healthcare': '🏥',
  'Manufacturing': '🏭',
  'Financial Services': '🏦',
  'Insurance': '🛡️',
  'Retail': '🛒',
  'Energy': '⚡',
  'Government': '🏛️',
  'Education': '🎓',
  'Transportation': '🚂',
}

const industryColors: Record<string, string> = {
  'Healthcare': 'from-teal-500/20 to-teal-600/10 border-teal-500/40',
  'Manufacturing': 'from-orange-500/20 to-orange-600/10 border-orange-500/40',
  'Financial Services': 'from-blue-500/20 to-blue-600/10 border-blue-500/40',
  'Insurance': 'from-purple-500/20 to-purple-600/10 border-purple-500/40',
  'Retail': 'from-pink-500/20 to-pink-600/10 border-pink-500/40',
  'Energy': 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/40',
  'Government': 'from-slate-500/20 to-slate-600/10 border-slate-500/40',
  'Transportation': 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/40',
  'Education': 'from-green-500/20 to-green-600/10 border-green-500/40',
}

export function TemplateSelector({ onSelectTemplate, disabled }: TemplateSelectorProps) {
  const [open, setOpen] = useState(false)
  const templates = (templatesData as TemplatesData).templates

  const handleSelect = (template: ScenarioTemplate) => {
    onSelectTemplate(template)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="pixel-button space-font text-xs font-medium border-accent/50 hover:border-accent hover:bg-accent/10"
          disabled={disabled}
        >
          <span className="mr-2">📋</span>
          LOAD SCENARIO
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-card border-2 border-border">
        <DialogHeader>
          <DialogTitle className="pixel-font text-lg text-accent">
            SELECT SCENARIO TEMPLATE
          </DialogTitle>
          <DialogDescription className="space-font text-sm text-muted-foreground">
            Choose a pre-built engagement scenario to simulate the MCEM workflow
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {templates.map((template, index) => (
            <motion.button
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleSelect(template)}
              className={`
                text-left p-3 rounded-lg border-2 transition-all duration-200 overflow-hidden
                bg-gradient-to-br ${industryColors[template.industry] || 'from-muted to-muted/50 border-border'}
                hover:scale-[1.02] hover:shadow-lg
                focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background
              `}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">
                  {industryIcons[template.industry] || '🏢'}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="pixel-font text-xs text-foreground leading-tight">
                    {template.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-1 flex-wrap">
                    <span className="space-font text-[10px] text-muted-foreground">
                      {template.customer}
                    </span>
                    <span className="text-muted-foreground text-[10px]">•</span>
                    <span className="space-font text-[10px] text-muted-foreground">
                      {template.industry}
                    </span>
                  </div>
                  <p className="space-font text-[10px] text-muted-foreground mt-1 line-clamp-2">
                    {template.description}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-[10px] space-font px-1.5 py-0.5 bg-accent/20 border border-accent/30 text-accent rounded truncate">
                      Partner: {template.partner}
                    </span>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-4 p-3 bg-muted/50 rounded-lg border border-border">
          <p className="space-font text-xs text-muted-foreground">
            <span className="text-accent font-bold">💡 Tip:</span> These templates provide pre-built analysis content for each MCEM stage, 
            allowing you to explore the full workflow without requiring LLM processing.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
