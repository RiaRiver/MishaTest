document.addEventListener('DOMContentLoaded', function () {
    function popup() {
        var popup = document.getElementById("popup");
        popup.classList.toggle("show");
    }

    var popup_Button = document.getElementById("popup-button");

    popup_Button.onclick = function () {
        popup()
    };
});
