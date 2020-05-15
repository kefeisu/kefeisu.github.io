function toggleTheme() {
    var theme_cb = document.getElementById("toggle-mode-cb").checked;
    var image = document.getElementById("profile-pic");

    var headline_light = document.getElementById("headline--light");
    var headline_dark = document.getElementById("headline--dark");
    var media_icons = document.getElementsByClassName("media-icon");

    if(theme_cb) {
        //image.src = "assets/img/kefei_light_theme.png"
        image.src = "assets/img/kefei_light_theme.jpg";
        headline_light.style.display = "inline";
        headline_dark.style.display = "none";
        for (var i = 0; i < media_icons.length; i++) {
            media_icons[i].style.filter = "none";
        }
    } else {
        //image.src = "assets/img/kefei_dark_theme.png"
        image.src = "assets/img/kefei.jpg";
        headline_light.style.display = "none";
        headline_dark.style.display = "inline";
        for (var i = 0; i < media_icons.length; i++) {
            media_icons[i].style.filter = "invert(100%)";
        }
    }
};