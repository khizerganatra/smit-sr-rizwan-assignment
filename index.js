// ----- CHAPTER 1 ---------
// Q1

// alert("Welcome our Webpage");

// Q2

// alert("Error! Please enter a valid password");

// Q3

// alert("Welcome to JS Land... \nHappy Coding!");

// Q4

// alert("Welcome to JS Land... \nHappy Coding!");
// alert("Happy Coding! \nPrevent this page from creating additional dialogs.");

// Q5 (copy this code in console panel of browser to run it via console)

// alert("Hello... I can run JS through my web browser's console");

// Q6 (alerts used in this current project )
// Q7 (script used in this current project )


// ----- CHAPTER 2 ---------

// Q1

// var username;

// Q2

// var myName = "Muhammad Khizar Arif Ganatra";

// Q3

// var message;
// message = "Hello World";
// alert(message);

// Q4

// var StudentName = "Jhone Doe";
// var StudentAge = "15 years old";
// var StudentQualification = "Certified Mobile Application Developement";

// alert(StudentName);
// alert(StudentAge);
// alert(StudentQualification);

// Q5

// var dish = "PIZZA"
// alert( dish + "\n" + dish.slice(0,dish.length-1) + "\n" +dish.slice(0,dish.length-2) + "\n" + dish.slice(0,dish.length-3) + "\n" + dish.slice(0,dish.length-4));

// Q6

// var email = "example@example.com"
// alert("My email address is " + email);

// Q7

// var book = "A smarter \nway to learn JavaScript";
// alert("I am trying to learn from the Book " + book);

// Q8

// document.write("Yah! I can write HTML content through JavaScript");

// Q9

// var StylishAlert = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(StylishAlert);

// ----- CHAPTER 3 ---------

// Q1

// var age;
// age = 15;
// alert("I am " + age + " years old ");

// Q2

// Check if the visitor has visited the page before and retrieve the visit count
// let visitCount = localStorage.getItem("visitCount");

// // If the visit count doesn't exist, set it to 0
// if (!visitCount) {
//   visitCount = 0;
// }

// // Increment the visit count by 1 and store it in local storage
// visitCount++;
// localStorage.setItem("visitCount", visitCount);

// // Display the visit count on the web page
// document.write("You have visited this site " + visitCount + " times");


// var visitTimes = 14;
// alert("You have visited this site " + visitTimes + "times" );

// Q3

// var birthYear = 2001;
// document.write("My birth year is " + birthYear);
// document.write("<br>");
// document.write("Data type of my declared variable is  " + typeof(birthYear));

// Q4

// var visitorsName = prompt("What's your name?");
// var ProductTitle = prompt("Which product you want?");
// var ProductQuantity = prompt("How many products you want?");

// document.write(visitorsName.bold() + " ordered " + ProductQuantity.bold() + " "+ ProductTitle.bold() + "(s) on XYZ Clothing store");


// ----- CHAPTER 4 ---------

// Q1

// var car, modelNumber, ProductionYear;

// Q2

// -----legal varibles---
// var car;
// var carName;
// var car_manufacturing_year;
// var CarDriven;
// var CarNo1;

// -----illlegal varibles---
// var carNo.1;
// var car name;
// var car-manufacturing-year;
// var 11th car;
// var string;

// Q3

// var heading = "Rules for naming JS variables";
// document.write(heading.bold());
// document.write("<br>");
// document.write("<br>");
// document.write("Varible names can only contain _______, _______, ________ and ________.  For example $my_1stVariable");
// document.write("<br>");
// document.write("Variables must begin with a ______, ______ or _______. For example $name, _name or name");
// document.write("<br>");
// document.write("Variable names are case _________");
// document.write("<br>");
// document.write("Variable names should not be JS _________");

// ----- CHAPTER 5 ---------

// Q1

// var number01 = +prompt("Type a number");
// var number02 = +prompt("Type another number");
// var sum = number01 + number02;
// document.write("Sum of "+number01+" and "+number02+ " is "+sum);

// Q2

