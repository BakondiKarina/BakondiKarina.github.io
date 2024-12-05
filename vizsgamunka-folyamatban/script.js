const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);
}

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

let navbarItem = document.querySelector('.navbar__item');
let styles = window.getComputedStyle(navbarItem);
console.log(styles);

const modal = document.getElementById('serviceModal');
    const closeBtn = document.querySelector('.closeBtn');
    
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const modalImages = document.getElementById('modalImages');
    
    const modalImage1 = document.getElementById('modalImage1');
    const modalImage2 = document.getElementById('modalImage2');
    const modalImage3 = document.getElementById('modalImage3');

    // Szolgáltatás adatok
    const servicesData = [
        {
            title: "Általános szervíz",
            text: "Olajcsere, kopó alkatrészek cseréje, általános állapotfelmérés, hibakódolvasás, műszaki vizsga felkészítés.",
            images: ["image1.jpg", "image2.jpg", "image3.jpg"]
        },
        {
            title: "Dióhéjas tisztítás",
            text: "Az innovatív, dióhéjjal való tisztítástól a járművek motorjai fellélegezhetnek, legyen szó akár benzines, akár diesel motorról! Az eljárás során eltávolítjuk a szívócsatornákból a lerakódott kormot és az esetlegesen megragadt olajsarat. Bővebb információ a Facebook oldalunkon található.",
            images: ["image4.jpg", "image5.jpg", "image6.jpg"]
        },
        {
            title: "Motor és váltó felújítás",
            text: "Teljeskörű motorfelújítás, hengerfejezés, csapágyazás, váltófelújítás.",
            images: ["image7.jpg", "image8.jpg", "image9.jpg"]
        },
        {
            title: "Céges flotta javítás",
            text: "Kisebb vállkozásoknak (max. 10 autó) vállaljuk a szervizelését, opcionálisan kiszállással is.",
            images: ["image10.jpg", "image11.jpg", "image12.jpg"]
        }
    ];

    // Módosítjuk a modál tartalmát és képeit
    function openModal(serviceIndex) {
        const service = servicesData[serviceIndex];
        
        // A modál szövege és képek
        modalTitle.textContent = service.title;
        modalText.textContent = service.text;
        
        modalImage1.src = service.images[0];
        modalImage2.src = service.images[1];
        modalImage3.src = service.images[2];

        // Megjelenítjük a modált
        modal.style.display = 'block';
    }

    // Bezáró gomb működése
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Kattintás kívül a modálon
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // A "Bővebben" gombokhoz eseménykezelő hozzáadása
    const serviceButtons = document.querySelectorAll('.showModalBtn');
    
    serviceButtons.forEach((button, index) => {
        button.addEventListener('click', () => openModal(index));
    });
