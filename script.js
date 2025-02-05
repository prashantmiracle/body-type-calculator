function generateRecommendation() {
    let shoulder = document.getElementById("shoulder").value;
    let waist = document.getElementById("waist").value;
    let hip = document.getElementById("hip").value;
    let occasion = document.getElementById("occasion").value;
    let bodyTypeImage = document.getElementById("bodyTypeImage");

    if (!shoulder || !waist || !hip) {
        document.getElementById("recommendation").innerHTML = "Please enter all measurements.";
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
    switch (occasion) {
        case "Casual":
            outfitRecommendation = "Choose comfortable and stylish outfits like jeans and a flowy top.";
            break;
        case "Formal":
            outfitRecommendation = "Opt for structured blazers, fitted dresses, and elegant silhouettes.";
            break;
        case "Party":
            outfitRecommendation = "Go for bold colors, sequins, or bodycon dresses.";
            break;
        case "Wedding":
            outfitRecommendation = "Elegant sarees, gowns, or ethnic wear with intricate details.";
            break;
        case "Office Wear":
            outfitRecommendation = "Choose tailored outfits like pencil skirts, blazers, and formal tops.";
            break;
    }

    document.getElementById("recommendation").innerHTML = 
        `<p>Your body type is: <strong>${bodyType}</strong></p>
         <p>Recommended outfit for ${occasion}: <strong>${outfitRecommendation}</strong></p>`;

    bodyTypeImage.src = bodyImagePath;
    bodyTypeImage.style.display = "block";
}