// var number01 = +prompt("Type a number");
// var number02 = +prompt("Type another number");

// var sum = number01 + number02;
// var sub = number01 - number02;
// var mul = number01 * number02;
// var div = number01 / number02;
// var mod = number01 % number02;


// document.write("Sum of "+number01+" and "+number02+ " is "+sum);
// document.write("<br>");
// document.write("Subtraction of "+number01+" and "+number02+ " is "+sub);
// document.write("<br>");
// document.write("Multiplication of "+number01+" and "+number02+ " is "+mul);
// document.write("<br>");
// document.write("Division of "+number01+" and "+number02+ " is "+div);
// document.write("<br>");
// document.write("Modulus of "+number01+" and "+number02+ " is "+mod);

// Q3

// var number ;
// document.write("Value after variable declaration is: " + number);
// document.write("<br>");
// number = 5;
// document.write("Initialize value: " + number);
// document.write("<br>");
// number++;
// document.write("Value after increment is : " + number);
// document.write("<br>");
// number = number + 7;
// document.write("Value after addition is: " + number);
// document.write("<br>");
// number--;
// document.write("Value after decrement is: " + number);
// document.write("<br>");
// var remainder = number%3;
// document.write("The remainder is : " + remainder);

// Q4

// var CostOfOneMovieTicket = 600;
// var Quantity = 5;
// var TotalPrice = CostOfOneMovieTicket * Quantity;
// document.write("Total cost to buy "+Quantity+" tickets to a movie is  "+TotalPrice+"PKR");

// Q5

// var number = 4;
// document.write("Table of "+ number);
// document.write("<br>");
// document.write(number+"x"+"1 ="+ number*1)
// document.write("<br>");
// document.write(number+"x"+"2 ="+ number*2)
// document.write("<br>");
// document.write(number+"x"+"3 ="+ number*3)
// document.write("<br>");
// document.write(number+"x"+"4 ="+ number*4)
// document.write("<br>");
// document.write(number+"x"+"5 ="+ number*5)
// document.write("<br>");
// document.write(number+"x"+"6 ="+ number*6)
// document.write("<br>");
// document.write(number+"x"+"7 ="+ number*7)
// document.write("<br>");
// document.write(number+"x"+"8 ="+ number*8)
// document.write("<br>");
// document.write(number+"x"+"9 ="+ number*9)
// document.write("<br>");
// document.write(number+"x"+"10 ="+ number*10)

// Q6

// var Celcius = +prompt("Give  temperatue in Celcius ");

// var Farenheit = +prompt("Give  temperatue in Farenheit ");

// var c = (Farenheit - 32 ) * 5 / 9;
// var f = (Celcius - 32 ) * 5 / 9;

// document.write(Celcius + "C is " + f +"F");
// document.write("<br>");
// document.write(Farenheit + "F is " + f +"C");

// Q7

// var item1Price = +prompt("ENTER THE PRICE OF ITEM 1");
// var item1Quantity = +prompt("ENTER THE QUANTITY OF ITEM 1");
// var item2Price = +prompt("ENTER THE PRICE OF ITEM 2");
// var item2Quantity = +prompt("ENTER THE QUANTITY OF ITEM 1");
// var shippingCharges = +prompt("ENTER THE SHIPPING CHARGES"); 
// var total = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

// document.write("Price of item 1 is " + item1Price);
// document.write("<br>");
// document.write("Quantity of item 1 is " + item1Quantity);
// document.write("<br>");
// document.write("Price of item 2 is " + item2Price);
// document.write("<br>");
// document.write("Quantity of item 2 is " + item2Quantity);
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("TOTAL COST OF YOUR ORDeR IS  " + total);

// Q8

// var totalMarks = +prompt("ENTER THE TOTAL MARKS ");
// var marksObtained = +prompt("ENTER THE MARKS OBTAINED  ");
// var percentage = (marksObtained/totalMarks)*100;
// var heading = "MARKS SHEET";

