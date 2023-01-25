const inputlabel = document.querySelector('#inputlabel');
const inputtype = document.querySelector('#inputType');
const form = document.querySelector('#form');

inputlabel.addEventListener('keyup', (event) => {
    const key = event.key;
    if(key === "Enter"){
        const type = inputtype.value;
        const label = inputlabel.value;
        const labelInput = document.createElement("label");
        const div = document.createElement("div");
        let input = null ;
       if(input === "textarea"){
        input = document.createElement("textarea");

       }
       else{
        input = document.createElement("input");
       }
        labelInput.innerHTML = label;
        input.type = type ;

        input.classList.add("form-control");
        labelInput.classList.add("form-label")
        div.classList.add("p-3")
        if(type != "submit"){
            div.appendChild(labelInput);
        }
        
        if(type === "submit"){
            input.classList.add("btn");
            input.classList.add("btn-success");
        }
        div.appendChild(input);

        form.appendChild(div);
    }
})