 const promise = new Promise((resolve, reject) => {
    resolve('hey');
 });

 const cows = 10;
 const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve('There are too many cows');
    } else {
        reject('There are not enough cows');
    }
 });

 countCows.then((result) => {
    console.log(result);
 }).catch((error) => {
    console.log(error);
 }).finally(() => {
    console.log('Promise finished');
 });