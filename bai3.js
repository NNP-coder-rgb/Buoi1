let students = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    age: 20,
    class: "CNTT-12",
  },
  {
    id: 2,
    name: "Trần Thị B",
    age: 21,
    class: "CNTT-12",
  },
  {
    id: 3,
    name: "Phạm Văn C",
    age: 19,
    class: "CNTT-12",
  },
];

let renderData = () => {
  let listStudent = document.getElementById("student-list");

  listStudent.innerHTML = "";

  let data = localStorage.getItem("data");
  if (data) {
    students = JSON.parse(data);
  } else {
    localStorage.setItem("students", JSON.stringify(students));
  }

  students.forEach((student) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.class}</td>
        <td><button>Sửa</button><button>Xóa</button></td>
    `;

    listStudent.appendChild(tr);
  });
};

renderData();

let createData = () => {
  let inputName = document.getElementById("input-name");
  let inputAge = document.getElementById("input-age");
  let inputClass = document.getElementById("input-class");
  let btnCreate = document.getElementById("button-submit");

  btnCreate.addEventListener("click", (e) => {
    e.preventDefault();

    let name = inputName.value.trim();
    let age = inputAge.value.trim();
    let className = inputClass.value.trim();

    let newStudent = {
      id: Date.now(),
      name: name,
      age: age,
      class: className,
    };

    students.push(newStudent);
    renderData();

    inputName.value = "";
    inputAge.value = "";
    inputClass.value = "";
  });
};

createData();
