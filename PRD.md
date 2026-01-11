# Planning Guide

A gamified sales engagement analyzer that guides users through Microsoft's MCEM (Map, Compete, Expand, Modernize) sales model by processing opportunity text through AI-powered stage analysis with a nostalgic pixel art aesthetic.

**Experience Qualities**:
1. **Playful** - The pixel art aesthetic and gamification elements make professional sales methodology feel like an engaging adventure rather than corporate drudgery
2. **Progressive** - Users experience a satisfying sense of forward momentum as they unlock each MCEM stage sequentially, revealing insights step by step
3. **Educational** - Complex sales frameworks become accessible through visual storytelling and clear stage-by-stage breakdowns

**Complexity Level**: Light Application (multiple features with basic state)
- This is a focused tool with clear linear progression through MCEM stages, simple text input, LLM processing, and visual output presentation without requiring complex navigation or advanced state management

## Essential Features

### Text Input for Opportunity Analysis
- **Functionality**: Large textarea accepting detailed opportunity/project descriptions with character counter and clear/paste functionality
- **Purpose**: Captures context-rich engagement details that feed the AI analysis engine
- **Trigger**: User lands on home screen with prominent input area
- **Progression**: Empty state with placeholder → User types/pastes engagement text → Character count updates → Submit button activates when sufficient text provided → Click "Analyze" button
- **Success criteria**: Text persists in textarea, minimum character threshold enforced (100+ chars), smooth input experience

### MCEM Stage Simulation
- **Functionality**: LLM processes input text and generates stage-specific insights for Map, Compete, Expand, and Modernize phases, with role-specific guidance for Account Executive, SSP, ATS, and Customer Success roles
- **Purpose**: Transforms raw opportunity text into actionable sales intelligence aligned with Microsoft methodology, including which team members should be involved
- **Trigger**: User clicks "Analyze" button after entering engagement text
- **Progression**: Analyze clicked → Loading state with pixel art animation → LLM processes text through each stage with role guidance → Results appear sequentially with unlock animations → Each stage card reveals insights and shows relevant roles (AE, SSP, ATS, CS)
- **Success criteria**: All 4 stages generate relevant, contextual responses; content is sales-focused and actionable; stages appear in order; role indicators display correctly

### Pixel Art Visual Progression
- **Functionality**: Gamified UI showing locked/unlocked stages with pixel sprites, progress bars, and retro visual effects
- **Purpose**: Makes the analytical process feel rewarding and maintains engagement through visual feedback
- **Trigger**: Analysis begins and progresses through stages
- **Progression**: All stages locked → Map unlocks with animation → Compete unlocks → Expand unlocks → Modernize unlocks → Victory animation/completion state
- **Success criteria**: Smooth stage transitions, satisfying unlock animations, clear visual hierarchy of progress

### Results Display & Export
- **Functionality**: Each MCEM stage displays as an expandable card with key findings, recommendations, and action items; shows which Microsoft sales roles (AE, SSP, ATS, CS) are involved; option to copy or download results
- **Purpose**: Provides actionable intelligence in scannable format for immediate use in sales planning with clear role assignments
- **Trigger**: Analysis completes for each stage
- **Progression**: Stage unlocks → Card animates in with role indicators → User clicks to expand details → Reads insights → Optionally copies content → Repeats for next stage
- **Success criteria**: Content is readable, organized hierarchically, expandable/collapsible, copyable; role indicators are visible and clear

### MCEM & Roles Education
- **Functionality**: Information dialog accessible from header that provides comprehensive details about the 4 MCEM stages (Map, Compete, Expand, Modernize) and Microsoft sales team roles (Account Executive, SSP, Solutions Engineer/ATS, Customer Success, Partners)
- **Purpose**: Educates users on the methodology and sales structure to better understand the analysis results
- **Trigger**: User clicks "Learn MCEM" button in header
- **Progression**: Button clicked → Dialog opens → User tabs between "MCEM Stages" and "Sales Roles" → Reads detailed explanations with key activities → Closes dialog
- **Success criteria**: Dialog displays comprehensive information, tabs work smoothly, content is well-formatted and educational, scrollable for long content

## Edge Case Handling

- **Insufficient Text Input** - Display friendly pixel art error message indicating minimum text length needed with character counter
- **LLM Request Failure** - Show retry option with pixel art "try again" prompt; don't lose user's input text
- **Empty/Nonsensical Input** - LLM returns best-effort analysis noting lack of context; system doesn't crash
- **Very Long Input** - Truncate gracefully at reasonable limit (5000 chars) with visual indicator
- **Rapid Re-submission** - Disable analyze button during processing to prevent duplicate requests
- **Mobile View** - Stack stages vertically, maintain readability of cards, ensure textarea is usable on small screens

## Design Direction

The design should evoke early 90s video game aesthetics - think classic RPG adventure with a professional edge. Users should feel like they're "leveling up" their sales opportunity through quest stages. Nostalgic, warm, and encouraging with chunky pixels, bright colors, and satisfying progression feedback.

