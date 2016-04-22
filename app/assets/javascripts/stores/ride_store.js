(function(root) {
  'use strict';

  var CHANGE_EVENT = "rides_changed";

  var _rides = [];

  var resetRides = function (rides) {
    _rides = rides;
  };

  root.RideStore = $.extend({}, EventEmitter.prototype, {
    all : function () {
      return _rides.slice();
    },

    addChangeListener : function (callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener : function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId : AppDispatcher.register(function(action){
      switch (action.actionType) {
        case RideConstants.RIDES_RECEIVED:
          resetRides(action.rides);
          root.RideStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

}(this));
