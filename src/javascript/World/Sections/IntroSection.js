import * as THREE from 'three'

export default class IntroSection {
    constructor(_options) {
        // Options
        this.config = _options.config
        this.time = _options.time
        this.resources = _options.resources
        this.objects = _options.objects
        this.areas = _options.areas
        this.walls = _options.walls
        this.tiles = _options.tiles
        this.debug = _options.debug
        this.x = _options.x
        this.y = _options.y

        // Set up
        this.container = new THREE.Object3D()
        this.container.matrixAutoUpdate = false
        this.container.updateMatrix()

        this.setStatic()
        this.setInstructions()
        this.setOtherInstructions()
        this.setTitles()
        this.setTiles()
        this.setDikes()
    }

    setStatic() {
        this.objects.add({
            base: this.resources.items.introStaticBase.scene,
            collision: this.resources.items.introStaticCollision.scene,
            floorShadowTexture: this.resources.items.introStaticFloorShadowTexture,
            offset: new THREE.Vector3(0, 0, 0),
            mass: 0
        })
    }

    setInstructions() {
        this.instructions = {}

        /**
         * Arrows
         */
        this.instructions.arrows = {}

        // Label
        this.instructions.arrows.label = {}

        this.instructions.arrows.label.texture = this.config.touch ? this.resources.items.introInstructionsControlsTexture : this.resources.items.introInstructionsArrowsTexture
        this.instructions.arrows.label.texture.magFilter = THREE.NearestFilter
        this.instructions.arrows.label.texture.minFilter = THREE.LinearFilter

        this.instructions.arrows.label.material = new THREE.MeshBasicMaterial({ transparent: true, alphaMap: this.instructions.arrows.label.texture, color: 0xffffff, depthWrite: false, opacity: 0 })

        this.instructions.arrows.label.geometry = this.resources.items.introInstructionsLabels.scene.children.find((_mesh) => _mesh.name === 'arrows').geometry

        this.instructions.arrows.label.mesh = new THREE.Mesh(this.instructions.arrows.label.geometry, this.instructions.arrows.label.material)
        this.container.add(this.instructions.arrows.label.mesh)

        if (!this.config.touch) {
            // Keys
            this.instructions.arrows.up = this.objects.add({
                base: this.resources.items.introArrowKeyBase.scene,
                collision: this.resources.items.introArrowKeyCollision.scene,
                offset: new THREE.Vector3(0, 0, 0),
                rotation: new THREE.Euler(0, 0, 0),
                duplicated: true,
                shadow: { sizeX: 1, sizeY: 1, offsetZ: - 0.2, alpha: 0.5 },
                mass: 1.5,
                soundName: 'brick'
            })
            this.instructions.arrows.down = this.objects.add({
                base: this.resources.items.introArrowKeyBase.scene,
                collision: this.resources.items.introArrowKeyCollision.scene,
                offset: new THREE.Vector3(0, - 0.8, 0),
                rotation: new THREE.Euler(0, 0, Math.PI),
                duplicated: true,
                shadow: { sizeX: 1, sizeY: 1, offsetZ: - 0.2, alpha: 0.5 },
                mass: 1.5,
                soundName: 'brick'
            })
            this.instructions.arrows.left = this.objects.add({
                base: this.resources.items.introArrowKeyBase.scene,
                collision: this.resources.items.introArrowKeyCollision.scene,
                offset: new THREE.Vector3(- 0.8, - 0.8, 0),
                rotation: new THREE.Euler(0, 0, Math.PI * 0.5),
                duplicated: true,
                shadow: { sizeX: 1, sizeY: 1, offsetZ: - 0.2, alpha: 0.5 },
                mass: 1.5,
                soundName: 'brick'
            })
            this.instructions.arrows.right = this.objects.add({
                base: this.resources.items.introArrowKeyBase.scene,
                collision: this.resources.items.introArrowKeyCollision.scene,
                offset: new THREE.Vector3(0.8, - 0.8, 0),
                rotation: new THREE.Euler(0, 0, - Math.PI * 0.5),
                duplicated: true,
                shadow: { sizeX: 1, sizeY: 1, offsetZ: - 0.2, alpha: 0.5 },
                mass: 1.5,
                soundName: 'brick'
            })
        }
    }

