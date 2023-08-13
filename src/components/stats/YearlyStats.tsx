import type Conditions from "@/types/conditions";
import React from "react";
import { CELSIUS, INCHES, PERCENT } from "../../constants";
import calculateFahrenheitToCelsius from "../../utils/calculateFahrenheitToCelsius";
import WidgetGroup from "../WidgetGroup";
import RainWidget from "../widgets/RainWidget";
import SimpleWindWidget from "../widgets/SimpleWindWidget";
import TemperatureWidget from "../widgets/TemperatureWidget";

interface YearlyStatsProps {
  conditions: Conditions;
}

const YearlyStats: React.FC<YearlyStatsProps> = ({
  conditions,
}: YearlyStatsProps) => {
  return (
    <WidgetGroup label="Årlig">
      <TemperatureWidget
        label="Temperatur (min)"
        value={Math.round(
          (calculateFahrenheitToCelsius(
            parseFloat(conditions.davis_current_observation.temp_year_low_f)
          ) *
            100) /
            100
        ).toFixed(1)}
        unit={CELSIUS}
      />

      <TemperatureWidget
        label="Temperatur (max)"
        value={calculateFahrenheitToCelsius(
          parseFloat(conditions.davis_current_observation.temp_year_high_f)
        ).toFixed(1)}
        unit={CELSIUS}
      />

      <TemperatureWidget
        label="Varmeindeks (max)"
        value={calculateFahrenheitToCelsius(
          parseFloat(
            conditions.davis_current_observation.heat_index_year_high_f
          )
        ).toFixed(1)}
        unit={CELSIUS}
      />

      <TemperatureWidget
        label="Følt temperatur (min)"
        value={calculateFahrenheitToCelsius(
          parseFloat(conditions.davis_current_observation.windchill_year_low_f)
        ).toFixed(1)}
        unit={CELSIUS}
      />

      <TemperatureWidget
        label="Duggpunkt (min)"
        value={calculateFahrenheitToCelsius(
          parseFloat(conditions.davis_current_observation.dewpoint_year_low_f)
        ).toFixed(1)}
        unit={CELSIUS}
      />

      <TemperatureWidget
        label="Duggpunkt (max)"
        value={calculateFahrenheitToCelsius(
          parseFloat(conditions.davis_current_observation.dewpoint_year_high_f)
        ).toFixed(1)}
        unit={CELSIUS}
      />

      <RainWidget
        label="Nedbør (max)"
        value={conditions.davis_current_observation.rain_year_in}
        unit={INCHES}
      />

      <RainWidget
        label="Luftfuktighet (min)"
        value={conditions.davis_current_observation.relative_humidity_year_low}
        unit={PERCENT}
      />

      <RainWidget
        label="Luftfuktighet (max)"
        value={conditions.davis_current_observation.relative_humidity_year_high}
        unit={PERCENT}
      />

      <SimpleWindWidget
        label="Vindstyrke (max)"
        milesPerHour={conditions.davis_current_observation.wind_year_high_mph}
      />
    </WidgetGroup>
  );
};

export default YearlyStats;
