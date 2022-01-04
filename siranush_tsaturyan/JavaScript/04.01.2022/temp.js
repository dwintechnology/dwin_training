function convert() {
    let c = document.getElementById('data').value;
    let f = (c * 1.8) + 32;
    alert(f);
}

function convert2() {
    let f = document.getElementById('farenheit').value;
    let c = (f - 32) * 5 / 9;
    alert(c);
}