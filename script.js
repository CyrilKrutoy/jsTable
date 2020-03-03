"use strict"
function createTable(elem, line, column, className) {
    for (let i = 0; i < line; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < column; j++) {
            let td = document.createElement("td");
            tr.appendChild(td)
            td.classList.add(className)
        }
        elem.appendChild(tr)
    }
}

function createMarkup() {
    const main = document.createElement("main");
    document.querySelector("body").appendChild(main);
    const table = document.createElement("table");
    main.appendChild(table);
    const thead = document.createElement("thead");
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    createTable(thead, 1, 2, "tHead");
    createTable(tbody, 10, 2, "tBody");
    setTimeout(() => { main.remove() }, 90000)
}

function createDataArrHead() {
    const headArr = ["Array method", "Mutatable"];
    return headArr
}

function createDataArrBody() {
    const bodyArr = ["slice ", "false", "splice", "true", "sort", "true", "filter", "false",
        "flat", "false", "reverse", "true", "toString", "false", "map", "false", "join", "false", "fill", "true"
    ];
    return bodyArr
}

function fillTable(targetArr, className) {
    const tableElement = document.querySelectorAll(className);
    for (let i = 0; i < tableElement.length; i++) {
        tableElement[i].innerText = targetArr[i];
        if (tableElement[i].innerText === "true") {
            tableElement[i].classList.add("red");
            tableElement[i - 1].classList.add("red");
        } else if (tableElement[i].innerText === "false") {
            tableElement[i].classList.add("green");
            tableElement[i - 1].classList.add("green");
        }
    }
    return tableElement
}

function classToggle(className, newClassName) {
    const tableElement = document.querySelectorAll(className);
    for (let k = 0; k < tableElement.length; k++) {
        tableElement[k].classList.toggle(newClassName);
    }
}

function main() {
    createMarkup();
    fillTable(createDataArrHead(), ".tHead");
    fillTable(createDataArrBody(), ".tBody");
    setInterval(() => classToggle(".red", "transparentRed"), 3000);
    setTimeout(() => classToggle(".transparentRed", "italicType"), 5000);
    setTimeout(() => classToggle(".transparentRed", "italicType"), 15000);
}

main()