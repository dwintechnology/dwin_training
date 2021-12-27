function clone(x, y) {
    const z = {};
    for (const key in x) {
      z[key] = x[key];
    }
    for (const key in y) {
      z[key] = y[key];
    }
    return z;
  }
​
  function getRandomMark(from, to) {
    return Math.floor(Math.random() * (to + 1)) + from;
  }
​
  const DwinTraining = {
    students: {},
    smokingRoom: {},
    subjects: {
      git: {
        results: {
          Tigran: 7,
          Joe: 8,
          Valod: 2,
        },
      },
    },
    printAllStudents: function () {
      for (const name in this.students) {
        if (Object.hasOwnProperty.call(this.students, name)) {
          console.log(`${name}: ${this.students[name].mark}`);
        }
      }
    },
    getAverageMark: function () {
      let res = 0;
      let count = 0;
      for (const name in this.students) {
        if (Object.hasOwnProperty.call(this.students, name)) {
          res = res + this.students[name].mark;
          count++;
        }
      }
      if (count === 0) {
        return 0;
      }
      return res / count;
    },
    addStudent: function (student) {
      if (!this.students.hasOwnProperty(student.name)) {
        this.students[student.name] = {
          age: student.age,
          mark: 0,
        };
      } else {
        // TODO:
      }
    },
    removeStudent: function (studentName) {
      if (this.students.hasOwnProperty(studentName)) {
        delete this.students[studentName];
      } else {
        // TODO:
      }
    },
    setMark: function (mark, studentName) {
      this.students[studentName].mark = mark;
    },
    getBestStudent: function () {
      let bestStudentNameAndMark;
      for (const name in this.students) {
        const mark = this.students[name].mark;
​
        if (bestStudentNameAndMark === undefined || mark > bestStudentNameAndMark.mark) {
          bestStudentNameAndMark = {
            name: name,
            mark: mark,
          };
        }
      }
      const res = {
        name: bestStudentNameAndMark.name,
      };
      this.students[bestStudentNameAndMark.name];
      const clonedStudent = clone(this.students[bestStudentNameAndMark.name], res);
      return clonedStudent;
    },
    moveBestStudentToTheSmokingRoom: function () {
      const bestStudent = this.getBestStudent();
      const name = bestStudent.name;
      delete this.students[name];
      this.smokingRoom[name] = bestStudent;
    },
    exam: function (subjectName, studentName) {
      const random = getRandomMark(0, 10);
      this.subjects[subjectName].results[studentName] = random;
      this.students[studentName].mark = this.students[studentName].mark + random;
      return random;
    },
    printAllDroppedOutStudents: function (subjectName, minMark) {
      for (const name in this.subjects[subjectName].results) {
        if (this.subjects[subjectName].results[name] < minMark) {
          alert(name + ':' + ' ' + this.subjects[subjectName].results[name]);
        }
      }
    },
  };
​
  function init() {
    DwinTraining.addStudent({
      name: 'John',
      age: 20,
    });
    DwinTraining.addStudent({
      name: 'Joe',
      age: 15,
    });
    DwinTraining.addStudent({
      name: 'Ann',
      age: 12,
    });
    DwinTraining.addStudent({
      name: 'Susan',
      age: 75,
    });
  }