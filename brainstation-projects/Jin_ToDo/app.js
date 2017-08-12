var app = angular.module('todoApp', []);
​
function TodoCtrl() {
  this.todos = [
    {text: 'learn angular', done: false},
    {text: 'write the content for the next module', done: false},
    {text: 'buy cheese', done: true}
  ];
  
  this.filters = [
    {label: 'All', showTodo: function(todo) {return true;}},
    {label: 'Active', showTodo: function(todo) {return !todo.done;}},
    {label: 'Complete', showTodo: function(todo) {return todo.done;}}
  ]
  
  this.filter = this.filters[0];
}
​
var prototype = TodoCtrl.prototype;
​
prototype.addTodo = function(text) {
  var todo = {text: text, done: false};
  this.todos.push(todo);
}
​
prototype.clearComplete = function() {
  for (i = 0; i < this.todos.length; i++) {
    if (this.todos[i].done) {
      this.todos.splice(i, 1);
    }
  }
}
​
​
app.controller('TodoCtrl', TodoCtrl);