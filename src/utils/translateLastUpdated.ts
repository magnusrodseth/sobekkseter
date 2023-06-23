import moment from "moment";

const monthNumberToNorwegianMonthName = (monthNumber: number) => {
  switch (monthNumber) {
    case 1:
      return "januar";
    case 2:
      return "februar";
    case 3:
      return "mars";
    case 4:
      return "april";
    case 5:
      return "mai";
    case 6:
      return "juni";
    case 7:
      return "juli";
    case 8:
      return "august";
    case 9:
      return "september";
    case 10:
      return "oktober";
    case 11:
      return "november";
    case 12:
      return "desember";
  }
};

/**
 * Translates the last updated date to a more readable Norwegian format.
 * The message is on the format `Last Updated on Jun 23 2023, 11:07 pm CEST`.
 * We convert it to the format `Sist oppdatert 23.06.2023, 23:07`.
 *
 * @param lastUpdated is the last updated date.
 * @returns the translated last updated date.
 */
const translateLastUpdated = (lastUpdated: string) => {
  const date = lastUpdated.split(",")[0]?.split("on ")[1];
  const time = lastUpdated.split(",")[1]?.split(" CEST")[0];
  const month = date?.split(" ")[0];
  const day = date?.split(" ")[1];
  const year = date?.split(" ")[2];

  // We parse each part of the date to the correct format because the `lastUpdated` date is not on a standard format.
  const parsedTime = moment(time, "hh:mm a").format("HH:mm");
  const parsedDay = moment(day, "DD").format("DD");
  const parsedMonth = monthNumberToNorwegianMonthName(
    parseInt(moment(month, "MMM").format("M"))
  );
  const parsedYear = moment(year, "YYYY").format("YYYY");
  const formattedDate = `${parsedDay}. ${parsedMonth} ${parsedYear}, ${parsedTime}`;

  return `Sist oppdatert ${formattedDate}`;
};

export default translateLastUpdated;
