document.getElementById("btn-assistance").addEventListener("click", function() {
    toggleSection('assistance');
});

document.getElementById("btn-audit").addEventListener("click", function() {
    toggleSection('audit');
});

document.getElementById("btn-formation").addEventListener("click", function() {
    toggleSection('formation');
});

function toggleSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].id !== sectionId) {
            sections[i].style.display = 'none';
        }
    }

    var section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
