import React from "react";
import { CELSIUS, INCHES, MILLIBAR, PERCENT } from "../constants";
import WidgetGroup from "./WidgetGroup";
import WebcameraImage from "./widgets/Image";
import MonthlyStats from "./stats/MonthlyStats";
import YearlyStats from "./stats/YearlyStats";
import RainWidget from "./widgets/RainWidget";
import SunWidget from "./widgets/SunWidget";
import TemperatureWidget from "./widgets/TemperatureWidget";
import WindWidget from "./widgets/WindWidget";
import DailyStats from "./stats/DailyStats";
import type Conditions from "@/types/conditions";
import type { DavisCurrentObservation } from "@/types/conditions";
import ImageSkeleton from "./ImageSkeleton";
import CardSkeleton from "./CardSkeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "./ui/dialog";
import translateLastUpdated from "@/utils/translateLastUpdated";
import { AspectRatio } from "./ui/aspect-ratio";
import getRain from "@/utils/getRain";
import toMilitaryTime from "@/utils/toMilitaryTime";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertTriangle, Info } from "lucide-react";

interface GridProps {
  conditions: Conditions;
  imageUrl?: string | null;
}

const Grid: React.FC<GridProps> = ({ conditions, imageUrl }) => {
  const davis_current_observation =
    conditions.davis_current_observation as DavisCurrentObservation;

  return (
    <ul className="m-4 grid auto-rows-max gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <li className="flex flex-col gap-2 sm:col-span-1 sm:col-start-1 sm:row-start-1 md:col-span-2 md:col-start-1 md:row-start-1 lg:col-span-2 lg:col-start-2 lg:row-start-1">
        <WidgetGroup label="Været nå">
          {conditions.observation_time ? (
            <div className="flex items-start justify-center">
              {imageUrl ? (
                <Dialog>
                  <DialogTrigger>
                    <WebcameraImage
                      src={imageUrl}
                      alt="Web Camera Image"
                      width={640}
                      height={480}
                      updated={conditions.observation_time}
                      priority
                      className="rounded-md"
                    />
                  </DialogTrigger>
                  <DialogContent className="min-w-[80%]">
                    <AspectRatio ratio={16 / 9}>
                      <WebcameraImage
                        src={imageUrl}
                        alt="Web Camera Image"
                        updated={conditions.observation_time}
                        priority
                        fill
                        sizes="50vw"
                        className="rounded-md"
                      />
                    </AspectRatio>
                    <DialogDescription className="flex items-center justify-center">
                      {translateLastUpdated(conditions.observation_time)}
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              ) : (
                <ImageSkeleton />
              )}
            </div>
          ) : (
            <CardSkeleton />
          )}
        </WidgetGroup>
      </li>
      <li>
        <WidgetGroup label="Temperatur">
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
        {davis_current_observation ? (
          <WidgetGroup label="Sol" className="my-8">
            {/* The SunWidget defaults the boolean sunrise flag to be false. */}
            <SunWidget
              label={"Soloppgang"}
              time={toMilitaryTime(davis_current_observation.sunrise)}
              sunrise
            />

            <SunWidget
              label={"Solnedgang"}
              time={toMilitaryTime(davis_current_observation.sunset)}
            />
          </WidgetGroup>
        ) : (
          <CardSkeleton />
        )}
      </li>
      <li>
        <WidgetGroup label="Nedbør">
          <RainWidget
            label={"Luftfuktighet"}
            value={conditions.relative_humidity}
            unit={PERCENT}
          />

          {davis_current_observation ? (
            <RainWidget
              label={"Regn i dag"}
              value={getRain(conditions)}
              unit={INCHES}
            />
          ) : (
            <CardSkeleton />
          )}
        </WidgetGroup>
        <WidgetGroup label="Vind" className="my-8">
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
            label="Lufttrykk"
            value={conditions.pressure_mb}
            unit={MILLIBAR}
            tendency={
              conditions.davis_current_observation.pressure_tendency_string
            }
          />
        </WidgetGroup>
      </li>

      {davis_current_observation ? (
        <li className="col-start-1 sm:col-span-1 sm:row-start-1 md:col-span-2 md:row-start-4 lg:col-span-4 lg:row-start-3">
          <WidgetGroup label="Gjennomsnitt">
            <div className="grid gap-3 lg:grid-cols-3">
              <DailyStats conditions={conditions} />

              <MonthlyStats conditions={conditions} />

              <YearlyStats conditions={conditions} />
            </div>
          </WidgetGroup>
        </li>
      ) : (
        <CardSkeleton />
      )}
    </ul>
  );
};

export default Grid;