// document.write(heading.bold());
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("Total marks : " + totalMarks);
// document.write("<br>");
// document.write("Marks obtained : " + marksObtained);
// document.write("<br>");
// document.write("Percentage : " + percentage);

// Q9

// var usDollar = 10;
// var saudiRiyals = 25;
// var totalPKR = (usDollar*104.80)+(saudiRiyals*28);

// document.write("<h1>Currency in PKR</h1>");
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("Total currency in PKR : " + totalPKR);

// Q10

// var number = +prompt("Give any number");
// number = (((number + 5)*10)/12);
// document.write(number);

// Q11

// var currentYear = +prompt("Enter the current year.");
// var birthYear = +prompt("Enter the birth year.");

// var ageFormula = currentYear - birthYear;
// var ageFormula2 = ageFormula +1;


// document.write("They are either "+ ageFormula + " or " + ageFormula2 +  " years old" ); 

// Q12

// var radius = +prompt("Enter the radius of the circle");
// var circum = 2*3.142*radius;

// document.write("<h1> The Geometrizer </h1>")
// document.write("The area is " + circum);

// Q13

// var snack = prompt("Whats your favorate snack ?");
// var currentAge = +prompt("What's your current age");
// var maximumAge = +prompt("What's your maximum age");
// var amountPerDay = +prompt("Whats the estimate amount of your Snack you eat per day (in number) ?");

// var liveDuration = maximumAge - currentAge;
// var total = liveDuration * amountPerDay;

// document.write("<h1> The Lifetime Supply Calculator </h1>");
// document.write("<br>");
// document.write("<br>");
// document.write("Favourite Snack : " + snack);
// document.write("<br>");
// document.write("Current age : " + currentAge);
// document.write("<br>");
// document.write("Estimated Maximum Age : " + maximumAge);
// document.write("<br>");
// document.write("Amount of snacks per day : " + amountPerDay);
// document.write("<br>");
// document.write("You will need " + total + " " + snack + " to last you until the ripe old age of "+ liveDuration);

// ----- CHAPTER 6-9 ---------

// Q1

// var a = 10;
// document.write("Result: "+ "<br>" + "The value of a is : "+ a);

// document.write("<br>" + "<br>");
// document.write("---------------------------- ");
// document.write("<br>" + "<br>");

// ++a;

// document.write("The value of  ++a  is : " + a);
// document.write("Now the value of a is : " + a);

// document.write("<br>" + "<br>");

// a++;

// document.write("The value of  a++  is : " + a);
// document.write("Now the value of a is : " + a);

// document.write("<br>" + "<br>");

// --a;

// document.write("The value of  --a  is : " + a);
// document.write("Now the value of a is : " + a);

// document.write("<br>" + "<br>");

// a--;

// document.write("The value of  --a  is : " + a);
// document.write("Now the value of a is : " + a);

// Q2

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;

// document.write("a is " + a);
// document.write("<br>")
// document.write("b is " + b );
// document.write("<br>")
// document.write("result is " + result);

// --a; ()
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// Q3

// var userName = prompt("What's your name ?");
// alert("Welcome "+userName+" to our website");

// Q4
// Q5

// var number = +prompt("Enter the number you want the TABLE of");

// if (number == " "){
//     number=5;
// }

// document.write(number+" x 1"+" = "+number*1 +"<br>");
// document.write(number+" x 2"+" = "+number*2+"<br>");
// document.write(number+" x 3"+" = "+number*3+"<br>");
// document.write(number+" x 4"+" = "+number*4+"<br>");
// document.write(number+" x 5"+" = "+number*5+"<br>");
// document.write(number+" x 6"+" = "+number*6+"<br>");
// document.write(number+" x 7"+" = "+number*7+"<br>");
// document.write(number+" x 8"+" = "+number*8+"<br>");
// document.write(number+" x 9"+" = "+number*9+"<br>");
// document.write(number+" x 10"+" = "+number*10+"<br>");

// Q5

// var subject1 = prompt("Enter the Name of Subject 1");
// var subject2 = prompt("Enter the Name of Subject 2");
// var subject3 = prompt("Enter the Name of Subject 3");

