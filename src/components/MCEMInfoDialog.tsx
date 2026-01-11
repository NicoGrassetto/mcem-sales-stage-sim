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
          </TabsList>

          <ScrollArea className="h-[calc(85vh-140px)]">
            <div className="p-6">
              <TabsContent value="stages" className="mt-0 space-y-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="pixel-font text-sm text-secondary mb-3">🎯 WHAT IS MCEM?</h3>
                    <p className="space-font text-sm leading-relaxed text-foreground/90">
                      MCEM (Map, Compete, Expand, Modernize) is Microsoft's enterprise sales methodology. It provides a structured framework for understanding customer needs, positioning solutions, and driving digital transformation. Each stage represents a critical phase in the sales engagement lifecycle.
                    </p>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">🔍</div>
                      <div className="flex-1">
                        <h4 className="pixel-font text-xs text-secondary mb-2">MAP</h4>
                        <h5 className="space-font font-semibold text-sm mb-2">Understanding the Customer Landscape</h5>
                        <p className="space-font text-sm leading-relaxed text-foreground/90 mb-3">
                          The Map stage is about comprehensive discovery. You're building a detailed understanding of the customer's organization, challenges, and opportunities.
                        </p>
                        <div className="space-y-2 bg-muted p-4 border-l-4 border-secondary">
                          <p className="space-font text-xs font-semibold text-secondary">KEY ACTIVITIES:</p>
                          <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                            <li>• Identify key stakeholders and decision-makers</li>
                            <li>• Understand current business challenges and pain points</li>
                            <li>• Map organizational structure and reporting relationships</li>
                            <li>• Assess current technology stack and infrastructure</li>
                            <li>• Define business objectives and success criteria</li>
                            <li>• Discover budget authority and procurement processes</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">⚔️</div>
                      <div className="flex-1">
                        <h4 className="pixel-font text-xs text-accent mb-2">COMPETE</h4>
                        <h5 className="space-font font-semibold text-sm mb-2">Competitive Positioning & Differentiation</h5>
                        <p className="space-font text-sm leading-relaxed text-foreground/90 mb-3">
                          The Compete stage focuses on understanding the competitive landscape and positioning Microsoft solutions as the superior choice.
                        </p>
                        <div className="space-y-2 bg-muted p-4 border-l-4 border-accent">
                          <p className="space-font text-xs font-semibold text-accent">KEY ACTIVITIES:</p>
                          <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                            <li>• Identify competing vendors and solutions (AWS, Google, Oracle, etc.)</li>
                            <li>• Analyze competitive strengths and weaknesses</li>
                            <li>• Highlight Microsoft's unique value propositions</li>
                            <li>• Address customer concerns about Microsoft vs. competitors</li>
                            <li>• Build a win strategy leveraging Microsoft's ecosystem</li>
                            <li>• Develop compelling competitive battle cards</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">📈</div>
                      <div className="flex-1">
                        <h4 className="pixel-font text-xs text-primary mb-2">EXPAND</h4>
                        <h5 className="space-font font-semibold text-sm mb-2">Growth & Upsell Opportunities</h5>
                        <p className="space-font text-sm leading-relaxed text-foreground/90 mb-3">
                          The Expand stage identifies opportunities to grow the engagement beyond the initial scope through additional workloads, users, or use cases.
                        </p>
                        <div className="space-y-2 bg-muted p-4 border-l-4 border-primary">
                          <p className="space-font text-xs font-semibold text-primary">KEY ACTIVITIES:</p>
                          <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                            <li>• Identify additional departments or teams that could benefit</li>
                            <li>• Discover cross-sell opportunities across Microsoft product suite</li>
                            <li>• Map additional use cases and workloads for migration</li>
                            <li>• Explore premium features and higher-tier licenses</li>
                            <li>• Identify integration opportunities with existing Microsoft solutions</li>
                            <li>• Build a long-term growth roadmap</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">⚙️</div>
                      <div className="flex-1">
                        <h4 className="pixel-font text-xs text-success mb-2">MODERNIZE</h4>
                        <h5 className="space-font font-semibold text-sm mb-2">Digital Transformation & Innovation</h5>
                        <p className="space-font text-sm leading-relaxed text-foreground/90 mb-3">
                          The Modernize stage focuses on helping customers transform their technology infrastructure and business processes through cloud adoption and innovation.
                        </p>
                        <div className="space-y-2 bg-muted p-4 border-l-4 border-success">
                          <p className="space-font text-xs font-semibold text-success">KEY ACTIVITIES:</p>
                          <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                            <li>• Assess cloud readiness and migration opportunities</li>
                            <li>• Identify legacy systems for modernization</li>
                            <li>• Design cloud architecture and migration strategy</li>
                            <li>• Explore AI/ML capabilities and innovation opportunities</li>
                            <li>• Plan for application modernization and containerization</li>
                            <li>• Develop security and compliance frameworks for cloud</li>
                          </ul>
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
                      Microsoft's sales organization operates with specialized roles that work together to drive customer success. Understanding these roles helps you leverage the right expertise at each stage of the engagement.
                    </p>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">💼</div>
                      <div className="flex-1">
                        <h4 className="space-font font-bold text-sm mb-2">Account Executive (AE)</h4>
                        <div className="space-y-3">
                          <p className="space-font text-sm leading-relaxed text-foreground/90">
                            The Account Executive is the primary relationship owner and quarterback for the customer account. They drive overall sales strategy and revenue growth.
                          </p>
                          <div className="bg-muted p-4 space-y-2">
                            <p className="space-font text-xs font-semibold text-secondary">RESPONSIBILITIES:</p>
                            <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                              <li>• Own customer relationship and account strategy</li>
                              <li>• Drive revenue targets and quota attainment</li>
                              <li>• Navigate executive-level conversations</li>
                              <li>• Coordinate internal Microsoft resources</li>
                              <li>• Lead deal negotiations and contract closure</li>
                              <li>• Orchestrate the overall MCEM engagement</li>
                            </ul>
                          </div>
                          <div className="bg-primary/10 p-3 border-l-4 border-primary">
                            <p className="space-font text-xs"><span className="font-semibold">MCEM Focus:</span> All stages, with emphasis on Map and Expand</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">🎯</div>
                      <div className="flex-1">
                        <h4 className="space-font font-bold text-sm mb-2">Specialist Sales Professional (SSP)</h4>
                        <div className="space-y-3">
                          <p className="space-font text-sm leading-relaxed text-foreground/90">
                            SSPs are deep technical sales experts focused on specific Microsoft workloads or solution areas (Azure, Security, Modern Work, Data & AI, etc.).
                          </p>
                          <div className="bg-muted p-4 space-y-2">
                            <p className="space-font text-xs font-semibold text-secondary">RESPONSIBILITIES:</p>
                            <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                              <li>• Provide deep product and solution expertise</li>
                              <li>• Drive workload-specific sales motions</li>
                              <li>• Conduct technical discovery and solution design</li>
                              <li>• Position specialized Microsoft offerings</li>
                              <li>• Support competitive differentiation in their domain</li>
                              <li>• Identify expansion opportunities within their specialty</li>
                            </ul>
                          </div>
                          <div className="bg-primary/10 p-3 border-l-4 border-primary">
                            <p className="space-font text-xs"><span className="font-semibold">MCEM Focus:</span> Compete, Expand, and Modernize for specific workloads</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">🔧</div>
                      <div className="flex-1">
                        <h4 className="space-font font-bold text-sm mb-2">Solutions Engineer / Technical Specialist (ATS)</h4>
                        <div className="space-y-3">
                          <p className="space-font text-sm leading-relaxed text-foreground/90">
                            Solutions Engineers (also called Azure Technical Specialists - ATS) are the technical experts who design, architect, and validate Microsoft solutions for customer scenarios.
                          </p>
                          <div className="bg-muted p-4 space-y-2">
                            <p className="space-font text-xs font-semibold text-secondary">RESPONSIBILITIES:</p>
                            <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                              <li>• Conduct technical discovery and architecture sessions</li>
                              <li>• Design and validate solution architectures</li>
                              <li>• Deliver product demos and proofs of concept</li>
                              <li>• Address technical objections and concerns</li>
                              <li>• Provide migration planning and technical roadmaps</li>
                              <li>• Support technical evaluation and pilot phases</li>
                            </ul>
                          </div>
                          <div className="bg-primary/10 p-3 border-l-4 border-primary">
                            <p className="space-font text-xs"><span className="font-semibold">MCEM Focus:</span> Map (technical discovery), Compete (technical differentiation), Modernize</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">🎨</div>
                      <div className="flex-1">
                        <h4 className="space-font font-bold text-sm mb-2">Customer Success / Inspire & Design Roles</h4>
                        <div className="space-y-3">
                          <p className="space-font text-sm leading-relaxed text-foreground/90">
                            These roles focus on customer adoption, change management, and ensuring long-term success with Microsoft solutions. "Inspire & Design" refers to the process of envisioning transformative outcomes.
                          </p>
                          <div className="bg-muted p-4 space-y-2">
                            <p className="space-font text-xs font-semibold text-secondary">RESPONSIBILITIES:</p>
                            <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                              <li>• Design customer success and adoption strategies</li>
                              <li>• Facilitate envisioning workshops and design sessions</li>
                              <li>• Create business value frameworks and ROI models</li>
                              <li>• Support change management and user adoption</li>
                              <li>• Monitor health scores and usage metrics</li>
                              <li>• Drive customer advocacy and reference development</li>
                            </ul>
                          </div>
                          <div className="bg-primary/10 p-3 border-l-4 border-primary">
                            <p className="space-font text-xs"><span className="font-semibold">MCEM Focus:</span> Map (business outcomes), Expand (adoption opportunities), Modernize (vision)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-border pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">🤝</div>
                      <div className="flex-1">
                        <h4 className="space-font font-bold text-sm mb-2">Partner & Ecosystem Roles</h4>
                        <div className="space-y-3">
                          <p className="space-font text-sm leading-relaxed text-foreground/90">
                            Microsoft works extensively with partners (system integrators, ISVs, consultants) who extend capabilities and accelerate customer success.
                          </p>
                          <div className="bg-muted p-4 space-y-2">
                            <p className="space-font text-xs font-semibold text-secondary">RESPONSIBILITIES:</p>
                            <ul className="space-font text-xs leading-relaxed text-foreground/80 space-y-1 ml-4">
                              <li>• Identify and engage relevant partner resources</li>
                              <li>• Coordinate implementation and delivery partners</li>
                              <li>• Leverage ISV solutions from Azure Marketplace</li>
                              <li>• Enable co-sell motions with strategic partners</li>
                              <li>• Support managed services and ongoing operations</li>
                            </ul>
                          </div>
                          <div className="bg-primary/10 p-3 border-l-4 border-primary">
                            <p className="space-font text-xs"><span className="font-semibold">MCEM Focus:</span> All stages, particularly Expand and Modernize for implementation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/10 p-4 border-2 border-accent">
                    <p className="space-font text-xs font-semibold text-accent mb-2">💡 COLLABORATION IS KEY</p>
                    <p className="space-font text-xs leading-relaxed text-foreground/80">
                      The most successful Microsoft engagements involve coordinated teamwork across these roles. The Account Executive orchestrates the team, bringing in SSPs for workload expertise, Solutions Engineers for technical validation, and Customer Success for adoption planning—all working together through the MCEM framework.
                    </p>
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
