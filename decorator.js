/*

	Classically, Decorators offered the ability to add behaviour
	to existing classes in a system dynamically. The idea was that
	the decoration itself wasn"t essential to the base functionality
	of the class, otherwise it would be baked into the superclass itself.

 */

class Server {
	constructor(ip, port) {
		this.ip = ip
		this.port = port
	}

	get url() {
		return `https://${ this.ip }: ${ this.port }`
	}
}

function aws(server) {
	server.isAWS = true
	server.awsInfo = function () {
		return server.url
	}

	return server
}

function azure(server) {
	server.isAzure = true
	server.azureInfo = function () {
		return server.url
	}

	return server
}

const s1 = aws(new Server("12.43.34.22", 8080))
console.log(`AWS: ${ s1.isAWS },`, `url: ${ s1.awsInfo() }`)

const s2 = azure(new Server("12.24.44.60", 8081))
console.log(`Azure: ${ s2.isAzure },`, `url: ${ s2.azureInfo() }`)
