const _ = require('lodash');
let validSettings = ['stores', 'cacheLogic', 'limit', 'execution', 'storageType']

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
        this.cacheLogic ='';
        this.limit = 50;
        this.execution = 'sync'
    }
    updateCache(cat, index, newItems) {
      
    }

    getItem( key = '' )
    {
        if(typeof key !== 'string') return this.errorReporting(key, 'string');
        let item = sessionStorage.getItem( key )
        if(isValidJSONString(item)) return JSON.parse(item);
        return item;
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

    isValidJSONString( string )
    {
      try
      {
         JSON.parse( string )
      } 
      catch(e)
      {
        return false
      } 
      return true;
    }

    isValidJSONObject( object )
    {
      try
      {
         JSON.stringify( object )
      } 
      catch(e)
      {
        return false
      } 
      return true;
    }

    errorReporting( given, expected)
    {   
        return console.error(`Expected type ${ expected }, but got ${ typeof key }`)
    }
}

module.exports = AssetCache