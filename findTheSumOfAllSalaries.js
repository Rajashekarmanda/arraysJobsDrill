let data = require('./1-arrays-jobs.cjs')

let sumOfAllMemSalaries = 0
data.map((eachPerson) => sumOfAllMemSalaries += eachPerson.salary.slice(1,eachPerson.salary.length)*1);
console.log(sumOfAllMemSalaries.toFixed(2))
