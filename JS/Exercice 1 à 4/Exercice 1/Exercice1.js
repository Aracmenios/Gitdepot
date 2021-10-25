var j=0;
var a=0;
var v=0;
var personnes;
do {
  personnes = window.prompt("Entrez votre age");
  // taper nombre  entre 1 et 20 = jeune //
  if ( personnes <20) {
    j++;
    console.log(personnes);
  }
  // taper nombre entre 20 et 40 = adulte //
  else if ((personnes >=20) && (personnes <=40)){
    a++;
  }
  // taper nombre entre 40 et 100 = vieux //
  else if ((personnes >=40 ) && (personnes <=100)) {
    v++;
    console.log(v);
  }
}
// centenaire //
while (personnes < 100);
 
window.alert("Il y a " + "" + j + "" + " jeunes\n " + "Il y a " + "" + a + "" + " adulte\n " + " Il y a " + " Il y a " + "" + v + "" +" vieux\n " + " dont "+ " 1 " + "" + " centenaire ");
console.log ("jeunes " + j,"\nadultes " + a,"\nvieux "+ v);
 document .write(personnes=" Il y a jeune" +j,"\n Il y adulte"  +a,"\n Il y a vieux" +v);