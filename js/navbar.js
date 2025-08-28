 
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage ||
      (currentPage === "" && link.getAttribute("href") === "index.html")) {
    link.parentElement.classList.add("active");
  } else {
    link.parentElement.classList.remove("active");
  }
});