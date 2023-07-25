export default function displayDate(date) {
  const [year, month, day] = date.split("-");
  return `${month}/${day}/${year}`;
};