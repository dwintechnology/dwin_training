// homework 21.12.21

//debugger
// 1 Write a program which will print n -th Fibonacci number

// function fibanachi(number) {
//     let a = 1
//     let b = 1
//     for (let  i = 3;  i <= number;  i++){
//         let c = a + b
//         a = b
//         b = c
//     }
//     return b
// }
//  alert(fibanachi(7))

//2 Write a program which will print is a given number prime(պարզ) or not?

// function primeNumber(num) {
//     var arr = []
// for (var i = 1; i <= num; i++) {
//    if(num % i === 0){
//        arr.push(i)
//    }
//    if(arr.length === 3){
//        return false
//    }
// }
// return true
// }


//3 Write a program which will print sum of numbers which  are dividing-
//  5 and 3 without remainder from 1-1000 interval.

// function divider() {
//     let sum = 0
//     for (let i = 3; i < 1000; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             sum += i
//         }
//     }
//     return sum
// }

// divider()

//4 Write a program which will check if a given n number symmetrical or not?

// function symmetricalNumber(num) {
//     let a = 0
//     let b 
//     let num2 =num
//     while (num != 0) {
//         b = num % 10
//         a = a * 10 + b
//         num = Math.floor(num/10)
//     }
//    if(a === num2){
//        console.log(true)
//    }else{
//        console.log(false)
//    }
// }
// symmetricalNumber(5465)

//5 Write a program which will print factorial of given n number.


// function factorial(number) {
//     let sum =1
//     for (let i = 1; i <= number; i++) {

//         sum = sum * i
//     }
//     return sum
// }

// factorial()

//6 Write a program which will print reverse of given n number.




// function numReverse(num) {
//     let a = 0
//     let b 
//     while (num != 0) {
//         b = num % 10
//         a = a * 10 + b
//         num = Math.floor(num/10)
//     }
//     return a
// }
// console.log(numReverse(456))

//7 Write a program which will calculate area of triangle by given 3 coordinates. didn't

//  function foo(text){
//      function goo(tex){
//          return alert(tex)
//      }
//      return goo(text)
//  }

// foo("Wow! It's nested function!")



//22.12.21
// 1 Write a function that gets a number as an argument and print all combinations of its digits.
// 2 Write a function that returns the biggest prime number consisting of digits of the given number(as an argument).
//      NOTE: use the existing functions if possible
//      NOTE: @Seryozha Khachatryan already explained this!
// 3 Write a function to find the largest of 5 given integers.

    // function foo(arr){
    //     let x
    //     for(i = 0;i < arr[i]; i++){
    //         if(x === undefined || arr[i] > x){
    //             x = arr[i]
                
    //         }

    //     }
    //     return alert(x)
    // }


// foo([10,5,87,41,25,3])





// 7 Write a function that returns another function that print the following text: "Wow! It's nested function!".


//23.12.21

// 1 Write a function isEmpty(obj). Should return Boolean value

// function myIsEmpty(obj){
//     for(key in obj){
//         return false
//     }
//     return true
// }


// let object ={}


// console.log(myIsEmpty(hhhh))

// 2 Write a function hasPropery(obj, prop). Should return Boolean value

// function myhasOwnProperty(obj,proporty){
//     for(key in obj){
//         if(obj[key] === proporty){
//             return true
//         }
        
//     }
//     return false
// }


// let hhhh = {
//     name:"baf",
//     age:25,
//     father:"Bob"
// }

// console.log(myhasOwnProperty(hhhh,47))

//3 Write a function deepClone(obj). Should return object. Hint: use for .. in and recursion

// function clone4 (obj,obj2){

//   let obj3 = JSON.parse(JSON.stringify(obj))
//   let obj4 = JSON.parse(JSON.stringify(obj2))

//   let clone = {...obj3,...obj4}

//   return clone

// }

// console.log(clone4 (b,a))





// 4 Create a Training object with following methods:
//4.1 printAllStudentsNames()  row 225
//4.2 getAvarageMark() row 234
//4.3 setMark(mark, student) row 288
//4.4 addStudent(name, initialMark) row 248
// 4.5 removeStudent(student) row 262
// 4.6 getBestStudent() row 272



//24.12.21
// 1 Write a function/method for dwinTraining object getMostYoungStudent() -> should return student object with name.
//    Note: if 2 students have the same age sort them by mark․ row 204 
 
// 2 Write a function/method for dwinTraining object groupStudentsByMarkRange(range) 
//   -> should return map with users grouped by marks(e.g.  e.0)․  didn't 

// 3 Write a function/method for dwinTraining object call students back from smokingRoom  by name. row 310

// 4 Write a function/method for dwinTraining object call all students back from smokingRoom․ row 320

// 5 Write a function which will transform a nested object(e.g. e.1) to a one-level object(e.g. e.2). didn't

// 6 Write a function which will transform a one-level object(e.g. e.2) to a nested object(e.g. e.1)․ didn't


