// nav.js
// Dynamically inserts navigation menu
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    if (header) {
        header.innerHTML = `
            <nav>
                <ul class="navbar">
                    <li><a href="index.html">Home</a></li>
                    <li class="dropdown">
                        <a href="#">Recipes</a>
                        <ul class="dropdown-menu">
                            <li><a href="breakfast.html">Breakfast</a></li>
                            <li><a href="lunch.html">Lunch</a></li>
                            <li><a href="dinner.html">Dinner</a></li>
                        </ul>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>`;
    } else {
        console.warn("No <header> found for navigation.");
    }
});
