# DDEX Distro

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D.svg)](https://vuejs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-v9-FFA000.svg)](https://firebase.google.com/)
[![Status](https://img.shields.io/badge/Status-Alpha-orange.svg)](https://github.com/ddex/distro)

> Open-source, npm-installable music distribution platform for the modern music industry.

DDEX Distro enables labels, artists, and distributors to deploy a fully functional, DDEX-compliant distribution system in minutes. **Every feature, every protocol, every line of code is MIT licensed and free forever.**

## 🎯 True Open Source Philosophy

**DDEX Distro is 100% open source.** The entire platform is MIT licensed with no paid tiers, no enterprise edition, and no artificial limitations. You get a complete, production-ready distribution system with ALL delivery protocols (FTP, SFTP, S3, API, Azure), full ERN generation, and everything needed to run a professional distribution platform.

We believe in building trust through transparency. The core platform is and will always be completely free and fully functional.

### Plug-in Marketplace
For specialized needs, we're developing an **open plug-in marketplace** where both our team and **third-party developers** can offer commercial and free plug-ins. This creates a thriving ecosystem of extensions while keeping the core platform 100% open source. These plug-ins are entirely optional - the core DDEX Distro platform is complete and production-ready without any plug-ins.

The marketplace will be **open to all developers**, fostering innovation and allowing the community to build specialized solutions for unique industry needs. Whether you're a developer looking to monetize your expertise or share free tools with the community, the plug-in marketplace will provide the infrastructure to distribute your extensions.

### Why This Matters
- **No vendor lock-in**: Deploy and use forever without paying a cent
- **No artificial limits**: No release caps, no watermarks, no time bombs
- **Complete functionality**: Every feature needed for professional distribution
- **True community ownership**: Fork it, modify it, deploy it - it's yours
- **Vibrant ecosystem**: Buy plugins from various developers or build your own

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
- **Phase 5: Plug-in Marketplace** (Weeks 17-20)
- **Phase 6: Testing & Launch** (Weeks 21-24)

## ✨ Core Features (100% Free & Open Source)

### Complete Distribution Platform
✅ **Catalog Management**
- Unlimited releases and tracks
- Bulk operations and batch processing
- Version control and release history
- Draft and publishing workflow

✅ **ERN Generation**
- DDEX ERN 3.8.2, 4.2, and 4.3 support
- Automatic validation via DDEX Workbench API
- Profile-specific message generation
- Real-time preview and editing

✅ **All Delivery Protocols**
- **FTP**: Legacy system support
- **SFTP**: Secure file transfers
- **S3**: AWS cloud delivery
- **API**: Modern REST/GraphQL endpoints
- **Azure**: Microsoft cloud storage
- Manual export for custom workflows

✅ **Metadata & Credits**
- Complete production credits (artist, producer, writer, composer)
- ISRC and barcode management
- Multi-language support
- Copyright and rights information

✅ **Audio Processing**
- WAV, FLAC, and MP3 support
- Automatic format validation
- Metadata extraction
- Waveform visualization

✅ **Territory Management**
- Worldwide and regional distribution
- Territory-specific settings
- Rights management
- Release scheduling

✅ **Professional Dashboard**
- Real-time analytics
- Delivery status tracking
- Performance metrics
- Activity logs

✅ **White-Label Ready**
- Custom branding
- Domain mapping
- Theme customization
- Multi-tenant support

## 🔌 Plugin Marketplace

An **open marketplace** for optional plugins, welcoming contributions from both our core team and **third-party developers**. Create and sell your own plugins or choose from a growing library of extensions.

### 🚀 For Developers
- **Open ecosystem**: Anyone can develop and publish plugins
- **Flexible monetization**: Offer free, freemium, or paid plugins
- **Plugin SDK**: Comprehensive development kits and documentation
- **Community driven**: Build solutions for real industry needs

### 🎵 Audio Processing Plug-ins
- **Dolby Atmos Plugin**: Process and deliver immersive audio
- **Sony 360 Plugin**: Reality Audio support  
- **Apple Digital Masters Plugin**: Optimized for Apple Music
- **Stem Management Plugin**: Individual instrument tracks
- **AI Mastering Plugin**: Automated audio optimization

### 📝 Metadata Enhancement Plug-ins
- **Session Credits Plugin**: Detailed musician and engineer credits
- **Studio Details Plugin**: Recording location and equipment
- **Advanced Rights Plugin**: Complex publishing and sync rights
- **Custom Fields Plugin**: Label-specific metadata fields
- **Multi-Language Plugin**: Advanced localization support

### 🔄 Workflow Automation Plug-ins
- **Delivery Orchestrator**: Complex routing and conditional logic
- **Bulk Processor**: Large catalog operations
- **Smart Scheduling**: AI-powered delivery timing
- **Retry Manager**: Advanced failure recovery
- **Webhook Integration**: Connect to external services

### 📊 Analytics & Reporting Plug-ins
- **Analytics Pro**: Advanced metrics and insights
- **Custom Reports**: Build your own reports
- **Revenue Tracking**: Sales and streaming data
- **API Extensions**: Advanced API access
- **BI Connectors**: Export to Tableau, PowerBI, etc.

### 🌍 Territory & Pricing Plug-ins
- **Territory Windowing**: Time-based territory releases
- **Dynamic Pricing**: Market-specific pricing rules
- **Rights Calculator**: Complex rights management
- **Geo-Restrictions**: Advanced territorial controls
- **Currency Converter**: Multi-currency support

*The marketplace will launch with initial plugins from our team, but we encourage developers to start planning their extensions. Plugin development documentation and SDK will be available in Phase 5.*

## 🚀 Quick Start

### Install and Deploy (Completely Free)
```bash
# Create your distribution platform
npx create-ddex-distro my-label

# Navigate to project
cd my-label

# Initialize Firebase (free tier available)
ddex-distro init

# Start development server
npm run dev
# Visit http://localhost:5173

# Deploy to production
npm run deploy
# Your platform is live! 🚀
```

### Using the CLI Tool
```bash
# Available commands
ddex-distro create <name>    # Create new DDEX Distro project
ddex-distro init             # Initialize Firebase configuration
ddex-distro deploy           # Deploy to Firebase
ddex-distro configure        # Configure platform settings
ddex-distro target add       # Add delivery targets
ddex-distro target test      # Test delivery connections
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
- **Delivery**: Node.js workers for file transfer
- **Validation**: DDEX Workbench API integration

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

### Phase 5: Plug-in Marketplace 📅 (Weeks 17-20)
- [ ] Plug-in architecture design
- [ ] Marketplace infrastructure
- [ ] Plug-in SDK and documentation
- [ ] Developer portal and documentation
- [ ] Plug-in submission and review process
- [ ] Initial plugins from core team:
  - [ ] Dolby Atmos
  - [ ] Enhanced Metadata
  - [ ] Bulk Processor
- [ ] Third-party developer onboarding
- [ ] Plug-in registry and discovery
- [ ] Licensing and payment system

### Phase 6: Testing & Launch 📅 (Weeks 21-24)
- [ ] Comprehensive test suite
- [ ] Performance optimization
- [ ] Security audit
- [ ] Documentation completion
- [ ] npm package publication
- [ ] Public beta launch
- [ ] Developer community launch

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
- 🔌 **Plugin development** (start planning your plugins!)

### For Plugin Developers
Start thinking about plugins you'd like to build! The Plugin SDK and marketplace infrastructure will be available in Phase 5, but you can:
- Join our Discord (coming soon) to discuss plugin ideas
- Review the core architecture to plan integrations
- Suggest plugin APIs and hook points
- Contribute to the plugin SDK design

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 🔗 DDEX Ecosystem

DDEX Distro is part of the larger DDEX open-source ecosystem:

- [DDEX Workbench](https://github.com/ddex/workbench) - Validation and testing tools
- [DDEX DSP](https://github.com/ddex/dsp) - Reference streaming platform

All tools share unified authentication for seamless workflow integration.

## 📈 Performance Targets

- **ERN Generation**: <5 seconds for standard album
- **Asset Processing**: <30 seconds per track
- **Delivery Queue**: <2 minute average delivery time
- **UI Response**: <200ms for all operations
- **API Response**: <500ms p95

## 🔐 Security

- ✅ Firebase Auth with SSO support
- ✅ Encrypted credential storage
- ✅ Secure file handling with signed URLs
- ✅ Role-based access control (RBAC)
- ✅ Audit logging for all operations
- 📅 Regular security audits

## 📄 License

### Core Platform
**MIT License** - Use freely for any purpose, forever. See [LICENSE](LICENSE) for details.

This means you can:
- ✅ Use commercially without payment
- ✅ Modify and customize freely
- ✅ Distribute and sell your modifications
- ✅ Use privately without restrictions
- ✅ Fork and create your own platform

### Plugins
Individual licenses determined by plugin developers. The marketplace will support various licensing models including MIT, GPL, commercial, and freemium.

## 💬 Support

### Community Support (Free)
- **GitHub Issues**: [Bug reports and features](https://github.com/daddykev/ddex-distro/issues)
- **Discussions**: [Community forum](https://github.com/daddykev/ddex-distro/discussions)
- **Discord**: Coming soon
- **Documentation**: Comprehensive guides and API docs

### Plugin Support
Support terms vary by plugin developer. Each plugin in the marketplace will clearly indicate support options.

## 🙏 Acknowledgments

Built by the music industry, for the music industry. Special thanks to:
- [DDEX](https://ddex.net) for the standards and ongoing support
- Early contributors and testers
- The Vue.js and Firebase teams
- The open-source community
- Future plug-in developers who will extend the platform

---

**Join us in democratizing music distribution. True open source, no compromises.**

*Star ⭐ the repo to follow our progress! Interested in developing plugins? Watch this space for the Plugin SDK announcement.*