// array of shape image file names (assets/images/shapes)
const about = ['pentagon', 'circle', 'square'];

// Looping twice (two sections: head, about) - sections we need to place shapes to
for (let x = 0; x < 2; x++) {
	// Looping through each shape image file
	about.forEach(shapeImg => {
		// Looping to generate several shapes of the same form
		for (var i = 0; i < getRandomNumber(2, 3); i++) {
			var shape = document.createElement('img');
			shape.className = 'bg-shape';
			// IF x == 0 We're in Head section 
			// ELSE We're in About section
			shape.src = `assets/images/shapes/${!x ? shapeImg : shapeImg+'-grey'}.svg`;
			let section = !x ? 'head' : 'about';
			document.getElementById(section).appendChild(shape);


			// get the dimensions of section
			var sectionWidth = document.getElementById(section).offsetWidth;
			var sectionHeight = document.getElementById(section).offsetHeight;

			// create random Number
			randomTop = getRandomNumber(0, section==="head"?sectionHeight-150:sectionHeight);
			randomLeft = getRandomNumber(0, sectionWidth);
			randomSize = getRandomNumber(30, 80);
			randomRotate = getRandomNumber(0, 360);
			// update style properties
			shape.style.top = randomTop + "px";
			shape.style.left = randomLeft + "px";
			shape.style.width = randomSize + "px";
			shape.style.height = randomSize + "px";
			shape.style.transform = `rotate(${randomRotate}deg)`;
		}
	})
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
	return Math.random() * (max - min) + min;
}
// generate shapes on lending
generateShapes();

// toggler that delays frequent shape regeneration
let toggleShapesGeneration = true;

window.addEventListener('resize', function() {
	const shapes = document.getElementsByClassName('bg-shape');
	
	if(toggleShapesGeneration){
		// toggle to delay shape regeneration
		toggleShapesGeneration = !toggleShapesGeneration
		// remove all previous shapes
		while(shapes.length > 0){
			shapes[0].parentNode.removeChild(shapes[0]);
		}
		// generate new shapes
		generateShapes();
		// allow shape regeneration 
		setTimeout(() => {
			toggleShapesGeneration = !toggleShapesGeneration
		}, 500);
	};
}, true);
