document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const shoulder = parseFloat(document.getElementById('shoulder').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const hip = parseFloat(document.getElementById('hip').value);

    let bodyType = '';
    let bodyImage = '';
    let colorSuggestion = '';
    let occasionSuggestion = '';

    if (shoulder > hip && shoulder > waist) {
        bodyType = 'Inverted Triangle';
        bodyImage = 'images/inverted_triangle.png';
        colorSuggestion = 'Dark tops & light bottoms (Navy, Black, Deep Greens).';
        occasionSuggestion = 'Best for formal events & casual outings.';
    } else if (hip > shoulder && hip > waist) {
        bodyType = 'Pear';
        bodyImage = 'images/pear.png';
        colorSuggestion = 'Light tops & dark bottoms (Pastels, Whites, Soft Pinks).';
        occasionSuggestion = 'Ideal for workwear, parties, and daily wear.';
    } else if (waist < shoulder && waist < hip) {
        bodyType = 'Hourglass';
        bodyImage = 'images/hourglass.png';
        colorSuggestion = 'Monochromatic & bold shades (Red, Teal, Royal Blue).';
        occasionSuggestion = 'Perfect for weddings, date nights, and business meetings.';
    }
