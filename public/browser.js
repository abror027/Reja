// const { response } = require("../app");


console.log("Frontend JS ishga tushdi");

function itemTemplate(item) {
    return `<li class="list-group-item d-flex">
    <span class="item-text">
        ${item.reja}
    </span>
    <div class="btn-group-own">
        <button data-id="${item._id}" class="btn-success">O'zgartirish</button>
        <button data-id="${item._id}" class="btn-danger">O'chirish</button>
    </div>
</li>`;
  }

let createField = document.getElementById("create-field");

document
.getElementById("create-form")
.addEventListener("submit", function (e) {
    e.preventDefault();
    
    axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
        document.getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data))
        createField.value = "";
        createField.focus();
    })
    .catch((err) => {
        console.log("Iltimos qaytadan harakat qiling!");
    });

});


document.addEventListener("click", function (ele) {
    // delete operation
    if(ele.target.classList.contains("delete-me")) {
        if(confirm("Aniq o'chirmoqchimisiz?")) {
            axios.post("/delete-item", { id: ele.target.getAttribute("data-id") })
            .then((respose) => {
                console.log(respose.data);
                ele.target.parentElement.parentElement.remove();
            })
            .catch((err) => {
                console.log("Iltimos qaytadan harakat qiling!");
            });
        }
    }
    // edit operation
    if(e.target.classList.contains("edit-me")) {
        alert("siz edit tugmasini bosdingiz");
    }
});