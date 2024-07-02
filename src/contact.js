function loadContact() {
    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';

    const para = document.createElement('p');
    para.textContent = 'Phone: 123-456-7890';

    const email = document.createElement('p');
    email.textContent = 'Email: info@restaurant.com';

    content.appendChild(heading);
    content.appendChild(para);
    content.appendChild(email);
}

export default loadContact;
