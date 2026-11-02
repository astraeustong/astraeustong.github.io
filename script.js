
const themeToggle = document.getElementById("theme-toggle");

function updateThemeButton() {
  const theme = document.documentElement.dataset.theme;

  themeToggle.textContent = theme === "dark" ? "☀" : "☾";
  themeToggle.setAttribute(
    "aria-label",
    theme === "dark"
      ? "Switch to light mode"
      : "Switch to dark mode"
  );
}

updateThemeButton();

themeToggle.addEventListener("click", () => {
  const currentTheme =
    document.documentElement.dataset.theme;

  const newTheme =
    currentTheme === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);

  updateThemeButton();
});
