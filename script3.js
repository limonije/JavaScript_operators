// Verander deze input om te zien of je code werkt.
// Comment bijvoorbeeld regel 8 tot 11 weer aan, en regel 3 tot 5 uit.
/*
const age = 18;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Bram"
const totalAmount = 52;
*/


//Testdata
const age = 26; 
const isFemale = false;
const driverStatus = 808;
const firstName = "Pieter";
const totalAmount = 25;
 
if (age >= 18) {
  console.log("Je mag naar binnen");
} else {
  console.log("Nope, je mag niet naar binnen");
}

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Helaas geen korting voor jou");
}

if (firstName === "Sarah" || firstName === "Bram") {
  console.log("Gefeliciteerd, je krijgt een gratis biertje");
} else {
  console.log("Jammer je krijgt geen gratis biertje, maar bestel voor minimaal 25 euro en krijg andere voordelen");  
}

if (totalAmount >= 25) {
  console.log("Gefeliciteerd, je krijgt een gratis portie (vega)bitterballen");
} else if (totalAmount >= 50) {
  console.log("Jouw voordeel is een gratis portie nacho's");
} else if (totalAmount >= 100) {
  console.log("Proost, een flesje gratis champagne voor jou!");
} else {
  console.log("Je hebt (nog) geen recht op voordeel");
}

if (isFemale) {
  console.log("Je ticket zegt dat je een vrouw bent!");
} else {
  console.log(
    "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen");
}

if (driverStatus === "bob") {
  console.log("Je bent de bob, je mag autorijden");
} else {
  console.log("Je bent geen bob, hier met die autosleutels");
}
