function generateRecommendation() {
    let shoulder = document.getElementById("shoulder").value;
    let waist = document.getElementById("waist").value;
    let hip = document.getElementById("hip").value;
    let occasion = document.getElementById("occasion").value;
    let bodyTypeImage = document.getElementById("bodyTypeImage");

    // Hide the image initially when the form is submitted
    bodyTypeImage.style.display = "none";
    document.getElementById("recommendation").innerHTML = "";  // Clear previous recommendation
    document.getElementById("colorRecommendation").innerHTML = "";  // Clear previous color recommendations

    // Check for missing input
    if (!shoulder || !waist || !hip) {
        document.getElementById("recommendation").innerHTML = "Please enter all measurements.";
        return;
    }

    let bodyType = "";
    let bodyImagePath = "";
    if (shoulder > hip && shoulder > waist) {
        bodyType = "Inverted Triangle";
        bodyImagePath = "images/inverted_triangle.png";
    } else if (hip > shoulder && hip > waist) {
        bodyType = "Pear Shape";
        bodyImagePath = "images/pear.png";
    } else if (shoulder === hip && waist < shoulder) {
        bodyType = "Hourglass Shape";
        bodyImagePath = "images/hourglass.png";
    } else {
        bodyType = "Rectangle Shape";
        bodyImagePath = "images/rectangle.png";
    }

    let outfitRecommendation = "";
    let colorRecommendation = "";
    let colorExplanation = "";
    switch (occasion) {
        case "Casual":
            outfitRecommendation = "Choose comfortable and stylish outfits like jeans and a flowy top.";
            colorRecommendation = "Ideal colors: Neutral tones (grey, beige), pastels (light blue, pale yellow), or light denim.";
            colorExplanation = "Neutral tones and pastels help keep the look relaxed and approachable, perfect for casual settings.";
            break;
        case "Formal":
            outfitRecommendation = "Opt for structured blazers, fitted dresses, and elegant silhouettes.";
            colorRecommendation = "Ideal colors: Dark shades (black, navy, dark gray), jewel tones (emerald, ruby).";
            colorExplanation = "Dark colors and jewel tones convey professionalism and sophistication, fitting for formal events.";
            break;
        case "Party":
            outfitRecommendation = "Go for bold colors, sequins, or bodycon dresses.";
            colorRecommendation = "Ideal colors: Bold reds, blacks, metallics, and jewel tones (purple, sapphire).";
            colorExplanation = "Bold colors and metallics make a statement at parties, drawing attention and creating an energetic vibe.";
            break;
        case "Wedding":
            outfitRecommendation = "Elegant sarees, gowns, or ethnic wear with intricate details.";
            colorRecommendation = "Ideal colors: Soft pastels (ivory, blush pink), gold accents, or ivory.";
            colorExplanation = "Soft pastels and gold create a romantic and elegant feel, perfect for weddings and celebrations.";
            break;
        case "Office Wear":
            outfitRecommendation = "Choose tailored outfits like pencil skirts, blazers, and formal tops.";
            colorRecommendation = "Ideal colors: Neutral tones (black, navy, beige) or muted shades (charcoal, olive).";
            colorExplanation = "Neutral tones and muted shades offer a professional, clean look while maintaining authority and seriousness in an office environment.";
            break;
    }

    // Display Results
    document.getElementById("recommendation").innerHTML = 
        `<p>Your body type is: <strong>${bodyType}</strong></p>
         <p>Recommended outfit for ${occasion}: <strong>${outfitRecommendation}</strong></p>`;

    document.getElementById("colorRecommendation").innerHTML = 
        `<p><strong>Color Recommendation:</strong> ${colorRecommendation}</p>
         <p><strong>Why:</strong> ${colorExplanation}</p>`;

    // Show Image after recommendation
    bodyTypeImage.src = bodyImagePath;
    bodyTypeImage.style.display = "block";  // Only show after the recommendation is generated
}
