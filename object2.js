function makeStudentsReport(data) {
    return data.map(objs =>`${objs.name}: ${objs.grade}`);
  }