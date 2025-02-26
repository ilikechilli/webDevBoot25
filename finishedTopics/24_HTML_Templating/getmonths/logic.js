function dateRange(startDate, endDate) {
  // we use UTC methods so that timezone isn't considered
  let start = new Date(startDate);
  const end = new Date(endDate).setUTCHours(12);
  const dates = [];
  while (start <= end) {
    // compensate for zero-based months in display
    const displayMonth = start.getUTCMonth() + 1;
    dates.push([
      start.getUTCFullYear(),
      // months are zero based, ensure leading zero
      (displayMonth).toString().padStart(2, '0'),
      // always display the first of the month
      '01',
    ].join('-'));

    // progress the start date by one month
    start = new Date(start.setUTCMonth(displayMonth));
  }

  return dates;
}

const mydates = dateRange("2025-02-17", "2026-06-23");

for (let date of mydates){
  const getDate = new Date(date);
  const nameMonth = getDate.toLocaleDateString("default", {month: "long"})
  const nameYear = getDate.getFullYear();
  console.log(nameMonth, nameYear);
}