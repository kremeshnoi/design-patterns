/*

	The Factory pattern is another creational pattern
	concerned with the notion of creating objects.
	Where it differs from the other patterns in its category
	is that it doesn't explicitly require us to use a constructor.
	Instead, a Factory can provide a generic interface for creating objects,
	where we can specify the type of factory object we wish to be created.

 */

class SimpleMembership {
	constructor(name) {
		this.name = name
		this.cost = 50
	}
}

class PremiumMembership {
	constructor(name) {
		this.name = name
		this.cost = 150
	}
}

class MemberFactory {
	static list = {
		simple: SimpleMembership,
		premium: PremiumMembership
	}

	create(name, type = "simple") {
		const Membership = MemberFactory.list[type] || MemberFactory.list.simple
		const member = new Membership(name)
		member.type = type
		member.define = function () {
			console.log(`${ this.name } (${ this.type }): ${ this.cost }`)
		}

		return member
	}
}

const factory = new MemberFactory()

const members = [
	factory.create("Elise", "simple"),
	factory.create("Diana", "premium")
]

members.forEach(m => m.define())
