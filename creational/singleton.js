// It is used when we need an object in a SINGLE INSTANCE !!!

class Database {
	constructor(data) {
		/*

			The key part.
			Checking if the database is running to prevent "restarting" etc. (creating a new instance).

		*/
		if (Database.exist) return Database.instance;

		// and only then...
		Database.instance = this;
		Database.exist = true;
		this.data = data;
	}

	getData() {
		return this.data;
	}
}

const mongo = new Database('MongoDB');
console.log(mongo.getData());

const mysql = new Database('MySQL');
console.log(mysql.getData());
