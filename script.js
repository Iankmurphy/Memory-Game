const gameContainer = document.getElementById('game');

const COLORS = [ 'red', 'blue', 'green', 'orange', 'purple', 'red', 'blue', 'green', 'orange', 'purple' ];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
	let counter = array.length;

	// While there are elements in the array
	while (counter > 0) {
		// Pick a random index
		let index = Math.floor(Math.random() * counter);

		// Decrease counter by 1
		counter--;

		// And swap the last element with it
		let temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}

	return array;
}

let shuffledColors = shuffle(COLORS);
let numCards = [];

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
	for (i = 0; i < colorArray.length; i++) {
		// create a new div
		const newDiv = document.createElement('div');

		// give it a class attribute for the value we are looping over
		newDiv.classList.add(colorArray[i]);
		newDiv.setAttribute('id', i);

		// call a function handleCardClick when a div is clicked on
		newDiv.addEventListener('click', handleCardClick);

		// append the div to the element with an id of game
		gameContainer.append(newDiv);
	}
}
let prevID = 0;
let prevColor = '';
let anus = 0;

// TODO: Implement this function!
function handleCardClick(event) {
	// you can use event.target to see which element was clicked
	if (event.target.style.backgroundColor !== '' || anus === 1) {
		return;
	}

	if (prevID === 0) {
		clearInterval();
		event.target.style.backgroundColor = event.target.classList[0];
		console.log(numCards);
		console.log('lawl');
		prevColor = event.target.classList[0];
		prevID = event.target.id;
		console.log(prevID);
	} else if (prevColor === event.target.classList[0]) {
		event.target.style.backgroundColor = event.target.classList[0];
		console.log('tits');
		prevID = 0;
		prevColor = '';
		return;
	} else if (prevColor !== event.target.classList[0]) {
		event.target.style.backgroundColor = event.target.classList[0];
		console.log('ass');
		anus = 1;
		setTimeout(() => {
			event.target.style.backgroundColor = '';
			document.getElementById(prevID).style.backgroundColor = '';
			prevID = 0;
			anus = 0;
		}, 1000);
		prevColor = event.target.classList[0];
	}
}

// when the DOM loads
createDivsForColors(shuffledColors);