    setOtherInstructions() {
        if (this.config.touch) {
            return
        }

        this.otherInstructions = {}
        this.otherInstructions.x = 16
        this.otherInstructions.y = - 2

        // Container
        this.otherInstructions.container = new THREE.Object3D()
        this.otherInstructions.container.position.x = this.otherInstructions.x
        this.otherInstructions.container.position.y = this.otherInstructions.y
        this.otherInstructions.container.matrixAutoUpdate = false
        this.otherInstructions.container.updateMatrix()
        this.container.add(this.otherInstructions.container)

        // Label
        this.otherInstructions.label = {}

        this.otherInstructions.label.geometry = new THREE.PlaneGeometry(6, 6, 1, 1)

        this.otherInstructions.label.texture = this.resources.items.introInstructionsOtherTexture
        this.otherInstructions.label.texture.magFilter = THREE.NearestFilter
        this.otherInstructions.label.texture.minFilter = THREE.LinearFilter

        this.otherInstructions.label.material = new THREE.MeshBasicMaterial({ transparent: true, alphaMap: this.otherInstructions.label.texture, color: 0xffffff, depthWrite: false, opacity: 0 })

        this.otherInstructions.label.mesh = new THREE.Mesh(this.otherInstructions.label.geometry, this.otherInstructions.label.material)
        this.otherInstructions.label.mesh.matrixAutoUpdate = false
        this.otherInstructions.container.add(this.otherInstructions.label.mesh)

        // Horn
        this.otherInstructions.horn = this.objects.add({
            base: this.resources.items.hornBase.scene,
            collision: this.resources.items.hornCollision.scene,
            offset: new THREE.Vector3(this.otherInstructions.x + 1.25, this.otherInstructions.y - 2.75, 0.2),
            rotation: new THREE.Euler(0, 0, 0.5),
            duplicated: true,
            shadow: { sizeX: 1.65, sizeY: 0.75, offsetZ: - 0.1, alpha: 0.4 },
            mass: 1.5,
            soundName: 'horn',
            sleep: false
        })
    }

    // Inside IntroSection.js

    setTitles() {
        // --- REMOVE all the existing this.objects.add calls for B, R, U, N, O, S, I, M, Creative, Dev ---

        // --- ADD calls for AKASH JHA ---
        // You'll need to adjust the X and Y coordinates in the 'offset' Vector3
        // for each letter to position them correctly. This will take some trial and error.
        // Start with Y=0 and increment X for each letter.

        // A
        this.objects.add({
            container: this.container,
            base: this.resources.items.introABase.scene,
            collision: this.resources.items.introACollision.scene,
            offset: new THREE.Vector3(-4-1, -10, 0.5), // Adjust X, Y coordinates
            rotation: new THREE.Euler(0, 0, 0),
            shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
            mass: 1.5,
            soundName: 'brick',
            duplicated: true // Use 'true' if you use the same letter multiple times (like A, H)
        });

        // K
        this.objects.add({
            container: this.container,
            base: this.resources.items.introKBase.scene,
            collision: this.resources.items.introKCollision.scene,
            offset: new THREE.Vector3(-2.5-1, -10, 0.8), // Adjust X, Y coordinates
            rotation: new THREE.Euler(0, 0, 0),
            shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
            mass: 1.5,
            soundName: 'brick'
        });

        // A (second A)
        this.objects.add({
            container: this.container,
            base: this.resources.items.introABase.scene, // Use the same base/collision
            collision: this.resources.items.introACollision.scene,
            offset: new THREE.Vector3(-1-1, -10, 0.5), // Adjust X, Y coordinates
            rotation: new THREE.Euler(0, 0, 0),
            shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
            mass: 1.5,
            soundName: 'brick',
            duplicated: true // Mark as duplicated
        });

        // S
        this.objects.add({
            container: this.container,
            base: this.resources.items.introSBase.scene,
            collision: this.resources.items.introSCollision.scene,
            offset: new THREE.Vector3(0.5-1, -10, 0.8), // Adjust X, Y coordinates
            rotation: new THREE.Euler(0, 0, 0),
            shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: -0.6, alpha: 0.4 },
            mass: 1.5,
            soundName: 'brick'
        });

