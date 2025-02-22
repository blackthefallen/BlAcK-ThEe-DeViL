// Function to load templates dynamically
function loadTemplate(templateId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(templateId).innerHTML = data;
        })
        .catch(error => console.error('Error loading template:', error));
}

// Load header and footer templates
document.addEventListener("DOMContentLoaded", function() {
    loadTemplate("header-placeholder", "templates/header.html");
    loadTemplate("footer-placeholder", "templates/footer.html");
});

