const toggleButton = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

// Verifica se o usuário já tem uma preferência salva
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  htmlElement.setAttribute("data-theme", savedTheme);
  updateIcon(savedTheme);
}

toggleButton.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  updateIcon(newTheme);
});

function updateIcon(theme) {
  const iconSpan = toggleButton.querySelector(".icon");
  if (theme === "dark") {
    iconSpan.textContent = "☀️"; // Sol para voltar ao modo claro
  } else {
    iconSpan.textContent = "🌙"; // Lua para ir pro modo escuro
  }
}
