import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-12 pb-8 space-y-6"
    >
      {/* Disclaimer */}
      <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <span className="text-xl">⚠️</span>
          <div className="space-y-2">
            <h4 className="pixel-font text-xs text-yellow-500">DISCLAIMER</h4>
            <p className="space-font text-[11px] text-yellow-200/80 leading-relaxed">
              This application and its content are <strong>AI-generated</strong> and provided for <strong>educational and demonstration purposes only</strong>. 
              The MCEM stage analyses, scenarios, and recommendations may contain inaccuracies and should not be relied upon for actual business decisions.
            </p>
            <p className="space-font text-[11px] text-yellow-200/80 leading-relaxed">
              <strong>This project does not represent, reflect, or constitute official guidance from Microsoft Corporation.</strong> The views, 
              methodologies, and content presented here are solely the creation of the author and do not reflect the views, policies, 
              or official positions of Microsoft or any of its employees.
            </p>
            <p className="space-font text-[11px] text-muted-foreground">
              MCEM (Microsoft Customer Engagement Methodology) is a Microsoft framework. This tool is an unofficial, independent project.
            </p>
          </div>
        </div>
      </div>

      {/* Credits */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg">👨‍💻</span>
          <p className="space-font text-sm text-foreground">
            Created by <span className="text-accent font-semibold">Nico Grassetto</span>
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/NicoGrassetto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-muted hover:bg-muted/70 border border-border rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
            </svg>
            <span className="space-font text-xs">GitHub</span>
          </a>
          
          <a
            href="https://linkedin.com/in/nicograssetto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 bg-muted hover:bg-muted/70 border border-border rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="space-font text-xs">LinkedIn</span>
          </a>
        </div>

        <p className="space-font text-[10px] text-muted-foreground pt-2">
          © {new Date().getFullYear()} • Built with React, Vite, and ❤️
        </p>
      </div>
    </motion.footer>
  )
}
