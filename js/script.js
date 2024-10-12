const btn = document.getElementById('menu-btn');
const btn2 = document.getElementById('menu-btn2');
const menu = document.getElementById('menu');

btn.addEventListener('click', navToggle)
btn2.addEventListener('click', navToggle)

//toggle mobile menu
function navToggle() {
    btn2.classList.toggle('flex');
    btn2.classList.toggle('hidden');
    btn.classList.toggle('hidden');
    btn.classList.toggle('flex');
    
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}


// butter buttons
const softButterButtons = document.querySelectorAll('.btn-softButter');

softButterButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        softButterButtons.forEach(btn => btn.classList.remove('active'));

        this.classList.add('active');
    });
});
