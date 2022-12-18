import type Conditions from "@/types/conditions";
import React from "react";
import { CELSIUS, INCHES, PERCENT } from "../../constants";
import calculateFahrenheitToCelsius from "../../utils/calculateFahrenheitToCelsius";
import WidgetGroup from "../WidgetGroup";
import RainWidget from "../widgets/RainWidget";
import SimpleWindWidget from "../widgets/SimpleWindWidget";
import TemperatureWidget from "../widgets/TemperatureWidget";

interface DailyStatsProps {
  conditions: Conditions;
}

const DailyStats: React.FC<DailyStatsProps> = ({
  conditions,
}: DailyStatsProps) => {
  return (
    <WidgetGroup label="Daglig" className="bg-gray-100">
      <TemperatureWidget
        label="Temperatur (min)"
        value={calculateFahrenheitToCelsius(
          parseFloat(conditions.davis_current_observation.temp_day_low_f)
        ).toFixed(1)}
        unit={CELSIUS}
        time={conditions.davis_current_observation.temp_day_low_time}
      />

      <TemperatureWidget
        label="Temperatur (max)"
        value={calculateFahrenheitToCelsius(
          parseFloat(conditions.davis_current_observation.temp_day_high_f)
        ).toFixed(1)}
        unit={CELSIUS}
        time={conditions.davis_current_observation.temp_day_high_time}
      />

      <TemperatureWidget
        label="Varmeindeks (max)"
        value={calculateFahrenheitToCelsius(
          parseFloat(conditions.davis_current_observation.heat_index_day_high_f)
        ).toFixed(1)}
        unit={CELSIUS}
        time={conditions.davis_current_observation.heat_index_day_high_time}
      />

      <TemperatureWidget
        label="Følt temperatur (min)"
        value={calculateFahrenheitToCelsius(
          parseFloat(conditions.davis_current_observation.windchill_day_low_f)
        ).toFixed(1)}
        unit={CELSIUS}
        time={conditions.davis_current_observation.windchill_day_low_time}
      />

      <TemperatureWidget
        label="Duggpunkt (min)"
        value={calculateFahrenheitToCelsius(
          parseFloat(conditions.davis_current_observation.dewpoint_day_low_f)
        ).toFixed(1)}
        unit={CELSIUS}
        time={conditions.davis_current_observation.dewpoint_day_low_time}
      />

      <TemperatureWidget
        label="Duggpunkt (max)"
        value={calculateFahrenheitToCelsius(
          parseFloat(conditions.davis_current_observation.dewpoint_day_high_f)
        ).toFixed(1)}
        unit={CELSIUS}
        time={conditions.davis_current_observation.dewpoint_day_high_time}
      />

      <RainWidget
        label="Nedbør"
        value={conditions.davis_current_observation.rain_day_in}
        unit={INCHES}
      />

      <RainWidget
        label="Luftfuktighet (min)"
        value={conditions.davis_current_observation.relative_humidity_day_low}
        unit={PERCENT}
        time={
          conditions.davis_current_observation.relative_humidity_day_low_time
        }
      />

      <RainWidget
        label="Luftfuktighet (max)"
        value={conditions.davis_current_observation.relative_humidity_day_high}
        unit={PERCENT}
        time={
          conditions.davis_current_observation.relative_humidity_day_high_time
        }
      />

      <SimpleWindWidget
        label="Vindstyrke (max)"
        milesPerHour={conditions.davis_current_observation.wind_day_high_mph}
        time={conditions.davis_current_observation.wind_day_high_time}
      />
    </WidgetGroup>
  );
};

export default DailyStats;
