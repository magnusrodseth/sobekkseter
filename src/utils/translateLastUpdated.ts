import moment from "moment";

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

  const parsedDate = moment(`${day} ${month} ${year}, ${time}`).locale("no");
  const formattedDate = parsedDate.format("DD.MM.YYYY, HH:mm");

  return `Sist oppdatert ${formattedDate}`;
};

export default translateLastUpdated;
