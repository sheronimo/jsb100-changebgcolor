const btn = document.querySelector('#button');
btn.addEventListener('click', changeBGColor);

const body = document.body;

// Colors array
const colors = [
	'coral',
	'slateblue',
	'darkslategray',
	'maroon',
	'midnightblue',
];

// Set initial background color
body.style.backgroundColor = colors[0];

let i = 0;

function changeBGColor() {
	i++;

	if (i >= colors.length) {
		i = 0;
	}

	body.style.backgroundColor = colors[i];
}
