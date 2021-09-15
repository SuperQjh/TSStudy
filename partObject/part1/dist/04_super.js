"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('动物再叫');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            // 如果在子类中写了构造函数，在子类的构造函数中必须对父类的构造函数进行调用
            super(name); // 调用父类的构造函数
            this.age = age;
        }
        sayHello() {
            //在类的方法中 super就表示当前类的父类
            super.sayHello();
        }
    }
    const dog = new Dog('旺财', 5);
    console.log(dog.sayHello());
})();
