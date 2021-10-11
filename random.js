/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

 const minNum = prompt ('Enter your Minimum number:');
 const maxNum = prompt ('Enter your Maximum number:');
   
 const getRandom = (minNum, maxNum) => {
   if (isNaN (minNum) || isNaN (maxNum )) {
     console.log ("Error");
   }
 let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
   
   return randomNum;
 };
 
 
 // Call the function and pass it different values
 
 main = document.querySelector ('main');
 main.innerHTML = `<h2> The random number between ${minNum} and ${maxNum} is :  ${getRandom (minNum,maxNum)} <h2>`;
 