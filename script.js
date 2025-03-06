/* styles.css */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333;
}

header {
    background: linear-gradient(135deg, #2b5876, #4e4376);
    color: white;
    text-align: center;
    padding: 1.5rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease-in-out;
}

nav ul li a:hover {
    color: #ffd700;
}

section {
    padding: 60px 20px;
    background: white;
    margin: 20px auto;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 900px;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-in-out;
}

section.visible {
    opacity: 1;
    transform: translateY(0);
}

#contact-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#contact-form input, #contact-form textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

#contact-form button {
    background: linear-gradient(135deg, #2b5876, #4e4376);
    color: white;
    padding: 12px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
    transition: background 0.3s;
}

#contact-form button:hover {
    background: linear-gradient(135deg, #4e4376, #2b5876);
}
