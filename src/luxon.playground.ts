import { DateTime } from "luxon";

const isoDate = "1996-05-06T00:00:00.000Z";

const convertedDate = DateTime.fromISO(isoDate).toFormat("yyyy-MM-dd");

console.log(convertedDate);