var Task = function(name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function() {
    console.log('Completing task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function() {
    console.log('Saving task: '+ this.name);
}

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

/* Decorator pattern implemented below */
var UrgentTask = function(name, priority) {
    Task.call(this, name);
    this.priority = priority;
}

UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function() {
    console.log('notifying important people');
}

UrgentTask.prototype.save = function() {
    this.notify();
    console.log('do special stuff before saving');
    Task.prototype.save.call(this);
}

var urgentTask = new UrgentTask('This is urgent', 1);

urgentTask.complete();
urgentTask.save();
console.log(urgentTask);