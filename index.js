/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-octicons',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/octicons/lib/octicons.css');
  }
};
