function makeStudentsReport(data) {
    return data.map(objs =>`${objs.name}: ${objs.grade}`);
  }
function enrollInSummerSchool(students) {
    return students.map(student => {
      return {
        name: student.name,
        status: 'In Summer school',
        course: student.course,
      };
    });
  }
  function findById(items, idNum) {
    return items.find(item => item.id === idNum)
  }
  function validateKeys(object, expectedKeys) {

    if (Object.keys(object).length !== expectedKeys.length) {
      return false;
    }
    for (let i = 0; i < expectedKeys.length; i++) {
      if (!Object.keys(object).find(key => key === expectedKeys[i])) {
        return false;
      }
    }
    return true;
  }