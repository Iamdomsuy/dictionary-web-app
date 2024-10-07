const theme_button = document.getElementById("theme-btn");

const getTheme = localStorage.getItem("theme");
if (getTheme == "dark-mode") {
    document.body.classList.add(getTheme);
}

const theme = () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark-mode");
    } else {
        localStorage.removeItem("theme");
    }
}

theme_button.addEventListener("click", theme);