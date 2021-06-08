import React from "react";
import {
  CELSIUS,
  DEGREES,
  METERS_PER_SECOND_MS,
  MILLIBAR_MB,
  PERCENT,
} from "../constants";
import Conditions from "../types/Conditions";
import Card from "./Card";
import CardGroup from "./CardGroup";
import CardImage from "./CardImage";

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
 *  sunrise
 *  sunset
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
    <ul className="grid lg:grid-cols-4 gap-5 md:grid-cols-3 sm:grid-cols-2">
      <li>
        <Card name={"Dewpoint"} value={conditions.dewpoint_c} unit={CELSIUS} />
      </li>

      <li>
        <Card
          name={"Heat Index"}
          value={conditions.heat_index_c}
          unit={CELSIUS}
        />
      </li>

      <li>
        <Card name={"Latitude"} value={conditions.latitude} unit={DEGREES} />
      </li>

      <li>
        <Card name={"Longitude"} value={conditions.longitude} unit={DEGREES} />
      </li>

      <li>
        <Card name={"Latitude"} value={conditions.latitude} unit={DEGREES} />
      </li>

      <li>
        <Card
          name={"Pressure"}
          value={conditions.pressure_mb}
          unit={MILLIBAR_MB}
        />
      </li>

      <li>
        <Card
          name={"Relative Humidity"}
          value={conditions.relative_humidity}
          unit={PERCENT}
        />
      </li>

      <li>
        <Card name={"Temperature"} value={conditions.temp_c} unit={CELSIUS} />
      </li>

      <li>
        <Card name={"Wind"} value={conditions.wind_degrees} unit={DEGREES} />
      </li>

      <li>
        <Card name={"Wind Direction"} value={conditions.wind_dir} />
      </li>

      {/* TODO: Must be converted from mph -> m/s */}
      <li>
        <Card
          name={"Wind Strength"}
          value={conditions.wind_mph}
          unit={METERS_PER_SECOND_MS}
          mphToMs
        />
      </li>

      <li>
        <Card
          name={"Wind Chill"}
          value={conditions.windchill_c}
          unit={CELSIUS}
        />
      </li>

      <li>
        <CardImage
          src="/img/sample-web-cam.jpeg"
          alt="Demo Web Camera Image"
          lastUpdated={conditions.observation_time}
        />
      </li>

      <li>
        <CardGroup label="test label" backgroundColor="blue-200">
          <Card
            name={"Wind Chill"}
            value={conditions.windchill_c}
            unit={CELSIUS}
          />

          <Card
            name={"Wind Chill"}
            value={conditions.windchill_c}
            unit={CELSIUS}
          />
        </CardGroup>
      </li>
    </ul>
  );
};

export default Grid;
