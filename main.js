const audio = document.querySelector(".audio");
const sliceDiv = document.querySelector('.slice');
const gridX = 30, gridY = 20;
const w = sliceDiv.offsetWidth, h = sliceDiv.offsetHeight;
const img = document.querySelectorAll('.slice img')[0].src;
const delay = 0;

const gunClick = () => {
   playAudio();
	setTimeout(() => specialEffects(), 2640);
	setTimeout(() => {
		window.location.assign("https://kirito130.github.io/Entry-Animation/");
	}, 8000);
}

const playAudio = () => {
	audio.currentTime = 1;
	audio.play();
	setInterval(() => {
		if(audio.currentTime>5){
			audio.pause();
		}
	},1000);
}

const Slice = function() {
   this.create = () => {
      for (i = 0; i < gridX; i++) {
         for (j = 0; j < gridY; j++) {
            const width = i * w / gridX;
            const height = j * h / gridY;
            const div = document.createElement("div");
            document.querySelector('.slice').appendChild(div);
            div.className = `div${i+j}`;
            div.style.left = `${width}px`;
            div.style.top = `${height}px`;
            div.style.width = `${w/gridX}px`;
            div.style.height = `${h/gridY}px`;
            div.style.backgroundImage = "url(" + img + ")";
            div.style.backgroundPosition = `-${width}px -${height}px`;
            div.style.backgroundSize = `${w}px`;
         }
      }
   }

	this.create();
}

const specialEffects = () => {
	let a = 0;
	const interval1 = setInterval(() => {
		if(a > gridX+gridY) {
			clearInterval(interval1);
		} else {
			$(`.div${a}`).fadeIn(1000, "linear")
			$(`.div${a}`).css({"animation-name": "trans", "animation-duration": "2s"})
			a++;
		}
	}, delay);
}

window.onload = () => {
	const slice = new Slice();
};
