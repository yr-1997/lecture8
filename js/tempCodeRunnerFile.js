class Student {
  constructor(information) {
    this.university = information.university;
    this.course = information.course;
    this.fullName = information.fullName;
    this.marks = information.marks;
    this.active = true;
  }
  getInfo() {
    console.log(
      `Студент 1го курсу Вищої Школи ${this.university},це ${this.course} Психотерапії , м.Львів , ${this.fullName}`
    );
  }
  get getMarks() {
    if (this.active) {
      return this.marks;
    } else {
      return null;
    }
  }

  set getMarks(mark) {
    if (this.active) {
      this.marks.push(mark);
    }
  }
  getAverageMark() {
    if (this.active) {
      return (
        this.marks.reduce((total, mark) => {
          return total + mark;
        }, 0) / this.marks.length
      );
    } else {
      return null;
    }
  }
  dismiss() {
    this.active = false;
  }
  recover() {
    this.active = true;
  }
}
class BudgetStudent extends Student {
  constructor(university, course, fullName, scholarship, marks) {
    super(university, course, fullName);
    this.scholarship = scholarship;
    this.marks = marks;
    this.runTimer(this);
  }
  get getScholarship() {
    if (this.getAverageMark() >= 4 && this.active) {
      return this.scholarship;
    }
    return null;
  }
  runTimer(student, delay = 30000) {
    const scholarship = student.getScholarship;
    this.timer = setTimeout(function loop() {
      if (scholarship) {
        console.log(`ви отримали ${scholarship} грн степендії(хоч шось)`);
        this.timer = setTimeout(loop, delay);
      }
    }, delay);
  }
  dismiss() {
    super.dismiss();
    clearTimeout(this.timer);
    console.log(`Цей студент виключений`);
  }
}
const studentYura = new Student({
  university: "Політехніка",
  course: "курс",
  fullName: "Підлуцький Юрій ",
  marks: [5, 4, 4, 5],
});
const marks = [5, 4, 4, 5];
const budgetYura = new BudgetStudent(
  "Вищої Школи Психотерапії м.Одеса",
  1,
  "Остап Бендер",
  1400,
  marks
);
studentYura.getInfo();
studentYura.getMarks = 5;
console.log(studentYura.getMarks);
console.log(studentYura.getAverageMark(marks));
studentYura.dismiss();
studentYura.getMarks = 5;
console.log(studentYura.getMarks);
console.log(studentYura.getAverageMark(marks));
studentYura.recover();
studentYura.getMarks = 5;
console.log(studentYura.getMarks);
console.log(studentYura.getAverageMark(marks));
