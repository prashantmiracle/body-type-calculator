function generateRecommendation() {
    let shoulder = document.getElementById("shoulder").value;
    let waist = document.getElementById("waist").value;
    let hip = document.getElementById("hip").value;
    let occasion = document.getElementById("occasion").value;
    let bodyTypeImage = document.getElementById("bodyTypeImage");

    if (!shoulder || !waist || !hip) {
        document.getElementById("recommendation").innerHTML = "Please enter all measurements.";
        document.getElementById("colorRecommendation").innerHTML = "";
        bodyTypeImage.style.display = "none";
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
    switch (occasion) {
        case "Casual":
            outfitRecommendation = "Choose comfortable and stylish outfits like jeans and a flowy top.";
            colorRecommendation = "Ideal colors: Neutral tones, pastels, or light denim.";
            break;
        case "Formal":
            outfitRecommendation = "Opt for structured blazers, fitted dresses, and elegant silhouettes.";
            colorRecommendation = "Ideal colors: Black, navy, dark gray, or jewel tones.";
            break;
        case "Party":
            outfitRecommendation = "Go for bold colors, sequins, or bodycon dresses.";
            colorRecommendation = "Ideal colors: Bold reds, blacks, metallics, and jewel tones.";
            break;
        case "Wedding":
            outfitRecommendation = "Elegant sarees, gowns, or ethnic wear with intricate details.";
            colorRecommendation = "Ideal colors: Soft pastels, ivory, gold, or blush.";
            break;
        case "Office Wear":
            outfitRecommendation = "Choose tailored outfits like pencil skirts, blazers, and formal tops.";
            colorRecommendation = "Ideal colors: Neutral tones like black, navy, or beige.";
            break;
    }

    // Display Results
    document.getElementById("recommendation").innerHTML = 
        `<p>Your body type is: <strong>${bodyType}</strong></p>
         <p>Recommended outfit for ${occasion}: <strong>${outfitRecommendation}</strong></p>`;

    document.getElementById("colorRecommendation").innerHTML = 
        `<p><strong>Color Recommendation:</strong> ${colorRecommendation}</p>`;

    // Show Image
    bodyTypeImage.src = bodyImagePath;
    bodyTypeImage.style.display = "block";
}
