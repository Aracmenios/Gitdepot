const tab = ["audrey","aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];
const saisie = window.prompt(`Veuillez choisir un prénom parmi ${[...tab]}.`)
if(tab.includes(saisie)){
	tab.splice(tab.indexOf(saisie),1);
	tab.push(" ");
	console.log(tab)
}
else{alert("erreur")}
