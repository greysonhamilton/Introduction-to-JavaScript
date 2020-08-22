/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 40;
if (votingAge => 18)
    {
        console.log("True")
    };


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let y=10;
let x=23;
if (x>y) {
    console.log(x-y)
};



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
Number("1999");




//Task d: Write a function to multiply a*b 
function alebra(a,b)
{console.log(a*b)};
alebra();



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
let age = 40;
function doggone()
{console.log(age*7)};
doggone();




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function dogFeeder(dogAge, dogWeight) {
    if (0.166 <= dogAge && dogAge <= 0.333) {
        return dogWeight * 0.1;
    } else if (0.333 <= dogAge && dogAge <= 0.583) {
        return dogWeight * 0.05;
    } else if (0.583 <= dogAge && dogAge < 1) {
        return dogWeight * 0.04;
    } else if (dogAge >= 1 && dogWeight <= 5) {
        return dogWeight * 0.05;
    } else if (dogAge >= 1 && 6 <= dogWeight && dogWeight <= 10) {
        return dogWeight * 0.04;
    } else if (dogAge >= 1 && 11 <= dogWeight && dogWeight <= 15) {
        return dogWeight * 0.03;
    } else if (dogAge >= 1 && dogWeight > 15) {
        return dogWeight * 0.02;
    }
} console.log(dogFeeder(1,15));





/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
let user = "Rock";
let comp = Math.floor(Math.random()*3);
function roshambo(user) {
     if (user==="Rock" && comp===0) {
    return "It's a tie!!";
    } else if (user==="Rock" && comp===0) {
        return "It's a tie!!";
    } else if (user==="Scissors" && comp===1) {
        return "It's a tie!!";
    } else if (user==="Paper" && comp===2) {
        return "It's a tie!!";
    } else if (user==="Rock" && comp===2) {
        return "You Win!";
    } else if (user==="Scissors" && comp===0) {
        return "You lose..";
    } else if (user==="Rock" && comp===1) {
        return "You lose..";
    } else if (user==="Paper" && comp===0) {
        return "You Win!";
    } else if (user==="Scissors" && comp===1) {
        return "You Win!";
    } else if(user==="Paper" && comp===2) {
    return "You lose..";
    }
 } console.log(roshambo("Rock"));


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
let km = 48;
let m = k*0.621;
console.log(m + " miles");


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
let ft = 15;
let cm = ft*30.48;
console.log(cm + " cm");


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
let bottles = 99;
do {
    bottles + " bottles of soda on the wall, " + bottles + " bottles of soda, take one down pass it around " + bottles + " bottles of soda on the wall.";
    --bottles;
} while (bottles > 97);
console.log(bottles + " bottles of soda on the wall, " + bottles + " bottles of soda, take one down pass it around " + bottles + " bottles of soda on the wall.");


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
let mark = 94;
function grade(mark) {
    if (mark >= 90) {
        return "You got an A!!";
    } else if (mark < 90 && mark >= 80) {
        return "You got a B!";
    } else if (mark < 80 && mark >=70) {
        return "You got a C.";
    } else if (mark < 70 && mark >= 60) {
        return "You got a D.";
    } else {
        return "You have a F."
    }
} console.log(grade(94));

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
let user1 = prompt("Please pick Rock, Paper, or Scissors.");
let comp1 = Math.floor(Math.random()*3);
if (comp1 === 0) {
    console.log("Rock");
} if (comp1 === 1) {
    console.log("Paper");
} if (comp1 === 2) {
    console.log("Scissors");
}
function roshambo(user) {
     if (user1 === comp) {
    return "It's a tie!!";
    } else if (user1==="Rock" && comp1===2) {
        return "You Win!";
    } else if (user1==="Scissors" && comp1===0) {
        return "You lose..";
    } else if (user1==="Rock" && comp1===1) {
        return "You lose..";
    } else if (user1==="Paper" && comp1===0) {
        return "You Win!";
    } else if (user1==="Scissors" && comp1===1) {
        return "You Win!";
    } else (user1==="Paper" && comp1===2)
    return "You lose..";
 } roshambo("Rock");




