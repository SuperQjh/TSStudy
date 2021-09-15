"use strict";
(function () {
    // 定义表示人的欸
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /*
          getter 方法用来读取属性
          setter 方法用来设置属性
                --他们被称为属性的读取器
        
        
        */
        // 定义一个方法来获取name属性
        // getName() {
        //   return this._name
        // }
        // // 定义方法，用来设置name属性
        // setName(value: string) {
        //   this._name = value
        // }
        // getAge(){
        //   return this._age
        // }
        // setAge(value: number) {
        //   if(value >= 0) {
        //     this._age = value
        //   } 
        // }
        // TS 中设置getter方法的方式
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const per = new Person('孙悟空', 18);
    /*
      现在属性是在对象中设置的，属性可以任意的被修改
        属性可以任意被修改会导致对象中的数据变得非常不安全
    
    */
    per.name = '猪八戒';
    per.age = 33;
    console.log(per);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(123);
    // B.num = 1
    class C {
        // 可以将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('xxx', 111);
    console.log(c);
})();