        // H
        this.objects.add({
            container: this.container,
            base: this.resources.items.introHBase.scene,
            collision: this.resources.items.introHCollision.scene,
            offset: new THREE.Vector3(2-1, -10, 0.8), // Adjust X, Y coordinates
            rotation: new THREE.Euler(0, 0, 0),
            shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
            mass: 1.5,
            soundName: 'brick',
            duplicated: true // Mark as duplicated if used again for JHA
        });

        // J (Start of JHA - maybe add a bigger space)
        this.objects.add({
            container: this.container,
            base: this.resources.items.introJBase.scene,
            collision: this.resources.items.introJCollision.scene,
            offset: new THREE.Vector3(4.5-1, -10, 0.8), // Adjust X, Y coordinates (increased X for space)
            rotation: new THREE.Euler(0, 0, 0),
            shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
            mass: 1.5,
            soundName: 'brick'
        });

        // H (second H)
        this.objects.add({
            container: this.container,
            base: this.resources.items.introHBase.scene, // Use the same base/collision
            collision: this.resources.items.introHCollision.scene,
            offset: new THREE.Vector3(6-1, -10, 0.6), // Adjust X, Y coordinates
            rotation: new THREE.Euler(0, 0, 0),
            shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
            mass: 1.5,
            soundName: 'brick',
            duplicated: true // Mark as duplicated
        });

        // A (third A)
        this.objects.add({
            container: this.container,
            base: this.resources.items.introABase.scene, // Use the same base/collision
            collision: this.resources.items.introACollision.scene,
            offset: new THREE.Vector3(7.5-1, -10, 0.5), // Adjust X, Y coordinates
            rotation: new THREE.Euler(0, 0, 0),
            shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
            mass: 1.5,
            soundName: 'brick',
            duplicated: true // Mark as duplicated
        });
    }

    setTiles() {
        this.tiles.add({
            start: new THREE.Vector2(0, - 4.5),
            delta: new THREE.Vector2(0, - 4.5)
        })
    }

