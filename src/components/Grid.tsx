import React from "react";
import { CELSIUS, INCHES, MILLIBAR, PERCENT } from "../constants";
import IConditions from "../types/IConditions";
import WidgetGroup from "./WidgetGroup";
import Image from "./widgets/Image";
import MonthlyStats from "./stats/MonthlyStats";
import YearlyStats from "./stats/YearlyStats";
import RainWidget from "./widgets/RainWidget";
import SunWidget from "./widgets/SunWidget";
import TemperatureWidget from "./widgets/TemperatureWidget";
import WindWidget from "./widgets/WindWidget";

interface GridProps {
  conditions: IConditions;
}

const Grid: React.FC<GridProps> = ({ conditions }: GridProps) => {
  return (
    <ul
      className="grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1
      auto-rows-max m-5"
    >
      <li
        className="lg:col-start-2 lg:col-span-2 md:col-start-1 md:col-span-2 sm:col-start-1 sm:col-span-1
                      lg:row-start-1 md:row-start-1 sm:row-start-1"
      >
        <WidgetGroup
          label="Været nå 📷"
          className="bg-gray-200"
          accentColor="gray"
        >
          <Image
            src="/webcam/01.jpeg"
            alt="Web Camera Image"
            updated={conditions.observation_time}
          />
        </WidgetGroup>
      </li>

      <li>
        <WidgetGroup
          label="Temperatur 🌡"
          className="bg-gray-200"
          accentColor="red"
        >
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

          <TemperatureWidget
            label={"Varmeindeks"}
            value={conditions.heat_index_c}
            unit={CELSIUS}
          />
        </WidgetGroup>
      </li>

      <li className="lg:row-start-2 lg:col-start-2 lg:col-span-2">
        <WidgetGroup label="Vind 💨" className="bg-gray-200" accentColor="gray">
          <WindWidget
            label="Vind"
            degrees={conditions.wind_degrees}
            direction={conditions.wind_dir}
            milesPerHour={conditions.wind_mph}
          />

          {/* 
            Note that this wind widget is actually a RainWidget component. 
            This is purely because of aesthetics; using WindWidget would not fit in this scenario. 
          */}
          <RainWidget
            label={"Lufttrykk"}
            value={conditions.pressure_mb}
            unit={MILLIBAR}
          />
        </WidgetGroup>
      </li>

      <li>
        <WidgetGroup
          label="Nedbør 🌧"
          className="bg-gray-200"
          accentColor="blue"
        >
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
        </WidgetGroup>
      </li>

      <li>
        <WidgetGroup
          label="Sol 🌞"
          className="bg-gray-200"
          accentColor="yellow"
        >
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
        </WidgetGroup>
      </li>

      <li
        className="lg:col-start-1 lg:col-span-4 md:col-start-1 md:col-span-2 sm:col-start-1 sm:col-span-1
                      lg:row-start-3 md:row-start-4 sm:row-start-1"
      >
        <WidgetGroup label="Gjennomsnitt 📊" className="bg-gray-200" accentColor="green">
          <div className="grid gap-3 lg:grid-cols-2">
            <MonthlyStats conditions={conditions} />

            <YearlyStats conditions={conditions} />
          </div>
        </WidgetGroup>
      </li>
    </ul>
  );
};

export default Grid;
