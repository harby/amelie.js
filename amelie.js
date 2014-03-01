var delegateEventSplitter = /^(\S+)\s*(.*)$/;

var delegateEvents = function(obj) {

  if (obj.events !== undefined) {
    var $el = $(obj.el || document);

    for (var key in obj.events) {
      var match = key.match(delegateEventSplitter);
      var eventName = match[1], selector = match[2];
      var method = obj[obj.events[key]];

      if (selector === '') {
        $el.on(eventName, method);
      } else {
        $el.on(eventName, selector, method);
      }
    }
  }
};

function Amelie() {}

Amelie.extend = function(obj) {
  delegateEvents(obj);

  if (obj.initialize !== undefined) {
    obj.initialize();
  }
  return $.extend({}, obj, Class);
};
