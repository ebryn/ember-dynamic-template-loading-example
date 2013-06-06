function loadTemplate(name) {
  if (Ember.TEMPLATES[name]) { return; } // Don't load templates we've already loaded

  $.ajax("/assets/templates/" + name + ".js", {
    async: false
  }).then(function(data) {
    eval(data);
    console.log("Finished loading " + name + ". Current loaded templates: " + Object.keys(Ember.TEMPLATES).join(', '));
  });
}

App.SomewhereElseRoute = Ember.Route.extend({
  activate: function() {
    console.log("Current loaded templates: " + Object.keys(Ember.TEMPLATES).join(', '));
    loadTemplate('somewhere_else');
  }
});