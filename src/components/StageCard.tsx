import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'

interface StageCardProps {
  title: string
  icon: string
  status: 'locked' | 'unlocked' | 'completed'
  content?: string
  color: string
  roles?: string[]
}

export function StageCard({ title, icon, status, content, color, roles }: StageCardProps) {
  const [expanded, setExpanded] = useState(false)

  const roleIcons: Record<string, string> = {
    'AE': '💼',
    'SSP': '🎯',
    'ATS': '🔧',
    'CS': '🎨'
  }

  if (status === 'locked') {
    return (
      <Card className={`p-6 bg-card locked-stage relative overflow-hidden`}>
        <div className="flex items-center gap-4">
          <div className="text-4xl opacity-30">{icon}</div>
          <div>
            <h3 className="pixel-font text-sm text-muted-foreground">{title}</h3>
            <p className="space-font text-xs text-muted-foreground mt-2">🔒 Locked</p>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, type: 'spring' }}
      className="unlocked-stage"
    >
      <Card 
        className={`p-6 bg-card cursor-pointer transition-all duration-200 hover:scale-[1.02]`}
        style={{ 
          boxShadow: `0 0 0 4px ${color}, 0 6px 0 4px ${color}` 
        }}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="text-4xl">{icon}</div>
          <div className="flex-1">
            <h3 className="pixel-font text-sm" style={{ color }}>{title}</h3>
            <p className="space-font text-xs text-muted-foreground mt-2">
              {status === 'completed' ? '✓ Complete' : '⚡ Processing'}
            </p>
            {roles && roles.length > 0 && (
              <div className="flex gap-1 mt-2">
                {roles.map((role) => (
                  <span 
                    key={role} 
                    className="text-xs space-font bg-muted px-2 py-0.5 border border-border"
                    title={role}
                  >
                    {roleIcons[role] || '👤'} {role}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="text-accent text-xl">{expanded ? '▼' : '▶'}</div>
        </div>
        
        {expanded && content && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="space-font text-sm leading-relaxed text-foreground/90"
          >
            <div className="pt-4 border-t-2 border-border space-y-3">
              {content.split('\n').map((line, i) => (
                line.trim() && <p key={i}>{line}</p>
              ))}
            </div>
          </motion.div>
        )}
      </Card>
    </motion.div>
  )
}
