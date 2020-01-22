function *process() {
    let id = 7000;

    while(true) {
        yield (id++);
    }
}

//  let it = process();
//  console.log(it);
// console.log(it.next());
// console.log(it.next().value);

for(let id of process()) {
    if(id > 7002) break;
    console.log(id);
}