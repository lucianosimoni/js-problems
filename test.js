// Capitals, TASK 1 related to objects and kinda looping with it
const countryData = {
    'United Kingdom': 'London',
    'United States of America': 'Washington DC',
    'France': 'Paris',
    'Germany': 'Berlin',
    'Italy': 'Rome',
    'Ukraine': 'Kiev',
    'Japan': 'Tokyo',
    'South Africa': 'Cape Town',
    'Austria': 'Vienna',
    'Nigeria': 'Abuja',
    'Phillipines': 'Manila',
    'Belgium': 'Brussels',
    'Egypt': 'Cairo',
    'Ethiopia': 'Addis Ababa'
  }
  
const countries = [
    'Ethiopia', // 2 + 3 + 4 + 3 + 1 // 13
    'Nigeria', // 3 + 2 + 3 + 1 // 9
    'Japan' // 1 + 1 // 2
]

// const capitals = countries.map(country => countryData[country])

// console.log(capitals)

// Second Task

const vowelsValue = {'a' : 1, 'e' : 2, 'i' : 3, 'o' : 4, 'u' : 5}

const countriesVowelsValue = countries.map(country => {
    let vowelValue = 0
    for (char of country.toLowerCase()) {
        vowelValue += char in vowelsValue ? vowelsValue[char] : null
    }
    return vowelValue
})

console.log(countriesVowelsValue)
