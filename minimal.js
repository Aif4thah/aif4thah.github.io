// Attendre que le DOM soit chargé pour éviter les erreurs si le script est déplacé
document.addEventListener("DOMContentLoaded", function() {

    // Correction de l'ID : "btn-accompagnement" au lieu de "btn-assistance"
    const btnAccompagnement = document.getElementById("btn-accompagnement");
    const btnAudit = document.getElementById("btn-audit");
    const btnFormation = document.getElementById("btn-formation");

    // On vérifie si l'élément existe avant d'ajouter l'écouteur (bonne pratique)
    if (btnAccompagnement) {
        btnAccompagnement.addEventListener("click", function(e) {
            e.preventDefault(); // Évite le saut d'ancre brusque
            toggleSection('accompagnement');
        });
    }

    if (btnAudit) {
        btnAudit.addEventListener("click", function(e) {
            e.preventDefault();
            toggleSection('audit');
        });
    }

    if (btnFormation) {
        btnFormation.addEventListener("click", function(e) {
            e.preventDefault();
            toggleSection('formation');
        });
    }
});

function toggleSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        // Cache toutes les sections sauf celle sélectionnée
        if (sections[i].id !== sectionId) {
            sections[i].style.display = 'none';
        }
    }

    var section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
            // Optionnel : scroller jusqu'à la section pour l'UX
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            section.style.display = "none";
        }
    }
}