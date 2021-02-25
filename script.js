// deel 1
// controleer of een getal groter is dan 100
const nummerCheck = function(nummer) {
    if (nummer > 100) {
        return "true";
    }
    return "false";
}
const check = nummerCheck(133);
console.log(check);

// deel 2
// controleer of er nog plek is, en of de persoon volwassen is
const aantalLeeftijd = function(aantal, leeftijd) {
    if (aantal >= 250) {
        return "Sorry, we zitten vol, probeer het later nog een keer";
    }
    if (leeftijd >= 18) {
        return "Kom binnen, er is nog plek";
    }
    return "Dit is een club voor volwassenen, dus helaas mag je er niet in";
};
const controleer = aantalLeeftijd(350, 23);
console.log(controleer);

// deel 3
const gemiddelde = function([n1,n2,n3,n4,n5]) {
    const average = ((n1 + n2 + n3 + n4 + n5) / 5);
    return average;
};
const resultaat = gemiddelde([4,6,7,1,4]);
console.log(resultaat);
console.log("dat is afgerond: " + Math.round(resultaat));

