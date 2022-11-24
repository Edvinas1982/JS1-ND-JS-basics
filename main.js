// UŽDUOTIS
// Parašykite programą, kuri turėtų du kintamuosius, saugančius stačiakampio pločio
// ir aukščio reikšmes.
// Panaudodami matematines operacijas ir duotus kintamuosius apskaičiuokite
// stačiakampio perimetrą, plotą ir įstrižainę.
// Pasirinktu būdu atspausdinkite pradinius stačiakampio duomenis (plotį ir aukštį) ir
// suskaičiuotus rezultatus.
// ✶) Raskite būdą kaip rezultatą išvesti ne tik į concole, bet ir kaip kažkokio
// puslapyje esančio <div> elemento reikšmę

// staciakampio plotis
var plotis = 8;

// staciakampio ilgis
var aukstis = 4;

// staciakampio perimetras
var perimetras = 2 * (plotis + aukstis);
console.log('Staciakampio perimetras yra lygus = ' + perimetras + ' cm');
function myFunction() {
    document.getElementById("atsakymas").innerHTML = perimetras + ' cm';
}

// staciakampio plotas
var plotas = plotis * aukstis;
console.log('Staciakampio plotas yra lygus = ' + plotas+ ' cm2');
function myFunction1() {
    document.getElementById("atsakymasPL").innerHTML = plotas + ' cm2';
}
// staciakampio istrizaine
var istrizaine = Math.sqrt((plotis * plotis) + (aukstis * aukstis));
console.log('Staciakampio istrizaine yra lygi = ' + istrizaine + ' cm');
function myFunction2() {
    document.getElementById("atsakymasIS").innerHTML = istrizaine + ' cm';
}
