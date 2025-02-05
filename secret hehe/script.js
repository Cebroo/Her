function selectOption(option) {
    if (option === 'yes') {
        window.location.href = "yes_page.html";
    }
    else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?'; 
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 1000); // Flash colors for 1 second
}

function displayPom() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'pompompurin.gif';
    catImage.alt = 'Pompompurin';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

displayPom();
