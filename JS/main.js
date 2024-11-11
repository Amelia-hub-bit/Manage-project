//identifiers
const openNav = document.querySelector('.bi-list'); 

const closeNav = document.querySelector('.bi-x-lg'); 

const navList = document.querySelector('nav ul')

openNav.addEventListener('click', () => {
    navList.style.top = '35%'
    openNav.style.display = 'none';
    closeNav.style.display = 'block';
});

closeNav.addEventListener('click', () => {
    navList.style.top = '-35%'
    openNav.style.display ='block';
    closeNav.style.display = 'none';
});