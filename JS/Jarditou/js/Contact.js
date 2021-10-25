

// vérification de formulaire 

        let formValid = document.getElementById('Bouton_Envoi');

/////////////////////////////////////////////////////////////////////////
//  DECLARATION VARABLES POUR CONTROLE CHAMP VIDE                   //
/////////////////////////////////////////////////////////////////////////

// Variable Prénom/PrenomManquant
        let prenom = document.getElementById('prenom');
        let prenomManquant = document.getElementById('prenomManquant');
        let prenomValid = /^[a-zA-Z]+$/;
         
// Variable Nom/NomManquant
        let nom = document.getElementById('nom');
        let nomManquant = document.getElementById('nomManquant');
        let nomValid = /^[a-zA-Z]+$/;

// Variable date de naissance
        let DDN= document.getElementById('DDN');
        let noDDN = document.getElementById('noDDN');
        let DDNValid = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

//Variable choix du sexe
        let Mr=document.getElementById('Mr').Homme;
        let Mme=document.getElementById('Mme').Femme;
        let Neutre=document.getElementById('Neutre').Neutre;

// Variable Code Postal/codePostalManquant
        let CP = document.getElementById('CP');
        let CPManquant = document.getElementById('CPManquant');
        let CPValid = /^[0-9]{5}$/;

// Variable adresse/adresseManquant
        let adresse = document.getElementById('adresse');
        let adresseManquant = document.getElementById('adresseManquant');
        let adresseValid = /^[\s0-9a-zA-Z]+$/;

// Variable ville/villeManquant
        let ville = document.getElementById('ville');
        let villeManquant = document.getElementById('villeManquant');
        let villeValid = /^[-/a-zA-Z]+$/;

// Variable email/emailManquant
        let email = document.getElementById('email');
        let emailManquant = document.getElementById('emailManquant');
        let emailValid = /^[0-9a-zA-Z]+[@]+[0-9a-zA-Z]+[.]+[a-zA-z]{2,3}$/;

// variable checkbox accepte 
        let accepte=document.getElementById ('accepte').checked;
        let sujet=document.getElementById ('sujet').value;
        
// controle par Click
        formValid.addEventListener('click', validation);

////////////////////////////////////////////////////////////////////////////
//  function Validation  -controle champs vide et conditions              //
////////////////////////////////////////////////////////////////////////////

function validation(event){
// Nom ////////// 
        if (nom.validity.valueMissing)
        {
        event.preventDefault();
        nomManquant.textContent = 'Le nom est manquant.';
        nomManquant.style.color = 'red';
        }
        else if (nomValid.test(nom.value) == false)
        {
        event.preventDefault();
        nomManquant.textContent = 'Format incorrect pour le nom (a-zA-z autorisé).';
        nomManquant.style.color = 'orange';
        }else {
        }

// Prénom /////////
    if (prenom.validity.valueMissing)
        {
        event.preventDefault();
        prenomManquant.textContent = 'Le prénom est manquant.';
        prenomManquant.style.color = 'red';
        }
        else if (prenomValid.test(prenom.value) == false)
        {
        event.preventDefault();
        prenomManquant.textContent = 'Format incorrect pour le prénom (a-zA-Z autorisé).';
        prenomManquant.style.color = 'orange';
        }else {
        }
       
// Date de naissance //////////

        if (DDN.validity.valueMissing)
        {
        event.preventDefault();
        noDDN.textContent = 'La date de naissance est manquante.';
        noDDN.style.color = 'red';
        }
        else if (DDNValid.test(DDN.value) == false)
        {
        event.preventDefault();
        noDDN.textContent = 'Format incorrect pour la date( type jj/mm/aaaa requis).';
        noDDN.style.color = 'orange';
        }else {
        }


// Code postal //////////
if (CP.validity.valueMissing)
        {
        event.preventDefault();
        CPManquant.textContent = 'Le code postal est manquant.';
        CPManquant.style.color = 'red';
        }
        else if (postalValid.test(CP.value) == false)
        {
        event.preventDefault();
        CPManquant.textContent = 'Format incorrect pour le code postal (0-5 autorisé, 5 chiffres obligatoires).';
        CPManquant.style.color = 'orange';
        }else {
        }

// adresse /////////
        if (adresse.validity.valueMissing)
        {
        event.preventDefault();
        adresseManquant.textContent = "L'adresse est manquante.";
        adresseManquant.style.color = 'red';
        }
        else if (adresseValid.test(adresse.value) == false)
        {
        event.preventDefault();
        adresseManquant.textContent = "Format incorrect pour l'adresse (0-9 et a-zA-Z autorisé).";
        adresseManquant.style.color = 'orange';
        }else {
        }

// ville //////////
        if (ville.validity.valueMissing)
        {
        event.preventDefault();
        villeManquant.textContent = 'La ville est manquante.';
        villeManquant.style.color = 'red';
        }
        else if (villeValid.test(ville.value) == false)
        {
        event.preventDefault();
        villeManquant.textContent = "Format incorrect pour la ville (a-zA-Z et - / autorisé).";
        villeManquant.style.color = 'orange';
        }else {
        }

// Email //////////
        if (email.validity.valueMissing)
        {
        event.preventDefault();
        emailManquant.textContent = 'Le courriel est manquant.';
        emailManquant.style.color = 'red';
        }
        else if (emailValid.test(email.value) == false)
        {
        event.preventDefault();
        emailManquant.textContent = "Format incorrect pour le courriel (type pseudo@operateur.xxx).";
        emailManquant.style.color = 'orange';
        }else {
        }

// Controle case sexe //////////
        if (Mr == false && Mme == false && Neutre == false)
        {
        sexeManquant.textContent ="Veuillez cocher une case.";
        sexeManquant.style.color ="red"}

// controle checkbox "accepte" //////////
        if (accepte == false)
        { accepteManquant.textContent = "Veuillez cocher la case.";
        accepteManquant.style.color ="red";
}

if(sujet == 1)
    {
        sujetManquant.textContent ="Veuillez selectionner un sujet.";
        sujetManquant.style.color ="red";
    }

}//fermeture function valider

