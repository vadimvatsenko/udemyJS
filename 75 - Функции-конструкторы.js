const numb = new Number(3);
console.log(numb);
//
function User(name, id, gender) {//функция конструктор
    this.name = name;
    this.id = id;
    this.gender = gender;
    this.human = true;
    this.message = function () {
        console.log(`My name is ${this.name}, i am ${this.id}`);
    };

}

User.prototype.exit = function () {// используем прототип User если конструктор нельзя менять
    console.log(`User ${this.name} is gone`);
};

const vadym = new User('Vadym', 38, 'mail');
const iro4ka = new User('Irina', 28, 'female');

vadym.exit();//User Vadym is gone
iro4ka.exit();//User Irina is gone

vadym.message();//My name is Vadym, i am 38
iro4ka.message();//My name is Irina, i am 28

console.log(vadym, iro4ka);