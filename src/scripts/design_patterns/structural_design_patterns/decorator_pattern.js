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

