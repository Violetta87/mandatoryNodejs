document.addEventListener("DOMContentLoaded", function() {
    let dropdownLinks = document.querySelectorAll("#sidebar ul li a");
    for (let i = 0; i < dropdownLinks.length; i++) {
      var dropdownLink = dropdownLinks[i];
      dropdownLink.addEventListener("click", function(e) {
        if (this.classList.contains("dropdown-toggle")) {
          e.preventDefault();
          var dropdown = this.nextElementSibling;
          if (dropdown) {
            if (dropdown.style.display === "block") {
              dropdown.style.display = "none";
            } else {
              dropdown.style.display = "block";
            }
          }
        }
      });
    }
});

