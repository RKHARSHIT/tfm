$(function () {// Same as document.addEventListner("DOMContentLoaded"...)

    // Same as document.querySelector("#navbarToggle").addEventListener("blur")
    $(".navbar-toggle").blur(function (event){
        var screenWidth = window.innerWidth;
        if(screenWidth < 768){
            $('#collapsable-nav').collapse('hide');
        }
    }); 
});