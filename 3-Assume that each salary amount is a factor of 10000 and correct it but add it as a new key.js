let data = require('./1-arrays-jobs.cjs')

data.map((element) => element.corrected_salary = element.salary.slice(1,element.salary.length) * 10000 );
console.log(data)