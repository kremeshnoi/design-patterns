/*

	Adapters basically allow objects or classes to function together
	which normally couldn't due to their incompatible interfaces.
	The adapter translates calls to its interface into calls
	to the original interface and the code required
	to achieve this is usually quite minimal.

*/

class OldCalc {
	operations(t1, t2, operation) {
		switch (operation) {
			case "add": return t1 + t2
			case "sub": return t1 - t2
			default: return NaN
		}
	}
}

class NewCalc {
	add(t1, t2) {
		return t1 + t2
	}

	sub(t1, t2) {
		return t1 - t2
	}
}

class CalcAdapter {
	constructor() {
		this.calc = new NewCalc()
	}

	operations(t1, t2, operation) {
		switch (operation) {
			case "add": return this.calc.add(t1, t2)
			case "sub": return this.calc.sub(t1, t2)
			default: return NaN
		}
	}
}

const oldCalc = new OldCalc()
console.log(oldCalc.operations(10, 30, "add"))

const newCalc = new NewCalc()
console.log(newCalc.add(40, 5))

const calcAdapter = new CalcAdapter()
console.log(calcAdapter.operations(25,10, "sub"))
