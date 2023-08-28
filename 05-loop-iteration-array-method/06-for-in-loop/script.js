const color = {
	color1: 'red',
	color2: 'blue',
	color3: 'orange',
	color4: 'green',
};

for (const key in color) {
	console.log(key, color[key]);
}

const colorArray = ['red', 'green', 'blue', 'yellow'];

for (const key in colorArray) {
	console.log(key, colorArray[key]);
}
