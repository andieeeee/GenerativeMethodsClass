Vue.component("simulation", {
	template: `
	<div class="simulation">
		Rumor Mill ({{mode}} mode)
		
		<!-- Draw the grid, and optionally specify the size -->
		<grid-p5 :sim="sim" :size="20" />

		<div class="controls">
			<div style="display:inline-block;padding:4px" v-for="power,emoji in sim.emojiPower">{{emoji}}:{{power}}</div>
			<button class="emoji-button" @click="sim.randomize()">reset</button>
			<button class="emoji-button" @click="sim.step()">step</button>
			<button class="emoji-button" @click="sim.isPaused=!sim.isPaused">{{sim.isPaused?"play":"pause"}}</button>
		</div>
	</div>
	`,
	mounted() {

		// Handle updating this simulation
		let count = 0
		setInterval(() => {
			if (count < 50000 && !this.sim.isPaused ) {

				this.sim.step()
			}
			count++
		}, 20)
	},
	
	props:["mode"],

	data() {
		return {
			sim: new Simulation(this.mode)
		}
	}


})