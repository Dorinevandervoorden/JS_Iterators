console.log("Hallo Winc Academy Studenten");

// Array: colors
const colors = ['yellow', 'blue', 'red', 'orange'];

// While loop: colors
let i = 0;

while (i < colors.length) {
  console.log("Printing " + colors[i]);
  i++;
}

console.log("I have now printed the colors: " + colors);


// For loop: colors
for (let i = 0; i < colors.length; i++) {
  console.log("Printing " + colors[i]);
}

console.log("I have now printes the colors: " + colors);


// Array Methods
colors.forEach(element => console.log("Printing " + element));

console.log("I have now printed the colors: " + colors);

/*Vragen
1. Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
Antw: For loop: 3, while loop: 4. 
2. Hoeveel regels neemt mijn forEach method in beslag?
Antw: 1.
3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? 
Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
Antw: Het is korter (neemt dus minder code in beslag), Je kan er minder snel fouten in maken (Meer code -> 
  Meer room for error). Ik vind het makkelijker leesbaar omdat het begint met de 'colors' variable/constant 
  en daar wordt de functie aan toegewezen. Bij een while/for loop is dat minder duidelijk. 
4. Kun je een array method gebruiken op een object? Het antwoord is nee.
Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?
*/

// Opdracht 4: object itereren

const objectOpdracht4 = {
  name: 'Dorine',
  age: 26,
  progressWinc: 80,
  dayToday: 'sunday',
  numberOfDogs: 2
};

for (const property in objectOpdracht4) {
  console.log(property, ":", objectOpdracht4[property]);
}

/* Ben je nu aan het itereren?
Antw: Nee. Zie hieronder. For Each werkt niet bij een object. Wel bij een Array. 
*/

arrayOpdracht4 = ['Dorine', '26', 'progressWinc', 'sunday', 'numberOfDogs'];
// objectOpdracht4.forEach(element => console.log("Printing " + element)); --> code/function werkt niet
arrayOpdracht4.forEach(element => console.log("What is " + element));