const rebelShipsArray = [
  {
    title : "Faucon Millenium",
    description : "Le Faucon Millenium, de désignation originale YT-1300 492727ZED, était un cargo léger YT-1300 qui fut utilisé par le célèbre contrebandier Han Solo pendant la Guerre Civile Galactique. ",
    classe : "Cargo léger",
    construction : "Corporation Technique Corellienne",
    length : "34,52 Mètres",
    width : "25,61 Mètres",
    maxSpeed : "1050km/h",
    cost : "A négocier avec Han Solo",
    pilot : "src/img/han_solo_star_wars_7_ccexpress.png"
  },
  {
    title : "Chasseur Jedi",
    description : "L'intercepteur Eta-2 de classe Actis, également connu sous le nom d'intercepteur Jedi ou de chasseur Jedi en raison de son utilisation intensive par les pilotes Jedi, était un chasseur étoile de la République utilisé à la fin de la Guerre des clones. Il partageait des éléments de conception avec les chasseurs Delta-7 et Delta-7B de la République, ainsi qu'avec les chasseurs TIE de l'Empire galactique. L'Alliance Galactique utilisera plus tard son successeur, l'intercepteur Eta-5.",
    classe : "Chasseur stellaire",
    construction : "Kuat Systems Engineering",
    length : "5,47 Mètres",
    width : "4,3 Mètres",
    maxSpeed : "1500km/h",
    cost : "320 000 Crédits",
    pilot : "src/img/Attico_Wred.png"
  },
  {
    title : "X-Wing",
    description : "Les X-Wings furent une série importante de chasseurs stellaires produits par la Corporation Incom puis par Incom-FreiTek. Ils étaient facilement reconnaissables à leurs ailes en X, s'étendant hors du fuselage. Ces chasseurs stellaires furent notamment utilisés par l'Alliance Rebelle qui possédait des X-Wings T-65B et des X-Wings T-65C-A2, puis par la Nouvelle République qui reprit les X-Wings T-65B et innova avec les X-Wings T-85. La Résistance, quand à elle, possédait des X-Wings T-70. ",
    classe : "Chasseur",
    construction : "Corporation Incom et Incom-FreiTek",
    length : "13,4 Mètres",
    width : "11,76 Mètres",
    maxSpeed : "1050km/h",
    cost : "150 000 Crédits",
    pilot : "src/img/Luke_Skywalker_corps rognée2.png"
  },
  {
    title : "Y-Wing",
    description : "Le chasseur Y-Wing BTL, plus simplement nommé Y-Wing BTL ou Y-Wing, était un bombardier utilisé par l'Alliance Rebelle pour combattre l'Empire Galactique comme durant la bataille d'Endor, puis par la Nouvelle République. Il fut à l'origine conçu durant la Guerre des Clones où la République Galactique l'utilisait contre la Confédération des Systèmes Indépendants. ",
    classe : "Bombardier",
    construction : "Manufacture Koensayr",
    length : "23,4 Mètres",
    width : "12 Mètres",
    maxSpeed : "1000km/h",
    cost : "310 000 Crédits",
    pilot : "src/img/Pilote y wing.png"
  },
  {
    title : "A-Wing",
    description : "Le A-Wing RZ-2 était un modèle de chasseur A-Wing fabriqué par les Systèmes d'ingénierie de Kuat, descendant du A-Wing RZ-1. Il était utilisé par la Résistance du temps du conflit contre le Premier Ordre et notamment lors de l'évacuation de D'Qar peu après la destruction de la Base Starkiller, où l'escadron de Tallissan Lintra était composé d'A-Wings RZ-2.",
    classe : "Chasseur",
    construction : "Kuat Systems Engineering",
    length : "7,682 Mètres",
    width : "4,623 Mètres",
    maxSpeed : "1350km/h",
    cost : "190 000 Crédits",
    pilot : "src/img/Poe_Dameron_corps version.png"
  }
]


let slideIndexRebel = 1;
showSlidesRebel(slideIndexRebel);

function plusSlidesRebel(n) {
  showSlidesRebel(slideIndexRebel += n);
}
  function showSlidesRebel(n) {
    let i = 0;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) {slideIndexRebel = 1};
    if (n < 1) {slideIndexRebel = slides.length};
      for (let i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
      }
      slides[slideIndexRebel-1].style.display = "block"; 
      const specPageTitle = document.getElementById("spec-page-title");
      specPageTitle.textContent = rebelShipsArray[slideIndexRebel -1].title;
      const specPageDesc = document.getElementById("spec-page-desc");
      specPageDesc.textContent = rebelShipsArray[slideIndexRebel -1].description;
      const specClass = document.getElementById("spec-class");
      specClass.textContent = rebelShipsArray[slideIndexRebel -1].classe;
      const specConstruction = document.getElementById("spec-constructor");
      specConstruction.textContent = rebelShipsArray[slideIndexRebel -1].construction;
      const specLongeur = document.getElementById("spec-longeur");
      specLongeur.textContent = rebelShipsArray[slideIndexRebel -1].length;
      const specLargeur = document.getElementById("spec-largeur");
      specLargeur.textContent = rebelShipsArray[slideIndexRebel -1].width;
      const specSpeed = document.getElementById("spec-speed");
      specSpeed.textContent = rebelShipsArray[slideIndexRebel -1].maxSpeed;
      const specCost = document.getElementById("spec-cost");
      specCost.textContent = rebelShipsArray[slideIndexRebel -1].cost;
      const specPilot = document.querySelector(".imgpilote");
      specPilot.src = rebelShipsArray[slideIndexRebel -1].pilot;
    }
