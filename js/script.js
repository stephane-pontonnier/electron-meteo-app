// Sélection des éléments
const locationInputEl = document.querySelector(".form__input");
const weatherDataContainerEl = document.querySelector(".data");
const btnSearch = document.getElementById("btnSearch");

const data__city = document.getElementById("data__city");
const data__updated = document.getElementById("data__updated");
const data__icon = document.getElementById("data__icon");
const data__temperature = document.getElementById("data__temperature");
const data__current = document.getElementById("data__current");
const data__humidity = document.getElementById("data__humidity");
const data__wind = document.getElementById("data__wind");
const card = document.getElementById("card");
const loader = document.getElementById("loader");

const API_KEY = "3d1853a7fd9b499794571220230607";
const defaultLocation = "Saint-Etienne";

const direction = {
  N: "Nord",
  S: "Sud",
  E: "Est",
  W: "Ouest",
  NE: "Nord-Est",
  NW: "Nord-Ouest",
  SE: "Sud-Est",
  SW: "Sud-Ouest",
};

// Loader
/*function showLoader() {
  loader.classList.remove("hidden");
}

function hideLoader() {
  loader.classList.add("hidden");
}*/

// Entrée clavier
locationInputEl.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    btnSearch.click();
  }
});

// Bouton recherche
btnSearch.addEventListener("click", () => {
  const city = locationInputEl.value.trim();

  if (city === "") {
    weatherDataContainerEl.textContent = "Veuillez entrer un nom de ville";
    return;
  }

  displayWeatherData(city);
});

// Fetch météo
function displayWeatherData(location) {
  //showLoader();
  card.classList.remove("appearCard");

  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&lang=fr`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((data) => {
      //hideLoader();
      weatherDataContainerEl.textContent = "";

      data__city.textContent = data.location.name;
      data__updated.textContent = "Mis à jour : " + data.current.last_updated;
      data__temperature.textContent = data.current.temp_c + " °C";
      data__current.textContent = data.current.condition.text;
      data__humidity.innerHTML = `<i class="fas fa-droplet"></i> ${data.current.humidity} %`;
      data__wind.innerHTML = `<i class="fas fa-wind"></i> ${data.current.wind_kph} km/h`;
      data__icon.src = "https:" + data.current.condition.icon;

      card.classList.add("appearCard");

      // Animation GSAP
      gsap.fromTo(
        "#card",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    })
    .catch(() => {
      //hideLoader();
      weatherDataContainerEl.textContent =
        "❌ Ville introuvable. Vérifiez l’orthographe.";
    });
}

// Chargement par défaut
displayWeatherData(defaultLocation);
