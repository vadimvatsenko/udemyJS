'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }// ; - не ставится

    calcArea() {// метод класса
        return this.height * this.width;
    }
} 

class ColoredRectangleWithText extends Rectangle { // наследует свойства от Rectangle 
    constructor(height, width, text, bgColor) {
        super(height, width); // вызывает конструктор родителя Rectangle
        //и должен быть на первом месте,
        // можно не все передавать в super
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Высота: ${this.height}, Ширина: ${this.width}, Текст: ${this.text}, Фон: ${this.bgColor}`);//Высота: 25, Ширина: 30, Текст: Hi Iro4ka, Фон: tomato
    }
} 

const div = new ColoredRectangleWithText(25, 30, 'Hi Iro4ka', 'tomato');
div.showMyProps();
console.log(div.calcArea());//750

const square = new Rectangle(10, 10);
const square2 = new Rectangle(15, 30);

console.log(square2);//Rectangle { height: 15, width: 30 }

console.log(square2.calcArea());//450


console.log(square);//Rectangle { height: 10, width: 10 }

console.log(square.calcArea());//100