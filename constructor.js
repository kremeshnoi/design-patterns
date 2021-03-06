/*

	Object constructors are used to create specific types
	of objects - both preparing the object for use and accepting
	arguments which a constructor can use to set the values of member
	properties and methods when the object is first created.

 */

// ES5

function ServerES5(name, ip) {
	this.name = name
	this.ip = ip
}

ServerES5.prototype.getUrl = function () {
	return `${ this.name } - https://${ this.ip }:80`
}

const aws = new ServerES5("AWS Ukraine", "8.800.555.35.35")
console.log(aws.getUrl())

// ES6

class ServerES6 {
	constructor(name, ip) {
		this.name = name
		this.ip = ip
	}

	getUrl() {
		return `${ this.name } - https://${ this.ip }:80`
	}
}

const azure = new ServerES6("Azure Ukraine", "8.800.555.35.35")
console.log(azure.getUrl())
