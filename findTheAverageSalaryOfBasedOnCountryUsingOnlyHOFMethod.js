let data = require('./1-arrays-jobs.cjs')

let countriesList = [], countryWiseAllSalaries = []
data.map((eachPerson) => (!countriesList.includes(eachPerson.location)) ? countriesList.push(eachPerson.location) : '');
function CreateCountryWiseSalary(country, totalSalary, countOfCountryIs) { // creating for country wise total salary object --- Factory function
    return {
        country: country,
        averageSalary: (totalSalary / countOfCountryIs).toFixed(2),
    }
}
countriesList.map(eachCountry => {
    let salaryOfCountry = 0, countOfCountry = 0
    data.map(eachPerson => {
        if (eachPerson.location === eachCountry) {
            salaryOfCountry += eachPerson.salary.slice(1, eachPerson.salary.length) * 1
            countOfCountry++
        }
    })
    countryWiseAllSalaries.push(CreateCountryWiseSalary(eachCountry, salaryOfCountry, countOfCountry))
})
console.log(countryWiseAllSalaries)