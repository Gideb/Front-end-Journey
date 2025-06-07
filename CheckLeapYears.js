function isLeapYear(year) {
	if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
		return `${year} is a leap year.`
	} else if (year % 4 == 0 && year % 100 == 0) {
		return `${year} is not a leap year.`
	} else if (year % 4 == 0) {
		return `${year} is a leap year.`
	} else {
		return `${year} is not a leap year`
	}
}

const year = "1990"
let result
result = isLeapYear(year)
console.log(result)
