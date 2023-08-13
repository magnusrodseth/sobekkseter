const toMilitaryTime = (time: string) => {
  const match = time.match(/^(\d{1,2}):(\d{2})([apAP][mM])$/);

  if (!match) {
    throw new Error("Invalid time format");
  }

  if (!match[1] || !match[2] || !match[3]) {
    throw new Error("Invalid time format");
  }

  let hours = parseInt(match[1]);
  const minutes = match[2];
  const ampm = match[3].toLowerCase();

  if (hours === 12) {
    hours = ampm === "am" ? 0 : 12;
  } else {
    hours += ampm === "pm" ? 12 : 0;
  }

  const formattedHours = hours.toString().padStart(2, "0");

  return `${formattedHours}:${minutes}`;
};

export default toMilitaryTime;
