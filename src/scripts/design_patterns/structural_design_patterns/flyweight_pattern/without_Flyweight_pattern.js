var Task = function(data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
}

function TaskCollection() {
    var tasks = {};
    var count = 0;
    var add = function(data) {
        tasks[data.name] = new Task(data);
        count++;
    };

    var get = function(name) {
        return tasks[name];
    };

    var getCount = function() {
        return count;
    };

    return {
        add: add,
        get: get,
        getCount: getCount
    }
}

var tasks = new TaskCollection();

var projects = ['none', 'courses', 'training', 'project'];
var priorities = [1, 2, 3, 4, 5];
var users = ['Jon', 'Erica', 'Amanda', 'Nathan'];
var completed = [true, false];

var initialMemory = process.memoryUsage().heapUsed;

for(var i=0; i<100000; i++) {
    tasks.add({
        name: 'task' + i,
        priority: priorities[Math.floor(Math.random() * 5)],
        project: projects[Math.floor(Math.random() * 5)],
        user: users[Math.floor(Math.random() * 4)],
        completed: completed[Math.floor(Math.random() * 2)]
    });
};

var afterMemory = process.memoryUsage().heapUsed;
console.log('used memory ' + (afterMemory - initialMemory) / 1000000);
console.log('tasks: ' + tasks.getCount());