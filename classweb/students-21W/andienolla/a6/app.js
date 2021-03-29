	
let paused = false
document.addEventListener('keyup', function(e){
	if(e.keyCode == 32){
		paused = !paused
	}
	if(e.keyCode == 78){
		sim.step()
	}
});  


let noise = new p5().noise
let sim = new Simulation()

document.addEventListener("DOMContentLoaded", function(){
	new Vue({
		el : "#app",
		template: `<div id="app">
			<simulation mode="timeless"/>
			<p>
			Welcome to the Rumor Mill! Let's take a look at how secret-sharing can be. 
			I decided to start out with a simple case, where time isn't considered as a factor. Once someone
			knows the secret, they know it for forever. They have some probability of passing the information on,
			but overall it's unlikely. 
			</p>
			
			<simulation mode="interest"/>
			<p>
			Something (thankfully) that is true for the rumor mill is that it moves fast-- people probably won't care about 
			whatever piece of gossip they're currently on for more than a few days. I wanted to exemplify this, so now once
			the simulation has been through a full round, everything resets as people lose interest in the secret. 
			</p>

			<simulation mode="messy"/>
			<p>
			Finally, I felt a little devious and decided to make a version where people are more likely to pass along what they 
			find out. Everyone starts to know everything and that is when the real drama begins. If I had more time I would add 
			a multi-secret mode, where people could have a level of juiciness to them depending on the amount of secrets they've 
			encountered. 
			</p>
		</div>`,
		
	}) 
})