// var totalEachSubject1 = 100;
// var totalEachSubject2 = 100;
// var totalEachSubject3 = 100;

// var markSubject1 = +prompt("Enter obtained marks for first subject");
// var markSubject2 = +prompt("Enter obtained marks for second subject");
// var markSubject3 = +prompt("Enter obtained marks for third subject");

// var Percentage1 = (markSubject1/totalEachSubject1)*100;
// var Percentage2 = (markSubject2/totalEachSubject2)*100;
// var Percentage3 = (markSubject3/totalEachSubject3)*100;

// var TotalMarks = totalEachSubject1 + totalEachSubject2 + totalEachSubject3;
// var TotalMarksObtained = markSubject1 + markSubject2 + markSubject3;
// var TotalPercentage = (TotalMarksObtained/TotalMarks)*100;

// document.getElementById("subject1").innerHTML = subject1;
// document.getElementById("subject2").innerHTML = subject2;
// document.getElementById("subject3").innerHTML = subject3;

// document.getElementById("markSubject1").innerHTML = markSubject1;
// document.getElementById("markSubject2").innerHTML = markSubject2;
// document.getElementById("markSubject3").innerHTML = markSubject3;

// document.getElementById("totalEachSubject1").innerHTML = totalEachSubject1;
// document.getElementById("totalEachSubject2").innerHTML = totalEachSubject2;
// document.getElementById("totalEachSubject3").innerHTML = totalEachSubject3;

// document.getElementById("Percentage1").innerHTML = Percentage1;
// document.getElementById("Percentage2").innerHTML = Percentage2;
// document.getElementById("Percentage3").innerHTML = Percentage3;

// document.getElementById("TotalMarks").innerHTML = TotalMarks;
// document.getElementById("TotalMarksObtained").innerHTML = TotalMarksObtained;
// document.getElementById("TotalPercentage").innerHTML = Percentage3;


// ----- CHAPTER 12-13 ---------

// Q1


// Q2

// var integer1 = +prompt("enter first integer");
// var integer2 = +prompt("enter second integer");

// if(integer1>integer2){
//     alert("interger 1 is larger")
// }
// else if(integer2>integer1){
//     alert("interger 2 is larger");
// }else if(integer2 == integer1){
//     alert("interger 1 and integer 2 are equal");

// }

// Q3

// var num = +prompt("enter second integer");

// if(num>0){

//     alert("number is positive")
// }
// else if(num<0){

//     alert("number is negative");

// }else if(num==0 ){

//     alert("number is zero");

// }

// Q4

// var check = prompt("enter the character").toLocaleLowerCase();

// if (check == "a" || check == "e" || check == "i" || check == "o" ||  check == "u" ){
//     alert("true")
// }else{
//     alert("false")
// }

// Q5

// var pass = "12345";
// var passCheck = prompt("Enter your password");

// if(passCheck == ""){
//     alert("Please enter the password");

// }else if(passCheck == pass){
//     alert("Correct! The password you entered matches the original password");
// }else{
//     alert("Incorrect password");
// }

// Q6

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";}
// else{
// greeting = "Good evening";
// }
// alert(greeting);

// Q7

// var hourInput= prompt("ENTER THE HOURS IN 24 HRS CLOCK FORMAT");
// var minuteInput= prompt("ENTER THE MINUTES");
// var amOrPm = "am";

// if(hourInput == 0 ){
//     hourInput = 0;
// }

// if(minuteInput == 0 ){
//     minuteInput = 0;
// }

// if((hourInput>=12 && minuteInput>=0)&&(hourInput<=23 && minuteInput<=59)){
//     amOrPm = "pm"
// }

// if(hourInput>12 && hourInput<=24){
//     hourInput=hourInput-12;
//  }

// alert("The time is "+ hourInput +" "+amOrPm+" "+minuteInput+" mins");

// ----- CHAPTER 14-16 ---------

// Q1

// var studentNames = [];

// Q2

// var studentNames = [];

// In JavaScript, there is no such thing as an empty array using object notation. Instead, we use literal notation to create an empty array.

