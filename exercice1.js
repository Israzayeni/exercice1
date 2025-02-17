
const genererchiffrealeatoire=(min , max)=>Math.round(Math.random() *(max-min+1))+min;
function difficulite(){
    const d= prompt("choisir le niveau de difficulite entre facile,intermediaire,difficile","facile");
     if (d=="facile"){
        return {NombreDeTentative : 10, IntervalleDeRecherche : 10};
     }
    else if(d=="intermediaire"){
        return {NombreDeTentative : 5, IntervalleDeRecherche : 50};

    }
    else if (d=="difficile"){
        return {NombreDeTentative: 3, IntervalleDeRecherche:100};
    }
     }
function jouer(){
    const ND=difficulite();
    const x=genererchiffrealeatoire(1,ND.IntervalleDeRecherche);
    var NT=ND.NombreDeTentative;
    while (NT>0){
        var y=parseInt(prompt("donner votre essai"));
        if(y==x){
            alert("GAIN");
            break;
         }
         else {
            alert("essayez une autre fois")
         }
        
    }
    if(NT==0){
        alert("PERTE ");
    }
    if(confirm("voulez vous jouer une autre partie")){
        jouer();
    }
}
jouer();
   


   
    

