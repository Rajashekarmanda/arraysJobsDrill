let data = require('./1-arrays-jobs.cjs')

let convertedSalaryToNumber = data.map((eachPerson) => eachPerson = {...eachPerson, salary: eachPerson.salary.slice(1,eachPerson.salary.length) * 1})
console.log(convertedSalaryToNumber)
