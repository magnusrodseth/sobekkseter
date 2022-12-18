import type Conditions from "@/types/conditions";
import React from "react";
import { CELSIUS, INCHES, PERCENT } from "../../constants";
import calculateFahrenheitToCelsius from "../../utils/calculateFahrenheitToCelsius";
import WidgetGroup from "../WidgetGroup";
import RainWidget from "../widgets/RainWidget";
import SimpleWindWidget from "../widgets/SimpleWindWidget";
import TemperatureWidget from "../widgets/TemperatureWidget";

interface MonthlyStatsProps {
  conditions: Conditions;
}

const MonthlyStats: React.FC<MonthlyStatsProps> = ({
  conditions,
}: MonthlyStatsProps) => {
  return (
    <WidgetGroup label="Månedlig" className="bg-gray-100">
      <TemperatureWidget
        label="Temperatur (min)"
        value={calculateFahrenheitToCelsius(
          parseFloat(conditions.davis_current_observation.temp_month_low_f)
        ).toFixed(1)}
        unit={CELSIUS}
      />

      <TemperatureWidget
        label="Temperatur (max)"
        value={calculateFahrenheitToCelsius(
          parseFloat(conditions.davis_current_observation.temp_month_high_f)
        ).toFixed(1)}
        unit={CELSIUS}
      />

      <TemperatureWidget
        label="Varmeindeks (max)"
        value={calculateFahrenheitToCelsius(
          parseFloat(
            conditions.davis_current_observation.heat_index_month_high_f
          )
        ).toFixed(1)}
        unit={CELSIUS}
      />

      <TemperatureWidget
        label="Følt temperatur (min)"
        value={calculateFahrenheitToCelsius(
          parseFloat(conditions.davis_current_observation.windchill_month_low_f)
        ).toFixed(1)}
        unit={CELSIUS}
      />

      <TemperatureWidget
        label="Duggpunkt (min)"
        value={calculateFahrenheitToCelsius(
          parseFloat(conditions.davis_current_observation.dewpoint_month_low_f)
        ).toFixed(1)}
        unit={CELSIUS}
      />

      <TemperatureWidget
        label="Duggpunkt (max)"
        value={calculateFahrenheitToCelsius(
          parseFloat(conditions.davis_current_observation.dewpoint_month_high_f)
        ).toFixed(1)}
        unit={CELSIUS}
      />

      <RainWidget
        label="Nedbør"
        value={conditions.davis_current_observation.rain_month_in}
        unit={INCHES}
      />

      <RainWidget
        label="Luftfuktighet (min)"
        value={conditions.davis_current_observation.relative_humidity_month_low}
        unit={PERCENT}
      />

      <RainWidget
        label="Luftfuktighet (max)"
        value={
          conditions.davis_current_observation.relative_humidity_month_high
        }
        unit={PERCENT}
      />

      <SimpleWindWidget
        label="Vindstyrke (max)"
        milesPerHour={conditions.davis_current_observation.wind_month_high_mph}
      />
    </WidgetGroup>
  );
};

export default MonthlyStats;
