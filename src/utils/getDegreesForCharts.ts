import { DEGREES_IN_CIRCLE_RATIO, NUM_DEGREES_IN_CIRCLE } from "../constants";

/**
 * Generates an array with 45 items, which corresponds to
 * the number of degrees in a circle (360) divided by DEGREE_INTERVAL.
 * 
 * @returns An array of objects on the form {name: 'i', value: i}.
 */
const getDegreesForCharts = () => {
    const degrees = [];

    for (let i = 1; i <= NUM_DEGREES_IN_CIRCLE; i++) {
        if (i % DEGREES_IN_CIRCLE_RATIO == 0) {
            degrees.push({ name: i, value: 1 })
        }

    }
    return degrees;
}

export default getDegreesForCharts;