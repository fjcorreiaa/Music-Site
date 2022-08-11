
const toggleBtn = document.getElementById('toggle-nav-button');
const menuItems = document.querySelector('.menu-items');
 

toggleBtn.addEventListener('click', toggleNav);
 
function toggleNav() {
    menuItems.classList.toggle('show-menu-items');
}