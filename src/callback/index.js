function sum(num1, num2) {
    return num1 + num2;
}

function execSum(num1, num2, execSum) {
    return execSum(num1, num2);
}

console.log(execSum(2, 3, sum));

function callback() {
    console.log('I am a callback');
}
 function execCallback(callback) {
    setTimeout(() => {
        callback();
        console.log('Log after 2s')
    }, 2000);
}
execCallback(callback);