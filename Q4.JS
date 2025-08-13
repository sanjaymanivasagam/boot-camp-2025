function convertFahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
}
const fahrenheitInputs = [68, 150, 212, 0, -22];
fahrenheitInputs.forEach(fahrenheit => {
  const celsiusResult = convertFahrenheitToCelsius(fahrenheit);
  console.log(`${fahrenheit.toFixed(6)} deg F is ${celsiusResult.toFixed(6)} deg C`);
});