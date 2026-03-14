'use strict';

const list = document.querySelector('ul');

function getSalaryNumber(salary) {
  return Number(salary.replace(/[$,]/g, ''));
}

function sortList(listElement) {
  const items = Array.from(listElement.children);

  items.sort((a, b) => {
    const salaryA = getSalaryNumber(a.dataset.salary);
    const salaryB = getSalaryNumber(b.dataset.salary);

    return salaryB - salaryA;
  });
  items.forEach((item) => listElement.appendChild(item));
}

function getEmployees(listElement) {
  const people = Array.from(listElement.children);

  people.forEach((person) => {
    const name1 = person.textContent.trim();
    const position = person.dataset.position;
    const salary = person.dataset.salary;
    const age = person.dataset.age;

    return `Name: ${name1}, Position: ${position}, Salary: ${salary}, Age: ${age}`;
  });
}

sortList(list);
getEmployees(list);
