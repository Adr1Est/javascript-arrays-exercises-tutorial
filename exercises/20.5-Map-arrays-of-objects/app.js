let people = [
	{ name: 'Joe', birthDate: new Date(1986, 10, 24) },
	{ name: 'Bob', birthDate: new Date(1975, 5, 24) },
	{ name: 'Erika', birthDate: new Date(1989, 6, 12) },
	{ name: 'Dylan', birthDate: new Date(1999, 12, 14) },
	{ name: 'Steve', birthDate: new Date(2003, 4, 24) }
];

let simplifier = function (person) {
	// Your code here
	let hoy = new Date();
	let age = hoy.getFullYear() - person.birthDate.getFullYear();
	let m = hoy.getMonth() - person.birthDate.getMonth();
	if (m < 0 || (m === 0 && hoy.getDate() < person.birthDate.getDate())) {
		age--;
	}

	let string = "Hello, my name is " + person.name + " and I am " + age + " years old";
	return string;
};

console.log(people.map(simplifier));
