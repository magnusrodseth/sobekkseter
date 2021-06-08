import { METERS_PER_SECOND_MS, MILLIMETERS } from "../constants";
import calculateInToMm from "./calculateInToMm";
import calculateMphToMs from "./calculateMphToMs";

export type IConverted = {
    convertedValue: number;
    convertedUnit: string;
}
/**
 * Maps units to be converted to more desirable units.
 * 
 * @param toBeConverted the parsed value to be converted
 * @param unit the unit to be converted
 * @returns the converted value, or { convertedValue: -Infinity, convertedUnit: "" } if no case is fulfilled.
 */
const conversionSwitch = (toBeConverted: number, unit: string): IConverted => {
    switch (unit.toLowerCase()) {
        case "in":
            return {
                convertedValue: calculateInToMm(toBeConverted),
                convertedUnit: MILLIMETERS
            };
        case "mph":
            return {
                convertedValue: calculateMphToMs(toBeConverted),
                convertedUnit: METERS_PER_SECOND_MS
            };
    }

    return {
        convertedValue: -Infinity,
        convertedUnit: ""
    };
}

export default conversionSwitch;