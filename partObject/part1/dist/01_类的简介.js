"use strict";
// 使用class关键字来定义一个类
/*
*   对象中主要包含了两个方法
*   属性
*   方法
*/
class Person {
    constructor() {
        /*
              直接定义的属性是实例属性，需要通过对象的实例去访问:
              const per = new Person();
              per.name
      
              使用static 开头的属性是静态属性（类属性），可以通过类直接访问：
              Person.name
      
              readonly开头的属性表示一个只读的属性，无法修改
         */
        // 定义实例属性
        // readonly name: string = '孙悟空';
        // static readonly age: number = 18;
        this.name = '孙悟空';
        this.age = 18;
    }
    /*
    
      定义方法
      如果方法以static开头则是类方法，可以通过类来调用
    
    */
    sayHello() {
        console.log('hello');
    }
}
const per = new Person();
console.log(per.name);
// per.name = 'tom';
// console.log(per.name);
per.sayHello();
