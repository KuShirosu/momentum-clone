const searchForm = document.getElementById("search-form");
const searchInput = document.querySelector(".search-input");
const originURL = "https://www.google.com/search?q=";

function handleSearchFormSubmit(event) {
  event.preventDefault();
  const URL = `${originURL}${searchInput.value}`;
  window.location.href = URL;
}

searchForm.addEventListener("submit", handleSearchFormSubmit);
