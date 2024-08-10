const menuItems = document.querySelector(".menu");
var icon = document.getElementById("icon");
    menuItems.onclick = (selectedItem)=>{ //if user click on filterItem div
      if(selectedItem.target.classList.contains("link")){ //if user selected item has .item class
        menuItems.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
        selectedItem.target.classList.add("active"); //add that active class on user selected item
      }
    }

    icon.onclick=function(){
        document.body.classList.toggle("dark-mode");
        if(document.body.classList.contains("dark-mode")){
          icon.classList.remove("fa-moon");
          icon.classList.add("fa-sun");
          localStorage.setItem('darkMode', 'enabled');
        }
        else{
          icon.classList.remove("fa-sun");
          icon.classList.add("fa-moon");
          localStorage.removeItem('darkMode');
        }
    }
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
  }