document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("convertForm");
  const resultText = document.getElementById("result");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 80;
  canvas.style.display = "block";
  canvas.style.margin = "0 auto";
  document.querySelector("form").insertBefore(canvas, form.children[0]);

  function drawThermometer(temp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.fillRect(30, 30, 440, 20); // Thermometer tube

    ctx.beginPath();
    ctx.fillStyle = temp < 24 ? "blue" : "red";
    ctx.arc(30, 40, 20, Math.PI / 2, (5 * Math.PI) / 2);
    ctx.fill();

    const minTemp = -30;
    const maxTemp = 100;
    const clampTemp = Math.max(minTemp, Math.min(maxTemp, temp));
    const fillWidth = ((clampTemp - minTemp) / (maxTemp - minTemp)) * 440;

    ctx.fillStyle = temp < 24 ? "blue" : "red";
    ctx.fillRect(30, 30, fillWidth, 20); // Temperature level

    ctx.fillStyle = "black";
    ctx.font = "14px Arial";
    for (let i = minTemp; i <= maxTemp; i += 20) {
      let x = 30 + ((i - minTemp) / (maxTemp - minTemp)) * 440;
      ctx.fillText(i + "°C", x - 10, 20);
      ctx.fillText(((i * 9) / 5 + 32).toFixed(0) + "°F", x - 10, 65);
      ctx.fillRect(x, 25, 2, 10); // Threshold markers
    }
  }

  function convertTemperatureRange(startValue, endValue, scale) {
    const output = document.getElementById("rangeResult");
    output.innerHTML = "";
    for (let temp = startValue; temp <= endValue; temp++) {
      let converted;
      if (scale === "C") {
        converted = (temp * 9) / 5 + 32;
        output.innerHTML += `<p>${temp}°C = ${converted.toFixed(2)}°F</p>`;
      } else if (scale === "F") {
        converted = ((temp - 32) * 5) / 9;
        output.innerHTML += `<p>${temp}°F = ${converted.toFixed(2)}°C</p>`;
      }
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const temperature = parseFloat(
      document.getElementById("temperature").value
    );
    const conversionType = document.getElementById("conversionType").value;
    let result;

    if (conversionType === "c_to_f") {
      result = (temperature * 9) / 5 + 32;
      resultText.innerText = `${temperature}°C is equal to ${result.toFixed(
        2
      )}°F`;
      drawThermometer(temperature);
    } else if (conversionType === "f_to_c") {
      result = ((temperature - 32) * 5) / 9;
      resultText.innerText = `${temperature}°F is equal to ${result.toFixed(
        2
      )}°C`;
      drawThermometer(result);
    }
  });

  document
    .getElementById("convertRange")
    .addEventListener("click", function () {
      const startValue = parseFloat(
        document.getElementById("startTemperature").value
      );
      const endValue = parseFloat(
        document.getElementById("endTemperature").value
      );
      const scale = document.getElementById("scaleType").value;
      convertTemperatureRange(startValue, endValue, scale);
    });

  drawThermometer(0);
});
