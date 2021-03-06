import Backbone from 'backbone';
import $ from 'jquery'


export const RadioModel = Backbone.Model.extend({
})

export const RadioCollectionOne = Backbone.Collection.extend({
	initialize: function(){
	},

	parse: function(serverRes){
		// console.log(serverRes)
		let outputArrayObjOne = []

		for (var artistProp in serverRes.playlist) {
					let artistArray = serverRes.playlist[artistProp]

					artistArray.forEach(function(artistObj){
						// console.log(artistObj)
						outputArrayObjOne.push(artistObj)
						// console.log(outputArrayObjOne)
					})
					// console.log(outputArrayObjOne)
		}
		return outputArrayObjOne
	},
	url: '/proxy?api=http://www.bbc.co.uk/radio1/playlist.json',
	model: RadioModel
})



export const RadioCollectionTwo = Backbone.Collection.extend({
	initialize: function(){
	},

	parse: function(serverRes){
		// console.log(serverRes)
		let outputArrayObjTwo = []

		for (var artistProp in serverRes.playlist) {
					let artistArray = serverRes.playlist[artistProp]

					artistArray.forEach(function(artistObj){
						// console.log(artistObj)
						outputArrayObjTwo.push(artistObj)
						// console.log(outputArrayObjTwo)
					})
		}
		return outputArrayObjTwo
		// console.log(outputArrayObjTwo)
	},
	url: '/proxy?api=http://www.bbc.co.uk/radio2/playlist.json',
	model: RadioModel
})

export const RadioCollectionIntro = Backbone.Collection.extend({
	initialize: function(){
	},
	parse: function(serverRes){
		// console.log(serverRes)
		return serverRes.playlist.introducing
	},
	url: '/proxy?api=http://www.bbc.co.uk/radio1/playlist.json',
	model: RadioModel
})
