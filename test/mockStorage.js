const _ = require('lodash');

class mockStorage
{
  constructor()
  {
    this.store = {};
  }

  setItem( key = '', val = '' )
  {
    this.store[ key ] = val;
  }

  getItem( key = '' )
  {
    return this.store[ key ] || '';
  }

  removeItem( key = '' )
  {

  }

  clear()
  {
    _.forEach( this.store, key => {
      delete this.store[ key ]
    })
  }
}

module.exports = new mockStorage();
