let data = require('./1-arrays-jobs.cjs')

let updatedSalaryArr = data.map((eachEmployee) => {
    if (typeof eachEmployee.salary == 'string'){
        let newSalary = (eachEmployee.salary.slice(1,eachEmployee.salary.length))*1
       return {...eachEmployee,salary : newSalary}
    }
})

console.log(updatedSalaryArr)
