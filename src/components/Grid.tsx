import React from "react";
import { CELSIUS_SYMBOL } from "../constants";
import Conditions from "../types/Conditions";
import Card from "./Card";

/**
 * image ✅
 *  title
 *  link
 *
 * dewpoint_c
 *
 * heat_index_c
 *
 * latitude
 *
 * longitude
 *
 * observation_time
 *
 * pressure_mb (in millibar)
 *
 * relative_humidity (in percent %)
 *
 * temp_c
 *
 * wind_degrees
 *
 * wind_dir
 *
 * wind_mph
 *
 * windchill_c
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
        <Card name={"Dewpoint"} value={conditions.dewpoint_c} unit={CELSIUS_SYMBOL} />
      </li>
    </ul>
  );
};

export default Grid;
