// var menuMobile = document.querySelector(".headernavMobile");
// var iconMenu = document.querySelector(".headericonMenu");
// var iconClose = document.querySelector(".header__closeMenu");

// iconMenu.addEventListener("click", function() {
//   menuMobile.classList.add("is-visible");
// });

// iconClose.addEventListener("click", function() {
//   menuMobile.classList.remove("is-visible");
// });
// Personalisation
function openForm() {
  document.getElementById("popup").style.display = "block";
}
var unchecked;
document.addEventListener("DOMContentLoaded", function() {
  console.log("Document loaded, running init");
  loadHTMLSection("header", "#headerJS");
  loadHTMLSection("footer", "#footerJS");
  uncheckBM();
  //loadHTMLSection('header_mobile');
  //loadHTMLSection('footer');
});

function loadHTMLSection(id, query) {
  switch (id) {
    case "header":
      document
        .querySelectorAll(query)
        .forEach(element => (element.innerHTML = getHeader()));
      return;
    case "footer":
      document
        .querySelectorAll(query)
        .forEach(element => (element.innerHTML = getFooter()));
      return;
    default:
      console.log(`Unknown html id: ${id}`);
      return;
  }
}
function getHeader() {
  return `  <header>
  <div class="headerContent">
    <a href="index.html" class="headerLogo"></a>
  
    <div class="headernavDesktop">
      <ul class="headernavDesktopItems header__menu">
        <li><a href="#">Phénix</a></li>
        <li>
          <a href="#collection">Collection</a>
        </li>
        <li><a href="#materiaux">Matériaux</a></li>
        <li>
          <a href="#collaborations">Collaborations</a>
        </li>
        <li>
          <a href="#concept">Concept</a>
        </li>
      </ul>
    </div>
    <div class="header__icons">
      <div class="header__icon header__icon--shop"></div>
      <button class="openForm__button" onclick="openForm()"><div class="header__icon header__icon--user"></div></button>
    </div>
  </div>
  <!--Mobile-->
  <div class="mobile">
    <h1>Redivivus<span></span></h1>
    <div>
      <input id="burger" type="checkbox" />

      <label for="burger">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <nav>
        <ul>
          <li><a class="uncheckBurgerMenu" href="../index.html">Accueil</a></li>
          <li><a href="#">panier</a></li>
          <li><a href="#">user</a></li>
        </ul>
    </div>
    </nav>
  </div>
</header>`;
}

function getFooter() {
  return `<footer class="footer">
  <ul>
    <li><a href="#">Mentions légales</a></li>
    <li><a href="#">Cookies</a></li>
    <li><a href="#">Nous contacter</a></li>
    <li><a href="#">Livraison & retours</a></li>
    <li><a href="#">FAQ</a></li>
    <li><svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="10" height="20" fill="#41479B" />
        <rect x="10" width="10" height="20" fill="#F5F5F5" />
        <rect x="20" width="10" height="20" fill="#FF4B55" />
      </svg>
    </li>
  </ul>
</footer>`;
}

// Personalisation

let divChoices = document.querySelectorAll(".mainContent__choice");

for (let i = 0; i < divChoices.length; i++) {
  let divChoice = divChoices[i];
  divChoice.addEventListener("click", function() {
    let infosDiv = divChoice.querySelector(".mainContent__infos");
    let titleDiv = divChoice.querySelector("h2");
    let subtitleDiv = divChoice.querySelector("h3");
    infosDiv.style.transform = "translateY(0)";
    titleDiv.style.display = "none";
    subtitleDiv.style.display = "block";
  });
}

let cuirJacket = document.querySelector(".choiceContent__jackets--cuir");
let bronzeJacket = document.querySelector(".choiceContent__jackets--bronze");
let divColors = document.querySelectorAll(".choiceContent__singleColor");
let jacketVisible = document.querySelector(
  ".choiceContent__jackets.is-visible"
);
let beigeJacket = document.querySelector(".choiceContent__jackets--beige");
let brownJacket = document.querySelector(".choiceContent__jackets--brown");
let darkbrownJacket = document.querySelector(
  ".choiceContent__jackets--darkbrown"
);

let redJacket = document.querySelector(".choiceContent__jackets--red");
let blackJacket = document.querySelector(".choiceContent__jackets--black");
let greenJacket = document.querySelector(".choiceContent__jackets--green");

for (i = 0; i < divColors.length; i++) {
  let divColor = divColors[i];
  divColor.addEventListener("click", function() {
    jacketVisible.classList.remove("is-visible");
    if (divColor.classList.contains("choiceContent__color--cuir")) {
      cuirJacket.classList.add("is-visible");
    }
    if (divColor.classList.contains("choiceContent__color--bronze")) {
      bronzeJacket.classList.add("is-visible");
    }
    // LA
    if (divColor.classList.contains("choiceContent__color--beige")) {
      beigeJacket.classList.add("is-visible");
    }

    if (divColor.classList.contains("choiceContent__color--brown")) {
      brownJacket.classList.add("is-visible");
    }

    if (divColor.classList.contains("choiceContent__color--darkbrown")) {
      darkbrownJacket.classList.add("is-visible");
    }

    if (divColor.classList.contains("choiceContent__color--red")) {
      redJacket.classList.add("is-visible");
    }

    if (divColor.classList.contains("choiceContent__color--black")) {
      blackJacket.classList.add("is-visible");
    }

    if (divColor.classList.contains("choiceContent__color--green")) {
      greenJacket.classList.add("is-visible");
    }
    jacketVisible = document.querySelector(
      ".choiceContent__jackets.is-visible"
    );
  });
}
// init

/*  function getHTMLSection(id, callback) {
    var request = new XMLHttpRequest();

    request.open("GET", `/section/${id}.html`, true);
    request.onload = function() {
      try {
        console.log("R", request);

        const body = request.responseText;

        console.log("HTML SECTION", body);
        callback({ result: true, html: body });
      } catch (e) {
        console.log(e, request.responseText);
        callback({ result: false, info: e });
      }
    };
    //request.responseType = "document";
    request.send();
  } */

/*
SYNCHRONOUS
lit 
ecrit
save

lit
ecrit
ASYNCHRONOUS -- envoie reseau
save
*/
function getUncheck() {
  document.getElementById("burger").checked = false;
  console.log("we did it");
}

function uncheckBM() {
  unchecked = document.querySelectorAll(".uncheckBurgerMenu");
  console.log("waiting4u");
  console.log(unchecked);
  for (var i = 0; i < unchecked.length; i++) {
    unchecked[i].addEventListener("click", getUncheck);
  }

  // Alert

  let buy = document.querySelector(".choiceContent__buy");

  for (i = 0; i < 1; i++) {
    buy.addEventListener("click", function() {
      alert(
        "Merci pour votre achat, c'est un petit pas pour l'homme mais un grand pas pour l'environnement ! "
      );
    });
  }
}
