document
  .getElementById("convertForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const temperature = document.getElementById("temperature").value;
    const conversionType = document.getElementById("conversionType").value;
    let result;

    if (conversionType === "c_to_f") {
      result = (temperature * 9) / 5 + 32;
      document.getElementById(
        "result"
      ).innerText = `${temperature}°C is equal to ${result.toFixed(2)}°F`;
    } else if (conversionType === "f_to_c") {
      result = ((temperature - 32) * 5) / 9;
      document.getElementById(
        "result"
      ).innerText = `${temperature}°F is equal to ${result.toFixed(2)}°C`;
    }
  });
