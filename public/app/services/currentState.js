angular.module('vestid').service('prevState', ['$location',function($location){
	this.newUrl = []
	let service = this

	this.parseState = (url) => {
		let parsedUrl = url.replace(/#!\//, '')
		service.newUrl.splice(0, 1, parsedUrl);
	}
	
}]);