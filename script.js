$(document).ready(function () {
  $('a[href^="#"]')
    .not('[href="#image1"]')
    .not('[href="#!"]')
    .not('[data-role="open-tableau"]')
    .on("click", function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $target.offset().top - $(".fixed-header").outerHeight()
          },
          900,
          "swing",
          function () {
            history.replaceState(null, null, target);
          }
        );
    });
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
    $(".fixed-header").slideDown();
  } else {
    $(".fixed-header").slideUp();
  }
});

// Début widget de visualisation des indicateurs

// ======================
// IMAGES DES ESPÈCES
// ======================

const speciesImages = {
  Saumon: "https://seinormigr-barault.github.io/assets/SAT.png?max=400",

  "Grande alose": "https://seinormigr-barault.github.io/assets/ALA.png?max=400",

  "Alose feinte": "https://seinormigr-barault.github.io/assets/ALF.png?max=400",

  "Alose agone": "url",

  "Lamproie marine":
    "https://seinormigr-barault.github.io/assets/LPM.png?max=400",

  "Truite de mer":
    "https://seinormigr-barault.github.io/assets/TRM.png?max=400",

  "Mulet porc": "https://seinormigr-barault.github.io/assets/MUP.png?max=400"
};

// ======================
// DATA TABLEAU
// ======================

const data = {
  Saumon: {
    "Effectifs de géniteurs potentiels de Saumon aux stations de comptage": `
                <div class="tableau-wrapper">
                    <iframe
                        src="https://public.tableau.com/views/SATSTACOMI2024/TB?:showVizHome=no"
                        class="tableau-frame">
                    </iframe>
                </div>
                `,

    "Production naturelle de juvéniles de Saumon (tacons 0+)": `
                <div class="tableau-wrapper">
                    <iframe
                        src="https://public.tableau.com/views/SATTACONS2024/TB?:showVizHome=no"
                        class="tableau-frame">
                    </iframe>
                </div>
                `
  },

  "Grande alose": {
    "Effectifs de géniteurs potentiels de Grandes aloses": `
                <div class="tableau-wrapper">
                    <iframe
                        src="https://public.tableau.com/views/ALASTACOMI2024/TB?:showVizHome=no"
                        class="tableau-frame">
                    </iframe>
                </div>
                `
  },

  "Alose feinte": {
    "Indice de l’activité de reproduction des Aloses feintes": `
                <div class="tableau-wrapper">
                    <iframe
                        src="https://public.tableau.com/views/ALFREPRO2024/TB?:showVizHome=no"
                        class="tableau-frame">
                    </iframe>
                </div>
                `
  },

  "Alose agone": {
    "Indice de l’activité de reproduction des Aloses agones": `
                <div class="tableau-wrapper">
                    <iframe
                        src="https://public.tableau.com/views/ALGREPRO2024/TB?:showVizHome=no"
                        class="tableau-frame">
                    </iframe>
                </div>
                `
  },

  "Lamproie marine": {
    "Effectifs de géniteurs potentiels de Lamproies marines aux stations de comptage des migrations": `
                <div class="tableau-wrapper">
                    <iframe
                        src="https://public.tableau.com/views/LPMSTACOMI2024/TB?:showVizHome=no"
                        class="tableau-frame">
                    </iframe>
                </div>
                `,

    "Indice de l’activité de reproduction des Lamproies marines": `
                <div class="tableau-wrapper">
                    <iframe
                        src="https://public.tableau.com/views/LPMREPRO2024/TB?:showVizHome=no"
                        class="tableau-frame">
                    </iframe>
                </div>
                `
  },

  "Truite de mer": {
    "Effectifs de géniteurs potentiels de Truites de mer aux stations de comptage des migrations": `
                <div class="tableau-wrapper">
                    <iframe
                        src="https://public.tableau.com/views/TRMSTACOMI2024/TB?:showVizHome=no"
                        class="tableau-frame">
                    </iframe>
                </div>
                `
  },

  "Mulet porc": {
    "Effectifs de Mulets porcs aux stations de comptage des migrations": `
                <div class="tableau-wrapper">
                    <iframe
                        src="https://public.tableau.com/views/MUPSTACOMI2024/TB?:showVizHome=no"
                        class="tableau-frame">
                    </iframe>
                </div>
                `
  }
};

// ======================
// URLS TABLEAU PUBLIC
// ======================

