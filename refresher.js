const name = 'sumit'
const age = 21;
const hobby = 'Gaming'

console.log(`hi , i'm ${name},my age is ${age} and my hobby is ${hobby}`);

const square = (num) => {
    return num * num;
}
console.log(square(4));

const isEven = (num) => {
    if (num % 2 == 0) {
        return 'true';
    }
    else {
        return 'false';
    }
}
console.log(isEven(4));

let fruits = ['mango', 'banana', 'orange', 'apple', 'grapes'];

let newFruits = fruits.map(item => item.toUpperCase());
console.log(fruits);
console.log(newFruits);

let longFruits = fruits.filter(item => item.length > 5);
console.log(longFruits);

const student = {
    name: 'sumit',
    course: 'Full stack',
    year: 2026,

    // optional arrow function 
    getDetails(){
        return `i'm ${this.name} my course is ${this.course} and the year is ${this.year}`;
    }

};
console.log(student.name);
console.log(student.course);
console.log(student.year);

// optional work
let[first , second] = fruits;
console.log(first);
console.log(second);


console.log(student.getDetails());

