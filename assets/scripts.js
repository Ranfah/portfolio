 let tablinks = document.getElementsByClassName("tab-links")
 let tabcontents = document.getElementsByClassName("tab-contents")

 let sidemenu = document.getElementById('sidemenu')

 function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("tab-active")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("tab-active")
 }

 function openmenu(){
    sidemenu.style.right="0"
 }
 function closemenu(){
    sidemenu.style.right="-100px"
 }

 let toggleSwitch = document.querySelector("input");

toggleSwitch.addEventListener("change", (e) => {
  let body = document.querySelector("body");
  let links_as = document.querySelectorAll('a')
  let p_colors = document.querySelectorAll('p')
  let h1_colors = document.querySelectorAll('h1')
  let spans = document.querySelectorAll('span')
  let li_colors = document.querySelectorAll('li')
  let boutons = document.querySelectorAll('button')
  let i_colors = document.querySelectorAll('i')

  if (e.target.checked) {
    body.style.backgroundColor = "#f0f0f0";
    for(links_a of links_as){
        links_a.style.color="#000"
    }
    for(p_color of p_colors){
        p_color.style.color="#000"
    }
    for(h1_color of h1_colors){
        h1_color.style.color="#000"
    }
    for(li_color of li_colors){
        li_color.style.color="#000"
    }
    for(bouton of boutons){
        bouton.style.color="#000"
    }
    i_colors[0].style.color="#000"
    i_colors[1].style.color="#000"
  } else {
    body.style.backgroundColor = "#050505";
    for(links_a of links_as){
        links_a.style.color="#fff"
    }
    for(p_color of p_colors){
        p_color.style.color="#fff"
    }
    for(h1_color of h1_colors){
        h1_color.style.color="#fff"
    }
    for(li_color of li_colors){
        li_color.style.color="#fff"
    }
    for(bouton of boutons){
        bouton.style.color="#fff"
    }
    i_colors[0].style.color="#fff"
    i_colors[1].style.color="#fff"
  }
});