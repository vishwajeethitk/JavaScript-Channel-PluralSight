function asyncMethod(message) {
    return new Promise(function(resolve, reject) {
        //console.log('p1');
        setTimeout(function() {
            //console.log(message);
            resolve(message);
        }, 500);
    });
}

async function logInOrder(urls) {
    // fetch all the URLs in parallel
    const textPromises = urls.map(async url => {
      const response = await asyncMethod(url);
      return response.text();
    });
  
    // log them in sequence
    for (const textPromise of textPromises) {
      console.log(await textPromise);
    }
  }

  logInOrder(['one', 'two', 'three', 'four', 'five']);