document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const shoulder = parseFloat(document.getElementById('shoulder').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const hip = parseFloat(document.getElementById('hip').value);

    let bodyType = '';
    let bodyImage = '';

    // Determine the body type based on the measurements
    if (shoulder > hip && shoulder > waist) {
        bodyType = 'Inverted Triangle';
        bodyImage = 'images/inverted_triangle.png';  // Path to the Inverted Triangle image
    } else if (hip > shoulder && hip > waist) {
        bodyType = 'Pear';
        bodyImage = 'images/pear.png';  // Path to the Pear image
    } else if (waist < shoulder && waist < hip) {
        bodyType = 'Hourglass';
        bodyImage = 'images/hourglass.png';  // Path to the Hourglass image
    } else {
        bodyType = 'Rectangle';
        bodyImage = 'images/rectangle.png';  // Path to the Rectangle image
    }

    // Display the result text and image
    document.getElementById('body-type-text').innerText = 'Your body type is: ' + bodyType;
    const bodyImageElement = document.getElementById('body-type-image');
    bodyImageElement.src = bodyImage;
    bodyImageElement.style.display = 'block';  // Show the image
});