// Q3

// var stringArray = ["a","b"];

// Q4

// var numberArray = [1,2];

// Q5

// var stringArray = [true, false, true];

// Q6

// var mixedArray = ["a","b",1,2,true, false, true];

// Q7

// var educationQualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD",];

// document.write("<h1>Qualifications: </h1>");

// for(var i = 0;i<educationQualification.length;i++){
//     document.write(i+1 +") "+educationQualification[i]+"<br>");
// }

// Q8

// var studentNames = ["Michael" ,"Jogn" ,"Tony"];
// var studentScore = [320,230,480];
// var totalMarks = 500;


// document.write("Score of Michael is "+studentScore[0]+". Percentage: "+(studentScore[0]/totalMarks)*100 +"% <br>");

// document.write("Score of Michael is "+studentScore[1]+". Percentage: "+(studentScore[1]/totalMarks)*100 +"% <br>");

// document.write("Score of Michael is "+studentScore[2]+". Percentage: "+(studentScore[2]/totalMarks)*100 +"%"); 

// Q9

// var colorNames = [];
// var colorBeggining = prompt("Which color you want to add in begging");

// method 1 to add in first -------

// colorNames[0]=color1;

// method 2 to add in first ------

// colorNames.unshift(colorBeggining);

// document.write("The color added in beggining of array : "+ colorNames[0] +"<br>");


// var colorLast = prompt("Which color you want to add in end");
// colorNames.push(colorLast);

// document.write("The updated array after adding end colour : "+ colorNames+"<br>");

// var color3 = prompt("Write color number 3 to add in the begging");
// var color4 = prompt("Write color number 4 to add in the begging");

// colorNames.unshift(color4,color3);
// document.write("The updated array after adding two more colours : "+ colorNames+"<br>");

// colorNames.shift();
// document.write("The updated array after removing the first array : "+ colorNames+"<br>");

// colorNames.pop();
// document.write("The updated array after removing the last array : "+ colorNames+"<br>");

// var colorIndex = prompt("At which index you want to add color");
// var desiredColor = prompt("Which color you want to add");

// colorNames[colorIndex]=desiredColor;

// document.write("The updated array after adding desired color to desired index : "+ colorNames+"<br>");

// var deleteIndex = prompt("At which index You want to delete colors")
// var deleteQuantity = prompt("how many colors you want to delete from that index");

// colorNames.splice(deleteIndex,deleteQuantity)
// document.write("The updated array after removing desired colors and quantity : "+ colorNames+"<br>");

// Q10

// var Score1 = prompt("enter score 1");
// var Score2 = prompt("enter score 2");
// var Score3 = prompt("enter score 3");
// var Score4 = prompt("enter score 4");

// var scores =[Score1,Score2,Score3,Score4];
// document.write("Scores of Students : "+scores +"<br>");
// scores.sort(function(a, b){return a - b});
// document.write("Ordered Scores of Students :" +scores);

// Q11


// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// var selectedCities = []
// selectedCities = cities.slice(2,4)
// alert(cities);
// alert(selectedCities);

// Q12

// var arr = ["This ", "is ", "my ", "cat"];
// var sentence = arr.join("");

// document.write("Array :<br>"+ arr +"<br><br>");
// document.write("String :<br>"+ sentence);

// Q13

// var color = []; 
// color.push("black"); 
// color.push("white"); 
// color.push("blue"); 

// document.write(color + "<br>"); 

// var firstElement = color.shift(); 
// document.write(firstElement+ "<br>"); 
// document.write(color+ "<br>"); 

// ----- CHAPTER 17-20 ---------

// Q1

//var  multiDimentionalArray = [[]];

// Q2

// var  matrix = [[0,1,2,3],
//                 [1,0,1,2],
//                 [2,1,0,1]
//              ];

// document.write(matrix[0] + "<br>")
// document.write(matrix[1] + "<br>")
// document.write(matrix[2] + "<br>")

// Q3

// for(var i =1 ; i<=10;i++){
//     document.write(i +"<br>");
// }

