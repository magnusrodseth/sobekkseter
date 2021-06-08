import React from "react";
import {
  CELSIUS,
  DEGREES,
  INCHES,
  MILES_PER_HOUR,
  MILLIBAR_MB,
  PERCENT,
} from "../constants";
import Conditions from "../types/Conditions";
import Card from "./Card";
import CardGroup from "./CardGroup";
import CardImage from "./CardImage";
import CustomPieChart from "./charts/CustomPieChart";

/**
 * image ✅
 *  title
 *  link
 *
 * dewpoint_c ✅
 *
 * heat_index_c ✅
 *
 * latitude ✅
 *
 * longitude ✅
 *
 * observation_time ✅
 *
 * pressure_mb (in millibar) ✅
 *
 * relative_humidity (in percent %) ✅
 *
 * temp_c ✅
 *
 * wind_degrees ✅
 *
 * wind_dir ✅
 *
 * wind_mph ✅
 *
 * windchill_c ✅
 *
 * davis_current_observation
 *  sunrise ✅
 *  sunset ✅
 *  wind_day_high_mph
 *  wind_day_high_time
 *  rain_day_in
 *  rain_month_in
 *  rain_year_in
 *  temp_day_high_f
 *  temp_day_high_time
 *  temp_day_low_f
 *  temp_day_low_time:
 *  temp_month_high_f
 *  temp_month_low_f
 *  temp_year_high_f
 *  temp_year_low_f
 *
 */

interface GridProps {
  conditions: Conditions;
}

const Grid: React.FC<GridProps> = ({ conditions }: GridProps) => {
  return (
    <ul className="grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 auto-rows-min m-5">
      <li
        className="lg:col-start-2 lg:col-span-2 md:col-start-1 md:col-span-2 sm:col-start-1 sm:col-span-1
                      lg:row-start-1 lg:row-span-2 md:row-start-1 sm:row-start-1"
      >
        <CardGroup label="Current weather 📷" className="bg-indigo-200">
          <CardImage
            src="/img/sample-web-cam.jpeg"
            alt="Demo Web Camera Image"
            updated={conditions.observation_time}
          />
        </CardGroup>
      </li>

      <li>
        <CardGroup label="Temperature 🌡" className="bg-yellow-200">
          <Card name={"Temperature"} value={conditions.temp_c} unit={CELSIUS} />

          <Card
            name={"Wind Chill (Følt temperatur)"}
            value={conditions.windchill_c}
            unit={CELSIUS}
          />

          <Card
            name={"Dewpoint"}
            value={conditions.dewpoint_c}
            unit={CELSIUS}
          />

          <Card
            name={"Heat Index"}
            value={conditions.heat_index_c}
            unit={CELSIUS}
          />

          {/* TODO: temp monthly, yearly, etc... */}
        </CardGroup>
      </li>

      <li>
        <CardGroup label="Wind 🍃" className="bg-gray-200">
          <Card name={"Wind"} value={conditions.wind_degrees} unit={DEGREES} />

          <CustomPieChart
            width={400}
            height={300}
            value={conditions.wind_degrees}
          />

          <Card
            name={"Wind Direction"}
            value={`${conditions.wind_dir} - ${conditions.wind_degrees}${DEGREES}`}
          />

          <Card
            name={"Wind Strength"}
            value={conditions.wind_mph}
            unit={MILES_PER_HOUR}
            toBeConverted
          />
        </CardGroup>
      </li>

      {/* Rainfall / Nedbør */}
      <li>
        <CardGroup label="Rainfall 🌧" className="bg-blue-200">
          <Card
            name={"Pressure"}
            value={conditions.pressure_mb}
            unit={MILLIBAR_MB}
          />

          <Card
            name={"Relative Humidity"}
            value={conditions.relative_humidity}
            unit={PERCENT}
          />

          <Card
            name={"Daily rain"}
            value={conditions.davis_current_observation.rain_day_in}
            unit={INCHES}
            toBeConverted
          />
        </CardGroup>
      </li>

      <li>
        <CardGroup label="Other data" className="bg-red-200">
          <Card
            name={"Sunrise"}
            value={conditions.davis_current_observation.sunrise}
          />

          <Card
            name={"Sunset"}
            value={conditions.davis_current_observation.sunset}
          />
        </CardGroup>
      </li>
    </ul>
  );
};

export default Grid;

{
  /* <li>
  <Card name={"Latitude"} value={conditions.latitude} unit={DEGREES} />
</li>

<li>
  <Card name={"Longitude"} value={conditions.longitude} unit={DEGREES} />
</li> */
}
