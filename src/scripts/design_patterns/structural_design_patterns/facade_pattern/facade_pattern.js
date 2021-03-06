var Task = function(data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

var TaskService = function() {
    return {
        complete: function(task) {
            task.completed = true;
            console.log('completing task: ' + task.name);
        },
        setCompleteDate: function(task) {
            task.completedDate = new Date();
            console.log(task.name + ' completed on ' + task.completedDate);
        },
        notifyCompletion: function(task, user) {
            console.log('Notifying ' + user + ' of the completion of ' + task.name);
        },
        save: function(task) {
            console.log('saving task ' + task.name);
        }
    }
}();

var myTask = new Task({
    name: 'MyTask',
    priority: 1,
    project: 'Courses',
    user: 'Jon',
    completed: false
});

console.log(myTask);

/* Clumsy code and not using facade pattern */
TaskService.complete(myTask);
if(myTask.completed == true) {
    TaskService.setCompleteDate(myTask);
    TaskService.notifyCompletion(myTask, myTask.user);
    TaskService.save(myTask);
}

/* Using facade pattern */
var TaskServiceWrapper = function() {
    var completeAndNotify = function(task) {
        TaskService.complete(task);
        if(myTask.completed == true) {
            TaskService.setCompleteDate(task);
            TaskService.notifyCompletion(task, task.user);
            TaskService.save(task);
        }
    }

    return {
        completeAndNotify: completeAndNotify
    }
}();

TaskServiceWrapper.completeAndNotify(myTask);

console.log(myTask);
