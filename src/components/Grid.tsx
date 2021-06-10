import React from "react";
import { CELSIUS, INCHES, MILLIBAR, PERCENT } from "../constants";
import IConditions from "../types/IConditions";
import calculateFahrenheitToCelsius from "../utils/calculateFahrenheitToCelsius";
import CardGroup from "./CardGroup";
import CardImage from "./CardImage";
import RainWidget from "./widgets/RainWidget";
import SimpleWindWidget from "./widgets/SimpleWindWidget";
import SunWidget from "./widgets/SunWidget";
import TemperatureWidget from "./widgets/TemperatureWidget";
import WindWidget from "./widgets/WindWidget";
interface GridProps {
  conditions: IConditions;
}

const Grid: React.FC<GridProps> = ({ conditions }: GridProps) => {
  return (
    <ul className="grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 auto-rows-min m-5">
      <li
        className="lg:col-start-2 lg:col-span-2 md:col-start-1 md:col-span-2 sm:col-start-1 sm:col-span-1
                      lg:row-start-1 lg:row-span-2 md:row-start-1 sm:row-start-1"
      >
        <CardGroup label="Været nå 📷" className="bg-indigo-200">
          <CardImage
            src="/img/sample-web-cam.jpeg"
            alt="Demo Web Camera Image"
            updated={conditions.observation_time}
          />
        </CardGroup>
      </li>

      <li>
        <CardGroup label="Temperatur 🌡" className="bg-yellow-200">
          <TemperatureWidget
            label="Temperatur"
            value={conditions.temp_c}
            unit={CELSIUS}
          />

          <TemperatureWidget
            label={"Følt temperatur"}
            value={conditions.windchill_c}
            unit={CELSIUS}
          />

          <TemperatureWidget
            label={"Duggpunkt"}
            value={conditions.dewpoint_c}
            unit={CELSIUS}
          />

          {/* Note: I don't think this is actually useful. */}
          <TemperatureWidget
            label={"Varmeindeks"}
            value={conditions.heat_index_c}
            unit={CELSIUS}
          />

          {/* TODO: temp monthly, yearly, etc... */}
        </CardGroup>
      </li>

      <li>
        <CardGroup label="Vind 💨" className="bg-gray-200">
          <WindWidget
            label="Vind"
            degrees={conditions.wind_degrees}
            direction={conditions.wind_dir}
            milesPerHour={conditions.wind_mph}
          />
        </CardGroup>
      </li>

      <li>
        <CardGroup label="Nedbør 🌧" className="bg-blue-200">
          <RainWidget
            label={"Trykk"}
            value={conditions.pressure_mb}
            unit={MILLIBAR}
          />

          <RainWidget
            label={"Luftfuktighet"}
            value={conditions.relative_humidity}
            unit={PERCENT}
          />

          <RainWidget
            label={"Regn i dag"}
            value={conditions.davis_current_observation.rain_day_in}
            unit={INCHES}
          />
        </CardGroup>
      </li>

      <li>
        <CardGroup label="Sol 🌞" className="bg-red-200">
          {/* The SunWidget defaults the boolean sunrise flag to be false. */}
          <SunWidget
            label={"Soloppgang"}
            time={conditions.davis_current_observation.sunrise}
            sunrise
          />

          <SunWidget
            label={"Solnedgang"}
            time={conditions.davis_current_observation.sunset}
          />
        </CardGroup>
      </li>

      <li>
        <CardGroup label="Gjennomsnitt 📊" className="bg-green-200">
          <CardGroup label="Månedlig" className="bg-gray-200">
            <TemperatureWidget
              label="Temperatur (min)"
              value={calculateFahrenheitToCelsius(
                parseFloat(
                  conditions.davis_current_observation.temp_month_low_f
                )
              ).toFixed(1)}
              unit={CELSIUS}
            />

            <TemperatureWidget
              label="Temperatur (max)"
              value={calculateFahrenheitToCelsius(
                parseFloat(
                  conditions.davis_current_observation.temp_month_high_f
                )
              ).toFixed(1)}
              unit={CELSIUS}
            />

            <RainWidget
              label="Nedbør"
              value={conditions.davis_current_observation.rain_month_in}
              unit={INCHES}
            />

            <SimpleWindWidget
              label="Vindstyrke (max)"
              milesPerHour={
                conditions.davis_current_observation.wind_month_high_mph
              }
            />
          </CardGroup>

          <CardGroup label="Årlig" className="bg-gray-200">
            <RainWidget
              label="Nedbør"
              value={conditions.davis_current_observation.rain_year_in}
              unit={INCHES}
            />

            <TemperatureWidget
              label="Temperatur (min)"
              value={Math.round(
                (calculateFahrenheitToCelsius(
                  parseFloat(
                    conditions.davis_current_observation.temp_year_low_f
                  )
                ) *
                  100) /
                  100
              ).toFixed(1)}
              unit={CELSIUS}
            />

            <TemperatureWidget
              label="Temperatur (max)"
              value={calculateFahrenheitToCelsius(
                parseFloat(
                  conditions.davis_current_observation.temp_year_high_f
                )
              ).toFixed(1)}
              unit={CELSIUS}
            />

            <SimpleWindWidget
              label="Vindstyrke (max)"
              milesPerHour={
                conditions.davis_current_observation.wind_year_high_mph
              }
            />
          </CardGroup>
        </CardGroup>
      </li>
    </ul>
  );
};

export default Grid;
