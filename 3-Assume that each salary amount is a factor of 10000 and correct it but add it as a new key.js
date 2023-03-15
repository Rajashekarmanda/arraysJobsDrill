let data = require('./1-arrays-jobs.cjs')

data.map((element) => {
    let modifySalary = element.salary.slice(1,element.salary.length)*10000
    element.corrected_salary = modifySalary
});
console.log(data)