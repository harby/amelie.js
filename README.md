Amelie.JS
=========

Minimalistic lib for organising Javascript code in your applications.

Syntax
=========

```
var MyApp = Amelie.extend({

  // If el exists, binds the events to el, otherwise to document
  el: '.my-class',
  
  // 'eventType selector': 'callback function'
  events: {
    'click .hello': 'helloClicked'
  },
  
  // Automatically initialized upon literal creation
  initialize: function() {
    this.sayHello();
  },
  
  //Sample Method
  sayHello: function() {
    alert('Hello');
  },
  
  // Callback Function
  helloClicked: function(e) {
    e.preventDefault();
    alert('Hello Clicked');
  }
  
});

```

Example
=========

```
var Pages = Amelie.extend();

var Homepage = Page.extend({
  modal: {},

  el: '.homepage',
  
  events: {
    'click .homepageModal': 'triggerModal'
  },
  
  initialize: {
    this.modal = new Modal();
  },
  
  triggerModal: function(e) {
    e.preventDefault(e);
    this.modal.open();
  }
});

```
    
