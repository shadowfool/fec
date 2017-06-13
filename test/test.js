const assert = require('assert');
const Storage = require('../index.js');

let window = {};

window.sessionStorage = sessionStorage = require('./mockStorage');
window.localStorage = localStorage = require('./mockStorage');


describe('fec', () => {
    let Instance = null;

	describe('Constructor', () => {
		it('Should take a settings object and set valid properties on the class', () => {
	      let settingsObject = {
	      	storageType: 'session',
	      	limit: '50',
	      	stores: ["fruits, cars, langs"],
	      	async: false
	      },
	      Instance = new Storage( settingsObject );
        Instance.setItem('blue', 'green')
    })
	})

	describe('getItem', () => {
        it("Should get an item from storage if it's a string.", () => {

        })
	})

	describe('setItem', () => {
		
	})

	describe('getStore', () => {
		
	})

	describe('addStore', () => {
		
	})

	describe('errorReporting', () => {
		
	})
})