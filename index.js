window.onload = () => {
  document.read;
  const sideMenu = document.querySelector("aside");
  const menuBtn = document.querySelector("#menu-btn");
  const closeBtn = document.querySelector("#close-btn");
  const themeToggler = document.querySelector(".theme-toggler");
  const floorsDropdown = document.querySelector("#floorsDropdown");
  const floorsDropdownParent = document.getElementById('floorsDropdownParent');
  let floorsDropdownState = false
  const logo = document.getElementById('logo');
  const logon = document.getElementById('logon');
  let showLogon = false;


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
    if(!showLogon){
      logo.style.display = "none";
      logon.style.display = "block";
      showLogon = true;
    }else{
      logo.style.display = "block";
      logon.style.display = "none";
      showLogon = false;
    }
    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
    //themeToggler.querySelector('span').classList.toggle('active');
  });
};
