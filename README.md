Todo List App
=============

## Overview

This is a small test app time boxed to an hour to be used in candidate screening. UserTesting.com is interested to see how a candidate works to develop a simple application utilizing some of the technology we use at UserTesting.com. Completion of the full requirements is not required if time box is reached.

Items we are looking to see accomplished:

1. Javascript: A To-Do app that
  * Allows creation of simple list items
  * Ability to toggle done/not-done items
  * Ability to destroy items
2. CSS/HTML: A To-Do app that
  * Utilizes HTML5 markup where needed
  * Utilizes CSS3 techniques to make things pretty without graphics
3. Bonus points if you can test your JavaScript

## Getting Started

### Requirements

1. Ruby 2.0.0 installed (uses RVM)
2. Knowledge or at least familiarity of
  * Haml
  * SCSS (Compass helped)
  * Coffeescript
  * Backbone.js
  * Handlebars.js or another JavaScript template language

### Up and Running

To get going, go through these steps in terminal

1. Fork this repository to your GitHub
2. `bundle`
3. `bundle execute guard`
4. In another process, `shotgun --browse app.rb`

### Next steps

1. Include the scripts partial `partial(:'_scripts')` where you believe it should go
2. Coffeescripts are located in `assets/coffeescripts`
  * Since this is a small app, we should only need one js file
3. SCSS files are located in `assets/scss`

## Using Handlebars

UserTesting.com currently uses Handlebars.js for its template engine. More info here: [Handlebars Docs](http://handlebarsjs.com/)

### Example script to include for a template

Since this is not a Rails app to utilize the asset pipeline, we will include the templates in line on the page.

```
%script{id: 'MYTEMPLATE', type: 'text/x-handlebars-template'}
  {{name}}
```

### Utilizing a template in Backbone

Including and using a template in backbone is straight forward, in your Backbone view, grab the html of the template on the page and compile it through handlebars.

_The following is in coffeescript syntax._

```
...

template: Handlebars.compile($('MYTEMPLATE').html())

render: () ->
  data = {name: 'Usertesting.com'}
  html = @template(data)

...
```
