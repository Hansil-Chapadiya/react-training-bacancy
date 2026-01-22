/**
 * {  Engineer: 6000, HR: 5000}
 * 
 * 
 */

const departments = [
  {
    name: "Engineering",
    employees: [
      { name: "A", salary: 5000 },
      { name: "B", salary: 7000 }
    ]
  },
  {
    name: "HR",
    employees: [
      { name: "C", salary: 4000 },
      { name: "D", salary: 6000 }
    ]
  }
];

const totalengsalary = departments.reduce((acc, department) => {

  const totalVal = department.employees.reduce((ac, t) => {
    ac = t.salary
    return ac;
  }, 0);

  acc[department.name] = totalVal
  return acc;

}, {});

console.log(totalengsalary);