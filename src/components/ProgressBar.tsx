import { motion } from 'framer-motion'

interface ProgressBarProps {
  progress: number
}

export function ProgressBar({ progress }: ProgressBarProps) {
  const segments = [0, 25, 50, 75, 100]
  
  return (
    <div className="w-full bg-muted p-2" style={{ boxShadow: '0 0 0 4px var(--color-border)' }}>
      <div className="flex gap-2">
        {segments.map((segment, i) => {
          const isActive = progress >= segment
          return (
            <motion.div
              key={i}
              className={`h-6 flex-1 transition-all duration-300 ${
                isActive ? 'bg-success' : 'bg-muted-foreground/20'
              }`}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isActive ? 1 : 0.3 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            />
          )
        })}
      </div>
    </div>
  )
}
