document.addEventListener("DOMContentLoaded", () => {
    // 1. Lógica para el Modo Oscuro / Claro
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Comprobar preferencia guardada en el navegador
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggleBtn.textContent = "☀️";
    }

    themeToggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        
        // Cambiar el icono y guardar la preferencia
        if (body.classList.contains("dark-mode")) {
            themeToggleBtn.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggleBtn.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    });

    // 2. Actualizar el año automáticamente en el Footer
    const yearSpan = document.getElementById("year");
    yearSpan.textContent = new Date().getFullYear();

    // 3. Lógica del botón "Volver Arriba"
    const backToTopBtn = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        // Mostrar botón si se hace scroll hacia abajo más de 300px
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 4. Prevenir recarga de página en el formulario (Simulación)
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("¡Gracias por tu mensaje! (Simulación de envío)");
        form.reset();
    });
});