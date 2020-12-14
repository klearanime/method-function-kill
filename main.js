/******************
 * YOUR CODE HERE *
 ******************/


const Person = function (firstName, lastName, age = 0, married = false) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    married: married,


    goingOn: function () {
      return this.age + 1
    },


    ageUp: function () {
      return this.age++
    },


    getFullName: function () {
      return this.firstName + ' ' + this.lastName
    },


    marry: function(givenPerson){
      this.married = true
      givenPerson.married = true
      this.spouseName = givenPerson.getFullName()
      givenPerson.spouseName = this.getFullName()
    },
    

    divorce: function(givenPerson){
      this.married = false
      givenPerson.married = false
      delete this.spouseName
      delete givenPerson.spouseName
    },

  }
  return Person
}


// const Queue = () => {
//   const queue = {
//   items: [],

//   add: function (val) {
//       this.items.push(val)
//   },

//   getNext: function () {
//       this.items.shift()
//   },

//   print: function () {
//       for (const items of this.items) {
//           console.log(items)
//       }
//   }
// } 
//   return queue; 
// }


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof Person === 'undefined') {
  Person = undefined;
}


module.exports = Person;
