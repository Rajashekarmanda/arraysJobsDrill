let data = require('./1-arrays-jobs.cjs')

let allWebDevelopers = data.filter((each) => (each.job).startsWith("Web Developer"))

console.log(allWebDevelopers)
