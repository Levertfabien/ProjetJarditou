var count = 1;
var jeune = 0;
var moyen = 0;
var vieux = 0;

do {
    age = window.prompt('Saisissez l\'âge N°' + count + '\nOu cliquez sur Annuler pour arrêter la saisie.');

    if (age != null && age != "") {
        count++;
    }
    if (age < 20 && age > 0) {
        jeune++;

    } else if (age >= 20 && age <= 40) {
        moyen++;

    } else if (age > 40 && age <= 100) {
        vieux++;

    } else if (age > 100) {
        window.alert("ERREUR !");
    }
}
while (age != null && age != "")
console.log("Il y a " + jeune + " jeune(s)." + "\nIl y a " + vieux + " vieux." + "\nIl y a " + moyen + " moyen(s).");