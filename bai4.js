let students = JSON.parse(localStorage.getItem("STUDENT_LIST")) || [
  { id: 1, name: "Nguyễn Văn A", age: 20, class: "CNTT-12" },
  { id: 2, name: "Nguyễn Văn B", age: 20, class: "CNTT-12" },
  { id: 3, name: "Nguyễn Văn C", age: 20, class: "CNTT-12" },
];

let listStudent = document.getElementById("list-student");
let inputName = document.getElementById("input-name");
let inputAge = document.getElementById("input-age");
let inputClass = document.getElementById("input-class");
let btnSubmit = document.getElementById("btn-submit");

let editId = null;

let renderData = () => {
  listStudent.innerHTML = "";
  students.forEach((student) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.class}</td>
        <td>
          <button onclick="updateData(${student.id})">Sửa</button>
          <button onclick="deleteStudent(${student.id})">Xóa</button>
        </td>
    `;
    listStudent.appendChild(tr);
  });
};

renderData();

let createData = () => {
  btnSubmit.addEventListener("click", (e) => {
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

// updateData
let btnUpdate = document.getElementById("btn-update");
let btnCancel = document.getElementById("btn-cancel");

let updateData = (id) => {
  btnUpdate.style.display = "inline-block";
  btnCancel.style.display = "inline-block";
  btnSubmit.style.display = "none";

  let findStudent = students.find((student) => {
    return student.id === id;
  });

  inputName.value = findStudent.name;
  inputAge.value = findStudent.age;
  inputClass.value = findStudent.class;
  editId = id;
};

let handleUpdate = () => {
  let findIndexStudent = students.findIndex((student) => {
    return student.id === editId;
  });

  students[findIndexStudent].name = inputName.value;
  students[findIndexStudent].age = inputAge.value;
  students[findIndexStudent].class = inputClass.value;

  localStorage.setItem("STUDENT_LIST", JSON.stringify(students));

  renderData();

  inputName.value = "";
  inputAge.value = "";
  inputClass.value = "";
  btnUpdate.style.display = "none";
  btnCancel.style.display = "none";
  btnSubmit.style.display = "inline-block";

  editId = null;
};

btnUpdate.addEventListener("click", handleUpdate);
