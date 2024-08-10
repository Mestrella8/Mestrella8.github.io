function openNav() {
    document.getElementById("mySidenav").style.left = "0";
}

function toggleNav() {
    const sidenav = document.getElementById("mySidenav");
    const currentLeft = sidenav.style.left;

    if (currentLeft === "0px") {
        sidenav.style.left = "-250px"; // Close the side navigation
    } else {
        sidenav.style.left = "0"; // Open the side navigation
    }
}

