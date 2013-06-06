(function() {
  var AppView;

  AppView = Backbone.View.extend({
    initialize: function() {
      return alert('Initialized!');
    }
  });

  $(function() {
    return new AppView;
  });

}).call(this);
