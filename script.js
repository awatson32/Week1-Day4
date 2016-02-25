function checkAge() {
    var age = prompt('What is your age?');
    console.log('Hello, you are ' + age);
    if (age < 21) {
        alert('You are under 21');
    } else {
        alert('You are 21+');
    }
}   