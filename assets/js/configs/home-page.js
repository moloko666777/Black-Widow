let mobileMenuOpen = document.querySelector('.header__menu-links');
let mobileMenuInput = document.querySelector('#checkbox4');
let menuHeight = mobileMenuOpen.scrollHeight;


mobileMenuInput.addEventListener('change', function (){
    let isChecked = mobileMenuInput.checked;
    if (isChecked){
        mobileMenuOpen.classList.add('active');
        mobileMenuOpen.style.height = menuHeight + 'px';
    } else {
        mobileMenuOpen.classList.remove('active');
        mobileMenuOpen.style.height = 0 + 'px';
    }
});
