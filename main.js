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

// form error check//

let myForm = document.querySelector('#contact-form');
myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let firstNameInput = document.querySelector('#firstname');
    let firstNameText = firstNameInput.value;

    if (firstNameText.length === 0) {
      let errorContainer = document.querySelector('.firstname-error-container')
      errorContainer.textContent = 'The first name must not be empty!'
    }

    let lastNameInput = document.querySelector('#lastname');
    let lastNameText = lastNameInput.value;

    if (lastNameText.length === 0) {
      let errorContainer = document.querySelector('.lastname-error-container')
      errorContainer.textContent = 'The last name must not be empty!'
    }

    let emailInput = document.querySelector('#email');
    let emailText = emailInput.value;

    if (emailText.length === 0) {
      let errorContainer = document.querySelector('.email-error-container')
      errorContainer.textContent = 'The email must not be empty!'
    }

    let phoneInput = document.querySelector('#phone');
    let phoneTel = phoneInput.value;

    if (phoneTel.length === 0) {
      let errorContainer = document.querySelector('.phone-error-container')
      errorContainer.textContent = 'The phone number must not be empty!'
    }    

    else if (phoneTel.length !== 10) {
        let errorContainer = document.querySelector('.phone-error-container')
        errorContainer.textContent = 'The phone number must be 10 digits!'
      } 
})

