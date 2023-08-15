// takaToDollar 
// function takaToDollar(taka){
//     let dollar = taka / 105
//     return dollar
// }
// let takas = 1000
// let a = takaToDollar(takas).toFixed(2)
// console.log(a) 
// funny tack 
// function barbieken(string){
//     if(string.length % 2 === 0){
//         console.log('Hi Ken!')
//     }else{
//         console.log('Hi Berbien!')
//     }
// }
// let a = 'Batch8'
// console.log(barbieken(a))
// funny tack-2 three input output avg
// function PandaCost(shingaraQuantity, SomucaQuantity,  JilapiQuantiy){
//     let shingaraPrice = 7;
//     let somucaPraice = 10;
//     let jilapiPrice = 15;
//     let shingaraTotalPrice = shingaraPrice * shingaraQuantity
//     let somucaTotalPraice = somucaPraice * SomucaQuantity
//     let jilapiTotalPrice = jilapiPrice * JilapiQuantiy
//     let totalprice = jilapiTotalPrice + somucaTotalPraice + shingaraTotalPrice
//     return totalprice;
// }
// console.log(PandaCost(2,2,1))
// three input output avg
// function threeAvg(num1, num2, num3 ){
//     let a = (num1 + num2+ num3 ) / 3
//     return a 
// }
// console.log(threeAvg(7, 2, 3))
// array average
// function arrayAvg(arr){
//     let sum = 0;
//     for(i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum ;
// }
// let num = [1,2,3,4,5]
// let total = arrayAvg(num)
// console.log(total)
// odd_even number
// function oddEven(num){
//     if(num % 2 == 0){
//         console.log("this number is even")
//     }else{
//         console.log("this number is odd")
//     }
// }
// let a = 105;
// console.log(oddEven(a))
// traffic signal 
// let signal = 'red' ;
// function traffic(light){
//     if(light == 'red'){
//          return 'denger'
//     }  else if (light == 'yellow'){
//         return 'stop'
//     }else{
//        return  'you shoud cross the road'
//     }
// }
// console.log(traffic(signal)) 
// hour to minutes(convert)
// function hourToMinutes(hour){
//     let hToM = 60;
//     let c = hour * hToM ;
//     let b = 'minutes = ' ;
//     return [ b, c   ]
// }
// const a = 10 ;
// console.log(hourToMinutes(a))
                                            // leap year findLeapYear()
// function findLeapYear(arr) {
//     let leapYear = []
//     if (!Array.isArray(arr)) {
//         return " please input valied array"
//     } else {
//         for (let item of theArray) {
//             if (item % 4 === 0) {
//                 leapYear.push(item)
//             }
//         }
//     }
//     return leapYear
// }
// let theArray = [2023, 2024, 2025, 2028, 2030];
// let a = findLeapYear(theArray);
// console.log(a)
//                         // assignment-problem
//                         // problem-1
// function cubeNumber(number) {
//     if (typeof number !== 'number') {
//         return ' please give me a namber'
//     } else {
//         return number * number * number
//     }
// }
//                             // problem-2
// function matchFinder(string1, string2) {

//     if (typeof string1 !== "string" || typeof string2 !== "string") {
//         return "give me a string"
//     } else if (string1.toLowerCase().includes(string2.toLowerCase())) {
//         return true
//     } else {
//         return false
//     }
// }
//                             // problem-3
// function sortMaker(arr) {
//     for (let item of arr) {
//         if (typeof item !== 'number' || item < 0 ) {
//             return "Invalid Input";
//         }
//     }
//     if (arr[0] === arr[1]) {
//         return "equal";
//     }
//     if (arr[0] < arr[1]) {
//         const temp = arr[0];
//         arr[0] = arr[1];
//         arr[1] = temp;
//     }
//     return arr;
// }
//                              // problem-4
// function findAddress(obj) {
//     if (typeof obj !== 'object'){
//         return 'give vailed input'
//     }else{
//         let street = obj.street || '__ '
//         let house = obj.house || ' __ '
//         let society = obj.society || '  __'
//         return street + house + society
//     }
// } 
//                             // problem-5
// function canPay(changeArray, totalDue) {
//     if (changeArray.length === 0) {
//         return 'array is empty. give me a good array';
//     }
    
//     let sumOfChange = 0;
//     for (let i = 0; i < changeArray.length; i++) {
//         sumOfChange += changeArray[i];
//     }
    
//     if (sumOfChange >= totalDue) {
//         return true;
//     } else {
//         return false;
//     }
// }
