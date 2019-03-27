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