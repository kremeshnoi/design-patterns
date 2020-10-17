const invoice = {
	salary: '800$',

	init() {
		console.log(`${ this.name }: monthly salary is ${ this.salary }`);
	}
}

const personSalary = Object.create(invoice, {
	name: {
		value: 'Alex'
	}
})

personSalary.init();
