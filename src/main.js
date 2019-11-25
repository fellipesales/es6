
const minhaPromisse = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK')
    }, 2000);
});

async function execPromisse(){
    const response = await minhaPromisse();

    console.log(response);
}

execPromisse();



function base(x){
    return function produto(y){
        return x * y;
    }
}

var f = base(2);
var g = base(-1);



function funX(n) {
    if (n == 1) {
        return (n);
    }
    return ((n - 1) * funX(n - 1));
}



console.log(funX(6));

console.log(f(3) + g(-1));