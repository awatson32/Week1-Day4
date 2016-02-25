function createButton() {
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Click");
    btn.appendChild(t);
    document.body.appendChild(btn);
    document.getElementByClass('body').addEventListner ("load", createButton);
}

