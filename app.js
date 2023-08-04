const input = document.getElementById("input");
const button = document.getElementById("button-id");
const todoLists = document.getElementById("list-todo");
const clearBtn = document.getElementById("clear-btn");

button.addEventListener("click", () => {
  const value = input.value;
  if (value === "") {
    alert("Nhap day du vao");
  } else {
    const li = document.createElement("li");
    li.innerText = value;
    todoLists.appendChild(li);
    input.value = "";
    alert("Success");
  }
});

clearBtn.addEventListener("click", () => {
  todoLists.innerText = "";
});
console.log('Tam123')