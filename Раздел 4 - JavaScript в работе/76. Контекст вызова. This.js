"use strict";

function showThis() {
    console.log(this);//если без строго режима, то ссылается на window, если строгий режим underfined
}
showThis();
//

function showThis2(a, b) {
    console.log(this);
    function sum(sum) {
        console.log(this)
        return a + b
    };
    console.log(sum());
};

showThis2(5, 7);
//

const obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);// вызывает сам обьект { a: 20, b: 15, sum: [Function: sum] }
    }
};

obj.sum();
//

function User(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.hello = function () {
        console.log('hello' + this.name );
    }
}

let vadym = new User('Vadym', 37);
console.log(vadym);

//
function sayName(surnmae) {
    console.log(this);//{ name: 'Vadym' }
    console.log(this.name + surnmae);//Vadym
};

const user = {
    name: 'Vadym'
};

sayName.call(user, 'Vatsenko'); // разница в синтаксе между call и apply
sayName.apply(user, ['Vatsenko']);
//

function count(num) {
    return this * num;
}
const double = count.bind(2);

console.log(double(3));//6
console.log(double(15));//30


//1) Обычная функция: this = window, но если use strict - undefined
//2) Контекст у методов обьекта - сам обьект
//3) this в конструкторах и классах - это новый экземпляр обьекта
//4) Ручная привязка this: call, apply, bind,



