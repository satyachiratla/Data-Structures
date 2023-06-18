const countDown = (num) => {
    if (num === 0) {
        console.log('All Done!')
        return;
    }
    console.log(num);  // print 5
    num--;             // decrement 4
    countDown(num)     // calls the function again countDown(4)  --- Repeats
}

console.log(countDown(5));