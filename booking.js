function menuOneShow(){
    document.getElementById('menu-1').classList.add('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.remove('show');
}
  
function menuTwoShow(){
    document.getElementById('menu-1').classList.remove('show');
    document.getElementById('menu-2').classList.add('show');
    document.getElementById('menu-3').classList.remove('show');
}
  
function menuThreeShow(){
    document.getElementById('menu-1').classList.remove('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.add('show');
}
  
function menusHide() {
    document.getElementById('menu-1').classList.remove('show');
    document.getElementById('menu-2').classList.remove('show');
    document.getElementById('menu-3').classList.remove('show');
}
  
document.getElementById('menu-1-button').addEventListener('mouseover', menuOneShow);
document.getElementById('menu-2-button').addEventListener('mouseover', menuTwoShow);
document.getElementById('menu-3-button').addEventListener('mouseover', menuThreeShow);
  
document.getElementById('menu-1').addEventListener('mouseleave', menusHide);
document.getElementById('menu-2').addEventListener('mouseleave', menusHide);
document.getElementById('menu-3').addEventListener('mouseleave', menusHide);
  
document.getElementById('menu-trigger').addEventListener('click', sideMenuAppears);
document.getElementById('menu-close').addEventListener('click', sideMenuDisappears);
  
function sideMenuAppears() {
    document.getElementById('side-menu').classList.add('show-menu');
}
  
function sideMenuDisappears() {
    document.getElementById('side-menu').classList.remove('show-menu');
}

// Form validation and popup
let myForm = document.querySelector('#contact-form');
myForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    const errors = {};

    // Validate first name
    const firstname = document.getElementById('firstname').value.trim();
    if (!firstname) {
        errors.firstname = 'The first name must not be empty!';
    }

    // Validate last name
    const lastname = document.getElementById('lastname').value.trim();
    if (!lastname) {
        errors.lastname = 'The last name must not be empty!';
    }

    // Validate email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email) {
        errors.email = 'The email must not be empty!';
    } else if (!email.match(emailPattern)) {
        errors.email = 'Please enter a valid email address.';
    }

    // Validate phone number
    const phone = document.getElementById('phone').value.trim();
    const phonePattern = /^\d{10}$/; // Adjusted for 10-digit US numbers
    if (!phone) {
        errors.phone = 'The phone number must not be empty!';
    } else if (!phone.match(phonePattern)) {
        errors.phone = 'Please enter a valid phone number in the format 1234567890.';
    }

    // Display errors
    document.querySelector('.firstname-error-container').textContent = errors.firstname || '';
    document.querySelector('.lastname-error-container').textContent = errors.lastname || '';
    document.querySelector('.email-error-container').textContent = errors.email || '';
    document.querySelector('.phone-error-container').textContent = errors.phone || '';

    // If no errors, show the popup
    if (Object.keys(errors).length === 0) {
        showPopup();
    }
});

// Popup functions
function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block'; // Show the popup
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // Hide the popup
}
