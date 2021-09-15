"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物在叫~~');
        }
    }
    /*
      Dog extends Animal
        -此时，Animal被称为父类，Dog被称为子类
        -使用继承后，子类会继承父类所有的方法和属性
  
        -如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类
            这种覆盖掉父类方法的形式，我们称为方法的重写
    
    */
    class Dog extends Animal {
        run() {
            console.log(`${this.name}再跑~~`);
        }
        sayHello() {
            console.log('汪汪汪~~');
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log('喵喵喵~~');
        }
    }
    const dog = new Dog('旺财', 5);
    const cat = new Cat('咪咪', 3);
    console.log(dog);
    dog.run();
    console.log(cat);
    cat.sayHello();
})();