setDikes() {
        this.dikes = {}
        this.dikes.brickOptions = {
            base: this.resources.items.brickBase.scene,
            collision: this.resources.items.brickCollision.scene,
            offset: new THREE.Vector3(-4, 0, 0), // Adjust X, Y coordinates
            rotation: new THREE.Euler(0, 0, 0),
            duplicated: true,
            shadow: { sizeX: 1.5, sizeY: 1.5, offsetZ: - 0.6, alpha: 0.4 },
            mass: 1.5,
            soundName: 'brick'
        }

        this.walls.add({
            object: this.dikes.brickOptions,
            shape:
            {
                type: 'brick',
                equilibrateLastLine: true,
                widthCount: 5,
                heightCount: 2,
                position: new THREE.Vector3(this.x - 12, this.y - 13, 0),
                offsetWidth: new THREE.Vector3(0, 1.05, 0),
                offsetHeight: new THREE.Vector3(0, 0, 0.45),
                randomOffset: new THREE.Vector3(0, 0, 0),
                randomRotation: new THREE.Vector3(0, 0, 0.2)
            }
        })

        this.walls.add({
            object:
            {
                ...this.dikes.brickOptions,
                rotation: new THREE.Euler(0, 0, Math.PI * 0.5)
            },
            shape:
            {
                type: 'brick',
                equilibrateLastLine: true,
                widthCount: 3,
                heightCount: 2,
                position: new THREE.Vector3(this.x + 8, this.y + 6, 0),
                offsetWidth: new THREE.Vector3(1.05, 0, 0),
                offsetHeight: new THREE.Vector3(0, 0, 0.45),
                randomOffset: new THREE.Vector3(0, 0, 0),
                randomRotation: new THREE.Vector3(0, 0, 0.2)
            }
        })

        this.walls.add({
            object: this.dikes.brickOptions,
            shape:
            {
                type: 'brick',
                equilibrateLastLine: false,
                widthCount: 3,
                heightCount: 2,
                position: new THREE.Vector3(this.x + 9.9, this.y + 4.7, 0),
                offsetWidth: new THREE.Vector3(0, - 1.05, 0),
                offsetHeight: new THREE.Vector3(0, 0, 0.45),
                randomOffset: new THREE.Vector3(0, 0, 0),
                randomRotation: new THREE.Vector3(0, 0, 0.2)
            }
        })

        this.walls.add({
            object:
            {
                ...this.dikes.brickOptions,
                rotation: new THREE.Euler(0, 0, Math.PI * 0.5)
            },
            shape:
            {
                type: 'brick',
                equilibrateLastLine: true,
                widthCount: 3,
                heightCount: 2,
                position: new THREE.Vector3(this.x - 14, this.y + 2, 0),
                offsetWidth: new THREE.Vector3(1.05, 0, 0),
                offsetHeight: new THREE.Vector3(0, 0, 0.45),
                randomOffset: new THREE.Vector3(0, 0, 0),
                randomRotation: new THREE.Vector3(0, 0, 0.2)
            }
        })

        this.walls.add({
            object: this.dikes.brickOptions,
            shape:
            {
                type: 'brick',
                equilibrateLastLine: false,
                widthCount: 3,
                heightCount: 2,
                position: new THREE.Vector3(this.x - 14.8, this.y + 0.7, 0),
                offsetWidth: new THREE.Vector3(0, - 1.05, 0),
                offsetHeight: new THREE.Vector3(0, 0, 0.45),
                randomOffset: new THREE.Vector3(0, 0, 0),
                randomRotation: new THREE.Vector3(0, 0, 0.2)
            }
        })

        this.walls.add({
            object: this.dikes.brickOptions,
            shape:
            {
                type: 'brick',
                equilibrateLastLine: true,
                widthCount: 3,
                heightCount: 2,
                position: new THREE.Vector3(this.x - 14.8, this.y - 3.5, 0),
                offsetWidth: new THREE.Vector3(0, - 1.05, 0),
                offsetHeight: new THREE.Vector3(0, 0, 0.45),
                randomOffset: new THREE.Vector3(0, 0, 0),
                randomRotation: new THREE.Vector3(0, 0, 0.2)
            }
        })

        if (!this.config.touch) {
            this.walls.add({
                object:
                {
                    ...this.dikes.brickOptions,
                    rotation: new THREE.Euler(0, 0, Math.PI * 0.5)
                },
                shape:
                {
                    type: 'brick',
                    equilibrateLastLine: true,
                    widthCount: 2,
                    heightCount: 2,
                    position: new THREE.Vector3(this.x + 18.5, this.y + 3, 0),
                    offsetWidth: new THREE.Vector3(1.05, 0, 0),
                    offsetHeight: new THREE.Vector3(0, 0, 0.45),
                    randomOffset: new THREE.Vector3(0, 0, 0),
                    randomRotation: new THREE.Vector3(0, 0, 0.2)
                }
            })

            this.walls.add({
                object: this.dikes.brickOptions,
                shape:
                {
                    type: 'brick',
                    equilibrateLastLine: false,
                    widthCount: 2,
                    heightCount: 2,
                    position: new THREE.Vector3(this.x + 19.9, this.y + 2.2, 0),
                    offsetWidth: new THREE.Vector3(0, - 1.05, 0),
                    offsetHeight: new THREE.Vector3(0, 0, 0.45),
                    randomOffset: new THREE.Vector3(0, 0, 0),
                    randomRotation: new THREE.Vector3(0, 0, 0.2)
                }
            })
        }
    }
}
