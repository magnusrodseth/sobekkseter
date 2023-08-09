import Conditions from "@/types/conditions";

const getRain = (conditions: Conditions) => {
  const { davis_current_observation } = conditions;

  const rainDayIsDefined = !!parseFloat(davis_current_observation.rain_day_in);

  if (!rainDayIsDefined) {
    return davis_current_observation.rain_storm_in
  }

  return davis_current_observation.rain_day_in
}

export default getRain
