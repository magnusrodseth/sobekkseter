/**
 * Converts Fahrenheit (F) to Celsius (C).
 * Calculation source: https://www.metric-conversions.org/temperature/fahrenheit-to-celsius.htm
 *
 * @param fahrenheit is the value to be converted.
 * @returns the converted value.
 */
const calculateFahrenheitToCelsius = (fahrenheit: number): number => {
    return (fahrenheit - 32) * 5 / 9;
}

export default calculateFahrenheitToCelsius;