const tableauLinks = {
  "Effectifs de géniteurs potentiels de Saumon aux stations de comptage":
    "https://public.tableau.com/views/SATSTACOMI2024/TB?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

  "Production naturelle de juvéniles de Saumon (tacons 0+)":
    "https://public.tableau.com/views/SATTACONS2024/TB?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

  "Effectifs de géniteurs potentiels de Grandes aloses":
    "https://public.tableau.com/views/ALASTACOMI2024/TB?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

  "Indice de l’activité de reproduction des Aloses feintes":
    "https://public.tableau.com/views/ALFREPRO2024/TB?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

  "Indice de l’activité de reproduction des Aloses agones":
    "https://public.tableau.com/views/ALGREPRO2024/TB?:language=fr-FR&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

  "Effectifs de géniteurs potentiels de Lamproies marines aux stations de comptage des migrations":
    "https://public.tableau.com/views/LPMSTACOMI2024/TB?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

  "Indice de l’activité de reproduction des Lamproies marines":
    "https://public.tableau.com/views/LPMREPRO2024/TB?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

  "Effectifs de géniteurs potentiels de Truites de mer aux stations de comptage des migrations":
    "https://public.tableau.com/views/TRMSTACOMI2024/TB?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",

  "Effectifs de Mulets porcs aux stations de comptage des migrations":
    "https://public.tableau.com/views/MUPSTACOMI2024/TB?:language=fr-FR&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
};

// ======================
// VARIABLES
// ======================

let currentSpecies = null;

const btnContainer = document.getElementById("species-buttons");
const select = document.getElementById("indicator-select");
const tableau = document.getElementById("tableau-container");
const speciesImage = document.getElementById("species-image");
const tableauLink = document.querySelector('[data-role="open-tableau"]');

// ======================
// UPDATE IMAGE
// ======================

function updateImage() {
  if (currentSpecies && speciesImages[currentSpecies]) {
    speciesImage.innerHTML = `
                    <img src="${speciesImages[currentSpecies]}" alt="${currentSpecies}">
                `;
  } else {
    speciesImage.innerHTML = "";
  }
}

// ======================
// BOUTONS ESPÈCES
// ======================

Object.keys(data).forEach((species) => {
  const btn = document.createElement("button");

  btn.className = "species-btn";
  btn.textContent = species;

  btn.addEventListener("click", () => {
    if (currentSpecies === species) {
      currentSpecies = null;

      document
        .querySelectorAll(".species-btn")
        .forEach((b) => b.classList.remove("active"));
    } else {
      currentSpecies = species;

      document
        .querySelectorAll(".species-btn")
        .forEach((b) => b.classList.remove("active"));

      btn.classList.add("active");
    }

    updateImage();
    buildDropdown();
  });

  btnContainer.appendChild(btn);
});

// ======================
// BUILD DROPDOWN
// ======================

function buildDropdown() {
  select.innerHTML = "";

  const placeholder = document.createElement("option");

  placeholder.textContent = "Choisir un indicateur";
  placeholder.value = "";
  placeholder.disabled = true;
  placeholder.selected = true;
  placeholder.hidden = true;

  select.appendChild(placeholder);

  if (currentSpecies) {
    addGroup(currentSpecies, data[currentSpecies]);
  } else {
    Object.keys(data).forEach((species) => {
      addGroup(species, data[species]);
    });
  }
}

// ======================
// AJOUT OPTIONS
// ======================

function addGroup(label, indicators) {
  Object.keys(indicators).forEach((ind) => {
    const option = document.createElement("option");

    option.value = ind;
    option.textContent = ind;

    select.appendChild(option);
  });
}

// ======================
// AFFICHAGE TABLEAU
// ======================

select.addEventListener("change", function () {
  const indicator = this.value;

  if (!indicator) return;

  let found = null;

  const searchSpace = currentSpecies ? [currentSpecies] : Object.keys(data);

  searchSpace.forEach((species) => {
    if (data[species][indicator]) {
      found = data[species][indicator];
    }
  });

  // Affichage iframe
  tableau.innerHTML = found || "";

  // Mise à jour lien Tableau Public
  if (tableauLinks[indicator]) {
    tableauLink.href = tableauLinks[indicator];
  } else {
    tableauLink.href = "#";
  }
});

// ======================
// INIT
// ======================

buildDropdown();

// Fin widget de visualisation des indicateurs

// Début menu burger
$(".burger, .overlay").click(function () {
  $(".burger").toggleClass("clicked");
  $(".overlay").toggleClass("show");
  $(".menu-mobile").toggleClass("show");
  $("body").toggleClass("overflow");
});

// Fermeture du menu au clic sur un lien
$(".menu-mobile a").click(function () {
  $(".burger").removeClass("clicked");
  $(".overlay").removeClass("show");
  $(".menu-mobile").removeClass("show");
  $("body").removeClass("overflow");
});
// Fin menu burger
