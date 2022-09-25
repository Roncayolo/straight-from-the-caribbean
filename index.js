console.log("javascript test");

const mobileMenuLinks = document.getElementById("mobile-menu");
let burgerMenuHidden = true;


function menuToggle() {

    console.log('Button Clicked!');

    if (burgerMenuHidden == true) {

        mobileMenuLinks.classList.remove("menu-hidden");
        burgerMenuHidden = false;
        console.log(burgerMenuHidden);

    } else {

        mobileMenuLinks.classList.add("menu-hidden");
        burgerMenuHidden = true;
        console.log(burgerMenuHidden);

    }

}