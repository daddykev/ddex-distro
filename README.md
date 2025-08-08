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

**Alpha Release - v0.3.0** (August 2025)

The project is actively under development. Core infrastructure is complete and deployed, with the CMS functionality being built now.

### ✅ What's Working Now
- **Authentication System**: Complete Firebase Auth integration (email/password + Google SSO)
- **Dashboard**: Real-time stats, activity feed, quick actions
- **UI/UX Framework**: Professional design system with light/dark themes
- **Routing**: All application routes configured and functional
- **Deployment**: Successfully deployed to Firebase Hosting
- **CSS Architecture**: Modular design system with components and utilities

### 🚀 In Development (Current Sprint)
- **Release Creation Wizard**: Multi-step release creation flow
- **Asset Management**: Audio and artwork upload system
- **Catalog Management**: Browse, search, and manage releases
- **ERN Generation**: DDEX-compliant message generation
- **Delivery Engine**: FTP/SFTP/S3/API protocol implementation

### 📅 Coming Soon
- **DDEX Workbench Integration**: Automatic ERN validation
- **Delivery Queue System**: Reliable background delivery processing
- **Multi-tenant Support**: Serve multiple labels from one installation
- **Plugin Architecture**: Extensibility for Enterprise features
- **CLI Tool**: npm-installable project scaffolding

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

### Try the Live Demo (Current Alpha)
```bash
# Clone and run locally
git clone https://github.com/ddex/distro.git
cd distro
npm install
npm run dev

# Or deploy to your own Firebase project
npm run deploy
```

### Future Installation (v1.0)
```bash
# Coming soon: One-command deployment
npm install -g @ddex/distro-cli
ddex-distro create my-label
cd my-label
npm run deploy
```

## 🛠️ Technology Stack

- **Frontend**: Vue 3 (Composition API) + Vite
- **Backend**: Firebase (Firestore, Functions, Storage, Auth)
- **Styling**: Custom CSS architecture with theme system
- **Icons**: FontAwesome free icons
- **Delivery**: Node.js workers (in development)
- **Validation**: DDEX Workbench API (planned)

## 📊 Development Roadmap

### Phase 1: Foundation ✅ (90% Complete)
- [x] Project architecture and planning
- [x] Vue 3 application scaffolding
- [x] Firebase integration
- [x] Authentication system
- [x] Navigation and routing
- [x] Dashboard and settings views
- [x] CSS design system
- [x] Theme support (light/dark)
- [ ] CLI tool (in progress)

### Phase 2: Core CMS 🚧 (Current - 20% Complete)
- [x] UI components created
- [ ] Release creation wizard functionality
- [ ] Asset upload system
- [ ] Metadata management
- [ ] Track management
- [ ] Catalog operations
- [ ] Firestore integration

### Phase 3: ERN Generation 📅 (Q3 2025)
- [ ] ERN generator engine
- [ ] DDEX Workbench integration
- [ ] Validation system
- [ ] Multi-version support

### Phase 4: Delivery Engine 📅 (Q3 2025)
- [ ] Protocol implementations
- [ ] Queue system
- [ ] Retry logic
- [ ] Delivery receipts

### Phase 5: Enterprise Features 📅 (Q4 2025)
- [ ] Plugin architecture
- [ ] Immersive audio plugin
- [ ] Advanced metadata plugin
- [ ] Orchestration plugin

### Phase 6: Beta Launch 📅 (Q1 2026)
- [ ] Testing suite
- [ ] Documentation
- [ ] npm package
- [ ] Public beta

## 💻 Development

```bash
# Clone the repository
git clone https://github.com/ddex/distro.git
cd distro

# Install dependencies
npm install

# Start development server
npm run dev
# Visit http://localhost:5173

# Run with Firebase emulators
npm run emulators

# Build for production
npm run build

# Deploy to Firebase
npm run deploy
```

## 🏗️ Project Structure

```
ddex-distro/
├── src/
│   ├── views/           # Page components (✅ Complete)
│   ├── components/      # UI components (✅ Complete)
│   ├── composables/     # Vue composables (✅ Auth done)
│   ├── router/          # Routing config (✅ Complete)
│   ├── assets/          # CSS architecture (✅ Complete)
│   └── firebase.js      # Firebase config (✅ Complete)
├── functions/           # Cloud Functions (📅 Planned)
├── cli/                 # CLI tool (🚧 In Progress)
├── packages/            # Core packages (🚧 In Progress)
└── docs/                # Documentation (📅 Planned)
```

## 🤝 Contributing

We welcome contributions! The project is in active development and we need help with:

- 🔧 Core CMS implementation
- 📝 ERN generation logic
- 🚚 Delivery protocol implementations
- 📖 Documentation
- 🧪 Testing
- 🎨 UI/UX improvements
- 🌍 Internationalization

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 🔗 DDEX Ecosystem

DDEX Distro is part of the larger DDEX Workbench open-source ecosystem:

- [DDEX Workbench](https://github.com/ddex/workbench) - Validation and testing tools
- [DDEX DSP](https://github.com/ddex/dsp) - Reference streaming platform

All tools share unified authentication for seamless workflow integration.

## 📈 Success Metrics (Target)

### Community Edition (Year 1)
- 1,000+ active installations
- 50,000+ releases processed
- 5,000+ community members

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