class Pet{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} eats food.`);
    }
}
class Dog extends Pet{
    bark(){
        console.log(`${this.name} whoofs!`)
    }
    eat(){
        console.log(`${this.name} eats dog food.`);
    }
}
class Cat extends Pet{
    constructor(name, age, color = 'grey'){
        super(name,age);
        this.color = color;
    }
    meow(){
        console.log(`${this.name} meeowwws!`)
    }
}