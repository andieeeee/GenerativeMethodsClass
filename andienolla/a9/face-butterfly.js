masks.butterfly = function(p, t) {
	p.background(0, 0, 50, .02)
	let radius = SLIDER.radius * 40
	p.circle(0, 0, radius)
	face.sides.forEach(side => {
		side.eye.draw(p, radius)
		p.push()
		p.translate(...side.eye.coords)
		drawFlower(p)
		p.pop()
	})
	console.log(face.mouth[3])
	drawContour(p, face.mouth[3], true)
	hand.forEach(h =>{
		h.fingers.forEach(finger =>{
			p.fill(120, 100, 50)
			drawContour(p, finger)
			let fingertip = finger[3]
			p.push()
			p.translate(...fingertip.coords)
			p.scale(.3)
			drawFlower(p)
			p.pop()
			
		})
	})
}

function drawFlower(p){
	let count = 7*SLIDER.petalCount+3;
	for (var i = 0; i < count; i++){
		p.push()
		p.rotate(i*2*Math.PI/count)
		let hue = SLIDER.hue*360
		let variance = SLIDER.variance*80
		p.fill(hue, 100, 20+variance*noise(i))
		let radius = 30*SLIDER.radius+10
		let y = radius
		let aspect = .2+SLIDER.aspect
		p.ellipse(0, y, aspect*radius, radius)
		p.pop()

	}
}