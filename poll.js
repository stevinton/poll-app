'use strict';

const submit = document.querySelector(".submit");
const option = document.querySelector(".option");
const right = document.querySelector(".right");

let values = { "python": 0, "java": 0, "cpp": 0, "javascript": 0, "others": 0 };

submit.addEventListener('click', function () {
    const inputs = option.querySelectorAll("input[type='radio']");
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            update(inputs[i].value);
        }
    }
});

const update = (val) => {
    for (let j = 0; j < right.children.length; j++) {
        if (right.children[j].classList.contains("box") && right.children[j].classList.contains(val)) {
            let children = right.children[j].querySelector('span');
            let t = Number(children.textContent)
            t += 1
            children.innerText = t;
            values[val] = t;
            console.log(values);
            maxUpdate()
        }
    }
};

const max = document.querySelector(".maxNum");

const maxUpdate = () => {
    let maxLang = '';
    let maxValue = 0;
    for (let k in values) {
        if (values[k] > maxValue) {
            maxValue = values[k];
            maxLang = k
        }
    }
    console.log(maxLang);
};

