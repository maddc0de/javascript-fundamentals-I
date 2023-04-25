const cohort = {
  name: 'May2022',
  id: 1234,
  students: ['Voldemort', 'Joker', 'Hannibal Lecter', 'Ursula']
};

const printMessage = (objectName) => {
  console.log(`${objectName.id} - ${objectName.name} - ${objectName.students.length} students in this cohort`);
};

printMessage(cohort);