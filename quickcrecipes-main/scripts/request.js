document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("recipeRequestForm");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            recipe: document.getElementById("recipe").value,
            details: document.getElementById("details").value,
        };

        try {
            const response = await fetch("/saveRecipeRequest", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Recipe request submitted successfully!");
                form.reset();
            } else {
                alert("Error submitting request. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        }
    });
});
