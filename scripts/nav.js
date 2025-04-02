document.addEventListener("DOMContentLoaded", () => {
    const navHTML = `
        <nav>
            <ul class="navbar">
                <li><a href="index.html">Home</a></li>
                <li class="dropdown">
                    <a href="#">Recipes</a>
                    <ul class="dropdown-menu">
                        <li><a href="breakfast.html" data-category="breakfast">Breakfast</a></li>
                        <li><a href="lunch.html" data-category="lunch">Lunch</a></li>
                        <li><a href="dinner.html" data-category="dinner">Dinner</a></li>
                    </ul>
                </li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    `;

    const header = document.querySelector("header");
    if (header) {
        header.innerHTML = navHTML;
    } else {
        console.warn("No <header> element found. Ensure each HTML page has a <header> where the navigation should be inserted.");
    }
});
