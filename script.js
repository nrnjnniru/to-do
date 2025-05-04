const myList = document.getElementById("list");

function addText() {

    const textVal = document.getElementById("inp").value;
    if (textVal != "") {
        const node = document.createElement("li");
        const span = document.createElement("span");
        //span.className('close-btn');
        node.innerHTML = textVal;
        node.appendChild(span);
        document.getElementById("list").appendChild(node);
        document.getElementById("inp").value = "";
    }

}

document.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
});