// function clone(x, y) {
//     const z = {};
//     for (const key in x) {
//         z[key] = x[key];
//     }
//     for (const key in y) {
//         z[key] = y[key];
//     }
//     return z;
// }
// function getRandomMark(from, to) {
//     return Math.floor(Math.random() * (to + 1)) + from;
// }
// const DwinTraining = {
//     students: {},
//     smokingRoom: {},
//     subjects: {
//         git: {
//             results: {
//                 Tigran: 7,
//                 Joe: 8,
//                 Valod: 2,
//             },
//         },
//     },

    
    
//     getMostYoungStudent: function () {
//         let less
//         for (let name in this.students) {
//             const student = this.students[name]
//             const age = this.students[name].age
//             const mark = this.students[name].mark
//             if (less === undefined || age < less.age) {

//                 less = {
//                     name: name,
//                     age: age,
//                     mark: mark,
//                 }
//             } else if (age === less.age) {
//                 if (mark < less.mark) {
//                     less = {
//                         name: less.name,
//                         age: less.age,
//                         mark: less.mark
//                     }
//                 } else {
//                     less = {
//                         name: name,
//                         age: student.age,
//                         mark: student.mark
//                     }
//                 }
//             }
//         }
//         return less
//     }
//     ,
//     printAllStudents: function () {
//         for (const name in this.students) {
//             if (Object.hasOwnProperty.call(this.students, name)) {
//                 console.log(`${name}: ${this.students[name].mark}`);
//             }
//         }
//     },
//     getAverageMark: function () {
//         let res = 0;
//         let count = 0;
//         for (const name in this.students) {
//             if (Object.hasOwnProperty.call(this.students, name)) {
//                 res = res + this.students[name].mark;
//                 count++;
//             }
//         }
//         if (count === 0) {
//             return 0;
//         }
//         return res / count;
//     },
//     addStudent: function (student) {
//         if (!this.students.hasOwnProperty(student.name)) {
//             this.students[student.name] = {
//                 age: student.age,
//                 mark: student.mark,
//             };
//         } else {
//             // TODO:
//         }
//     },
//     removeStudent: function (studentName) {
//         if (this.students.hasOwnProperty(studentName)) {
//             delete this.students[studentName];
//         } else {
//             // TODO:
//         }
//     },
//     setMark: function (mark, studentName) {
//         this.students[studentName].mark = mark;
//     },
//     getBestStudent: function () {
//         let bestStudentNameAndMark;
//         for (const name in this.students) {
//             const mark = this.students[name].mark;
//             if (bestStudentNameAndMark === undefined || mark > bestStudentNameAndMark.mark) {
//                 bestStudentNameAndMark = {
//                     name: name,
//                     mark: mark,
//                 };
//             }
//         }

//         const res = {
//             name: bestStudentNameAndMark.name,
//         };
//         this.students[bestStudentNameAndMark.name];
//         const clonedStudent = clone(this.students[bestStudentNameAndMark.name], res);
//         return clonedStudent;
//     },
//     moveBestStudentToTheSmokingRoom: function () {
//         const bestStudent = this.getBestStudent();
//         const name = bestStudent.name;
//         delete this.students[name];
//         this.smokingRoom[name] = bestStudent;
//     },
//     callBestStudentFromTheSmokingRoomInTheClassRoom: function (name) {
//         for(let key in this.smokingRoom){
//             if(key === name){
//                 const student = this.smokingRoom
//                 delete this.smokingRoom[name]
//                 this.students[name]= student
//                 break
//             }

//         }
//     },
    
//     callAllStudentFromTheSmokingRoomInTheClassRoom:function () {
//         for(let key in this.smokingRoom){

//             const student = this.smokingRoom[key]
//             delete this.smokingRoom[key]
//             this.students[key]= student
        
//             }
//     },
//     exam: function (subjectName, studentName) {
//         const random = getRandomMark(0, 10);
//         this.subjects[subjectName].results[studentName] = random;
//         this.students[studentName].mark = this.students[studentName].mark + random;
//         return random;
//     },
//     printAllDroppedOutStudents: function (subjectName, minMark) {
//         for (const name in this.subjects[subjectName].results) {
//             if (this.subjects[subjectName].results[name] < minMark) {
//                 alert(name + ':' + ' ' + this.subjects[subjectName].results[name]);
//             }
//         }
//     },
// };
// function init() {
//     DwinTraining.addStudent({
//         name: 'John',
//         age: 20,
//         mark: 41,
//     });
//     DwinTraining.addStudent({
//         name: 'Joe',
//         age: 15,
//         mark: 41,
//     });
//     DwinTraining.addStudent({
//         name: 'Ann',
//         age: 12,
//         mark: 24,
//     });
//     DwinTraining.addStudent({
//         name: 'Susan',
//         age: 75,
//         mark: 31,
//     });
//     DwinTraining.addStudent({
//         name: 'Karen',
//         age: 12,
//         mark: 55,
//     })
// }

