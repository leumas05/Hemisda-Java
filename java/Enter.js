var plats = 'start'

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
       // alert('Enter is pressed!');
       main();
       document.getElementById('Input').value = ''
    }
});