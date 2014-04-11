alert("HERE COMES THE BOOM!");

//Elgatha Lee
//April 7, 2014
//Project 2
//SDI
//Tell A Personal Story
//I was going to continue with the whole car thing, but
//this is about my family and every other day when my car hasn't been //stolen. I visited my Grandmother recently in Nassau, Bahamas for
//her 90th birthday and she told me about my Great2Grandfather
//who was Seminole Indian. I was shocked and amazed as I 
//listened to the story of my heritage, but I don't know if I'm Seminole 
//or just the descendent of a Seminole. This is just part of the story.


/* 
Initialize Variables
string
number
array

Procedure -> 
Boolean Function -> 
		Returned Values -> OUTPUT -> Finish
Number Function -> 
		Returned Values -> OUTPUT -> Finish
String Function -> 
		Returned Values -> OUTPUT -> Finish
Array Function ->
		Returned Values -> OUTPUT -> Finish
		

Argument -> Procedure ->
Arugument
	true - OUTPUT - back
	false - OUTPUT - back
	
	
Number -> Number Function -> Local Variables ->
	While Loop
		True -> Math -> OUTPUT -> back to while loop
		False -> return number
		
Argument 1 / Argument 2 -> Boolean Function -> Comparison ->
	True -> OUTPUT -> return boolean
	False -> OUTPUT -> return boolean
	
String 1 / String 2 -> String Function -> Local Var -> String Concatenation -> Return String

Number / Array -> Array Function -> Local Var ->
	For Loop
		True -> Math -> OUTPUT -> back to For Loop
		False -> Return array
*/

// PROCEDURE START
// boolean function
// number function
// string function
// array function
// PROCEDURE STOP


// INITIALIZE VARIABLES
// string
var myCommunity = "Nassau";
var myHeritage = "Seminole"
// number
var seminoleBlood = 50;
var immigrationStatus = 100;

// array
var seminoleTribe = ["chief","historian"];
var bahamasCustoms = "Davis";

//reuse later
var errands = function(inspect) {
	console.log(inspect);
};
var customsStop = function(inspect) {
	console.log(inspect);
};

//BOOLEAN FUNCTION
var seminoleStatus = function(blood) {
	var bloodPure = function(grandmother, mother) {
	var bloodResult = grandmother / mother;
		return (bloodResult === Math.floor(bloodResult));
};
	if (bloodPure(blood, 100)) { return false; }
	else if(bloodPure(blood, 25)) { return true; }
	else if(bloodPure(blood, 50)) {return true; }
	else { return false; }
};

//function takes boolean arguments & compares them.
/*var seminoleOrigin = function(grandmother,mother)
{
	if ( grandmother >= 50 ) {
	admitSeminole("My heritage is Seminole");
	};
	else ( grandmothermother <= 15 ) {
	admitSeminole("My heritage is not Seminole");
	}
	else ( mother >= 50 ) {
	admitSeminole("My heritage is Seminole");
	}
	else ( mother <= 15 ) {
	admitSeminole("My heritage is not be Seminole");
	};
};
*/

//NUMBER FUNCTION, LOCAL VARS, WHILE LOOP, MATH, RETURN NUMBER
var runErrands = function(spendCash) {
	var receiptTotal = 175,
		cashTotal;
	if (spendCash < receiptTotal) {
		console.log("I don't think I have enough cash to complete all of my errands today. I want to buy my Grandmother a really great gift. I may need to use my credit card, I only have " + receiptTotal + " in cash on me. Oh, Bugger and Bollocks!!!!");
		cashTotal = receiptTotal;
	}
	else {
	cashTotal = Math.floor(spendCash - receiptTotal);
	}
	return cashTotal;
};
var gotGift = runErrands(150);

//STRING FUNCTION, LOCAL VARIABLES, STRING CONCATENTATION, RETURN STRING
var stopsPerErrand = function() {
	var location = ["nassau", " paradise island", " cable beach", " fox hill"];
	stopsPerErrand = location.length;
	errands("I went to " + location + " all in search of a gift for my Grandmother\'s 90th birthday, " + stopsPerErrand + " different locations, I went to. I went every where today, I finally found the perfect gift, woohoo!!!");
};

/*use in a WHILE loop.
var giftShoppingTrip = function(leaveHome) {
	var leaveHome = 0;
	while (leaveHome < 3) {
	errands("I left home to go  " + giftShopping);
	leaveHome ++;
	};
};
*/


//ARRAY FUNCTION WITH NUMBER, ARRAY ARGUMENTS, FOR LOOP
var family = ["Cousins"," Siblings"," Aunts and Uncles", " Everyone"],
numberOfFamily = [ 80, 2, 13, 95 ];

var oneFamily = function(family, numberOfFamily) {
console.log("I can not believe " + family + " has gatherered " + numberOfFamily + " people for my Grandmother's birthday. ");
for (var number = 1; number < numberOfFamily; number += 1) {
var numberRemain = numberOfFamily = numberOfFamily;
console.log("I saw " + numberOfFamily + " members of my family, " + family + " was gathered for this special day,  " + numberRemain + " people remained because we stayed late to catch up with everyone");
}
console.log("I was determined to see " + family + " in my family since it has been so long since I've seen them all. ");
};
var myFamily = function(familyToo, fromThisFamily) {
for (var familyNumber = 0; familyNumber < familyToo.length; familyNumber++)
var family = familyToo[familyNumber],
numberOfFamily = fromThisFamily[familyNumber];
oneFamily(family, numberOfFamily);
console.log("Since I spent so much time with my family, I realized how much I've missed them. So, I'm moving back to Nassau, to spend time with them!");
	}


//bahamasCustoms();
//customsStop("I went through customs without a hitch they check my passport: " + immigrationStatus(100));
//customsStop("I've been out of the Bahamas for 12 years and " + bahamasCustoms + "stamped my passport and checked my bags with no problem" );

seminoleStatus(25);
runErrands(50);
stopsPerErrand(4);
myFamily(family, numberOfFamily);
customsStop("When I was leaving Nassau, I was stopped for inspection with Customs and Immigration Inspector " + bahamasCustoms + " and was asked questions but there was no real inspection. However, I was fingerprinted, which was a shock");


//
