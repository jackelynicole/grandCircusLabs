const openMenu = () => {
    let menu = document.getElementById("toggleMenu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
};

const switchMenu = (selection) => {
    const letterSwitch = document.getElementById("letters-menu");
    const numberSwitch = document.getElementById("numbers-menu");
    const toggleMenu = document.getElementById("toggleMenu");

    if (selection === "letters") {
        letterSwitch.style.display = "block";
        numberSwitch.style.display = "none";
    } else if (selection === "numbers") {
        letterSwitch.style.display = "none";
        numberSwitch.style.display = "block";
    }
    
    toggleMenu.style.display = "none";
};



   
  
