# DDEX Distro

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D.svg)](https://vuejs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-v9-FFA000.svg)](https://firebase.google.com/)
[![Status](https://img.shields.io/badge/Status-Alpha-orange.svg)](https://github.com/ddex/distro)

> Open-source, npm-installable music distribution platform for the modern music industry.

DDEX Distro enables labels, artists, and distributors to deploy a fully functional, DDEX-compliant distribution system in minutes. Built on an **open-core model** with a fully-functional Community Edition (MIT licensed) and an enhanced Enterprise Edition for professional organizations.

## 🎯 Our Open-Core Philosophy

**We believe in true open source.** The Community Edition is **complete and production-ready** with no artificial limitations. You get ALL delivery protocols (FTP, SFTP, S3, API, Azure), full ERN generation, and everything needed to run a professional distribution platform. 

We don't hold back basic features for monetization. The Enterprise Edition adds genuinely advanced capabilities like immersive audio support (Dolby Atmos), complex production credits, and sophisticated delivery orchestration - features that require significant additional development and are typically only needed by larger organizations.

### Why This Matters
- **No vendor lock-in**: Start free, stay free, or upgrade only when you need advanced features
- **No artificial limits**: Community Edition has no release caps, no watermarks, no time bombs
- **All protocols included**: Every delivery method is available in Community Edition
- **Natural growth path**: Upgrade to Enterprise when complexity demands it, not because of artificial restrictions

## 🚧 Current Development Status

**Alpha Release - v0.4.0** (August 2025)

The project has completed Phase 1 (Foundation) and is now actively developing Phase 2 (Core CMS functionality).

### ✅ Phase 1: Foundation - COMPLETE
- **Full Vue 3 Application**: All views, routing, and navigation implemented
- **Firebase Integration**: Complete Auth, Firestore, and Storage setup
- **Professional UI/UX**: Custom CSS architecture with light/dark themes
- **CLI Tool**: Fully functional with all commands (create, init, deploy, configure, target, dev)
- **Monorepo Structure**: Lerna configuration with workspace support
- **Shared Packages**: @ddex/common package with TypeScript types, constants, utils, and schemas
- **Template System**: Complete project template for instant deployment
- **Live Deployment**: Successfully deployed to Firebase Hosting

### 🚀 Phase 2: Core CMS - IN PROGRESS
Currently building the functional backend for:
- **Release Creation Wizard**: UI complete, implementing data persistence
- **Asset Management**: Building upload and processing system
- **Catalog Operations**: Connecting UI to Firestore
- **Metadata Management**: Form validation and storage

### 📅 Upcoming Phases
- **Phase 3: ERN Generation** (Weeks 9-12)
- **Phase 4: Delivery Engine** (Weeks 13-16)  
- **Phase 5: Enterprise Features** (Weeks 17-20)
- **Phase 6: Testing & Launch** (Weeks 21-24)

## ✨ Features

### 🆓 Community Edition (MIT License)
**Perfect for**: Independent artists, small labels, learning DDEX

✅ **Complete Production Features**:
- Full catalog management with unlimited releases
- ERN generation (3.8.2, 4.2, 4.3) for standard releases
- **ALL delivery protocols included**:
  - ✅ FTP delivery to legacy systems
  - ✅ SFTP for secure transfers
  - ✅ S3 for cloud-native platforms
  - ✅ API for modern integrations
  - ✅ Azure blob storage support
- Essential metadata and credits (artist, producer, writer)
- Stereo audio support (WAV, FLAC, MP3)
- Territory management (worldwide + regional)
- Real-time delivery tracking
- Professional dashboard and analytics
- White-label capabilities
- **No limits, no restrictions, no catch**

### 🚀 Enterprise Edition (Commercial License)
**Built for**: Major labels, aggregators, complex catalog management

Everything in Community, plus genuinely advanced features:

- 🎵 **Immersive Audio Support**
  - Dolby Atmos processing and delivery
  - Sony 360 Reality Audio
  - Binaural and stem management

- 📝 **Professional Production Credits**
  - Complete engineering credits (mixing, mastering, recording)
  - Session musician tracking
  - Studio and equipment documentation
  - ISNI/IPI integration

- 🔄 **Advanced Delivery Orchestration**
  - Parallel delivery to multiple DSPs
  - Conditional delivery chains
  - Smart routing based on DSP requirements
  - Advanced retry strategies
  - Priority queue management

- 🌍 **Complex Territory & Rights**
  - Time-windowed territories
  - Territory-specific pricing
  - Complex rights management
  - Exception handling

- 💼 **Enterprise Support**
  - Priority support with SLA
  - Custom development
  - On-premise deployment option
  - Dedicated account management

## 💰 Transparent Pricing

### Community Edition - **Free Forever**
- ✅ Full production features
- ✅ All delivery protocols
- ✅ Unlimited releases
- ✅ Community support
- ✅ MIT License

### Enterprise Edition
**Pricing announced at v1.0 launch**
- All Community features
- Advanced plugin suite
- Priority support
- Custom development options

## 🚀 Quick Start

### Try the Live Demo
```bash
# Clone and run locally
git clone https://github.com/ddex/distro.git
cd distro/template
npm install
npm run dev
# Visit http://localhost:5173

# Or use the CLI tool (available now!)
cd ../cli
npm link
ddex-distro create my-label
cd my-label
npm run deploy
```

### Using the CLI Tool
```bash
# The CLI is fully functional with these commands:
ddex-distro create <name>    # Create new DDEX Distro project
ddex-distro init             # Initialize Firebase configuration
ddex-distro deploy           # Deploy to Firebase
ddex-distro configure        # Configure platform settings
ddex-distro target add       # Add delivery targets
ddex-distro dev              # Start development server
```

## 🛠️ Technology Stack

- **Frontend**: Vue 3 (Composition API) + Vite
- **Backend**: Firebase (Firestore, Functions, Storage, Auth)
- **Styling**: Custom CSS architecture with theme system
- **Icons**: FontAwesome free icons
- **CLI**: Node.js with Commander.js
- **Monorepo**: Lerna for package management
- **Types**: TypeScript for shared packages
- **Delivery**: Node.js workers (in development)
- **Validation**: DDEX Workbench API (planned)

## 📊 Development Roadmap

### Phase 1: Foundation ✅ COMPLETE
- [x] Project architecture and blueprint
- [x] Vue 3 application with all views
- [x] Firebase integration (Auth, Firestore, Storage)
- [x] Complete authentication system
- [x] Navigation and routing structure
- [x] Professional CSS architecture
- [x] Theme support (light/dark)
- [x] CLI tool with all commands
- [x] Monorepo setup with Lerna
- [x] TypeScript types and schemas
- [x] Template system for project generation

### Phase 2: Core CMS 🚧 (Current - 30% Complete)
- [x] UI components and views created
- [ ] Release creation wizard backend
- [ ] Asset upload and processing
- [ ] Metadata persistence
- [ ] Track management functionality
- [ ] Catalog CRUD operations
- [ ] Firestore data layer

### Phase 3: ERN Generation 📅 (Weeks 9-12)
- [ ] ERN generator engine
- [ ] DDEX Workbench API integration
- [ ] Multi-version support (3.8.2, 4.2, 4.3)
- [ ] Validation and error handling
- [ ] ERN preview UI

### Phase 4: Delivery Engine 📅 (Weeks 13-16)
- [ ] FTP/SFTP protocol implementation
- [ ] S3/Azure/API delivery
- [ ] Queue management system
- [ ] Retry logic and error handling
- [ ] Delivery receipts and tracking

### Phase 5: Enterprise Features 📅 (Weeks 17-20)
- [ ] Plugin architecture
- [ ] Immersive audio plugin
- [ ] Advanced metadata plugin
- [ ] Delivery orchestration
- [ ] Territory management plugin

### Phase 6: Testing & Launch 📅 (Weeks 21-24)
- [ ] Comprehensive test suite
- [ ] Performance optimization
- [ ] Security audit
- [ ] Documentation completion
- [ ] npm package publication
- [ ] Public beta launch

## 💻 Development

```bash
# Clone the repository
git clone https://github.com/ddex/distro.git
cd distro

# Install all dependencies (root, template, cli, packages)
npm run install:all

# Start development server
cd template
npm run dev
# Visit http://localhost:5173

# Build for production
npm run build

# Deploy to Firebase
npm run deploy

# Work with the CLI
cd ../cli
npm link
ddex-distro --help
```

## 🏗️ Project Structure

```
ddex-distro/
├── template/            # Default Vue app template
│   ├── src/
│   │   ├── views/       # Page components (✅ Complete)
│   │   ├── components/  # UI components (✅ NavBar complete)
│   │   ├── composables/ # Vue composables (✅ useAuth complete)
│   │   ├── router/      # Routing config (✅ Complete)
│   │   ├── assets/      # CSS architecture (✅ Complete)
│   │   └── firebase.js  # Firebase config (✅ Complete)
│   └── functions/       # Cloud Functions (📅 Planned)
├── cli/                 # CLI tool (✅ Complete)
│   ├── bin/            # Executable scripts
│   └── commands/       # All CLI commands
├── packages/           # Shared packages
│   └── @ddex/
│       └── common/     # Types & utils (✅ Complete)
├── firebase.json       # Firebase configuration (✅)
├── lerna.json         # Monorepo config (✅)
└── docs/              # Documentation (📅 Planned)
```

## 🤝 Contributing

We welcome contributions! With Phase 1 complete, we especially need help with:

- 🔧 Phase 2: Core CMS implementation (current focus)
- 📝 ERN generation logic
- 🚚 Delivery protocol implementations
- 📖 Documentation
- 🧪 Testing
- 🎨 Additional UI components
- 🌍 Internationalization

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 🔗 DDEX Ecosystem

DDEX Distro is part of the larger DDEX Workbench open-source ecosystem:

- [DDEX Workbench](https://github.com/ddex/workbench) - Validation and testing tools
- [DDEX DSP](https://github.com/ddex/dsp) - Reference streaming platform

All tools share unified authentication for seamless workflow integration.

## 📈 Success Metrics (Target)

### Performance Targets
- ERN generation: <5 seconds
- Asset processing: <30 seconds/track
- Delivery time: <2 minutes average

## 🔐 Security

- ✅ Firebase Auth with SSO support
- ✅ Encrypted credential storage
- ✅ Secure file handling
- ✅ Role-based access control
- 📅 SOC 2 compliance (planned for Enterprise)

## 📄 License

### Community Edition
MIT License - use freely for any purpose. See [LICENSE](LICENSE) for details.

### Enterprise Edition
Commercial license required. Details coming at v1.0 launch.

## 💬 Support

### Community
- **GitHub Issues**: [Bug reports and features](https://github.com/ddex/distro/issues)
- **Discussions**: [Community forum](https://github.com/ddex/distro/discussions)
- **Discord**: Coming soon

### Enterprise
- Priority support details coming at launch

## 🙏 Acknowledgments

Built by the DDEX community for the music industry. Special thanks to:
- [DDEX](https://ddex.net) for the standards
- Early contributors and testers
- The Vue.js and Firebase teams

---

**Join us in democratizing music distribution. True open source, no compromises.**

*Star ⭐ the repo to follow our progress!*