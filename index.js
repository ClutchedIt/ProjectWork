window.onload = () => {
  document.read;
  const sideMenu = document.querySelector("aside");
  const menuBtn = document.querySelector("#menu-btn");
  const closeBtn = document.querySelector("#close-btn");
  const themeToggler = document.querySelector(".theme-toggler");
  const floorsDropdown = document.querySelector("#floorsDropdown");
  const floorsDropdownParent = document.getElementById('floorsDropdownParent')
  let floorsDropdownState = false

  floorsDropdownParent.addEventListener('click', () => {
    if(!floorsDropdownState) {
      floorsDropdown.style.display = 'block'
    }
    else {
      floorsDropdown.style.display = 'none'
    }

    floorsDropdownState = !floorsDropdownState
  })

  //open sidemenu
  menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
  });

  //close sidemenu
  closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
  });



  //change theme
  themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");

    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
    //themeToggler.querySelector('span').classList.toggle('active');
  });
};
