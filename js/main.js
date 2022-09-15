var btn_regresar = document.querySelector("#back-inicio");

window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        btn_regresar.style.display = "block";
    }else{
        btn_regresar.style.display = "none";
    }
});