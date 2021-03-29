

class AndieArt {
	// Create a branching system  Each branch can hold other branches
	constructor(aof) {
		
		this.aof = aof
		this.center = new Vector()
		this.flowerColor = new Vector()
	}


	update(t, dt) {
		let hue = this.aof.get("flowerHue")
		// Update this with the current value of the AOF and any other parameters, like time
	}

	draw(p) {
		p.push()
		p.noStroke()
		let hue = this.aof.get("color")*360
		p.fill(hue, 100, 50)
		p.circle(0, 0, 10)
		let count = 7*this.aof.get("PetalCount")+3;
		for (var i = 0; i < count; i++){
			p.push()
			p.rotate(i*2*Math.PI/count)
			let hue = this.aof.get("color")*360
			let variance = this.aof.get("variance")*80
			p.fill(hue, 100, 20+variance*noise(i))
			let radius = 30*this.aof.get("FlowerSize")+10
			let y = radius
			let aspect = .2+this.aof.get("aspect")
			p.ellipse(0, y, aspect*radius, radius)
			p.pop()
			
		}
		
		p.pop()
	}
}


// Static properties for this class
AndieArt.landmarks = {
	"moss ball": [0.33,1.00,0.22,0.21,1.00],
	"purple friend": [0.85,1.00,0.29,0.30,0.17],
	"blue": [0.59,0.58,0.50,0.00,0.17],
	"clover": [0.37,0.11,0.50,0.00,0.17],
	"mum": [1.00,1.00,0.50,1.00,0.66]
	
}
AndieArt.labels = ["color", "PetalCount", "FlowerSize", "variance", "aspect"]



