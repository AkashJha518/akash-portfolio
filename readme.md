# akash-portfolio

![Node.js](https://img.shields.io/badge/-Node.js-blue?logo=nodejs&logoColor=white)

## 📝 Description

Showcase your skills and experience with akash-portfolio, a sleek and customizable portfolio website built with Node.js. This project provides a simple yet effective way to create a professional online presence, highlighting your projects and accomplishments. With its clean design and easy-to-use structure, akash-portfolio allows you to quickly deploy a personal website that reflects your unique brand. While still under development, the foundational Node.js framework sets the stage for future enhancements and personalized customization, making it a great starting point for establishing your online identity.

## 🛠️ Tech Stack

- ⬢ Node.js


## 📦 Key Dependencies

```
cannon: ^0.6.2
dat.gui: ^0.7.9
gh-pages: ^6.3.0
gsap: ^3.12.5
howler: ^2.2.4
three: ^0.164.1
vite-plugin-restart: ^0.4.0
```

## 🚀 Run Commands

- **dev**: `npm run dev`
- **build**: `npm run build`
- **preview**: `npm run preview`
- **predeploy**: `npm run predeploy`
- **deploy**: `npm run deploy`


## 📁 Project Structure

```
.
├── package.json
├── readme.md
├── resources
│   └── 3d
│       ├── model.blend
│       ├── model.blend1
│       ├── portfolio.blend.zip
│       ├── render.blend
│       └── render.blend1
├── src
│   ├── favicon
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png
│   │   ├── browserconfig.xml
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon.ico
│   │   └── site.webmanifest
│   ├── images
│   │   ├── boyHiArm.png
│   │   ├── boyHiBody.png
│   │   ├── boyShrugging.png
│   │   ├── boyYay.png
│   │   ├── bubbleTip.svg
│   │   └── mobile
│   │       ├── cross.png
│   │       ├── doubleTriangle.png
│   │       └── triangle.png
│   ├── index.html
│   ├── index.js
│   ├── javascript
│   │   ├── Application.js
│   │   ├── Camera.js
│   │   ├── Geometries
│   │   │   ├── AreaFenceGeometry.js
│   │   │   └── AreaFloorBorderGeometry.js
│   │   ├── Materials
│   │   │   ├── AreaFence.js
│   │   │   ├── AreaFloorBorder.js
│   │   │   ├── Floor.js
│   │   │   ├── FloorShadow.js
│   │   │   ├── Matcap.js
│   │   │   ├── ProjectBoard.js
│   │   │   └── Shadow.js
│   │   ├── Passes
│   │   │   ├── Blur.js
│   │   │   └── Glows.js
│   │   ├── Resources.js
│   │   ├── ThreejsJourney.js
│   │   ├── Utils
│   │   │   ├── EventEmitter.js
│   │   │   ├── Loader.js
│   │   │   ├── Sizes.js
│   │   │   └── Time.js
│   │   └── World
│   │       ├── Area.js
│   │       ├── Areas.js
│   │       ├── Car.js
│   │       ├── Controls.js
│   │       ├── EasterEggs.js
│   │       ├── Floor.js
│   │       ├── Materials.js
│   │       ├── Objects.js
│   │       ├── Physics.js
│   │       ├── Sections
│   │       │   ├── CrossroadsSection.js
│   │       │   ├── InformationSection.js
│   │       │   ├── IntroSection.js
│   │       │   ├── PlaygroundSection.js
│   │       │   ├── Project.js
│   │       │   └── ProjectsSection.js
│   │       ├── Shadows.js
│   │       ├── Sounds.js
│   │       ├── Tiles.js
│   │       ├── Walls.js
│   │       ├── Zone.js
│   │       ├── Zones.js
│   │       └── index.js
│   ├── shaders
│   │   ├── areaFence
│   │   │   ├── fragment.glsl
│   │   │   └── vertex.glsl
│   │   ├── areaFloorBorder
│   │   │   ├── fragment.glsl
│   │   │   └── vertex.glsl
│   │   ├── blur
│   │   │   ├── fragment.glsl
│   │   │   └── vertex.glsl
│   │   ├── floor
│   │   │   ├── fragment.glsl
│   │   │   └── vertex.glsl
│   │   ├── floorShadow
│   │   │   ├── fragment.glsl
│   │   │   └── vertex.glsl
│   │   ├── glows
│   │   │   ├── fragment.glsl
│   │   │   └── vertex.glsl
│   │   ├── matcap
│   │   │   ├── fragment.glsl
│   │   │   └── vertex.glsl
│   │   ├── partials
│   │   │   ├── blur13.glsl
│   │   │   ├── blur5.glsl
│   │   │   ├── blur9.glsl
│   │   │   ├── cnoise.glsl
│   │   │   ├── easeSin.glsl
│   │   │   ├── random.glsl
│   │   │   └── round.glsl
│   │   ├── projectBoard
│   │   │   ├── fragment.glsl
│   │   │   └── vertex.glsl
│   │   └── shadow
│   │       ├── fragment.glsl
│   │       └── vertex.glsl
│   └── style
│       └── main.css
├── static
│   ├── draco
│   │   ├── draco_decoder.js
│   │   ├── draco_decoder.wasm
│   │   ├── draco_encoder.js
│   │   ├── draco_wasm_wrapper.js
│   │   └── gltf
│   │       ├── draco_decoder.js
│   │       ├── draco_decoder.wasm
│   │       ├── draco_encoder.js
│   │       └── draco_wasm_wrapper.js
│   ├── favicon
│   │   ├── android-chrome-192x192.png
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-16x16.png
│   │   ├── favicon-32x32.png
│   │   ├── favicon.ico
│   │   └── site.webmanifest
│   ├── models
│   │   ├── area
│   │   │   ├── enter.png
│   │   │   ├── keyEnter.png
│   │   │   ├── open.png
│   │   │   ├── questionMark.png
│   │   │   └── reset.png
│   │   ├── awwwardsTrophy
│   │   │   ├── base.glb
│   │   │   └── collision.glb
│   │   ├── bowlingBall
│   │   │   ├── base.glb
│   │   │   └── collision.glb
│   │   ├── bowlingPin
│   │   │   ├── base.glb
│   │   │   └── collision.glb
│   │   ├── brick
│   │   │   ├── base.glb
│   │   │   └── collision.glb
│   │   ├── car
│   │   │   ├── cyberTruck
│   │   │   │   ├── antena.glb
│   │   │   │   ├── backLightsBrake.glb
│   │   │   │   ├── backLightsReverse.glb
│   │   │   │   ├── chassis.glb
│   │   │   │   └── wheel.glb
│   │   │   └── default
│   │   │       ├── antena.glb
│   │   │       ├── backLightsBrake.glb
│   │   │       ├── backLightsReverse.glb
│   │   │       ├── bunnyEarLeft.glb
│   │   │       ├── bunnyEarRight.glb
│   │   │       ├── chassis.glb
│   │   │       └── wheel.glb
│   │   ├── cone
│   │   │   ├── base.glb
│   │   │   └── collision.glb
│   │   ├── crossroads
│   │   │   └── static
│   │   │       ├── base.glb
│   │   │       ├── collision.glb
│   │   │       └── floorShadow.png
│   │   ├── distinctionA
│   │   │   └── static
│   │   │       ├── base.glb
│   │   │       ├── collision.glb
│   │   │       └── floorShadow.png
│   │   ├── distinctionB
│   │   │   └── static
│   │   │       ├── base.glb
│   │   │       ├── collision.glb
│   │   │       └── floorShadow.png
│   │   ├── distinctionC
│   │   │   └── static
│   │   │       ├── base.glb
│   │   │       ├── collision.glb
│   │   │       └── floorShadow.png
│   │   ├── egg
│   │   │   ├── base.glb
│   │   │   └── collision.glb
│   │   ├── horn
│   │   │   ├── base.glb
│   │   │   └── collision.glb
│   │   ├── information
│   │   │   ├── baguette
│   │   │   │   ├── base.glb
│   │   │   │   └── collision.glb
│   │   │   └── static
│   │   │       ├── activities.png
│   │   │       ├── activities1.png
│   │   │       ├── base.glb
│   │   │       ├── collision.glb
│   │   │       ├── contactGithubLabel.png
│   │   │       ├── contactLinkedinLabel.png
│   │   │       ├── contactMailLabel.png
│   │   │       ├── contactTwitterLabel.png
│   │   │       └── floorShadow.png
│   │   ├── intro
│   │   │   ├── a
│   │   │   │   ├── base.glb
│   │   │   │   └── collision.glb
│   │   │   ├── arrowKey
│   │   │   │   ├── base.glb
│   │   │   │   └── collision.glb
│   │   │   ├── creative
│   │   │   │   ├── base.glb
│   │   │   │   └── collision.glb
│   │   │   ├── dev
│   │   │   │   ├── base.glb
│   │   │   │   └── collision.glb
│   │   │   ├── h
│   │   │   │   ├── base.glb
│   │   │   │   └── collision.glb
│   │   │   ├── instructions
│   │   │   │   ├── arrows.png
│   │   │   │   ├── controls.png
│   │   │   │   ├── labels.glb
│   │   │   │   └── other.png
│   │   │   ├── j
│   │   │   │   ├── base.glb
│   │   │   │   └── collision.glb
│   │   │   ├── k
│   │   │   │   ├── base.glb
│   │   │   │   └── collision.glb
│   │   │   ├── s
│   │   │   │   ├── base.glb
│   │   │   │   └── collision.glb
│   │   │   └── static
│   │   │       ├── base.glb
│   │   │       ├── collision.glb
│   │   │       └── floorShadow.png
│   │   ├── konami
│   │   │   ├── label-touch.png
│   │   │   └── label.png
│   │   ├── lemon
│   │   │   ├── base.glb
│   │   │   └── collision.glb
│   │   ├── matcaps
│   │   │   ├── beige.png
│   │   │   ├── black.png
│   │   │   ├── blue.png
│   │   │   ├── brown.png
│   │   │   ├── emeraldGreen.png
│   │   │   ├── gold.png
│   │   │   ├── gray.png
│   │   │   ├── green.png
│   │   │   ├── metal.png
│   │   │   ├── orange.png
│   │   │   ├── purple.png
│   │   │   ├── red.png
│   │   │   ├── white.png
│   │   │   └── yellow.png
│   │   ├── playground
│   │   │   └── static
│   │   │       ├── base.glb
│   │   │       ├── collision.glb
│   │   │       └── floorShadow.png
│   │   ├── projects
│   │   │   ├── board
│   │   │   │   ├── collision.glb
│   │   │   │   ├── floorShadow.png
│   │   │   │   ├── plane.glb
│   │   │   │   └── structure.glb
│   │   │   ├── citrixRedbull
│   │   │   │   ├── floorTexture.png
│   │   │   │   ├── floorTexture1.png
│   │   │   │   ├── slideA.jpg
│   │   │   │   ├── slideB.jpg
│   │   │   │   └── slideC.jpg
│   │   │   └── distinctions
│   │   │       ├── awwwards
│   │   │       │   ├── base.glb
│   │   │       │   └── collision.glb
│   │   │       ├── cssda
│   │   │       │   ├── base.glb
│   │   │       │   └── collision.glb
│   │   │       └── fwa
│   │   │           ├── base.glb
│   │   │           └── collision.glb
│   │   ├── startingScreen
│   │   │   ├── loadingLabel.png
│   │   │   └── startLabel.png
│   │   ├── tiles
│   │   │   ├── a
│   │   │   │   ├── base.glb
│   │   │   │   └── collision.glb
│   │   │   ├── b
│   │   │   │   ├── base.glb
│   │   │   │   └── collision.glb
│   │   │   ├── c
│   │   │   │   ├── base.glb
│   │   │   │   └── collision.glb
│   │   │   ├── d
│   │   │   │   ├── base.glb
│   │   │   │   └── collision.glb
│   │   │   └── e
│   │   │       ├── base.glb
│   │   │       └── collision.glb
│   │   └── wigs
│   │       ├── wig1.glb
│   │       ├── wig2.glb
│   │       ├── wig3.glb
│   │       └── wig4.glb
│   └── sounds
│       ├── bowling
│       │   ├── pin-1.mp3
│       │   └── pin-1.wav
│       ├── bricks
│       │   ├── brick-1.mp3
│       │   ├── brick-1.wav
│       │   ├── brick-2.mp3
│       │   ├── brick-2.wav
│       │   ├── brick-3.mp3
│       │   ├── brick-3.wav
│       │   ├── brick-4.mp3
│       │   ├── brick-4.wav
│       │   ├── brick-5.mp3
│       │   ├── brick-5.wav
│       │   ├── brick-6.mp3
│       │   ├── brick-6.wav
│       │   ├── brick-7.mp3
│       │   ├── brick-7.wav
│       │   ├── brick-8.mp3
│       │   └── brick-8.wav
│       ├── car-hits
│       │   ├── car-hit-1.mp3
│       │   ├── car-hit-1.wav
│       │   ├── car-hit-2.mp3
│       │   ├── car-hit-2.wav
│       │   ├── car-hit-3.mp3
│       │   ├── car-hit-3.wav
│       │   ├── car-hit-4.mp3
│       │   ├── car-hit-4.wav
│       │   ├── car-hit-5.mp3
│       │   └── car-hit-5.wav
│       ├── car-horns
│       │   ├── car-horn-1.mp3
│       │   └── car-horn-2.mp3
│       ├── engines
│       │   ├── 0
│       │   │   ├── high_off.wav
│       │   │   ├── high_on.wav
│       │   │   ├── idle.wav
│       │   │   ├── low_off.wav
│       │   │   ├── low_on.wav
│       │   │   ├── maxRPM.wav
│       │   │   ├── med_off.wav
│       │   │   ├── med_on.wav
│       │   │   └── startup.wav
│       │   ├── 1
│       │   │   ├── high_off.mp3
│       │   │   ├── high_off.wav
│       │   │   ├── high_on.mp3
│       │   │   ├── high_on.wav
│       │   │   ├── idle.mp3
│       │   │   ├── idle.wav
│       │   │   ├── low_off.mp3
│       │   │   ├── low_off.wav
│       │   │   ├── low_on.mp3
│       │   │   ├── low_on.wav
│       │   │   ├── maxRPM.mp3
│       │   │   ├── maxRPM.wav
│       │   │   ├── med_off.mp3
│       │   │   ├── med_off.wav
│       │   │   ├── med_on.mp3
│       │   │   ├── med_on.wav
│       │   │   ├── startup.mp3
│       │   │   └── startup.wav
│       │   └── 2
│       │       ├── high_off.wav
│       │       ├── high_on.wav
│       │       ├── idle.wav
│       │       ├── low_off.wav
│       │       ├── low_on.wav
│       │       ├── maxRPM.wav
│       │       ├── med_off.wav
│       │       ├── med_on.wav
│       │       └── startup.wav
│       ├── horns
│       │   ├── horn-1.mp3
│       │   ├── horn-2.mp3
│       │   └── horn-3.mp3
│       ├── reveal
│       │   ├── reveal-1.mp3
│       │   └── reveal-1.wav
│       ├── screeches
│       │   ├── screech-1.mp3
│       │   └── screech-1.wav
│       ├── ui
│       │   ├── area-1.mp3
│       │   └── area-1.wav
│       └── wood-hits
│           ├── wood-hit-1.mp3
│           └── wood-hit-1.wav
└── vite.config.js
```

## 🛠️ Development Setup

### Node.js/JavaScript Setup
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` or `yarn install`
3. Start development server: (Check scripts in `package.json`, e.g., `npm run dev`)


## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/AkashJha518/akash-portfolio.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.
