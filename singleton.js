/*

	Classically, the Singleton pattern can be implemented
	by creating a class with a method that creates a new instance
	of the class if one doesn"t exist. In the event of an instance
	already existing, it simply returns a reference to that object.

 */

class Database {
	constructor(data) {
		if (Database.exist) return Database.instance
		Database.instance = this
		Database.exist = true
		this.data = data
	}

	getData() {
		return this.data
	}
}

const mongo = new Database("MongoDB")
console.log(mongo.getData())

const mysql = new Database("MySQL")
console.log(mysql.getData())
