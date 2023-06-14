document.getElementById('pickerRed').onclick = switchRed;
document.getElementById('pickerGreen').onclick = switchGreen;
document.getElementById('pickerYellow').onclick = switchYellow;


function switchRed() {
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('body').style.color = 'white';

}


function switchGreen() {
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('body').style.color = 'white';
}


function switchYellow() {
    document.querySelector('body').style.backgroundColor = 'yellow';
    document.querySelector('body').style.color = 'black';
}