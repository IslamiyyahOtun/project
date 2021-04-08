const navbarToggle = () =>{
    // get the parent container of the navabr
    const getNavbarContainer = document.querySelector(".nav-bar");
    // use classList method to add and remove the toggle-navbar
    getNavbarContainer.classList.toggle("toggle-navbar")
}