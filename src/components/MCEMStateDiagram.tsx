import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface RoleActivity {
  role: string
  activity: string
}

interface StageNode {
  id: string
  title: string
  exitCriteria: string
  icon: string
  color: string
  accountableUnit: 'ATU' | 'STU' | 'CSU'
  leadRole: string
  supportingRoles: string[]
  activities: RoleActivity[]
}

interface AccountableUnit {
  id: 'ATU' | 'STU' | 'CSU'
  name: string
  fullName: string
  roles: string[]
  color: string
}

const accountableUnits: Record<string, AccountableUnit> = {
  ATU: {
    id: 'ATU',
    name: 'ATU',
    fullName: 'Account Team Unit',
    roles: ['AE', 'ATS'],
    color: 'oklch(0.65 0.20 150)'
  },
  STU: {
    id: 'STU',
    name: 'STU',
    fullName: 'Solution Team Unit',
    roles: ['SSP', 'SE'],
    color: 'oklch(0.70 0.25 45)'
  },
  CSU: {
    id: 'CSU',
    name: 'CSU',
    fullName: 'Customer Success Unit',
    roles: ['CSAM', 'CSA'],
    color: 'oklch(0.60 0.20 330)'
  }
}

const stages: StageNode[] = [
  {
    id: 'listen-consult',
    title: 'Listen & Consult',
    exitCriteria: 'Qualified pipeline',
    icon: '👂',
    color: 'oklch(0.65 0.20 150)',
    accountableUnit: 'ATU',
    leadRole: 'AE/ATS',
    supportingRoles: ['SSP', 'CSAM', 'SAE', 'Partner'],
    activities: [
      { role: 'AE', activity: 'Develop account plan, meet customer & qualify, engages partner' },
      { role: 'ATS', activity: 'Develop Customer Secure AI Assessment, CxO TDM relationship, MACC Consumption Plan' },
      { role: 'SSP', activity: 'Support qualification, identify Solution Play' },
      { role: 'SAE', activity: 'Meet customer and qualify services opportunity (Consulting + Unified)' },
      { role: 'Partner', activity: 'Discover Co-sell opportunities, submit inbound referral' }
    ]
  },
  {
    id: 'inspire-design',
    title: 'Inspire & Design',
    exitCriteria: 'Customer aligned to solution and business case',
    icon: '💡',
    color: 'oklch(0.70 0.25 45)',
    accountableUnit: 'STU',
    leadRole: 'SSP/SE',
    supportingRoles: ['AE', 'ATS', 'SAE', 'PSS/PDM'],
    activities: [
      { role: 'AE', activity: 'Orchestrate pursuit team' },
      { role: 'ATS', activity: 'Drive tech efforts, ensure solution fits customer tech landscape' },
      { role: 'SSP', activity: 'Execute Solution Play, engage Partner and/or Services' },
      { role: 'SE', activity: 'Technical assessment, initial architecture, and proof' },
      { role: 'CSAM', activity: 'Create Customer Success Plan (CSP)' },
      { role: 'SAE', activity: 'Orchestrate Services teams with Custom Consulting or Unified GBB' },
      { role: 'PSS/PDM', activity: 'Accept outbound opportunities, collaborate on planning' }
    ]
  },
  {
    id: 'empower-achieve',
    title: 'Empower & Achieve',
    exitCriteria: 'Committed pipeline and customer agreement',
    icon: '🚀',
    color: 'oklch(0.45 0.15 260)',
    accountableUnit: 'STU',
    leadRole: 'SSP/SE',
    supportingRoles: ['AE', 'ATS', 'CE', 'SAE', 'PSS/PDM'],
    activities: [
      { role: 'AE', activity: 'Facilitate negotiation and deal closure' },
      { role: 'CE', activity: 'Drive deal strategy, negotiation and deal execution' },
      { role: 'ATS', activity: 'Secure tech agreements, ensure consumption plan covers 1st year MACC' },
      { role: 'SSP', activity: 'Secure business decision' },
      { role: 'SE', activity: 'Secure technical decision' },
      { role: 'CSAM', activity: 'Prepare for milestone transition, validate and confirm CSP' },
      { role: 'SAE', activity: 'Drive negotiation and services deal closure' },
      { role: 'PSS/PDM', activity: 'Deliver PoC, business value, accelerate & secure agreement' }
    ]
  },
  {
    id: 'realize-value',
    title: 'Realize Value',
    exitCriteria: 'Outcomes met and baseline metrics in place',
    icon: '✅',
    color: 'oklch(0.75 0.18 85)',
    accountableUnit: 'CSU',
    leadRole: 'CSAM/CSA',
    supportingRoles: ['SAE', 'Services', 'Partner', 'AE', 'ATS'],
    activities: [
      { role: 'CSA', activity: 'Drive delivery and consumption/usage for committed milestones' },
      { role: 'CSAM', activity: 'Coordinate CSP delivery, lead milestones to completion. Engages CSA as needed' },
      { role: 'SAE', activity: 'Stay engaged with Consulting CPM or Unified CSDR during delivery' },
      { role: 'Partner', activity: 'Drive delivery of partner delivered milestones' }
    ]
  },
  {
    id: 'manage-optimize',
    title: 'Manage & Optimize',
    exitCriteria: 'Completed opportunity, next steps identified',
    icon: '🔄',
    color: 'oklch(0.60 0.20 330)',
    accountableUnit: 'CSU',
    leadRole: 'CSAM/CSA',
    supportingRoles: ['SAE', 'Services', 'Partner', 'AE', 'ATS'],
    activities: [
      { role: 'CSA', activity: 'Drive solution health, identify expansion opportunities' },
      { role: 'CSAM', activity: 'Achieve customer health outcomes, accelerate value, identify expansion' },
      { role: 'SAE', activity: 'Identify services expansion opportunities' },
      { role: 'Partner', activity: 'Optimize solution architecture, identify expansion opportunities' }
    ]
  }
]

