# App.js

AppView = Backbone.View.extend
  initialize: () ->
    alert 'Initialized!'

$ ->
  new AppView
