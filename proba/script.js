const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);


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
            images: ["img/image1.png", "img/image2.png", "img/image3.png"]
        },
        {
            title: "Dióhéjas tisztítás",
            text: "Az innovatív, dióhéjjal való tisztítástól a járművek motorjai fellélegezhetnek, legyen szó akár benzines, akár diesel motorról! Az eljárás során eltávolítjuk a szívócsatornákból a lerakódott kormot és az esetlegesen megragadt olajsarat. Bővebb információ a Facebook oldalunkon található.",
            images: ["img/image4.png", "img/image5.png", "img/image6.png"]
        },
        {
            title: "Motor és váltó felújítás",
            text: "Teljeskörű motorfelújítás, hengerfejezés, csapágyazás, váltófelújítás.",
            images: ["img/image7.png", "img/image8.png", "img/image9.png"]
        },
        {
            title: "Céges flotta javítás",
            text: "Kisebb vállkozásoknak (max. 10 autó) vállaljuk a szervizelését, opcionálisan kiszállással is.",
            images: ["img/image10.png", "img/image11.png", "img/image12.png"]
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

    // A modális ablak megnyitása
    function openBookingModal() {
    document.getElementById("bookingModal").style.display = "block";
    }

    // A modális ablak bezárása 
    function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    }

    // Ha a felhasználó a modálison kívül kattint, akkor zárja be
    window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
        modals[i].style.display = "none";
        }
    }
    }

