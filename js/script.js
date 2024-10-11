const btn = document.getElementById('menu-btn');
const btn2 = document.getElementById('menu-btn2');
const menu = document.getElementById('menu');

btn.addEventListener('click', navToggle)
btn2.addEventListener('click', navToggle)

linkForm.addEventListener('submit', formSubmit);

//toggle mobile menu

function navToggle() {
    btn2.classList.toggle('flex');
    btn2.classList.toggle('hidden');
    btn.classList.toggle('hidden');
    btn.classList.toggle('flex');
    
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}