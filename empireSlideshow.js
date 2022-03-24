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

let slideIndexEmpire = 1;
showSlides(1);

function plusSlides(n) {
  showSlides(slideIndexEmpire += n);
}

function showSlides(n) {
  let i = 0;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndexEmpire = 1};
  if (n < 1) {slideIndexEmpire = slides.length};
    for (let i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
    }
    slides[slideIndexEmpire-1].style.display = "block"; 
    const specPageTitle = document.getElementById("spec-page-title");
    specPageTitle.textContent = empireShipsArray[slideIndexEmpire -1].title;
    const specPageDesc = document.getElementById("spec-page-desc");
    specPageDesc.textContent = empireShipsArray[slideIndexEmpire -1].description;
    const specClass = document.getElementById("spec-class");
    specClass.textContent = empireShipsArray[slideIndexEmpire -1].classe;
    const specConstruction = document.getElementById("spec-constructor");
    specConstruction.textContent = empireShipsArray[slideIndexEmpire -1].construction;    
    const specLongeur = document.getElementById("spec-longeur");
    specLongeur.textContent = empireShipsArray[slideIndexEmpire -1].length;
    const specLargeur = document.getElementById("spec-largeur");
    specLargeur.textContent = empireShipsArray[slideIndexEmpire -1].width;
    const specSpeed = document.getElementById("spec-speed");
    specSpeed.textContent = empireShipsArray[slideIndexEmpire -1].maxSpeed;
    const specCost = document.getElementById("spec-cost");
    specCost.textContent = empireShipsArray[slideIndexEmpire -1].cost;
    const specPilot = document.querySelector(".imgpilote");
    specPilot.src = empireShipsArray[slideIndexEmpire -1].pilot;
    }