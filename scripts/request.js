// request.js
// Handles recipe request form submission
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("recipeRequestForm")?.addEventListener("submit", async e => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        try {
            const res = await fetch("/saveRecipeRequest", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            alert(res.ok ? "Recipe request submitted successfully!" : "Error submitting request.");
            if (res.ok) e.target.reset();
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    });
});

