function loadHome() {
    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Our Restaurant';

    const img = document.createElement('img');
    img.src = 'path/to/your/image.jpg';  // Add your image path here
    img.alt = 'Restaurant Image';

    const para = document.createElement('p');
    para.textContent = 'This is the best restaurant in town. Come visit us for an unforgettable dining experience.';

    content.appendChild(heading);
    content.appendChild(img);
    content.appendChild(para);
}

export default loadHome;
