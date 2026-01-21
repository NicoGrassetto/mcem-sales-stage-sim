<div align="center">

# 🎯 MCEM Sales Stage Simulator

**An interactive learning tool for Microsoft Customer Engagement Methodology**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-7.0-646CFF?style=flat-square&logo=vite)](https://vite.dev)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[🚀 Live Demo](#getting-started) · [📖 Documentation](docs/) · [🐛 Report Bug](issues)

<img src="https://img.shields.io/badge/Microsoft-MCEM-0078D4?style=for-the-badge&logo=microsoft" alt="Microsoft MCEM" />

</div>

---

## 📋 Overview

The **MCEM Sales Stage Simulator** is an interactive educational tool designed to help Microsoft sales professionals, partners, and anyone interested in enterprise sales methodologies understand the **Microsoft Customer Engagement Methodology (MCEM)**.

Through pre-built real-world scenarios, users can explore how different sales situations map to the five MCEM stages and understand which roles are accountable at each phase.

<div align="center">

### 🎮 Experience the Customer Journey

| Stage | Focus | Lead Unit |
|:---:|:---|:---:|
| 👂 **Listen & Consult** | Understand customer needs | ATU |
| 💡 **Inspire & Design** | Co-create solutions | STU |
| 🚀 **Empower & Achieve** | Prove business case | STU |
| ✅ **Realize Value** | Drive adoption | CSU |
| 🔄 **Manage & Optimize** | Expand value | CSU |

</div>

---

## ✨ Features

- 🎯 **Interactive MCEM Visualization** - See the customer journey unfold stage by stage
- 📚 **Pre-built Scenarios** - Learn from real-world sales situations across industries
- 👥 **Role Accountability** - Understand which Microsoft roles lead each stage
- 🎨 **Pixel-art Design** - Engaging retro-gaming aesthetic
- 📱 **Responsive** - Works on desktop and mobile
- ⚡ **Fast** - Built with Vite for instant loading

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/mcem-sales-stage-sim.git
cd mcem-sales-stage-sim

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5000/mcem-sales-stage-sim/](http://localhost:5000/mcem-sales-stage-sim/) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🎮 How to Use

1. **Click "LOAD SCENARIO"** - Browse available pre-built scenarios
2. **Select a scenario** - Each represents a different sales situation
3. **Click "RUN SCENARIO"** - Watch the MCEM stages unfold
4. **Review each stage** - See detailed guidance for that phase
5. **Reset and try another** - Compare different scenarios

---

## 📖 Understanding MCEM

MCEM (Microsoft Customer Engagement Methodology) is Microsoft's unified framework for engaging customers across the entire lifecycle. It connects all customer-facing roles into one team:

### The Three Units

| Unit | Roles | Focus |
|:---|:---|:---|
| **ATU** (Account Team Unit) | AE, ATS | Account strategy & qualification |
| **STU** (Specialist Team Unit) | SSP, SE | Solution design & technical proof |
| **CSU** (Customer Success Unit) | CSAM, CSA | Adoption & value realization |

### Key Principles

- **Customer-Centric**: Every action maps to customer outcomes
- **Stage Accountability**: Clear ownership at each phase
- **Seamless Handoffs**: Smooth transitions between stages
- **Value Focus**: Drive measurable business impact

For detailed documentation, see the [docs folder](docs/).

---

## 🏗️ Project Structure

```
mcem-sales-stage-sim/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── StageCard.tsx # MCEM stage display
│   │   ├── MCEMStateDiagram.tsx # Visual journey map
│   │   └── TemplateSelector.tsx # Scenario picker
│   ├── data/
│   │   └── templates.json # Pre-built scenarios
│   ├── styles/           # Theme CSS
│   └── App.tsx           # Main application
├── docs/                  # MCEM documentation
└── index.html
```

---

## 🎨 Tech Stack

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom pixel-art theme
- **Build**: Vite 7
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Notifications**: Sonner

---

## 📝 Adding New Scenarios

Edit `src/data/templates.json` to add new scenarios:

```json
{
  "id": "your-scenario-id",
  "title": "Your Scenario Title",
  "customer": "Customer Name",
  "industry": "Industry",
  "partner": "Partner Name",
  "opportunityText": "Description of the opportunity...",
  "stages": {
    "listen-consult": {
      "content": "Analysis for Listen & Consult stage..."
    }
    // ... other stages
  }
}
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Microsoft Customer Engagement Methodology documentation
- The React and Vite communities
- All contributors and testers

---

<div align="center">

**Built with ❤️ for the Microsoft sales community**

[⬆ Back to Top](#-mcem-sales-stage-simulator)

</div>
