const _ = require('lodash');

class AssetCache {
    constructor( settings = {} ) {
        /**
            Settings ideas: 
            storageType - session vs local
            cacheLogic - LRU, Random, etc.
            limit - the max number of items;
            stores - define the allowed store locations.
            execution - async vs sync.
        **/

        this.stores = [];
    }
    updateCache(cat, index, newItems) {
      
    }

    getItem( key = '' )
    {
        if(typeof key !== 'string') return this.errorReporting(key, 'string');
        return JSON.parse(sessionStorage.getItem( key )) || {}
    }

    addStore( storeName, type = [] )
    {

    }

    getStore( cat )
    {
        
    }

    setItem( key = '', item = '' )
    {

    }

    errorReporting( given, expected)
    {   
        return console.error(`Expected type ${ expected }, but got ${ typeof key }`)
    }
}

module.exports = AssetCache