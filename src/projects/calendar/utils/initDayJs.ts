import dayjs from "dayjs";
import weekday from 'dayjs/plugin/weekday';
import updateLocale from 'dayjs/plugin/updateLocale';
import isoWeek from 'dayjs/plugin/isoWeek';
import isToday from 'dayjs/plugin/isToday';
import localeData from "dayjs/plugin/localeData";

export function initDayJs(locale: string) {
  dayjs.extend(isToday);
  dayjs.extend(isoWeek);
  dayjs.extend(updateLocale);
  dayjs.extend(weekday);
  dayjs.extend(localeData);
  dayjs.locale(locale);
}