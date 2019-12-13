var repo = function() {
    return {
        get: function(id) {
            console.log("Getting task " + id);
            return {
                name: "new task from db"
            }
        },
        
        save: function(task) {
            console.log("Saving " + task.name + " to db");
        }
    }
}

module.exports = repo();