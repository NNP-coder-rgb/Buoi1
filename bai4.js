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

window.updateData = (id) => {
  let checkId = students.find((student) => student.id === id);
  if (!checkId) return;

  inputName.value = checkId.name;
  inputAge.value = checkId.age;
  inputClass.value = checkId.class;

  editId = id;
  btnSubmit.innerText = "Cập nhật";
};

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  let name = inputName.value.trim();
  let age = inputAge.value.trim();
  let className = inputClass.value.trim();

  if (editId !== null) {
    let index = students.findIndex((s) => s.id === editId);
    if (index !== -1) {
      students[index] = { ...students[index], name, age, class: className };
    }
    editId = null;
    btnSubmit.innerText = "Thêm sinh viên";
  } else {
    let newStudent = {
      id: Date.now(),
      name,
      age,
      class: className,
    };
    students.push(newStudent);
  }

  localStorage.setItem("STUDENT_LIST", JSON.stringify(students));
  renderData();

  inputName.value = "";
  inputAge.value = "";
  inputClass.value = "";
});

renderData();
