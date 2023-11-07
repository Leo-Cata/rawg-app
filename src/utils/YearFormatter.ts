export const yearFormatter = (releaseDate: string) => {
  console.log(releaseDate);
  //regex value to turn YYYY-MM-DD into DD/MM/YYYY
  const dayMonthYearRegex = /(\d{4})-(\d{2})-(\d{2})/;
  const dayMonthYearStringRearrange = "$3/$2/$1";

  return releaseDate.replace(dayMonthYearRegex, dayMonthYearStringRearrange);
};
