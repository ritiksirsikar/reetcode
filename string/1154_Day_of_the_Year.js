function dayoftheyear(date) {
    const [year, month, day] = date.split('-').map(Number);
  const currentDate = new Date(year, month - 1, day);
  const startOfYear = new Date(year, 0, 1);
  const timeDiff = currentDate - startOfYear;
  const dayOfYear = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1;

  return dayOfYear;
};

let date = "2019-01-09";
console.log(dayoftheyear(date));

date = "2019-02-10"
console.log(dayoftheyear(date));

date = "1985-06-12"
console.log(dayoftheyear(date));

date = "1970-05-01"
console.log(dayoftheyear(date));

date = "2050-11-05"
console.log(dayoftheyear(date));