## Color Selection

A vibrant retro gaming palette with high contrast and energy reminiscent of classic 16-bit RPGs and arcade games.

- **Primary Color**: `oklch(0.45 0.15 260)` - Rich pixel purple, communicates retro gaming nostalgia and quest progression
- **Secondary Colors**: 
  - `oklch(0.65 0.20 150)` - Bright pixel teal for stage markers and interactive elements
  - `oklch(0.75 0.18 85)` - Energetic lime green for success states and unlocked stages
- **Accent Color**: `oklch(0.70 0.25 45)` - Warm golden orange for action buttons, achievements, and "level up" moments
- **Foreground/Background Pairings**: 
  - Background (Deep Space) `oklch(0.15 0.02 280)`: White text `oklch(0.98 0 0)` - Ratio 16.2:1 ✓
  - Primary (Purple) `oklch(0.45 0.15 260)`: White text `oklch(0.98 0 0)` - Ratio 8.1:1 ✓
  - Accent (Golden Orange) `oklch(0.70 0.25 45)`: Black text `oklch(0.15 0 0)` - Ratio 8.5:1 ✓
  - Lime Green `oklch(0.75 0.18 85)`: Black text `oklch(0.15 0 0)` - Ratio 10.2:1 ✓

## Font Selection

The typography should embrace the pixel aesthetic while maintaining professional legibility - using a high-quality pixel font for headings that feels authentic to retro gaming, paired with a clean geometric sans for body text that echoes digital displays.

- **Typographic Hierarchy**: 
  - H1 (Main Title): Press Start 2P Bold/32px/normal letter spacing - retro game title vibes
  - H2 (Stage Headers): Press Start 2P Regular/18px/wide letter spacing - quest stage markers
  - H3 (Section Labels): Space Grotesk Bold/16px/normal - modern digital clarity
  - Body Text: Space Grotesk Regular/14px/relaxed leading (1.6) - readable analysis content
  - UI Labels: Space Grotesk Medium/12px/uppercase/wide tracking - control labels

## Animations

Animations should feel like classic video game transitions - instant snappy feedback with occasional satisfying flourishes. Think 16-bit RPG menu transitions, item acquisition pops, and level-up celebration moments.

Key animation moments:
- Stage unlock: Scale pop with pixel sparkle effect (300ms)
- Button press: Immediate scale down with shadow shift (100ms)
- Loading: Pixel art spinner or animated sprite (continuous)
- Card expand: Smooth height transition with slight bounce (250ms)
- Text reveal: Typewriter effect for dramatic stage reveals (optional, toggleable)
- Success: Golden confetti burst of pixel squares (500ms one-shot)

## Component Selection

- **Components**: 
  - `Textarea` for opportunity input with character counter overlay
  - `Button` (heavily customized) with pixel art styling, pressed states, and chunky borders
  - `Card` for stage display with custom pixel borders and shadow effects
  - `Accordion` for expandable stage details within cards
  - `Progress` bar with pixel segments for overall completion tracking
  - `Badge` for stage labels (Map/Compete/Expand/Modernize) with retro styling
  - `Separator` as dotted pixel lines between sections
  - `ScrollArea` for long analysis content within cards
- **Customizations**: 
  - Custom pixel border component using box-shadow for chunky 8-bit look
  - Locked/unlocked icon sprites using CSS or small inline SVG pixels
  - Custom loading spinner as animated pixel sprite
  - Toast notifications (`sonner`) styled as pixel speech bubbles
- **States**: 
  - Buttons: Default has chunky shadow offset, hover lifts shadow, active presses down with shadow removed
  - Stage cards: Locked (grayscale with lock icon), Unlocked (full color with pulse), Active (border glow), Completed (checkmark badge)
  - Input: Default has pixel border, focus adds animated pixel glow effect
  - Progress bar: Segments fill with satisfying color transitions
- **Icon Selection**: 
  - Phosphor icons NOT used - custom pixel-style icons created with CSS/SVG for authentic retro feel
  - Lock/Unlock states: Custom 16x16 pixel sprites
  - Stage icons: Map (magnifying glass), Compete (crossed swords), Expand (radiating arrows), Modernize (gear)
- **Spacing**: 
  - Use 8px base unit (classic pixel grid): spacing-2, spacing-4, spacing-6, spacing-8
  - Card padding: p-6 (24px) for breathing room
  - Section gaps: gap-8 between major sections
  - Stage card gaps: gap-4 stacking vertically
- **Mobile**: 
  - Single column layout on mobile with full-width cards
  - Textarea height reduces on mobile (from 200px to 150px)
  - Font sizes scale down: H1 to 20px, H2 to 14px, body to 13px
  - Stage cards stack vertically with maintained pixel aesthetic
  - Bottom sticky action button on mobile for easy access
