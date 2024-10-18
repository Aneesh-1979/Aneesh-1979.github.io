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

let myForm = document.querySelector('#login');
myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let emailInput = document.querySelector('#email');
    let emailText = emailInput.value;

    if (emailText.length === 0) {
      let errorContainer = document.querySelector('.email-error-container')
      errorContainer.textContent = 'The email must not be empty!'
    }

    let passwordInput = document.querySelector('#password');
    let passwordText = passwordInput.value;

    if (passwordText.length === 0) {
      let errorContainer = document.querySelector('.password-error-container')
      errorContainer.textContent = 'The password must not be empty!'
    }
    else if (passwordText.length !== 12) {
        let errorContainer = document.querySelector('.password-error-container')
        errorContainer.textContent = 'The password must contain 14 characters!'
      }

})

