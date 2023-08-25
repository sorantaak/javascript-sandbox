const post = {
	id: 1,
	title: 'Psot One',
	body: 'This is the body',
};

//Conver to JSON String
const str = JSON.stringify(post);
console.log(str.id);

// Parse JSON
const obj = JSON.parse(str);
console.log(obj.id);

const posts = [
	{
		id: 1,
		title: 'Psot One',
		body: 'This is the body',
	},
	{
		id: 2,
		title: 'Psot Two',
		body: 'This is the body',
	},
];
const str2 = JSON.stringify(posts);
console.log(str2);
