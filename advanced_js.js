const original = {
    name:'unknown',
    age: 0,
    id: 0

};
 
console.log(original);

const copyOriginal = {...original , gender : "NA"};// created a shallow copy of a object
// added some addtional property to the copied object and then printed it .
console.log(copyOriginal);

const num1 = [1,2,3,4,5];
console.log(num1);

const num2 =[...num1,6,7,8,9,10];
console.log(num2);

const obj1 = {
    name:"obj1",
    id: 1,
    def:"this is object one "

}

const obj2 = {
    name :"obj2",
    id:2,
    sentence:"this is object two"
}

const obj3 = {...obj1 , ...obj2 };

console.log(obj1);
console.log(obj2);
console.log(obj3);

// calculating average of a scores using rest parameter
const calculateAverage = (...score)=>{
   
    if(score.length === 0){
        return 0;
    }

    const sum = score.reduce((initial,currScore)=>{
        return initial + currScore;
    },0);

    const average = sum /score.length;
    return average;
}

console.log(calculateAverage(10,20,30,40,60));

//destructuring a object 

const newObj ={
    fname : "sumit",
    id:1
}
console.log("priting object without destructuring:-")
console.log(newObj.fname);
console.log(newObj.id);

//Destructuring-Object
console.log("priting object with destructuring :-")
let{fname,id} = newObj;
console.log(fname);
console.log(id);


//destructuring-array
console.log("original array")

let array =[1,2,3,4,5];
console.log(array);

console.log("destructuring an array to display 1st and 3rd element ")

let [ele1, ,ele3] = array;
console.log(ele1,ele3);

//delay using set-timeout

const delayed =callback=>{
    const promise = new Promise((resolve,reject)=>{
         setTimeout(()=>{
        resolve("done");
    },1000);
    });
    return promise;
    
}
setTimeout(()=>{
    console.log("delayed by 2ms")
    delayed().then((text)=>{
        console.log(text);
    })
},2000)


