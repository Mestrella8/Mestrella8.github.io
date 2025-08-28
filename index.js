function toggleNav() {
    const sidenav = document.getElementById("mySidenav");
    sidenav.classList.toggle("open");

    const hamburger = document.querySelector('.hamburger-menu');
    hamburger.classList.toggle('active');
}

// Close the navigation when clicking outside of it
document.addEventListener('click', function (event) {
    const sidenav = document.getElementById('mySidenav');
    const hamburger = document.querySelector('.hamburger-menu');

    if (sidenav.classList.contains('open') &&
        !sidenav.contains(event.target) &&
        !hamburger.contains(event.target)) {
        sidenav.classList.remove('open');
    }
});

