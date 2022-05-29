//so in oop a class is a blueprint for creating objects
// which you can use to create multiple objects with differnet properties and methods

//so there are multiple rules and laws to follow while creating classes
//abstraction is the porcess of hiding unnecessary details and showing only the essential details to the user
//encauplsation is keeping some objects inised a class private so that it can't be accessible from outside the class
//Inhertince is when two classes share the same properties and methods while the inherting class can have different properties and methods
//polymorphism so the class who will inheirt methods from and upper class can change it or modify it

//so there are something called prototypes and any of their childs inheirt therit objects so for example 

Array.map(prototype, function(item) {
            return item * 2;
        }
        //so there's something called array.prototype.map so array inherited the map function from prototype

        //so there are three ways to create protoypes in js
        //construcotr functions
        //es6 classes
        //object.create

        //so now let's implement this in javascript
        //now we will make a constructor function 

        const Person = function(firstName, birthYear) {
            this.firstName = firstName;
            this.birthYear = birthYear;
        }

        const jonas = new Person('Jonas', 1991)
        console.log(jonas)

        const hazem = new Person('hazem', 1995)
        const omar = new Person('omar', 1993)