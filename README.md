# Method/Function/Kill

Methods! They're cool!

1. fork
2. clone
3. `jest --watch-all`


### Guidelines

* Be SURE not to use arrow functions for your methods. There are some good explanations out there of what happens when you do so, but the short of it is: your `this` won't be the object, but whatever the `this` is outside the object. That can be a great feature, as often you'll want to keep the same this when chaining arrow functions. But in objects, you almost always want `this` to refer to that particular object, and so you'll want to use a regular function syntax.


### Hints

1. Pay careful attention to what `main.test.js` says, as well as both your terminal's descriptions of each test and the differences between what `jest` said it Expects and Receives.
2. Don't forget commas after your methods! They may not look like the same as before, but they're still just key-value pairs.
3. Remember that `this` always refers to the particular object the method is in. So if you call `person1.someMethod()`, `this` is `person1`, whereas if you call `person2.someMethod()`, `this` will be `person2`. You'll be using `this` a lot here!
4. For `age`, there are a couple different ways to make a parameter set to a default value in JavaScript. Find one that works for you!
5. For setting the spouse's name in `marry`, remember that you've already got a method to get someone's full name. You can use it here!
6. For `divorce`, look up how to remove a property from an object. You're probably not gonna just have that memorized!
