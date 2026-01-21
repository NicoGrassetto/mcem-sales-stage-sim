import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Info } from '@phosphor-icons/react'

export function MCEMInfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="pixel-button space-font text-xs font-medium"
        >
          <Info className="mr-2" size={16} />
          LEARN MCEM
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[85vh] bg-card p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="pixel-font text-lg text-accent">MCEM KNOWLEDGE BASE</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="stages" className="w-full">
          <TabsList className="w-full justify-start px-6 bg-transparent border-b-2 border-border rounded-none">
            <TabsTrigger 
              value="stages" 
              className="space-font text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              MCEM STAGES
            </TabsTrigger>
            <TabsTrigger 
              value="roles" 
              className="space-font text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              SALES ROLES
            </TabsTrigger>
            <TabsTrigger 
              value="matrix" 
              className="space-font text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              ACCOUNTABILITY MATRIX
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[calc(85vh-140px)]">
            <div className="p-6">
              <TabsContent value="stages" className="mt-0 space-y-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="pixel-font text-sm text-secondary mb-3">🎯 WHAT IS MCEM?</h3>
                    <p className="space-font text-sm leading-relaxed text-foreground/90 mb-3">
                      <strong>MCEM (Microsoft Customer Engagement Methodology)</strong> is Microsoft's unified framework for engaging customers across the entire lifecycle. It connects all customer-facing roles (sales, customer success, industry solutions, and partners) into one team to deliver consistent, customer-centric engagements that drive business outcomes.
                    </p>
                    <p className="space-font text-sm leading-relaxed text-foreground/90">
                      MCEM is central to <strong>MCAPS (Microsoft Customer and Partner Solutions)</strong> motions and is supported by detailed playbooks, orchestration guides, and role accountabilities.
                    </p>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">👂</div>
                      <div className="flex-1">
                        <h4 className="pixel-font text-xs text-secondary mb-2">LISTEN & CONSULT</h4>
                        <h5 className="space-font font-semibold text-sm mb-2">Customer Believes Microsoft Could Solve the Problem</h5>
                        <p className="space-font text-sm leading-relaxed text-foreground/90 mb-3">
                          Build a detailed understanding of the customer's organization, challenges, and opportunities. Qualify the pipeline and create the foundation for the engagement.
                        </p>
                        <div className="bg-muted p-2 mb-3 flex items-center gap-2">
                          <span className="space-font text-xs font-semibold">Lead:</span>
                          <span className="space-font text-xs px-2 py-0.5 bg-primary/20 border border-primary/40">AE/ATS</span>
                          <span className="space-font text-xs font-semibold ml-2">Unit:</span>
                          <span className="space-font text-xs px-2 py-0.5 bg-blue-500/20 border border-blue-500/40">ATU</span>
                        </div>
                        <div className="space-y-2 bg-muted p-4 border-l-4 border-secondary">
                          <p className="space-font text-xs font-semibold text-secondary">KEY ACTIVITIES:</p>
                          <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                            <li>• Consume Signals, Digital Qualification</li>
                            <li>• Listen & Qualify Opportunity</li>
                            <li>• Account Team and Partner Sync</li>
                          </ul>
                          <p className="space-font text-xs mt-3"><strong>Customer Outcome:</strong> Customer believes Microsoft could solve the problem</p>
                          <p className="space-font text-xs"><strong>Exit Criteria:</strong> Qualified Opportunity</p>
                        </div>
                        
                        {/* Stage 1 Qualification Criteria */}
                        <div className="mt-4 space-y-3">
                          <div className="bg-blue-500/10 p-4 border border-blue-500/30">
                            <p className="space-font text-xs font-semibold text-blue-300 mb-2">📋 STAGE 1 QUALIFICATION CRITERIA</p>
                            <p className="space-font text-xs text-foreground/80 mb-2">ATU and STU should collaborate to ensure Oppty is qualified:</p>
                            <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                              <li>• <strong>Customer Outcomes</strong> identified</li>
                              <li>• <strong>Customer Decision maker/s</strong> (business and technical) identified</li>
                              <li>• Major <strong>technical blockers</strong> identified with resolution plan</li>
                              <li>• <strong>Approval Process</strong> determined and customer ready for Stage 2</li>
                              <li>• <strong>Budget</strong> availability validated</li>
                              <li>• <strong>Timing</strong> confirmed</li>
                            </ul>
                          </div>
                          
                          <div className="bg-purple-500/10 p-4 border border-purple-500/30">
                            <p className="space-font text-xs font-semibold text-purple-300 mb-2">📊 STAGE 1 MILESTONE CRITERIA</p>
                            <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                              <li>• Create initial <strong>Uncommitted Milestone</strong> in MSX</li>
                              <li>• <strong>Est. Due date and Est. Value (not $0)</strong> required</li>
                              <li>• Focus on <strong>workloads</strong> and high-level sizing</li>
                              <li>• Reflect major timing/phasing constraints</li>
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-500/10 p-4 border border-yellow-500/30">
                            <p className="space-font text-xs font-semibold text-yellow-300 mb-2">🤝 REQUIRED: ATU-to-STU HANDOFF</p>
                            <p className="space-font text-xs text-foreground/80">
                              ATU & SSP must agree on <strong>Milestone value</strong> and <strong>Due Date</strong> before Oppty is moved to Stage 2
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">💡</div>
                      <div className="flex-1">
                        <h4 className="pixel-font text-xs text-accent mb-2">INSPIRE & DESIGN</h4>
                        <h5 className="space-font font-semibold text-sm mb-2">Co-Create Solutions Aligned to Business Priorities</h5>
                        <p className="space-font text-sm leading-relaxed text-foreground/90 mb-3">
                          Design solutions that address customer needs and align to their business priorities. Execute Solution Plays and establish technical validation.
                        </p>
                        <div className="bg-muted p-2 mb-3 flex items-center gap-2">
                          <span className="space-font text-xs font-semibold">Lead:</span>
                          <span className="space-font text-xs px-2 py-0.5 bg-primary/20 border border-primary/40">SSP/SE</span>
                          <span className="space-font text-xs font-semibold ml-2">Unit:</span>
                          <span className="space-font text-xs px-2 py-0.5 bg-purple-500/20 border border-purple-500/40">STU</span>
                        </div>
                        
                        {/* STU Responsibilities for Stage 2 */}
                        <div className="bg-purple-500/10 p-3 border border-purple-500/30 mb-3">
                          <p className="space-font text-xs font-semibold text-purple-300 mb-2">STU (Specialist) Responsibilities:</p>
                          <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                            <li>• Receive and understand qualified opportunity, support ATU in additional qualification if needed</li>
                            <li>• Within <strong>7 business days</strong> after transition discussion, take ownership of Uncommitted milestones in MSX</li>
                            <li>• Work with Customer to move <strong>Uncommitted → Committed</strong> milestones</li>
                          </ul>
                        </div>
                        
                        <div className="space-y-2 bg-muted p-4 border-l-4 border-accent">
                          <p className="space-font text-xs font-semibold text-accent">KEY ACTIVITIES:</p>
                          <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                            <li>• Customer Workshops</li>
                            <li>• Technical Assessment & Show Technical Ability</li>
                            <li>• Business Value Assessment</li>
                            <li>• Solution Assessment</li>
                            <li>• Finalize Solution</li>
                            <li>• Create Customer Success Plan</li>
                            <li>• Finalize and Present Value Proposition</li>
                          </ul>
                          <p className="space-font text-xs mt-3"><strong>Customer Outcome:</strong> Customer has interest in proposed solution</p>
                          <p className="space-font text-xs"><strong>Exit Criteria:</strong> Customer Aligned to Solution</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">🚀</div>
                      <div className="flex-1">
                        <h4 className="pixel-font text-xs text-primary mb-2">EMPOWER & ACHIEVE</h4>
                        <h5 className="space-font font-semibold text-sm mb-2">Prove Business Case & Technology</h5>
                        <p className="space-font text-sm leading-relaxed text-foreground/90 mb-3">
                          Secure technical and business decisions, negotiate agreements, and close the deal. Prepare for transition to delivery.
                        </p>
                        <div className="bg-muted p-2 mb-3 flex items-center gap-2">
                          <span className="space-font text-xs font-semibold">Lead:</span>
                          <span className="space-font text-xs px-2 py-0.5 bg-primary/20 border border-primary/40">SSP/SE</span>
                          <span className="space-font text-xs font-semibold ml-2">Unit:</span>
                          <span className="space-font text-xs px-2 py-0.5 bg-purple-500/20 border border-purple-500/40">STU</span>
                        </div>
                        <div className="space-y-2 bg-muted p-4 border-l-4 border-primary">
                          <p className="space-font text-xs font-semibold text-primary">KEY ACTIVITIES:</p>
                          <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                            <li>• Technical and Business Proof</li>
                            <li>• Deal Shaping</li>
                            <li>• Negotiate Terms</li>
                            <li>• Process Contract</li>
                          </ul>
                          <p className="space-font text-xs mt-3"><strong>Customer Outcome:</strong> Prove business case and technology</p>
                          <p className="space-font text-xs"><strong>Exit Criteria:</strong> Customer Agreement in Place</p>
                        </div>
                        
                        {/* STU End-of-Stage Responsibilities */}
                        <div className="mt-4 space-y-3">
                          <div className="bg-purple-500/10 p-4 border border-purple-500/30">
                            <p className="space-font text-xs font-semibold text-purple-300 mb-2">📋 STU END-OF-STAGE RESPONSIBILITIES</p>
                            <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                              <li>• Commit the Consumption Opportunity once customer has committed to proposed workloads, timeline, and revenue confirmed</li>
                              <li>• Move Opportunity (Consumption Intent) to Stage 4 "Realize Value" in MSX</li>
                              <li>• Transition Consumption Opportunity to CSU</li>
                            </ul>
                          </div>
                          
                          <div className="bg-yellow-500/10 p-4 border border-yellow-500/30">
                            <p className="space-font text-xs font-semibold text-yellow-300 mb-2">🤝 REQUIRED: STU-to-CSU HANDOFF</p>
                            <p className="space-font text-xs text-foreground/80 mb-2">
                              <strong>SSP should transition ownership of Stage 4 Opportunity to CSU within 7 days</strong>
                            </p>
                            <p className="space-font text-xs text-foreground/80">
                              STU (Specialist) & CSU (CSAM/CSA) should meet and validate Consumption Opportunity details before ownership transfer
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">✅</div>
                      <div className="flex-1">
                        <h4 className="pixel-font text-xs text-success mb-2">REALIZE VALUE</h4>
                        <h5 className="space-font font-semibold text-sm mb-2">Customer Satisfied with Implementation</h5>
                        <p className="space-font text-sm leading-relaxed text-foreground/90 mb-3">
                          Drive delivery and consumption for committed milestones. Ensure the customer achieves their desired business outcomes.
                        </p>
                        <div className="bg-muted p-2 mb-3 flex items-center gap-2">
                          <span className="space-font text-xs font-semibold">Lead:</span>
                          <span className="space-font text-xs px-2 py-0.5 bg-primary/20 border border-primary/40">CSAM/CSA</span>
                          <span className="space-font text-xs font-semibold ml-2">Unit:</span>
                          <span className="space-font text-xs px-2 py-0.5 bg-green-500/20 border border-green-500/40">CSU</span>
                        </div>
                        
                        {/* CSU Responsibilities */}
                        <div className="bg-green-500/10 p-3 border border-green-500/30 mb-3">
                          <p className="space-font text-xs font-semibold text-green-300 mb-2">CSU (CSA/CSAM) Responsibilities:</p>
                          <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                            <li>• Work with STU (SSP and SE) to confirm customer agreement details and any closing billed opportunity comments</li>
                            <li>• Take ownership of Consumption Opportunity in MSX from SSP when it moves to Stage 4</li>
                            <li>• Drive Consumption Opportunity to closure, updating status in MSX up to Est. Date</li>
                          </ul>
                        </div>
                        
                        <div className="space-y-2 bg-muted p-4 border-l-4 border-success">
                          <p className="space-font text-xs font-semibold text-success">KEY ACTIVITIES:</p>
                          <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                            <li>• Technical Implementation</li>
                            <li>• Change Management and Training</li>
                            <li>• Business Value Metric Baseline</li>
                          </ul>
                          <p className="space-font text-xs mt-3"><strong>Customer Outcome:</strong> Customer satisfied with implementation</p>
                          <p className="space-font text-xs"><strong>Exit Criteria:</strong> Outcomes Met and Baseline Metrics in Place</p>
                        </div>
                        
                        <div className="mt-3 bg-blue-500/10 p-3 border border-blue-500/30">
                          <p className="space-font text-xs font-semibold text-blue-300 mb-2">📍 Resources for Handoff:</p>
                          <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                            <li>• <strong>Unified Accounts:</strong> Check aka.ms/whoistheCSAM to identify the right CSAM owner</li>
                            <li>• <strong>Non-Unified Accounts:</strong> Transition to the CSA manager accountable for your Area/OU</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">🔄</div>
                      <div className="flex-1">
                        <h4 className="pixel-font text-xs mb-2" style={{ color: 'oklch(0.75 0.18 85)' }}>MANAGE & OPTIMIZE</h4>
                        <h5 className="space-font font-semibold text-sm mb-2">Customer Expectations Are Met</h5>
                        <p className="space-font text-sm leading-relaxed text-foreground/90 mb-3">
                          Drive solution health, achieve customer health outcomes, and identify expansion opportunities for continued growth.
                        </p>
                        <div className="bg-muted p-2 mb-3 flex items-center gap-2">
                          <span className="space-font text-xs font-semibold">Lead:</span>
                          <span className="space-font text-xs px-2 py-0.5 bg-primary/20 border border-primary/40">CSAM/CSA</span>
                          <span className="space-font text-xs font-semibold ml-2">Unit:</span>
                          <span className="space-font text-xs px-2 py-0.5 bg-green-500/20 border border-green-500/40">CSU</span>
                        </div>
                        <div className="space-y-2 bg-muted p-4 border-l-4" style={{ borderColor: 'oklch(0.75 0.18 85)' }}>
                          <p className="space-font text-xs font-semibold" style={{ color: 'oklch(0.75 0.18 85)' }}>KEY ACTIVITIES:</p>
                          <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                            <li>• Solution Health Achieved</li>
                            <li>• Business Value Metrics Achieved</li>
                            <li>• Rightsizing/Legacy Removal/Backlog Identification</li>
                          </ul>
                          <p className="space-font text-xs mt-3"><strong>Customer Outcome:</strong> Customer expectations are met</p>
                          <p className="space-font text-xs"><strong>Exit Criteria:</strong> Opportunity Done and Next Steps Identified</p>
                        </div>
                        
                        {/* Cycle Back Note */}
                        <div className="mt-3 bg-blue-500/10 p-3 border border-blue-500/30">
                          <p className="space-font text-xs font-semibold text-blue-300 mb-1">🔄 CONTINUOUS ENGAGEMENT</p>
                          <p className="space-font text-xs text-foreground/80">
                            After this stage, opportunities may cycle back to <strong>Listen & Consult</strong> for expansion opportunities, creating a continuous customer engagement loop.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="roles" className="mt-0 space-y-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="pixel-font text-sm text-secondary mb-3">👥 MICROSOFT SALES TEAM ROLES</h3>
                    <p className="space-font text-sm leading-relaxed text-foreground/90">
                      Microsoft's sales organization operates with specialized roles that work together to drive customer success.
                    </p>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">💼</div>
                      <div className="flex-1">
                        <h4 className="space-font font-bold text-sm mb-2">Commercial Executive (CE)</h4>
                        <div className="space-y-3">
                          <p className="space-font text-sm leading-relaxed text-foreground/90">
                            Drives deal strategy, negotiations, and deal execution. Owns the commercial relationship and ensures business outcomes align with Microsoft solutions.
                          </p>
                          <div className="bg-muted p-4 space-y-2">
                            <p className="space-font text-xs font-semibold text-secondary">KEY RESPONSIBILITIES:</p>
                            <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                              <li>• Lead deal strategy and commercial negotiations</li>
                              <li>• Drive deal execution and closure</li>
                              <li>• Manage commercial terms and pricing</li>
                              <li>• Orchestrate internal resources for deal success</li>
                            </ul>
                          </div>
                          <div className="bg-primary/10 p-3 border-l-4 border-primary">
                            <p className="space-font text-xs"><span className="font-semibold">MCEM Focus:</span> All stages - primary driver of deal progression and commercial outcomes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">🔧</div>
                      <div className="flex-1">
                        <h4 className="space-font font-bold text-sm mb-2">Solution Engineer (SE)</h4>
                        <div className="space-y-3">
                          <p className="space-font text-sm leading-relaxed text-foreground/90">
                            Drives the technical win to accelerate customer commitment. Owns the technical validation and ensures solutions meet customer requirements.
                          </p>
                          <div className="bg-muted p-4 space-y-2">
                            <p className="space-font text-xs font-semibold text-secondary">KEY RESPONSIBILITIES:</p>
                            <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                              <li>• Lead technical discovery and solution design</li>
                              <li>• Conduct technical demonstrations and proof of concepts</li>
                              <li>• Address technical objections and competitive differentiation</li>
                              <li>• Validate technical fit and architecture alignment</li>
                            </ul>
                          </div>
                          <div className="bg-accent/10 p-3 border-l-4 border-accent">
                            <p className="space-font text-xs"><span className="font-semibold">MCEM Focus:</span> Map (technical discovery), Compete (technical win), Modernize (architecture validation)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">🎯</div>
                      <div className="flex-1">
                        <h4 className="space-font font-bold text-sm mb-2">Account Executive (AE)</h4>
                        <div className="space-y-3">
                          <p className="space-font text-sm leading-relaxed text-foreground/90">
                            Owns the overall account strategy and executive relationships. Acts as the "quarterback" for the account, ensuring alignment between business outcomes and Microsoft solutions.
                          </p>
                          <div className="bg-muted p-4 space-y-2">
                            <p className="space-font text-xs font-semibold text-secondary">KEY RESPONSIBILITIES:</p>
                            <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                              <li>• Lead account planning and orchestration across the v-team</li>
                              <li>• Understand customer business challenges and define strategy</li>
                              <li>• Drive negotiation and deal closure</li>
                              <li>• Coordinate internal Microsoft resources</li>
                            </ul>
                          </div>
                          <div className="bg-primary/10 p-3 border-l-4 border-primary">
                            <p className="space-font text-xs"><span className="font-semibold">MCEM Focus:</span> All stages - primary orchestrator of the MCEM engagement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">🎯</div>
                      <div className="flex-1">
                        <h4 className="space-font font-bold text-sm mb-2">Solution Sales Professional (SSP)</h4>
                        <div className="space-y-3">
                          <p className="space-font text-sm leading-relaxed text-foreground/90">
                            Drives solution-specific sales motions. SSPs are deep technical sales experts focused on specific Microsoft workloads or solution areas (Azure, Security, Modern Work, Data & AI, etc.).
                          </p>
                          <div className="bg-muted p-4 space-y-2">
                            <p className="space-font text-xs font-semibold text-secondary">KEY RESPONSIBILITIES:</p>
                            <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                              <li>• Qualify opportunities and execute Solution Plays</li>
                              <li>• Engage partners and/or services for technical validation</li>
                              <li>• Secure the business decision for the solution area</li>
                              <li>• Collaborate with AE and technical specialists during early stages</li>
                            </ul>
                          </div>
                          <div className="bg-primary/10 p-3 border-l-4 border-primary">
                            <p className="space-font text-xs"><span className="font-semibold">MCEM Focus:</span> Compete, Expand (solution-specific opportunities)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">🔧</div>
                      <div className="flex-1">
                        <h4 className="space-font font-bold text-sm mb-2">Account Technology Strategist (ATS)</h4>
                        <div className="space-y-3">
                          <p className="space-font text-sm leading-relaxed text-foreground/90">
                            Owns the technology and innovation strategy for the account. Partners with AE to align technology strategy with business priorities.
                          </p>
                          <div className="bg-muted p-4 space-y-2">
                            <p className="space-font text-xs font-semibold text-secondary">KEY RESPONSIBILITIES:</p>
                            <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                              <li>• Map business value to technology capabilities</li>
                              <li>• Develop technical roadmaps and secure technical agreements</li>
                              <li>• Ensure solutions fit the customer's tech landscape and consumption plan</li>
                              <li>• Design and validate solution architectures</li>
                            </ul>
                          </div>
                          <div className="bg-primary/10 p-3 border-l-4 border-primary">
                            <p className="space-font text-xs"><span className="font-semibold">MCEM Focus:</span> Map (technical discovery), Compete (technical differentiation), Modernize (architecture)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">🏗️</div>
                      <div className="flex-1">
                        <h4 className="space-font font-bold text-sm mb-2">Cloud Solution Architect (CSA)</h4>
                        <div className="space-y-3">
                          <p className="space-font text-sm leading-relaxed text-foreground/90">
                            Focuses on technical delivery and consumption. Ensures solution health and drives implementation for committed milestones.
                          </p>
                          <div className="bg-muted p-4 space-y-2">
                            <p className="space-font text-xs font-semibold text-secondary">KEY RESPONSIBILITIES:</p>
                            <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                              <li>• Drive implementation and usage for committed milestones</li>
                              <li>• Ensure solution health and identify expansion opportunities</li>
                              <li>• Maintain Customer Success Plan (CSP) status and RAID logs</li>
                              <li>• Validate outcomes and recommend next steps post-delivery</li>
                            </ul>
                          </div>
                          <div className="bg-primary/10 p-3 border-l-4 border-primary">
                            <p className="space-font text-xs"><span className="font-semibold">MCEM Focus:</span> Modernize (implementation), Expand (consumption-based growth)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">🤝</div>
                      <div className="flex-1">
                        <h4 className="space-font font-bold text-sm mb-2">Customer Success Account Manager (CSAM)</h4>
                        <div className="space-y-3">
                          <p className="space-font text-sm leading-relaxed text-foreground/90">
                            Orchestrates customer success and value realization. Ensures long-term success and manages strategic account success rhythms.
                          </p>
                          <div className="bg-muted p-4 space-y-2">
                            <p className="space-font text-xs font-semibold text-secondary">KEY RESPONSIBILITIES:</p>
                            <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                              <li>• Create and manage the Customer Success Plan</li>
                              <li>• Coordinate delivery of milestones and ensure operational health</li>
                              <li>• Accelerate customer value and identify expansion opportunities</li>
                              <li>• Engage executive sponsors and manage strategic account rhythms</li>
                            </ul>
                          </div>
                          <div className="bg-primary/10 p-3 border-l-4 border-primary">
                            <p className="space-font text-xs"><span className="font-semibold">MCEM Focus:</span> All stages post-sale - ensures long-term value realization</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/10 p-4 border-2 border-accent">
                    <p className="space-font text-xs font-semibold text-accent mb-2">💡 HOW THEY WORK TOGETHER</p>
                    <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                      <li>• <strong>AE + ATS:</strong> Define account and technology strategy</li>
                      <li>• <strong>SSP:</strong> Executes solution-specific sales plays</li>
                      <li>• <strong>CSA:</strong> Delivers technical outcomes and drives consumption</li>
                      <li>• <strong>CSAM:</strong> Ensures long-term success and value realization post-sale</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="matrix" className="mt-0 space-y-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="pixel-font text-sm text-secondary mb-3">📊 STAGE ACCOUNTABILITY MATRIX</h3>
                    <p className="space-font text-sm leading-relaxed text-foreground/90">
                      This matrix shows the lead and supporting roles for each MCEM journey stage, along with their specific activities.
                    </p>
                  </div>

                  {/* Stage Summary Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs space-font">
                      <thead>
                        <tr className="bg-muted">
                          <th className="p-2 text-left border border-border">Stage</th>
                          <th className="p-2 text-left border border-border">Lead Role</th>
                          <th className="p-2 text-left border border-border">Supporting Roles</th>
                          <th className="p-2 text-left border border-border">Unit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 border border-border font-semibold text-[oklch(0.65_0.20_150)]">👂 Listen & Consult</td>
                          <td className="p-2 border border-border">AE/ATS</td>
                          <td className="p-2 border border-border">SSP, CSAM, SAE, Partner</td>
                          <td className="p-2 border border-border"><span className="px-2 py-0.5 rounded text-[10px] font-bold" style={{backgroundColor: 'oklch(0.65 0.20 150 / 0.2)', color: 'oklch(0.65 0.20 150)'}}>ATU</span></td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-border font-semibold text-[oklch(0.70_0.25_45)]">💡 Inspire & Design</td>
                          <td className="p-2 border border-border">SSP/SE</td>
                          <td className="p-2 border border-border">AE, ATS, SAE, PSS/PDM</td>
                          <td className="p-2 border border-border"><span className="px-2 py-0.5 rounded text-[10px] font-bold" style={{backgroundColor: 'oklch(0.70 0.25 45 / 0.2)', color: 'oklch(0.70 0.25 45)'}}>STU</span></td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-border font-semibold text-[oklch(0.45_0.15_260)]">🚀 Empower & Achieve</td>
                          <td className="p-2 border border-border">SSP/SE</td>
                          <td className="p-2 border border-border">AE, ATS, CE, SAE, PSS/PDM</td>
                          <td className="p-2 border border-border"><span className="px-2 py-0.5 rounded text-[10px] font-bold" style={{backgroundColor: 'oklch(0.70 0.25 45 / 0.2)', color: 'oklch(0.70 0.25 45)'}}>STU</span></td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-border font-semibold text-[oklch(0.75_0.18_85)]">✅ Realize Value</td>
                          <td className="p-2 border border-border">CSAM/CSA</td>
                          <td className="p-2 border border-border">SAE, Services, Partner, AE, ATS</td>
                          <td className="p-2 border border-border"><span className="px-2 py-0.5 rounded text-[10px] font-bold" style={{backgroundColor: 'oklch(0.60 0.20 330 / 0.2)', color: 'oklch(0.60 0.20 330)'}}>CSU</span></td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-border font-semibold text-[oklch(0.60_0.20_330)]">🔄 Manage & Optimize</td>
                          <td className="p-2 border border-border">CSAM/CSA</td>
                          <td className="p-2 border border-border">SAE, Services, Partner, AE, ATS</td>
                          <td className="p-2 border border-border"><span className="px-2 py-0.5 rounded text-[10px] font-bold" style={{backgroundColor: 'oklch(0.60 0.20 330 / 0.2)', color: 'oklch(0.60 0.20 330)'}}>CSU</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Accountable Units */}
                  <div className="border-t-2 border-border pt-6">
                    <h4 className="pixel-font text-xs text-secondary mb-4">🏢 ACCOUNTABLE UNITS</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded border-2" style={{borderColor: 'oklch(0.65 0.20 150)', backgroundColor: 'oklch(0.65 0.20 150 / 0.1)'}}>
                        <h5 className="space-font font-bold text-sm mb-2" style={{color: 'oklch(0.65 0.20 150)'}}>ATU</h5>
                        <p className="space-font text-xs text-muted-foreground mb-2">Account Team Unit</p>
                        <p className="space-font text-xs"><strong>Roles:</strong> AE, ATS</p>
                        <p className="space-font text-xs mt-2"><strong>Owns:</strong> Listen & Consult, Strategic planning & execution</p>
                      </div>
                      <div className="p-4 rounded border-2" style={{borderColor: 'oklch(0.70 0.25 45)', backgroundColor: 'oklch(0.70 0.25 45 / 0.1)'}}>
                        <h5 className="space-font font-bold text-sm mb-2" style={{color: 'oklch(0.70 0.25 45)'}}>STU</h5>
                        <p className="space-font text-xs text-muted-foreground mb-2">Solution Team Unit</p>
                        <p className="space-font text-xs"><strong>Roles:</strong> SSP, SE</p>
                        <p className="space-font text-xs mt-2"><strong>Owns:</strong> Inspire & Design, Empower & Achieve</p>
                      </div>
                      <div className="p-4 rounded border-2" style={{borderColor: 'oklch(0.60 0.20 330)', backgroundColor: 'oklch(0.60 0.20 330 / 0.1)'}}>
                        <h5 className="space-font font-bold text-sm mb-2" style={{color: 'oklch(0.60 0.20 330)'}}>CSU</h5>
                        <p className="space-font text-xs text-muted-foreground mb-2">Customer Success Unit</p>
                        <p className="space-font text-xs"><strong>Roles:</strong> CSAM, CSA</p>
                        <p className="space-font text-xs mt-2"><strong>Owns:</strong> Realize Value, Manage & Optimize</p>
                      </div>
                    </div>
                  </div>

                  {/* Detailed Role Activities by Stage */}
                  <div className="border-t-2 border-border pt-6">
                    <h4 className="pixel-font text-xs text-secondary mb-4">📋 ROLE ACTIVITIES BY STAGE</h4>
                    
                    {/* Listen & Consult */}
                    <div className="mb-6 p-4 rounded border-l-4" style={{borderColor: 'oklch(0.65 0.20 150)', backgroundColor: 'oklch(0.65 0.20 150 / 0.05)'}}>
                      <h5 className="space-font font-bold text-sm mb-3" style={{color: 'oklch(0.65 0.20 150)'}}>👂 Listen & Consult</h5>
                      <div className="space-y-2">
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">AE:</span> <span className="text-xs">Develop account plan, meet customer & qualify, engages partner</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">ATS:</span> <span className="text-xs">Develop Customer Secure AI Assessment, CxO TDM relationship, MACC Consumption Plan</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">SSP:</span> <span className="text-xs">Support qualification, identify Solution Play</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">SAE:</span> <span className="text-xs">Meet customer and qualify services opportunity (Consulting + Unified)</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">Partner:</span> <span className="text-xs">Discover Co-sell opportunities, submit inbound referral</span></div>
                      </div>
                    </div>

                    {/* Inspire & Design */}
                    <div className="mb-6 p-4 rounded border-l-4" style={{borderColor: 'oklch(0.70 0.25 45)', backgroundColor: 'oklch(0.70 0.25 45 / 0.05)'}}>
                      <h5 className="space-font font-bold text-sm mb-3" style={{color: 'oklch(0.70 0.25 45)'}}>💡 Inspire & Design</h5>
                      <div className="space-y-2">
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">AE:</span> <span className="text-xs">Orchestrate pursuit team</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">ATS:</span> <span className="text-xs">Drive tech efforts, ensure solution fits customer tech landscape</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">SSP:</span> <span className="text-xs">Execute Solution Play, engage Partner and/or Services</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">SE:</span> <span className="text-xs">Technical assessment, initial architecture, and proof</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">CSAM:</span> <span className="text-xs">Create Customer Success Plan (CSP)</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">SAE:</span> <span className="text-xs">Orchestrate Services teams with Custom Consulting or Unified GBB</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">PSS/PDM:</span> <span className="text-xs">Accept outbound opportunities, collaborate on planning</span></div>
                      </div>
                    </div>

                    {/* Empower & Achieve */}
                    <div className="mb-6 p-4 rounded border-l-4" style={{borderColor: 'oklch(0.45 0.15 260)', backgroundColor: 'oklch(0.45 0.15 260 / 0.05)'}}>
                      <h5 className="space-font font-bold text-sm mb-3" style={{color: 'oklch(0.45 0.15 260)'}}>🚀 Empower & Achieve</h5>
                      <div className="space-y-2">
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">AE:</span> <span className="text-xs">Facilitate negotiation and deal closure</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">CE:</span> <span className="text-xs">Drive deal strategy, negotiation and deal execution</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">ATS:</span> <span className="text-xs">Secure tech agreements, ensure consumption plan covers 1st year MACC</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">SSP:</span> <span className="text-xs">Secure business decision</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">SE:</span> <span className="text-xs">Secure technical decision</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">CSAM:</span> <span className="text-xs">Prepare for milestone transition, validate and confirm CSP</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">SAE:</span> <span className="text-xs">Drive negotiation and services deal closure</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">PSS/PDM:</span> <span className="text-xs">Deliver PoC, business value, accelerate & secure agreement</span></div>
                      </div>
                    </div>

                    {/* Realize Value */}
                    <div className="mb-6 p-4 rounded border-l-4" style={{borderColor: 'oklch(0.75 0.18 85)', backgroundColor: 'oklch(0.75 0.18 85 / 0.05)'}}>
                      <h5 className="space-font font-bold text-sm mb-3" style={{color: 'oklch(0.75 0.18 85)'}}>✅ Realize Value</h5>
                      <div className="space-y-2">
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">CSA:</span> <span className="text-xs">Drive delivery and consumption/usage for committed milestones</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">CSAM:</span> <span className="text-xs">Coordinate CSP delivery, lead milestones to completion (Unified). Engages CSA as needed</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">SAE:</span> <span className="text-xs">Stay engaged with Consulting CPM or Unified CSDR during delivery</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">Partner:</span> <span className="text-xs">Drive delivery of partner delivered milestones</span></div>
                      </div>
                    </div>

                    {/* Manage & Optimize */}
                    <div className="mb-6 p-4 rounded border-l-4" style={{borderColor: 'oklch(0.60 0.20 330)', backgroundColor: 'oklch(0.60 0.20 330 / 0.05)'}}>
                      <h5 className="space-font font-bold text-sm mb-3" style={{color: 'oklch(0.60 0.20 330)'}}>🔄 Manage & Optimize</h5>
                      <div className="space-y-2">
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">CSA:</span> <span className="text-xs">Drive solution health, identify expansion opportunities</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">CSAM:</span> <span className="text-xs">Achieve customer health outcomes, accelerate value, identify expansion</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">SAE:</span> <span className="text-xs">Identify services expansion opportunities</span></div>
                        <div className="bg-background/50 p-2 rounded"><span className="font-bold text-xs">Partner:</span> <span className="text-xs">Optimize solution architecture, identify expansion opportunities</span></div>
                      </div>
                    </div>
                  </div>

                  {/* Key Acronyms */}
                  <div className="border-t-2 border-border pt-6">
                    <h4 className="pixel-font text-xs text-secondary mb-4">📖 KEY ACRONYMS</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                      <div className="bg-muted p-2 rounded"><strong>AE:</strong> Account Executive</div>
                      <div className="bg-muted p-2 rounded"><strong>ATS:</strong> Account Technology Strategist</div>
                      <div className="bg-muted p-2 rounded"><strong>SSP:</strong> Solution Sales Professional</div>
                      <div className="bg-muted p-2 rounded"><strong>SE:</strong> Solution Engineer</div>
                      <div className="bg-muted p-2 rounded"><strong>CSA:</strong> Cloud Solution Architect</div>
                      <div className="bg-muted p-2 rounded"><strong>CSAM:</strong> Customer Success Account Manager</div>
                      <div className="bg-muted p-2 rounded"><strong>CE:</strong> Commercial Executive</div>
                      <div className="bg-muted p-2 rounded"><strong>SAE:</strong> Services Account Executive</div>
                      <div className="bg-muted p-2 rounded"><strong>PSS:</strong> Partner Solution Specialist</div>
                      <div className="bg-muted p-2 rounded"><strong>PDM:</strong> Partner Development Manager</div>
                      <div className="bg-muted p-2 rounded"><strong>CSP:</strong> Customer Success Plan</div>
                      <div className="bg-muted p-2 rounded"><strong>MACC:</strong> Microsoft Azure Consumption Commitment</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
