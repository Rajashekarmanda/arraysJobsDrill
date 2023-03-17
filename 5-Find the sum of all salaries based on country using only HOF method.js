let data = require('./1-arrays-jobs.cjs')

let countriesList = [], countryWiseAllSalaries = []
data.map((eachPerson) => (!countriesList.includes(eachPerson.location)) ? countriesList.push(eachPerson.location) : "")
function CreateCountryWiseSalary(country, totalSalary) { // creating for country wise total salary object --- Factory function
    return {
        country: country,
        totalSalary: totalSalary
    }
}
countriesList.map(eachCountry => {
    let salaryOfCountry = 0
    data.map(eachPerson => (eachPerson.location === eachCountry) ? salaryOfCountry += eachPerson.salary.slice(1, eachPerson.salary.length) * 1 : '')
    countryWiseAllSalaries.push(CreateCountryWiseSalary(eachCountry, salaryOfCountry))
})
console.log(countryWiseAllSalaries)