// Q4

//  var number = +prompt("Enter the number you want the TABLE of");

// var tableLength =  +prompt("Enter the lenth of the table you want");


// document.write("Multiplication table of : "+number+"<br>");
// document.write("Length : "+ tableLength +"<br>");

// for(var i =1;i<=tableLength;i++){

//     document.write(number+" x "+i +" = "+number*i+"<br>");
// }

// Q5

// var fruits = ["apple", "banana", "mango", "orange","strawberry"];
// for(var i = 0;i<fruits.length;i++){
//     document.write(fruits[i]+ "</br>")
// }

// document.write("</br>")

// for(var i = 0;i<fruits.length;i++){
//     document.write("Element at index "+i+ " is "+fruits[i]+ "</br>")
// }

// Q6

// document.write("<h2> Couting: </h2>");

// for(var i = 0; i<16;i++){
//     document.write(i+",")
// }

// document.write("</br>")
// document.write("<h2> Reverse Couting: </h2>");
// document.write("</br>")

// for (var i = 10; i >= 1; i--) {
//     document.write(i +",");
//   }
  
//   document.write("</br>")
//   document.write("<h2> Even: </h2>");
//   document.write("</br>")
  

// for (var i = 0; i<=20;i++) {

//     if(i%2==0){
//         document.write(i +",");
//     }
    
//   }

//   document.write("</br>")
//   document.write("<h2> Odd: </h2>");
//   document.write("</br>")
  

// for (var i = 0; i<=20;i++) {

//     if(i%2 != 0){
//         document.write(i +",");
//     }
    
//   }

//   document.write("</br>")
//   document.write("<h2> Series: </h2>");
//   document.write("</br>")

// for (var i = 2; i<=20;i++) {

//     if(i%2==0){
//         document.write(i +"k,");
//     }
    
//   }

// Q7

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var ind;
// var check = prompt("Welcome to ABC Bakery. What do you want to order?")

// var availiblity ;

// for( var i =0; i<A.length;i++){
//     if(check == A[i]){
//         availiblity = "available";
//         ind = i;

//         break;
//     }
    
// }

// if (availiblity=="available"){
//     alert(check +" is "+ availiblity + " at index "+ind+" in our bakery ");
// }else{
//     alert("We are soory! "+check +" is "+ " not availible in our bakery ");
// }



// Q8

// var A = [24, 53, 78, 91, 12];
// document.write("Array items : "+ A +"<br>");
// A.sort(function(a, b){return a - b});
// var largest = A.pop();
// document.write("The largest number is : "+ largest);

// Q9

// var A = [24, 53, 78, 91, 12];
// document.write("Array items : "+ A +"<br>");
// A.sort(function(a, b){return a - b});
// var largest = A.shift();
// document.write("The largest number is : "+ largest);

// Q10

// var num = 5;
// for(var i = 1;i<=20;i++){
//     document.write(num*i+", ")
// }

// ----- CHAPTER 21-25 ---------

// Q1

// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName + lastName;
// alert("welcome "+firstName+" "+lastName);

// Q2

// var phone = prompt("Enter your about his favorite mobile phone model");
// document.write("My favorite phone is :"+ phone +"<br>");
// document.write("Length of string :"+ phone.length);

// Q3

// var str = "pakistani";
// document.write("String :"+ str +"<br>") ;
// document.write("Index of 'n' :" + str.indexOf('n'))

// Q4

// var str = "Hello World";
// document.write("String :"+ str +"<br>") ;
// document.write("Last index of 'l' :" + str.lastIndexOf('l'));

// Q5

// var str = "pakistani";
// document.write("String :"+ str +"<br>") ;
// document.write("Character at index 3 : " + str.charAt(3));

// Q6

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");

// var fullName = firstName.concat(" ", lastName);

// alert("Hello " + fullName + "! Welcome to our website.");

// Q7

// var city ="Hyderabad";
// var city2 = city.replace("Hyder","Islam");
// document.write("City : " + city +("<br>")) ;
// document.write("after replacement : " + city2);

