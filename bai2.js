let students = [
  { id: 1, name: "Nguyễn Văn A", age: 20, class: "CNTT-12" },
  { id: 2, name: "Nguyễn Văn B", age: 20, class: "CNTT-12" },
  { id: 3, name: "Nguyễn Văn C", age: 20, class: "CNTT-12" },
  { id: 4, name: "Nguyễn Văn D", age: 20, class: "CNTT-12" },
  { id: 5, name: "Nguyễn Văn E", age: 20, class: "CNTT-12" },
];

let studentList = document.getElementById("list-student");
let data = localStorage.getItem("students");

if (data) {
  students = JSON.parse(data);
} else {
  localStorage.setItem("students", JSON.stringify(students));
}

studentList.innerHTML = "";

students.forEach((student) => {
  let item = document.createElement("div");
  item.classList.add("student-row");

  item.innerHTML = `
        <li>${student.id}. ${student.name}(${student.age}, ${student.class})</li>
    `;

  studentList.appendChild(item);
});
