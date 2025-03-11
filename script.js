document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
            navLinks.classList.remove("active"); 
        });
    });

    const form = document.querySelector(".contact-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let isValid = true;
            document.querySelectorAll(".form-group input, .form-group textarea").forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add("error");
                    isValid = false;
                } else {
                    input.classList.remove("error");
                }
            });

            if (isValid) {
                alert("Form submitted successfully!");
                form.reset();
            } else {
                alert("Please fill in all fields.");
            }
        });
    }

    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
            card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        });
    });
});
