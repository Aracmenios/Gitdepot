function table_multiplication(nombre)
		{
// taper un nombre de 0 à 12 pour afficher la table de ce chifre //
		var i;
		for (i=0; i<=12; i++) {
		    resultat=nombre*i;
			document.write(nombre+" x "+i+"="+nombre*i+"<br>");
			                  }
		}					  
        nombre=window.prompt("Entrez le numéro de la table:","Saisir un entier ici");
			table_multiplication(nombre);