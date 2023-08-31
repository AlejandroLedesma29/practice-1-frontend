const toggleButton = document.querySelector('.navbar-toggle');
const navbarOptions = document.querySelector('.navbar-options');
const icon = document.querySelector('.navbar-toggle i'); // 

toggleButton.addEventListener('click', () => {
    navbarOptions.classList.toggle('active');
    
    if (navbarOptions.classList.contains('active')) {
        icon.classList.remove('fa-bars'); 
        icon.classList.add('fa-times');   
    } else {
        icon.classList.remove('fa-times'); 
        icon.classList.add('fa-bars');     
    }
});