// Q8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var update = message.replace(/and/g,"&");
// document.write(update);

// Q9

// var str = "472";
// document.write("Value : "+ str +"<br>") ;
// document.write("Type : "+ typeof(str) +"<br>");
// str = Number(str);
// document.write("Value : "+ str +"<br>") ;
// document.write("Type : "+ typeof(str)+"<br>");

// Q10

// var fruit = prompt("enter the fruit");
// document.write("User input : "+ fruit +"<br>") ;
// fruit =fruit.toLocaleUpperCase();
// document.write("Upper case : "+ fruit +"<br>");

// Q11

// var fruit = prompt("enter the fruit");
// document.write("User input : "+ fruit +"<br>") ;
// fruit =fruit.;
// document.write("Title case : "+ fruit +"<br>");


// Q12

// var num = 35.36;
// document.write("Number : "+ num +"<br>");
// num = num.toString().replace(".","");
// document.write("Number : "+ num +"<br>");

// Q13



// Q14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var ind;
// var check = prompt("Welcome to ABC Bakery. What do you want to order?")
// check = check.toLocaleLowerCase();
// var availiblity ;

// for( var i =0; i<A.length;i++){
//     if(check == A[i]){
//         availiblity = "available";
//         ind = i;

//         break;
//     }
    
// }

// if (availiblity=="available"){
//     alert(check +" is "+ availiblity + " at index "+ind+" in our bakery ");
// }else{
//     alert("We are soory! "+check +" is "+ " not availible in our bakery ");
// }

// Q15


// var pass= prompt("Enter the password");

// if(pass.charAt(0)== );

// Q16

// var university = "University of Karachi";
// var arr = university.split("");

// for (var i = 0; i < arr.length; i++) {
//   document.write(arr[i] + "<br>");
// }

// Q17

// var user = "Pakistan";
// document.write("User input : "+user+"<br>");
// document.write("Last character of input : "+user.charAt(user.length-1));

// Q18

// var sentence = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// var words = sentence.split(" ");

// for (var i = 0; i < words.length; i++) {
//   if (words[i].toLowerCase() === "the") {
//     count++;
//   }
// }

// document.write("sentence :" + sentence+"<br>");
// document.write("The word 'the' appears " + count + " times in the string.");

// ----- CHAPTER 26-30 ---------

// Q1

// var num = +prompt("Enter a positive integer:");

// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + Math.round(num) + "<br>");
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Ceil value: " + Math.ceil(num) + "<br>");

// Q2

// var num = +prompt("Enter a positive integer:");

// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + Math.round(num) + "<br>");
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Ceil value: " + Math.ceil(num) + "<br>");

// Q3

// var num = prompt("Enter a number:");

// document.write("The absolute value of " + num + " is " + Math.abs(num));

// Q4

// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("random dice value: " + diceValue+"<br>");
// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("random dice value: " + diceValue);


// Q5

// var diceValue = Math.floor(Math.random() * 2) + 1;
// if(diceValue ==2){
//     document.write(diceValue+ "<br>"+"random dice value: Heads" );
// }if (diceValue ==1) {
//     document.write(diceValue+ "<br>"+"random dice value: Tails"+ "<br>" );
// } 

// var diceValue = Math.floor(Math.random() * 2) + 1;
// if(diceValue ==2){
//     document.write(diceValue+ "<br>"+"random dice value: Heads" );
// }if (diceValue ==1) {
//     document.write(diceValue+ "<br>"+"random dice value: Tails" );
// } 

// Q6

// var diceValue = Math.floor(Math.random() * 100) + 1;
// document.write("random number between 1 and 100 : " + diceValue+"<br>");

// Q7

// var weight = prompt("enter you weight in kilograms");

// document.write("The weight of user is "+ weight);

// Q8

// var secret = Math.floor(Math.random()*10+1);
// document.write(secret);
// var userNumber = prompt("enter the number");
// if (secret==userNumber){
//     alert("congratulation")
// }else{
//     alert("try again!")
// }