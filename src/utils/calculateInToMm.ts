/**
 * Converts inches (in) to millimeters (mm).
 * Calculation source: https://www.metric-conversions.org/length/inches-to-millimeters.htm
 * 
 * @param inches is the value to be converted.
 * @returns the converted value.
 */
const calculateInToMm = (inches: number) => {
    const ratio = 0.039370;

    return inches / ratio;
}

export default calculateInToMm;