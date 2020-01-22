var p1 = new Promise((resolve, reject) => { 
  setTimeout(() => {
      console.log('In p1')
      resolve('p1_delayed_resolution')
    }, 1000); 
}); 

var p2 = new Promise((resolve, reject) => {
    console.log('In p2')
    setTimeout(() => {
        console.log('In p2')
        reject('p2_immediate_rejection');
      }, 2000);
});

Promise.all([
  p1//.catch(error => { return error }),
  ,p2.catch(error => { return error }),
]).then(values => { 
    console.log('In resolved then');
  console.log(values[0]) // "p1_delayed_resolution"
  console.log(values[1]) // "Error: p2_immediate_rejection"
}).catch(values => {
    console.log('In catch')
})