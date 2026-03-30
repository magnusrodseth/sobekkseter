import React from "react";
import { CELSIUS, INCHES, MILLIBAR, PERCENT, METERS_PER_SECOND } from "../constants";
import WidgetGroup from "./WidgetGroup";
import RainWidget from "./widgets/RainWidget";
import SunWidget from "./widgets/SunWidget";
import TemperatureWidget from "./widgets/TemperatureWidget";
import WindWidget from "./widgets/WindWidget";
import UVWidget from "./widgets/UVWidget";
import type Conditions from "@/types/conditions";
import type { DavisCurrentObservation } from "@/types/conditions";
import ImageSkeleton from "./ImageSkeleton";
import CardSkeleton from "./CardSkeleton";
import { WebcamDisplay } from "./widgets/WebcamDisplay";
import getRain from "@/utils/getRain";
import toMilitaryTime from "@/utils/toMilitaryTime";
import translatePressureTendency from "@/utils/translatePressureTendency";
import calculateMphToMs from "@/utils/calculateMphToMs";
import calculateInToMm from "@/utils/calculateInToMm";
import calculateFahrenheitToCelsius from "@/utils/calculateFahrenheitToCelsius";
import DayRangeChart from "./charts/DayRangeChart";
import StatsSection from "./StatsSection";

interface GridProps {
  conditions: Conditions;
  imageUrl?: string | null;
}

const Grid: React.FC<GridProps> = ({ conditions, imageUrl }) => {
  const davis =
    conditions.davis_current_observation as DavisCurrentObservation;

  const currentTempC = parseFloat(conditions.temp_c);
  const dayLowC = davis
    ? calculateFahrenheitToCelsius(parseFloat(davis.temp_day_low_f))
    : null;
  const dayHighC = davis
    ? calculateFahrenheitToCelsius(parseFloat(davis.temp_day_high_f))
    : null;

  const currentHumidity = parseFloat(conditions.relative_humidity);
  const dayLowHumidity = davis ? parseFloat(davis.relative_humidity_day_low) : null;
  const dayHighHumidity = davis ? parseFloat(davis.relative_humidity_day_high) : null;

  const currentPressure = parseFloat(conditions.pressure_mb);
  const dayLowPressure = davis
    ? parseFloat(davis.pressure_day_low_in) / 0.02953
    : null;
  const dayHighPressure = davis
    ? parseFloat(davis.pressure_day_high_in) / 0.02953
    : null;

  const currentWindMs = calculateMphToMs(parseFloat(conditions.wind_mph));
  const dayHighWindMs = davis
    ? calculateMphToMs(parseFloat(davis.wind_day_high_mph))
    : null;

  const rangeData = [];
  if (dayLowC !== null && dayHighC !== null) {
    rangeData.push({
      label: "Temperatur",
      min: dayLowC,
      max: dayHighC,
      current: currentTempC,
      unit: CELSIUS,
      key: "temp",
    });
  }
  if (dayLowHumidity !== null && dayHighHumidity !== null) {
    rangeData.push({
      label: "Fuktighet",
      min: dayLowHumidity,
      max: dayHighHumidity,
      current: currentHumidity,
      unit: PERCENT,
      key: "humidity",
    });
  }
  if (dayLowPressure !== null && dayHighPressure !== null) {
    rangeData.push({
      label: "Lufttrykk",
      min: dayLowPressure,
      max: dayHighPressure,
      current: currentPressure,
      unit: MILLIBAR,
      key: "pressure",
    });
  }
  if (dayHighWindMs !== null) {
    rangeData.push({
      label: "Vind",
      min: 0,
      max: dayHighWindMs,
      current: currentWindMs,
      unit: METERS_PER_SECOND,
      key: "wind",
    });
  }

  return (
    <div className="m-4 space-y-4">
      {/* Row 1: Webcam + key readings */}
      <div className="grid auto-rows-max gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-2 lg:col-start-2">
          <WidgetGroup label="Været nå">
            {conditions.observation_time && imageUrl ? (
              <div className="flex items-start justify-center">
                <WebcamDisplay
                  imageUrl={imageUrl}
                  observationTime={conditions.observation_time}
                />
              </div>
            ) : (
              <ImageSkeleton />
            )}
          </WidgetGroup>
        </div>

        <div className="lg:col-start-1 lg:row-start-1">
          <WidgetGroup label="Temperatur">
            <TemperatureWidget
              label="Temperatur"
              value={conditions.temp_c}
              unit={CELSIUS}
            />
            <TemperatureWidget
              label="Følt temperatur"
              value={conditions.windchill_c}
              unit={CELSIUS}
            />
            <TemperatureWidget
              label="Duggpunkt"
              value={conditions.dewpoint_c}
              unit={CELSIUS}
            />
            <TemperatureWidget
              label="Varmeindeks"
              value={conditions.heat_index_c}
              unit={CELSIUS}
            />
          </WidgetGroup>
          {davis ? (
            <WidgetGroup label="Sol" className="mt-4">
              <SunWidget
                label="Soloppgang"
                time={toMilitaryTime(davis.sunrise)}
                sunrise
              />
              <SunWidget
                label="Solnedgang"
                time={toMilitaryTime(davis.sunset)}
              />
              {davis.uv_index && (
                <UVWidget
                  index={davis.uv_index}
                  dayHigh={davis.uv_index_day_high}
                />
              )}
            </WidgetGroup>
          ) : (
            <CardSkeleton />
          )}
        </div>

        <div className="lg:col-start-4 lg:row-start-1">
          <WidgetGroup label="Nedbør">
            <RainWidget
              label="Luftfuktighet"
              value={conditions.relative_humidity}
              unit={PERCENT}
            />
            {davis ? (
              <>
                <RainWidget
                  label="Regn i dag"
                  value={getRain(conditions)}
                  unit={INCHES}
                />
                {parseFloat(davis.rain_rate_in_per_hr) > 0 && (
                  <RainWidget
                    label="Nedbørsintensitet"
                    value={calculateInToMm(
                      parseFloat(davis.rain_rate_in_per_hr)
                    ).toFixed(1)}
                    unit="mm/t"
                  />
                )}
                <RainWidget
                  label="Regn denne mnd."
                  value={calculateInToMm(
                    parseFloat(davis.rain_month_in)
                  ).toFixed(1)}
                  unit="mm"
                />
              </>
            ) : (
              <CardSkeleton />
            )}
          </WidgetGroup>
          <WidgetGroup label="Vind" className="mt-4">
            <WindWidget
              label="Vind"
              degrees={conditions.wind_degrees}
              milesPerHour={conditions.wind_mph}
              gustMph={davis?.wind_ten_min_gust_mph}
            />
            {/* RainWidget is reused here as a generic numeric display for pressure */}
            <RainWidget
              label="Lufttrykk"
              value={conditions.pressure_mb}
              unit={MILLIBAR}
              tendency={translatePressureTendency(
                conditions.davis_current_observation.pressure_tendency_string
              )}
            />
          </WidgetGroup>
        </div>
      </div>

      {/* Row 2: Stats in tabs */}
      {davis && (
        <StatsSection conditions={conditions} />
      )}

      {/* Row 3: Day range chart */}
      {rangeData.length > 0 && (
        <WidgetGroup label="Dagsoversikt">
          <DayRangeChart data={rangeData} />
        </WidgetGroup>
      )}
    </div>
  );
};

export default Grid;
