// Navbar toggle functions
function hamburg(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const texts = [
    "SDET",
    "Test Automation Engineer",
    "Quality Assurance Engineer"
];

let speed = 100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000);
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50);
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;


// Feedback Image Shuffling
const feedbackImages = [
    document.getElementById('feedbackImage1'),
    document.getElementById('feedbackImage2'),
    document.getElementById('feedbackImage3'),
    document.getElementById('feedbackImage4'),
    document.getElementById('feedbackImage5'),
    document.getElementById('feedbackImage6')
];

let currentImageIndex = 0;

function shuffleFeedbackImages() {
    // Hide all images
    feedbackImages.forEach(image => {
        image.style.display = 'none';
    });

    // Show the next image in the sequence
    currentImageIndex = (currentImageIndex + 1) % feedbackImages.length;
    feedbackImages[currentImageIndex].style.display = 'block';
}

// Shuffles the images every 5 seconds
setInterval(shuffleFeedbackImages, 5000);

// Navigate to contact page
function navigateToContact() {
    window.location.href = 'contact.html';
}

//New
const menuBtn = document.querySelector('.hamburg');
const closeBtn = document.querySelector('.cancel');
const navLinks = document.querySelector('.nav-container .links');

menuBtn.addEventListener('click', () => {
    navLinks.style.display = 'flex';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    navLinks.style.display = 'none';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
});



