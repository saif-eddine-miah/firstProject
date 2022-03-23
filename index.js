
let slideIndex = 1;
const empireShipsArray = [
  {
    title : "Chasseur TIE",
    description : "Le chasseur TIE (Twin Ion Engine ou Double Moteur Ionique) fut construit par le système de flotte Sienar. Il est assurément le chasseur qui aura vu le plus de modèles différents. Ce chasseur était rapide et maniable. Le chasseur TIE est redoutable en combat rapproché. Il fut le fleuron de la chasse impériale à raison de plus d'un million d'unités en service en l'an 3 ap.BY. Son bruit caractéristique et son aspect menaçant en firent un engin très reconnaissable.Toutefois, le chasseur TIE était conçu pour un déploiement en masse, au détriment de la qualité. Son équipement était minimaliste, ce qui en fait un appareil vulnérable. Ainsi, le chasseur TIE n’était ni équipé d'hyperpropulseur ni d'astromécano. Les boucliers déflecteurs étaient inexistants, tout comme les systèmes de survie.",
    classe : "Chasseur stellaire",
    construction : "Sienar Fleet System",
    length : "6,3 Mètres",
    width : "6,4 Mètres",
    maxSpeed : "1200km/h",
    cost : "60 000 Crédits",
    pilot : "src/img/figurine-tie-fighter-pilot-backstabber-mouse-droid-exclusive-kotobukiya_ccexpress.png"
  },
  {
    title : "Intercepteur TIE",
    description : "L'Intercepteur TIE comportait quatre panneaux solaires pointus très reconnaissables, et était bien plus meurtrier que le chasseur TIE standard. Malgré son absence de boucliers et d'hyperdrive, il compensait avec une vitesse de 1250 km/h[4] grâce à des moteurs améliorés assurant une vitesse et une manœuvrabilité considérablement accrues. De plus, les quatre canons laser aux bouts de ses ailes apportaient bien plus de puissance de feu afin de surcharger les boucliers des vaisseaux ennemis. ",
    classe : "Intercepteur stellaire",
    construction : "Sienar Fleet System",
    length : "11,45 Mètres",
    width : "8,08 Mètres",
    maxSpeed : "1250km/h",
    cost : "120 000 Crédits",
    pilot : "src/img/pilot interceptor TIE.png"
  },
  {
    title : "Navette T-4a Lambda",
    description : "La forme générale de la navette dite 'Impériale' est facilement reconnaissable. Celle-ci est constituée d'une nacelle de pilotage imposante, prolongée par la section des passagers et par la partie motrice à l'arrière .La navette Lambda était basée sur le design d'un avion à trois ailes avec une aile centrale stationnaire et de deux ailes repliables. En position de vol, les ailes ressemblaient à un Y renversé. Au moment de se poser, les ailes inférieures se repliaient pour laisser sortir des trains d'atterrissage.",
    classe : "Navette",
    construction : "Sienar Fleet System",
    length : "20 Mètres",
    width : "22 Mètres",
    maxSpeed : "850km/h",
    cost : "140 000 Crédits",
    pilot : "src/img/Daco Pilote empire.png"
  },
  {
    title : "Navette de commande Upsilon",
    description : "La navette de commandement de classe Upsilon, plus simplement appelée la navette de classe Upsilon, était une navette fabriquée par les Systèmes de Flotte Sienar-Jaemus[1] pour le Premier Ordre environ trente ans après la bataille d'Endor, l'une d'elle appartenait à Kylo Ren, il l'utilisa pour aller sur Jakku notamment.",
    classe : "Navette",
    construction : "Sienar-Jaemus Fleet System",
    length : "19,1 Mètres",
    width : "13,5 Mètres sans les ailes et 37,2 mètres",
    maxSpeed : "950km/h",
    cost : "250 000 Crédits",
    pilot : "src/img/most-elite-squad-in-the-galactic-empire-star-wars-at-at-pilot-person-human-astronaut-helmet-transparent-png-2584697.png"
  },
  {
    title : "Voilier Solaire Punworcca 116",
    description : "Le voilier solaire est un vaisseau appartenant à Dooku pendant la Guerre des Clones. C'est un vaisseau furtif n'étant pas détecté par les radars, il peut donc aller partout comme sur Coruscant. Dooku l'utilisa de nombreuses fois durant la guerre comme pour s'enfuir de Geonosis ou, des années après, pour atterrir furtivement dans la forteresse de Ord Mantell City pour capturer Dark Maul. Asajj Ventress en disposait d'un exemplaire aussi, notamment sur Rugosa. ",
    classe : "Yacht",
    construction : "Huppla Pasa Tisc Collective",
    length : "15,2 Mètres",
    width : "4,6 Mètres",
    maxSpeed : "1600km/h",
    cost : "35 000 Crédits sans voile",
    pilot : "src/img/Count Dooku.png"
  }
]
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
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i = 0;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};
    for (let i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block"; 
    const specPageTitle = document.getElementById("spec-page-title");
    specPageTitle.textContent = empireShipsArray[slideIndex -1].title;
    const specPageDesc = document.getElementById("spec-page-desc");
    specPageDesc.textContent = empireShipsArray[slideIndex -1].description;
    const specClass = document.getElementById("spec-class");
    specClass.textContent = empireShipsArray[slideIndex -1].classe;
    const specConstruction = document.getElementById("spec-constructor");
    specConstruction.textContent = empireShipsArray[slideIndex -1].construction;    
    const specLongeur = document.getElementById("spec-longeur");
    specLongeur.textContent = empireShipsArray[slideIndex -1].length;
    const specLargeur = document.getElementById("spec-largeur");
    specLargeur.textContent = empireShipsArray[slideIndex -1].width;
    const specSpeed = document.getElementById("spec-speed");
    specSpeed.textContent = empireShipsArray[slideIndex -1].maxSpeed;
    const specCost = document.getElementById("spec-cost");
    specCost.textContent = empireShipsArray[slideIndex -1].cost;
  }


  const specPilot = document.querySelector(".imgpilote");{
    specPilot.src = empireShipsArray[slideIndex -1].pilot;
    }

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
