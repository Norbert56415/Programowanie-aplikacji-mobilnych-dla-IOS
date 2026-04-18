async function getWeather(latitude, longitude) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`
    );

    const data = await response.json();

    console.log(data);

   console.log("Temperatura:", data.current.temperature_2m);
    console.log("Wiatr:", data.current.wind_speed_10m);

  } catch (error) {
    console.log("Błąd pobierania danych");
  }
}

getWeather(50.97623953774269, 16.86634320240936);
