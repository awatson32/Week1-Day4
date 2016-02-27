document.addEventListener("DOMContentLoaded", function() {
    var btn = document.createElement("button");
    btn.id = "button";
    btn.textContent = "click";
    btn.addEventListener("click", createSquare);
    document.body.appendChild(btn);  
    
    var nextId = 0;
    
    function createSquare() {  
        var square = document.createElement("div");
        document.body.appendChild(square);
        square.className = "square";
        square.id = nextId;
        square.addEventListener("click", changeColor);
        square.addEventListener("mouseenter", mouseOver);
        square.addEventListener("mouseleave", mouseExit);
        square.addEventListener("dblclick", removeSquare);
        nextId += 1;
         
    };
    
    
    function mouseOver(e) {
        var textId = document.createTextNode(e.target.id);
        e.target.appendChild(textId);
        e.target.style.color = "white";                   
    };
    
    function mouseExit(e) {
        e.target.innerHTML = "";
    };
    
    function changeColor(e) {
        var square = e.target;
        var color = "#"+((1<<24)*Math.random()|0).toString(16);
        square.style.backgroundColor = color;
    };
    
    

//Remove square based on odd or even number.
//next element sib
//prev element sib

function removeSquare(e) {
    if (e.target.id % 2 == 0) {
        if (!e.target.nextSibling) {
            alert("Does not exist!");
        } else {
            e.target.nextSibling.remove();
            }
    } else {
        if (e.target.previousSibling.nodeName != "DIV") {
            alert("Does not exist!");
        } else {
            e.target.previousSibling.remove();
        }           
    }
    
};
    
    
});



