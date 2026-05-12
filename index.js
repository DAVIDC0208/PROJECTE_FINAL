const navbar = document.getElementById("navbar");
      window.addEventListener("scroll", () => {
        navbar.classList.toggle("desplacat", window.scrollY > 20);
      });

      const observador = new IntersectionObserver(
        (entrades) => {
          entrades.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              observador.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1 },
      );
      document
        .querySelectorAll(".revelat")
        .forEach((el) => observador.observe(el));

      function enviarFormulari() {
        const nom = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const missatge = document.getElementById("missatge").value.trim();
        if (!nom || !email || !missatge) {
          alert("Si us plau, omple els camps obligatoris.");
          return;
        }
        document.getElementById("formulariContacte").style.display = "none";
        document.getElementById("exitFormulari").style.display = "block";
      }