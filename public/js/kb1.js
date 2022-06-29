!function(){document.querySelectorAll(".js-sidebar-compact").forEach((function(e){e.addEventListener("click",(function(){
    if(document.body.getAttribute("data-sidebar-layout") === "default") {
        document.body.setAttribute("data-sidebar-layout", "compact");
        if(document.getElementById("sidebarBrand") === null) {
        } else {
            document.getElementById("sidebarBrand").style.display = "none";
        }
        
        if(document.getElementById("sidebar") === null) {
        } else {
            document.getElementById("sidebar").classList.add("toggled");
        }
        
        return;
    } else {
        document.body.setAttribute("data-sidebar-layout", "default");
        if(document.getElementById("sidebarBrand") === null) {

        } else {
            document.getElementById("sidebarBrand").style.display = "inline";
        }        

        if(document.getElementById("sidebar") === null) {
        } else {
            document.getElementById("sidebar").classList.remove("toggled");
        }
        return;
    }
}))}))}();

!function(){document.querySelectorAll(".js-sidebar-link").forEach((function(e){e.addEventListener("click",(function(){
    document.querySelectorAll(".sidebar-item").forEach((sidebarItem) => {
        sidebarItem.classList.remove("active");
    }
        
    );
    e.parentElement.classList.add("active");
    e.parentElement.parentElement.parentElement.classList.add("active");
}))}))}();