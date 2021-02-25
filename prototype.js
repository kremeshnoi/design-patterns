/*

	The GoF refer to the prototype pattern
	as one which creates objects based on a template
	of an existing object through cloning.

 */

const invoice = {
	salary: "800$",

	init() {
		console.log(`${ this.name }: monthly salary is ${ this.salary }`)
	}
}

const personSalary = Object.create(invoice, {
	name: {
		value: "Alex"
	}
})

personSalary.init()
