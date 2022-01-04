let elements = {};
const generateButton = document.getElementById('generateButton');
const outputModal = document.getElementById('outputModal');
const closeModalElements = document.getElementsByClassName('close');
const outputTextarea = document.getElementById('outputTextarea');
const downloadButton = document.getElementById('downloadButton');
generateButton.addEventListener("click", () => {
  generate();
  outputModal.classList.add("is-active");
});
downloadButton.addEventListener("click", () => {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(outputTextarea.value));
  element.setAttribute('download', 'serverconfig.txt');
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
});

for (let element of closeModalElements) {
  element.addEventListener("click", () => {
    outputModal.classList.remove("is-active");
  });
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    outputModal.classList.remove("is-active");
  }
});
document.addEventListener('DOMContentLoaded', () => {
  main();
});

function generateID() {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10).toUpperCase();
}

function createTextInput(name, default_value, description) {
  let input = document.createElement("input");
  input.classList.add("input");
  input.setAttribute("type", "text"); // Create a label for the input

  let label = document.createElement("label");
  label.setAttribute("for", name);
  label.innerHTML = name;
  input.setAttribute("name", name);
  input.setAttribute("value", default_value);
  input.setAttribute("placeholder", description);
  return input;
}

function createSelectInput(name, default_value, description, options) {
  let div = document.createElement("div");
  div.classList.add("select");
  let input = document.createElement("select");
  div.appendChild(input);
  input.setAttribute("name", name);
  input.setAttribute("value", default_value);
  input.setAttribute("placeholder", description);

  for (let i = 0; i < options.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", options[i].name);
    option.value = options[i].value;

    if (i === default_value) {
      option.selected = true;
    }

    option.innerHTML = options[i].name;
    input.appendChild(option);
  }

  return div;
}

function createNumberInput(name, default_value, description, min, max) {
  let input = document.createElement("input");
  input.classList.add("input");
  input.setAttribute("type", "number"); // Create a label for the input

  let label = document.createElement("label");
  label.setAttribute("for", name);
  label.innerHTML = name;
  input.setAttribute("name", name);
  input.setAttribute("value", default_value);
  input.setAttribute("placeholder", description);
  input.setAttribute("min", min);
  input.setAttribute("max", max);
  return input;
}

function createBoolInput(name, default_value, description) {
  let input = document.createElement("input");
  input.classList.add("checkbox");
  input.setAttribute("type", "checkbox"); // Create a label for the input

  let label = document.createElement("label");
  label.classList.add("checkbox");
  label.setAttribute("for", name);
  label.innerHTML = name;
  input.setAttribute("name", name);
  input.setAttribute("value", default_value);
  input.setAttribute("placeholder", description);
  return input;
}

function createDivider(name) {
  return document.createElement("hr");
}

function createTables() {
  let fields = document.getElementById("fields"); // Split the elements array by the divider

  let new_elements = [[]];

  for (let key in elements) {
    let element = elements[key];

    if (element.input.tagName !== "HR") {
      new_elements[new_elements.length - 1].push(element);
    } else {
      new_elements.push(element);
      new_elements.push([]);
    }
  } // Create the table


  new_elements.forEach(e => {
    if (e.length === undefined) {
      let label = document.createElement("h3");
      label.classList.add("is-size-3");
      label.innerHTML = e.description;
      fields.appendChild(label);
      fields.appendChild(e.input);
    } else {
      let table = document.createElement("table");
      table.classList.add("table");
      table.classList.add("is-bordered");
      table.classList.add("is-fullwidth"); // Create the header

      let thead = document.createElement("thead");
      let tr = document.createElement("tr");

      for (let item of ["Name", "Value", "Description"]) {
        let th = document.createElement("th");
        th.innerHTML = item;
        tr.appendChild(th);
      }

      thead.appendChild(tr);
      table.appendChild(thead);
      let tbody = document.createElement("tbody");
      table.appendChild(tbody);

      for (let key in e) {
        let element = e[key];
        let tr = document.createElement("tr");
        tr.id = element.id;
        let nameColumn = document.createElement("td");
        nameColumn.innerHTML = `<code>${element.name}</code>`;
        tr.appendChild(nameColumn);
        let inputColumn = document.createElement("td");
        inputColumn.appendChild(element.input);
        tr.appendChild(inputColumn);
        let descriptionColumn = document.createElement("td");
        descriptionColumn.innerHTML = element.description;
        tr.appendChild(descriptionColumn);
        tbody.appendChild(tr);
      }

      fields.appendChild(table);
    }
  });
}

function generate() {
  let output = "";

  for (let key in elements) {
    let element = elements[key];

    if (element.input.tagName !== "HR") {
      let html_element = document.getElementById(element.id);
      let cell = html_element.getElementsByTagName("td")[1];
      let input = cell.getElementsByTagName("input")[0];

      if (!input) {
        input = cell.getElementsByTagName("select")[0];
      }

      let value = input.value;

      if (element.input.type === "checkbox") {
        value = input.checked ? "1" : "0";
      }

      output += `${element.name} = ${value}\n`;
    }
  } // Remove the last newline


  output = output.slice(0, -1);
  outputTextarea.value = output;
}

function main() {
  // Loop through the PROPS object and create a form for each property
  for (let i = 0; i < PROPS.length; i++) {
    let prop = PROPS[i];
    let input;

    switch (prop.type) {
      case "text":
        input = createTextInput(prop.name, prop.default, prop.description);
        break;

      case "select":
        input = createSelectInput(prop.name, prop.default, prop.description, prop.options);
        break;

      case "number":
        input = createNumberInput(prop.name, prop.default, prop.description, prop.min, prop.max);
        break;

      case "bool":
        input = createBoolInput(prop.name, prop.default, prop.description);
        break;

      case "divider":
        input = createDivider(prop.name);
        break;

      default:
        console.log("Unknown property type: " + prop.type);
        break;
    }

    let desc;

    if (prop.type !== "divider") {
      desc = prop.description;
    } else {
      desc = prop.name;
    } // form.appendChild(input);


    elements[prop.name] = {
      "name": prop.name,
      "input": input,
      "description": desc,
      id: generateID()
    };
  }

  createTables();
}