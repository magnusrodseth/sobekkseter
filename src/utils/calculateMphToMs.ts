/**
 * Converts miles per hour (mph) to meters per second (m/s).
 * Calculation source: https://www.metric-conversions.org/speed/miles-per-hour-to-meters-per-second.htm
 * 
 * @param milesPerHour is the value to be converted
 * @returns the converted value.
 */
const calculateMphToMs = (milesPerHour: number) => {
    const ratio = 2.236936;

    return milesPerHour / ratio;
}

export default calculateMphToMs;