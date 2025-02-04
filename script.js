document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const shoulder = parseFloat(document.getElementById('shoulder').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const hip = parseFloat(document.getElementById('hip').value);

    let bodyType = '';

    if (shoulder > hip && shoulder > waist) {
        bodyType = 'Inverted Triangle';
    } else if (hip > shoulder && hip > waist) {
        bodyType = 'Pear';
    } else if (waist < shoulder && waist < hip) {
        bodyType = 'Hourglass';
    } else {
        bodyType = 'Rectangle';
    }
    
    document.getElementById('result').innerText = 'Your body type is: ' + bodyType;
});
