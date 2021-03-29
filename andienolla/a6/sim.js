
let simCount = 0
class Simulation {
	// Some number of grids
	constructor(mode) {
		// Mode can control various factors about the simulation
		this.mode = mode
		this.idNumber = simCount++
		this.noiseSeed = this.idNumber
		this.stepCount = 0
		
		// Set my size
		this.w = 10
		this.h = 10
		this.x = 0
		this.y = 0

		this.isWrapped = true
		this.isPaused = true
		this.selectedCell = undefined

		this.noiseScale = .3

		this.gameOfLifeGrid = new Grid(this.w, this.h, this.isWrapped)

		// You can make additional grids, too
		this.heightMap = new Grid(this.w, this.h, this.isWrapped)
		// Tuning values for the continuous simulation
		this.backgroundRadiation = 1
		this.lifeThreshold = 1

		this.randomize()

	}

	randomize() {
		console.log("set to a random layout with a few people who know a secret")
		this.noiseSeed += 10
		this.heightMap.setAll((x,y) => noise(x*this.noiseScale, y*this.noiseScale + 100*this.noiseSeed))**4
		this.gameOfLifeGrid.setAll((x,y) =>Math.round(this.heightMap.get(x, y)-.2))
	}

	step() {
		this.stepCount++
		if (this.x < (this.w - 1)) {
			this.x += 1
		} else {
			this.y = (this.y + 1) % this.h
			this.x = 0
		}

		this.gameOfLifeGrid.setNext((x, y, currentValue) => {
			let n0 = this.gameOfLifeGrid.get(x + 1, y)
			let n1 = this.gameOfLifeGrid.get(x - 1, y)
			let n2 = this.gameOfLifeGrid.get(x, y + 1)
			let n3 = this.gameOfLifeGrid.get(x, y - 1)
			let count = n0 + n1 + n2 + n3
			
			switch (this.mode) {
				case "timeless": {
					// Once they know, they know. 
					// Only update one person at a time.
					if (x === this.x && y === this.y) {
						if (currentValue === 1) {
							return 1
						}
						// Determine if the chain continues
						if (count > 0){
							let prob = Math.random()
							if (prob > .3) {
								return 1
							} else {
								return 0
							}
						} 
						// Someone randomly learns a new secret.
						if (Math.random() > .95) {
							return 1
						}
					} else {
						return currentValue
					}
					break;
				}

				case "interest": {
					// After awhile, people lose interest in the rumor and stop caring. 
					// Only update one person at a time
					if (x === this.x && y === this.y) {
						// Determine if the chain continues
						if (count > 0){
							let prob = Math.random()
							if (prob > .3) {
								return 1
							} else {
								return 0
							}
						}
						// Someone randomly learns a new secret.
						if (Math.random() > .95) {
							return 1
						}
					} else {
						return currentValue
					}
					break;
				}

				case "messy": {
					// Only update one person at a time
					if (x === this.x && y === this.y) {
						// Determine if the chain continues
						if (count > 0){
							let prob = Math.random()
							if (prob > .3) {
								return 1
							} else {
								return 0
							}
						}
						// Someone randomly learns a new secret.
						if (Math.random() > .80) {
							return 1
						}
					} else {
						return currentValue
					}
				}


			}

	
			
		})	
		// Swap the new value buffer into the current value buffer
		this.gameOfLifeGrid.swap()
	}



	//==============
	// Draw a cell.  Add emoji or color it
	drawCell(p, x, y, cellX, cellY, cellW, cellH) {
		if (this.selectedCell && this.selectedCell[0] === x && this.selectedCell[1] === y) {
			p.strokeWeight(2)
			p.stroke("red")
		}
		else  {
			p.strokeWeight(1)
			p.stroke(0, 0, 0, .2)
		}

		let val = this.gameOfLifeGrid.get(x, y)
		p.textSize(18)
		if (this.gameOfLifeGrid.get(x, y)) {
			p.text("😱", cellX, cellY + cellH)
		} else {
			p.text("🤨", cellX, cellY + cellH)
		}
	}

	//=====================================================
	// Mouse interactions
	select(x, y) {
		this.selectedCell = [x, y]
	}

	click(x, y) {
		this.gameOfLifeGrid.set(x, y, 1)
	}



	//=====================================================
	// Utility functions
	getNeighborPositions(x1, y1, wrap) {
		let x0 = x1 - 1
		let x2 = x1 + 1
		let y0 = y1 - 1
		let y2 = y1 + 1
		if (wrap)  {
			x0 = (x0 + this.w)%this.w
			x2 = (x2 + this.w)%this.w
			y0 = (y0 + this.h)%this.h
			y2 = (y2 + this.h)%this.h
		}
		
		return [[x0,y0],[x1,y0],[x2,y0],[x2,y1],[x2,y2],[x1,y2],[x0,y2],[x0,y1]]
	}


}