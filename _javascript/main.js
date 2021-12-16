document.addEventListener('DOMContentLoaded', () => {
    main();
});

function createTextInput(name, default_value, description) {
    let input = document.createElement("input");
    input.classList.add("input");
    input.setAttribute("type", "text");
    // Create a label for the input
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
        option.innerHTML = options[i].name;
        input.appendChild(option);
    }
    return div;
}

function createNumberInput(name, default_value, description, min, max) {
    let input = document.createElement("input");
    input.classList.add("input");
    input.setAttribute("type", "number");
    // Create a label for the input
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
    input.setAttribute("type", "checkbox");
    // Create a label for the input
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
    let fields = document.getElementById("fields");

    // Split the elements array by the divider
    let new_elements = [[]];

    for (let key in elements) {
        let element = elements[key];
        if (element.input.tagName !== "HR") {
            new_elements[new_elements.length - 1].push(element);
        } else {
            new_elements.push(element);
            new_elements.push([]);
        }
    }

    // Create the table
    new_elements.forEach(e => {

        if (e.length === undefined) {
            let label = document.createElement("h3");
            label.innerHTML = e.description;
            fields.appendChild(label);
            fields.appendChild(e.input);
        } else {


            let table = document.createElement("table");
            table.classList.add("table");
            let tbody = document.createElement("tbody");
            table.appendChild(tbody);

            for (let key in e) {
                let element = e[key];
                let tr = document.createElement("tr");

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

var elements = {};

function main() {
    // Loop through the PROPS object and create a form for each property
    for (let i = 0; i < PROPS.length; i++) {
        let prop = PROPS[i];
        let input;
        // let form = document.createElement("form");
        // form.setAttribute("class", "field");
        // let label = document.createElement("label");
        // label.setAttribute("class", "label");
        // label.innerHTML = prop.name;
        // form.appendChild(label);
        // let input = null;
        // console.log(prop.type);
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
        }

        // form.appendChild(input);
        elements[prop.name] = {
            "input": input,
            "description": desc
        };
    }

    createTables();

}
