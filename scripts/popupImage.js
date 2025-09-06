function getPopup(){
    return document.getElementById("popupImage");
}

function setImage(e){
    e.stopPropagation();
    e.preventDefault();
    let url = e.target.src;
    if(!url) return;
    let popup = getPopup();
    popup.querySelector("img").src = url;
    popup.classList.add("open");
    let hide = ()=>{ console.log("here"); document.removeEventListener("click", hide); popup.classList.remove("open");}
    document.addEventListener("click", hide);
    return false;
}

document.body.insertAdjacentHTML('beforeend', `<div class="popup-background"><div id="popupImage"><img /></div></div>`);
document.querySelectorAll("img.popup-image").forEach(img=>img.onclick = setImage);