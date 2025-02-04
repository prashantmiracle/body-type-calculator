document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const shoulder = parseFloat(document.getElementById('shoulder').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const hip = parseFloat(document.getElementById('hip').value);

    let bodyType = '';
    let bodyImage = '';
    let colorSuggestion = '';
    let occasionSuggestion = '';

    // Determine the body type based on measurements
    if (shoulder > hip && shoulder > waist) {
        bodyType = 'Inverted Triangle';
        bodyImage = 'images/inverted_triangle.png';
        colorSuggestion = 'Dark tops & light bottoms (Navy, Black, Deep Greens)';
        occasionSuggestion = 'Best for formal events & casual outings.';
    } else if (hip > shoulder && hip > waist) {
        bodyType = 'Pear';
        bodyImage = 'images/pear.png';
        colorSuggestion = 'Light tops & dark bottoms (Pastels, Whites, Soft Pinks)';
        occasionSuggestion = 'Ideal for workwear, parties, and daily wear.';
    } else if (waist < shoulder && waist < hip) {
        bodyType = 'Hourglass';
        bodyImage = 'images/hourglass.png';
        colorSuggestion = 'Monochromatic & bold shades (Red, Teal, Royal Blue)';
        occasionSuggestion = 'Perfect for weddings, date nights, and business meetings.';
    } else {
        bodyType = 'Rectangle';
        bodyImage = 'images/rectangle.png';
        colorSuggestion = 'Contrast & bright shades (Coral, Emerald, Prints)';
        occasionSuggestion = 'Great for outdoor events, beachwear, and casual wear.';
    }

    // Display results
    document.getElementById('body-type-text').innerText = 'Your body type is: ' + bodyType;
    document.getElementById('color-suggestions').innerText = 'Recommended Colors: ' + colorSuggestion;
    document.getElementById('occasion-suggestions').innerText = 'Best Occasions: ' + occasionSuggestion;

    const bodyImageElement = document.getElementById('body-type-image');
    bodyImageElement.src = bodyImage;
    bodyImageElement.style.display = 'block'; // Show the image
});
