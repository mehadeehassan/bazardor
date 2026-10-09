const BANGLA_LOCALE = "bn-BD";

const UNIT_LABELS = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

/** "kg" -> "কেজি" */
export function unitLabel(unit) {
  return UNIT_LABELS[unit] ?? unit;
}

/** "kg" -> "প্রতি কেজি" */
export function perUnitLabel(unit) {
  return `প্রতি ${unitLabel(unit)}`;
}

/** 1850 -> "১,৮৫০", 63.5 -> "৬৩.৫০" */
export function formatNumber(value) {
  const digits = Number.isInteger(value) ? 0 : 2;
  return value.toLocaleString(BANGLA_LOCALE, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

/** 2.1 -> "২.১%" */
export function formatPercent(pct) {
  return `${Math.abs(pct).toLocaleString(BANGLA_LOCALE, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })}%`;
}

/** 1000 -> "১,০০০" */
export function formatCount(count) {
  return count.toLocaleString(BANGLA_LOCALE);
}

/** "মঙ্গলবার, ৬ অক্টোবর, ২০২৬" for the given date, in Dhaka time */
export function formatBanglaDate(date = new Date()) {
  const parts = new Intl.DateTimeFormat(BANGLA_LOCALE, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).formatToParts(date);

  const pick = (type) => parts.find((part) => part.type === type)?.value;
  return `${pick("weekday")}, ${pick("day")} ${pick("month")}, ${pick("year")}`;
}
