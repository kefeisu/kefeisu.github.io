function toggleProfilePicture() {

    var theme_cb = document.getElementById("toggle-mode-cb").checked;
    var image = document.getElementById("profile-pic");
    if(theme_cb) {
        //image.src = "assets/img/kefei_light_theme.png"
        image.src = "assets/img/kefei_light_theme.jpg"
    } else {
        //image.src = "assets/img/kefei_dark_theme.png"
        image.src = "assets/img/kefei.jpg"
    }

};