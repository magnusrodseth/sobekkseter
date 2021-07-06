import dotenv from "dotenv"
dotenv.config()

export const TEN_SECONDS_IN_MILLISECONDS = 10000;
export const DEGREES = "°";
export const CELSIUS = `${DEGREES}C`;
export const MILLIBAR = "mb";
export const PERCENT = "%";
export const METERS_PER_SECOND = "m/s";
export const INCHES = "in";
export const MILLIMETERS = "mm";
export const MILES_PER_HOUR = "mph";

export const IS_PRODUCTION = process.env.NODE_ENV === 'production'