interface MCEMStateDiagramProps {
  activeStage?: string
  completedStages?: string[]
}

export function MCEMStateDiagram({ activeStage, completedStages = [] }: MCEMStateDiagramProps) {
  const [selectedStage, setSelectedStage] = useState<string | null>(null)
  const selectedStageData = stages.find(s => s.id === selectedStage)

  return (
    <div className="w-full bg-card p-6 pixel-border">
      <h3 className="pixel-font text-sm text-accent mb-6 text-center">MCEM JOURNEY</h3>
      
      {/* Desktop/Tablet View - Horizontal */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Stage Nodes */}
          <div className="relative flex justify-between">
            {/* Connection Line - positioned at center of boxes, behind everything */}
            <div className="absolute top-[48px] left-[10%] right-[10%] h-1 bg-border -z-10" />
            <div 
              className="absolute top-[48px] left-[10%] h-1 bg-accent -z-10 transition-all duration-500"
              style={{ 
                width: `${Math.max(0, (completedStages.length / stages.length) * 80)}%` 
              }}
            />
            
            {stages.map((stage, index) => {
              const isCompleted = completedStages.includes(stage.id)
              const isActive = activeStage === stage.id
              const isSelected = selectedStage === stage.id
              
              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center w-1/5 relative"
                  onClick={() => setSelectedStage(isSelected ? null : stage.id)}
                >
                  {/* Node Box - with solid background to cover the line */}
                  <motion.div
                    className={`
                      w-24 h-24 rounded-lg flex items-center justify-center text-3xl
                      border-4 transition-all duration-300 cursor-pointer relative bg-background
                      ${isSelected ? 'ring-4 ring-accent ring-offset-2 ring-offset-background' : ''}
                      ${isCompleted ? 'border-accent' : 
                        isActive ? 'border-primary animate-pulse' : 
                        'border-border'}
                    `}
                    style={{ 
                      borderColor: isCompleted ? stage.color : undefined
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Inner colored background for completed/active states */}
                    {(isCompleted || isActive) && (
                      <div 
                        className="absolute inset-0 rounded-md"
                        style={{ 
                          backgroundColor: isCompleted ? `${stage.color}30` : 
                            isActive ? 'hsl(var(--primary) / 0.2)' : 'transparent'
                        }}
                      />
                    )}
                    <span className="relative z-10">{stage.icon}</span>
                  </motion.div>
                  
                  {/* Lead Role Badge */}
                  <div className="mt-2">
                    <span className="inline-flex items-center px-2 py-0.5 text-[9px] space-font font-bold rounded bg-primary/20 text-primary border border-primary/30">
                      Lead: {stage.leadRole}
                    </span>
                  </div>
                  
                  {/* Stage Title */}
                  <div className="mt-2 text-center">
                    <p 
                      className={`space-font text-xs font-semibold ${
                        isCompleted ? 'text-accent' : 
                        isActive ? 'text-primary' : 
                        'text-foreground/70'
                      }`}
                      style={isCompleted ? { color: stage.color } : {}}
                    >
                      {stage.title}
                    </p>
                  </div>
                  
                  {/* Accountability Badge */}
                  <div className="mt-2">
                    <span 
                      className="inline-flex items-center px-2 py-0.5 text-[10px] space-font font-semibold rounded-full border-2"
                      style={{ 
                        borderColor: accountableUnits[stage.accountableUnit].color,
                        backgroundColor: `${accountableUnits[stage.accountableUnit].color}15`,
                        color: accountableUnits[stage.accountableUnit].color
                      }}
                      title={`${accountableUnits[stage.accountableUnit].fullName}: ${accountableUnits[stage.accountableUnit].roles.join(', ')}`}
                    >
                      {stage.accountableUnit}
                    </span>
                  </div>
                  
                  {/* Exit Criteria */}
                  <div className="mt-2 text-center px-1">
                    <p className="space-font text-[10px] text-muted-foreground leading-tight">
                      Exit: {stage.exitCriteria}
                    </p>
                  </div>
                  
                  {/* Completion Checkmark */}
                  {isCompleted && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs"
                      style={{ backgroundColor: stage.color }}
                    >
                      ✓
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
        
        {/* Stage Details Panel - Desktop */}
        <AnimatePresence>
          {selectedStageData && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 overflow-hidden"
            >
              <div 
                className="p-4 rounded-lg border-2"
                style={{ 
                  borderColor: selectedStageData.color,
                  backgroundColor: `${selectedStageData.color}10`
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="pixel-font text-sm" style={{ color: selectedStageData.color }}>
                      {selectedStageData.icon} {selectedStageData.title}
                    </h4>
                    <p className="space-font text-xs text-muted-foreground mt-1">
                      Exit Criteria: {selectedStageData.exitCriteria}
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedStage(null)}
                    className="text-muted-foreground hover:text-foreground text-xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-background/50 p-3 rounded border border-border">
                    <p className="space-font text-[10px] text-muted-foreground uppercase mb-1">Lead Role</p>
                    <p className="space-font text-sm font-bold text-primary">{selectedStageData.leadRole}</p>
                  </div>
                  <div className="bg-background/50 p-3 rounded border border-border">
                    <p className="space-font text-[10px] text-muted-foreground uppercase mb-1">Supporting</p>
                    <p className="space-font text-xs">{selectedStageData.supportingRoles.join(', ')}</p>
                  </div>
                </div>
                
                <div>
                  <p className="space-font text-[10px] text-muted-foreground uppercase mb-2">Role Activities</p>
                  <div className="space-y-2">
                    {selectedStageData.activities.map((activity, idx) => (
                      <div key={idx} className="flex gap-2 bg-background/50 p-2 rounded border border-border">
                        <span className="space-font text-xs font-bold text-accent min-w-[60px]">{activity.role}:</span>
                        <span className="space-font text-xs text-foreground/80">{activity.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Mobile View - Vertical */}
      <div className="md:hidden">
        <div className="relative">
          {/* Vertical Connection Line */}
          <div className="absolute top-0 bottom-0 left-8 w-1 bg-border z-0" />
          <div 
            className="absolute top-0 left-8 w-1 bg-accent z-10 transition-all duration-500"
            style={{ 
              height: `${(completedStages.length / stages.length) * 100}%` 
            }}
          />
          
          {/* Stage Nodes */}
          <div className="relative z-20 space-y-6">
            {stages.map((stage, index) => {
              const isCompleted = completedStages.includes(stage.id)
              const isActive = activeStage === stage.id
              const isSelected = selectedStage === stage.id
              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 cursor-pointer"
                  onClick={() => setSelectedStage(isSelected ? null : stage.id)}
                >
                  {/* Node Circle */}
                  <motion.div
                    className={`
                      w-16 h-16 rounded-full flex items-center justify-center text-2xl flex-shrink-0
                      border-4 transition-all duration-300
                      ${isSelected ? 'ring-4 ring-accent ring-offset-2 ring-offset-background' : ''}
                      ${isCompleted ? 'bg-accent/20 border-accent' : 
                        isActive ? 'bg-primary/20 border-primary animate-pulse' : 
                        'bg-muted border-border'}
                    `}
                    style={isCompleted ? { borderColor: stage.color, backgroundColor: `${stage.color}20` } : {}}
                    whileHover={{ scale: 1.05 }}
                  >
                    {stage.icon}
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p 
                        className={`space-font text-sm font-semibold ${
                          isCompleted ? 'text-accent' : 
                          isActive ? 'text-primary' : 
                          'text-foreground/70'
                        }`}
                        style={isCompleted ? { color: stage.color } : {}}
                      >
                        {stage.title}
                        {isCompleted && <span className="ml-2">✓</span>}
                      </p>
                      <span 
                        className="inline-flex items-center px-2 py-0.5 text-[10px] space-font font-semibold rounded-full border-2"
                        style={{
                          borderColor: accountableUnits[stage.accountableUnit].color,
                          backgroundColor: `${accountableUnits[stage.accountableUnit].color}15`,
                          color: accountableUnits[stage.accountableUnit].color
                        }}
                        title={`${accountableUnits[stage.accountableUnit].fullName}: ${accountableUnits[stage.accountableUnit].roles.join(', ')}`}
                      >
                        {stage.accountableUnit}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="space-font text-[9px] text-primary font-bold">Lead: {stage.leadRole}</span>
                      <span className="space-font text-[9px] text-muted-foreground">| Tap for details</span>
                    </div>
                    <p className="space-font text-xs text-muted-foreground mt-1">
                      Exit: {stage.exitCriteria}
                    </p>
                    
                    {/* Expandable Details - Mobile */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 overflow-hidden"
                        >
                          <div 
                            className="p-3 rounded border-2"
                            style={{ 
                              borderColor: stage.color,
                              backgroundColor: `${stage.color}10`
                            }}
                          >
                            <p className="space-font text-[10px] text-muted-foreground uppercase mb-1">Supporting: {stage.supportingRoles.join(', ')}</p>
                            <div className="space-y-1.5 mt-2">
                              {stage.activities.map((activity, idx) => (
                                <div key={idx} className="bg-background/50 p-2 rounded">
                                  <span className="space-font text-[10px] font-bold text-accent">{activity.role}: </span>
                                  <span className="space-font text-[10px] text-foreground/80">{activity.activity}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-6 pt-4 border-t-2 border-border">
        <p className="space-font text-xs text-center text-muted-foreground mb-3">STAGE ACCOUNTABILITY</p>
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {Object.values(accountableUnits).map(unit => (
            <div 
              key={unit.id}
              className="flex items-center gap-2 px-3 py-1.5 rounded border-2"
              style={{ 
                borderColor: unit.color,
                backgroundColor: `${unit.color}10`
              }}
            >
              <span 
                className="space-font text-xs font-bold"
                style={{ color: unit.color }}
              >
                {unit.name}
              </span>
              <span className="space-font text-[10px] text-muted-foreground">
                {unit.roles.join(', ')}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-xs space-font pt-3 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-muted border-2 border-border" />
            <span className="text-muted-foreground">Pending</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/20 border-2 border-primary animate-pulse" />
            <span className="text-muted-foreground">Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent/20 border-2 border-accent" />
            <span className="text-muted-foreground">Completed</span>
          </div>
        </div>
      </div>
    </div>
  )
}
