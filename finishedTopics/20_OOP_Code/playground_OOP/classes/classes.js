// Classes are the better syntax to create object contructors
// Classes allow the creation of constructors without needing to break up the object creation and separately adding the methods afterward

class Color {
  constructor(r, g, b, name = "colorname"){
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  greet(){
    console.log(`Hello from ${this.name}!`)
  }
  innerRGB(){
    const {r, g, b} = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb(){
    const {r, g, b} = this;
    return `rgb(${this.innerRGB()})`;
  }
  hex(){
    const {r, g, b} = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  rgba(a = 1.0){
    return `rgba(${this.innerRGB()}, ${a})`;
  }
  hsl() {
    let {r, g, b} = this
    r /= 255, g /= 255, b /= 255;
  
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
  
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
  
      h /= 6;
    }

    h *= 360;
    s *= 100;
    l *= 100;
  
    this.h = h;
    this.s = s;
    this.l = l;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
  opposite() {
    const {h, s, l} = this;
    const newHue = (h+180) % 360;
    return `hsl(${newHue}, ${s}%, ${l}%)`
  }
  fullySaturated(){
    const {h, s, l} = this;
    return `hsl(${h}, 100%, ${l})`;
  }
}

//The constructor runs immediately whenever a new instance of the class is created

const c1 = new Color(255, 67, 89, "tomato");

//finally we will discuss the keywords "extends" and "super"

class Cat {
  constructor(name = "Garfield", age = 30, favFood = "Lasagna"){
    this.name = name;
    this.age = age;
    this.favFood = favFood;
  }
  eat(){
    return `${this.name} is eating ${this.favFood}`
  }
  meow(){
    return "Feed me!"
  }
}

//The simpla class above defines a cat object. But if we consider a dog, we know that they are somewhat. When we define a Dog object, we can simply define that it has a neame and and age as well, leading to a lot of duplication work

class Dog {
  constructor(name = "Odie", age = 6, favFood = "lasagna"){
    this.name = name;
    this.age = age;
    this.favFood = favFood;
  }
  eat(){
    return `${this.name} is eating ${this.favFood}`;
  }
  bark(){
    return "Woof";
  }
}

// You can see that this is not very efficient and there is a lot of code duplication. Not only that but the eat() method is descibed twice, which is just not good practice
//That is where the "extends keyword is very useful"
//Below we define a generic class called 'Pet' which is what cats and dogs are
class Pet {
  constructor(name, age, favFood){
    this.name = name;
    this.age = age;
    this.favFood = favFood;
  }
  eat(){
    return `${this.name} is eating ${this.favFood}`
  }
}
// Once the generic pet is defined, we can create a more specific class like Hamster which "extends" pet.
class Hamster extends Pet {
  nibble(){
    return `${this.name} is nibbling`;
  }
}