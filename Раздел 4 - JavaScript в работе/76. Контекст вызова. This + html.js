const btn = document.querySelector('button');

btn.addEventListener('click', function () {// в обработчике событий если используется function () мы имеем доступ к this
    // если используем стрелочную функцию => то не имеем доступ к this
    
    console.log(this)//button при таком вызове функции
    this.style.backgroundColor = 'yellow';
});
// 
btn.addEventListener('click', (e) => {
    e.target.style.borderColor = 'red'
});

//у стрелочной функции нет своего контекста вызова

const obj = {
    numb: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this)//{ numb: 5, sayNumber: [Function: sayNumber] }
            // у стрелочной функции нет своего контекста вызова, по-этому она берет его у своего родителя
            // поэтому console.log(this) ссылается на obj
            console.log(this.numb);//5
        };
        say();
    }
};
obj.sayNumber();
//

const double = a => a * 2;
console.log(double(4));//8
//
const calc = (a, b) => a * b + b - a;
console.log(calc(10, 13));//133
//

