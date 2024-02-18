// const { response } = require("../app");

// const { response } = require("../app");

// const { response } = require("express");


console.log("Frontend JS ishga tushdi");

function itemTemplate(item) {
    return `<li class="list-group-item d-flex">
    <span class="item-text">
        ${item.reja}
    </span>
    <div class="btn-group-own">
        <button data-id="${item._id}" class="edit-me btn-success">O'zgartirish</button>
        <button data-id="${item._id}" class="delete-me btn-danger">O'chirish</button>
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



document.addEventListener("click", function (e) {
    // delete operation
    if (e.target.classList.contains("delete-me")) {
        if (confirm("Aniq o'chirmoqchimisiz?")) {
            axios.post("/delete-item", { id: e.target.getAttribute("data-id") })
                .then((response) => {
                    console.log(response.data);
                    e.target.parentElement.parentElement.remove();
                })
                .catch((err) => {
                    console.log("Iltimos qaytadan harakat qiling!");
                });
        }
    }
    // edit operation
    if (e.target.classList.contains("edit-me")) {
        let userInput = prompt("O'zgartirish kiriting", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
        if (userInput) {
            axios.post("/edit-item", {
                id: e.target.getAttribute("data-id"), new_input: userInput,
            }).then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
            }).catch((err) => {
                console.log("Iltimos qaytadan harakat qiling!");
            });
        }
    }
});

// all delete

document.getElementById("clean-all").addEventListener("click", function () {
    axios.post("/delete-all", { delete_all: true }).then(response => {
        alert(response.data.state);
        document.location.reload();
    });
});

