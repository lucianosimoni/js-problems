const countries = ['South Africa ', 'Great Britain', 'Germany', 'Austria']

const countriesStartG = countries.filter(country => country.startsWith('G'))

console.log(countriesStartG)

// const findCountry = countries.find(country => countriesWithoutI.match('er'))
// console.log(findCountry)

const findCountryWithEr = countriesStartG.find(country => country.match('er'))
console.log(findCountryWithEr)

