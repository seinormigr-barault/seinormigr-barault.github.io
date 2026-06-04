Contenu du dépôt :
 - assets (dossier contenant images, documents...)
 - index.html
 - style.css
 - script.js

Structure du site :
indinat.github.io
├── index.html
│   │
│   ├── <head>
│   │   ├── Métadonnées SEO
│   │   │   ├── description
│   │   │   ├── keywords
│   │   │   ├── Open Graph
│   │   │   ├── Twitter Card
│   │   │   └── JSON-LD schema.org
│   │   │
│   │   ├── Favicon
│   │   ├── Bootstrap CSS
│   │   ├── Font Awesome
│   │   ├── Google Fonts (Raleway)
│   │   └── style.css
│   │
│   └── <body>
│       │
│       ├── <main>
│       │   │
│       │   ├── HEADER PRINCIPAL (.static-header)
│       │   │   ├── Bannière image
│       │   │   ├── Titre desktop
│       │   │   ├── Titre mobile
│       │   │   ├── Bloc introduction (.chapeau)
│       │   │   └── Navigation ancres
│       │   │       ├── #pnma
│       │   │       ├── #indinat
│       │   │       ├── #indicateurs
│       │   │       └── #pour-aller-plus-loin
│       │   │
│       │   ├── HEADER FIXE (.fixed-header)
│       │   │   ├── Logo
│       │   │   ├── Navigation desktop
│       │   │   └── Menu burger mobile
│       │   │       ├── Bouton burger
│       │   │       ├── Menu latéral mobile
│       │   │       └── Overlay
│       │   │
│       │   └── CONTENU PRINCIPAL (.container__content)
│       │       │
│       │       ├── SECTION 1 : PNMA (#pnma)
│       │       │   ├── Titre
│       │       │   ├── Paragraphes
│       │       │   ├── Listes à puces
│       │       │   ├── Image chronologie
│       │       │   └── Bouton téléchargement PDF
│       │       │
│       │       ├── SECTION 2 : Projet IndiNAT (#indinat)
│       │       │   ├── Texte descriptif
│       │       │   └── Bouton téléchargement rapport
│       │       │
│       │       ├── SECTION 3 : Indicateurs (#indicateurs)
│       │       │   │
│       │       │   ├── Boutons espèces
│       │       │   │   ├── Saumon
│       │       │   │   ├── Grande alose
│       │       │   │   ├── Alose feinte
│       │       │   │   ├── Alose agone
│       │       │   │   ├── Lamproie marine
│       │       │   │   ├── Truite de mer
│       │       │   │   └── Mulet porc
│       │       │   │
│       │       │   ├── Sélecteur indicateur (<select>)
│       │       │   ├── Image espèce dynamique
│       │       │   ├── Bouton plein écran
│       │       │   ├── Container Tableau Public
│       │       │   │   └── iframe dynamique
│       │       │   └── Lien Tableau Public
│       │       │
│       │       └── SECTION 4 : Pour aller plus loin (#pour-aller-plus-loin)
│       │           │
│       │           ├── Bloc présentation Associations Migrateurs
│       │           │   ├── Image carte
│       │           │   └── Texte descriptif
│       │           │
│       │           ├── Bloc missions associations
│       │           │   └── Liste à puces
│       │           │
│       │           ├── Bloc grille associations
│       │           │   │
│       │           │   ├── Bretagne Grands Migrateurs
│       │           │   ├── LOGRAMI
│       │           │   ├── MIGADO
│       │           │   ├── MIGRADOUR
│       │           │   ├── MRM
│       │           │   ├── R2M
│       │           │   └── SEINORMIGR
│       │           │
│       │           │   Chaque carte contient :
│       │           │   ├── Image/logo
│       │           │   ├── Overlay hover
│       │           │   ├── Réseaux sociaux
│       │           │   └── Site web
│       │           │
│       │           └── Bloc lien portail OFB
│       │
│       ├── FOOTER
│       │   ├── Texte financement OFB
│       │   ├── Logo OFB
│       │   ├── Copyright
│       │   └── Bouton Mentions légales
│       │
│       ├── LIGHTBOX Mentions légales
│       │   ├── Fenêtre modale
│       │   ├── Texte juridique
│       │   └── Bouton fermeture
│       │
│       ├── jQuery CDN
│       └── script.js
│
├── style.css
│   │
│   ├── RESET GLOBAL
│   │   ├── box-sizing
│   │   ├── marges
│   │   └── body flex
│   │
│   ├── HEADER
│   │   ├── Header statique
│   │   ├── Header fixe sticky
│   │   ├── Navigation desktop
│   │   └── Menu burger mobile
│   │
│   ├── TYPOGRAPHIE
│   │   ├── Titres
│   │   ├── Paragraphes
│   │   └── Chapeau
│   │
│   ├── CONTENU
│   │   ├── Container principal
│   │   ├── Sections
│   │   └── Mise en page grid/flex
│   │
│   ├── WIDGET INDICATEURS
│   │   ├── Boutons espèces
│   │   ├── Dropdown
│   │   ├── Image dynamique
│   │   ├── Tableau iframe
│   │   └── Liens Tableau Public
│   │
│   ├── GRILLE ASSOCIATIONS
│   │   ├── Cards
│   │   ├── Hover overlay
│   │   ├── Réseaux sociaux
│   │   └── Animations
│   │
│   ├── FOOTER
│   │   ├── Logos
│   │   ├── Copyright
│   │   └── Responsive footer
│   │
│   ├── LIGHTBOX
│   │   ├── Overlay
│   │   ├── Animation ouverture
│   │   ├── Bouton fermeture
│   │   └── Scroll contenu
│   │
│   ├── BOUTONS
│   │   ├── Téléchargement PDF
│   │   ├── Liens CTA
│   │   └── Hover effects
│   │
│   └── MEDIA QUERIES (mobile)
│       ├── Header mobile
│       ├── Menu burger
│       ├── Colonnes -> vertical
│       ├── Responsive widgets
│       ├── Footer mobile
│       └── Adaptation lightbox
│
└── script.js
    │
    ├── NAVIGATION FLUIDE
    │   ├── Smooth scroll ancres
    │   └── Compensation header fixe
    │
    ├── HEADER FIXE
    │   └── Apparition au scroll
    │
    ├── WIDGET INDICATEURS
    │   │
    │   ├── Base images espèces
    │   ├── Base dashboards Tableau Public
    │   ├── Variables DOM
    │   │
    │   ├── Fonctions utilitaires
    │   │   ├── setActiveButton()
    │   │   ├── findIndicator()
    │   │   └── updateImage()
    │   │
    │   ├── Génération boutons espèces
    │   ├── Construction dropdown
    │   ├── Gestion changement indicateur
    │   ├── Injection iframe Tableau
    │   ├── Gestion liens externes
    │   └── Initialisation widget
    │
    └── MENU BURGER MOBILE
        ├── Ouverture/Fermeture
        ├── Overlay
        ├── Animation burger
        └── Fermeture auto clic lien
