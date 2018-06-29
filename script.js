const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
context.fillStyle = 'rgb(0, 100, 190)';
context.fillRect(0, 0, canvas.width, canvas.height);


const FPS = 60;
const FRAME_DELAY = 1000 / FPS;

class Hero {
	constructor() {
		this.width = 20;
		this.height = 40;
		this.globalPositionX = ~~((canvas.width - this.width) / 2);
		this.globalPositionY = ~~((canvas.height - this.height) / 2);
		this.image = {
			src: 'TODO?.png',
			position: 'TODO?.png',
		};

		this.drawHero();
		this.x = true;
	}

	drawHero() {
		if (this.x) {
			this.x = false;
			console.log('Hello world!');
		}
	}
}

const hero = new Hero();

function tick() {
	hero.drawHero();
	setTimeout(tick, FRAME_DELAY);
}

tick();
