const theme_button = document.getElementById("theme-button");

const getTheme = localStorage.getItem("theme");
if (getTheme == "dark-theme") {
    document.body.classList.add(getTheme);
}

function theme() {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem("theme", "dark-theme");
        console.log(getTheme);
        
    } else {
        localStorage.removeItem("theme");
    }
}

theme_button.addEventListener("click", theme);
