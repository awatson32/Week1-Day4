document.addEventListener("DOMContentLoaded", function() {
    var btn = document.createElement("button");
    btn.id = "button";
    btn.textContent = "click";
    btn.addEventListener("click", createSquare);
    document.body.appendChild(btn);  
    
    function createSquare() {  
        var squareArray = document.getElementsByClassName("square");
        var square = document.createElement("div");
        square.className = "square";
        document.body.appendChild(square);
        square.addEventListener("click", changeColor);
        square.addEventListener("onmouseover", squareHover);
        square.id = String(squareArray.length);
    };
    
    
    function squareHover() {
        document.getElementById("square");
        // var i;
        // for (i = 0; i < count.length ; i++);
                    
    };
    
    function changeColor(e) {
        var square = e.target;
        var color = "#"+((1<<24)*Math.random()|0).toString(16);
        square.style.backgroundColor = color;
    };

//Remove square based on odd or even number.
//next element sib
//prev element sib

    // function removeSquare() {
    //     if (squareCount % 2 == 0) {
             
    //     } else {
            
    //     }
        
    // };
    
    
});



