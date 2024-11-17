$(document).ready(function () {
  function showPage(page) {
    $(".page").removeClass("active"); // Hide all pages
    $("#" + page).addClass("active"); // Show selected page
  }

  function checkHash() {
    const page = window.location.hash.substr(1) || "home";
    showPage(page);
  }

  // Initial load based on hash or default to "home"
  checkHash();

  // Update content on hash change
  $(window).on("hashchange", function () {
    checkHash();
  });

  // Change hash when button is clicked
  $("button").on("click", function () {
    const page = $(this).data("page");
    window.location.hash = page;
  });
});
