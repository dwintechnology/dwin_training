let dwinTraining = {
    membersCount: 11,
    teacherCount: 8,
    averageMark: 8,
    tigran: {
      mark: 2,
      email: "tigran.surname.dwin@gmail.com"
    },
    jorj: {
        mark: 9,
      email: "jorj.surname.dwin@gmail.com",
    },
    annaK: {
        mark: 10,
      email: "annaK.surname.dwin@gmail.com",
    },
    siranush: {
        mark: 8,
      email: "siranush.surname.dwin@gmail.com"
    },
    annaM: {
        mark: 9,
      email: "annaM.surname.dwin@gmail.com"
    },
    arman: {
        mark: 7,
      email: "arman.surname.dwin@gmail.com"
    },
    suro: {
        mark: 6,
      email: "suro.surname.dwin@gmail.com"
    },
    varuj: {
        mark: 8,
      email: "varuj.surname.dwin@gmail.com"
    },
    maria: {
        mark: 8,
      email: "maria.surname.dwin@gmail.com"
    },
    artur: {
        mark: 6,
      email: "artur.surname.dwin@gmail.com"
    },
    sasun: {
        mark: 10,
      email: "sasun.surname.dwin@gmail.com"
    },
    getAverageMark: function(){
        this.averageMark;
    },
    printAllStudents: function() {
        console.log(this.tigran);
        console.log(this.jorj);
        console.log(this.annaK);
        console.log(this.siranush);
        console.log(this.annaM);
        console.log(this.arman);
        console.log(this.suro);
        console.log(this.maria);
        console.log(this.artur);
        console.log(this.sasun);
    },
    setMark: function(mark, student)  {
         this.student.mark += mark;
    },
}

// console.log(dwinTraining.getAverageMark());
// dwinTraining.setMark(8, dwinTraining.tigran)
// console.log(dwinTraining.printAllStudents());

  