/* Load Functions */
window.onload = function() {
    randomImage();
}
/* ========= */

/* Random Image */
let imageChance = 0;

function randomImage() {
    imageChance = Math.floor(Math.random() * 10);

    if (imageChance == 0) {
        document.getElementById("image-target").innerHTML = '<a href="/pages/secret/secret-entry.html"><img src="/images/pages/404/404alt.png" alt="...?"></a>';
    } else {
        document.getElementById("image-target").innerHTML = '<img src="/images/pages/404/404.png" alt="404">';
    }

    console.log(
        "=============================" +
        "\nImage Chance" + 
        "\n=============================" +
        "\nImage Chance: " + imageChance +
        "\n(0 = Secret)" +
        "\n============================="
    );
}
/* ========= */