// Arrays to store menu items and customization options
const menuItems = [
    {
        name: "Classic Burger",
        description: "",
        price: 9.99,
    },
    // Add more menu items here
];

const customizationOptions = ["lettuce", "tomato", "cheese"];

// DOM manipulation
document.addEventListener("DOMContentLoaded", () => {
    const orderButtons = document.querySelectorAll(".order-button");
    orderButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Display customization options for the selected menu item
            showCustomization(index);
        });
    });

    const customizeButton = document.getElementById("customize-button");
    customizeButton.addEventListener("click", addToCart);
});

// Higher-order function to customize the burger
function customizeBurger(burger, options) {
    return options.reduce((customizedBurger, option) => {
        if (document.getElementById(option).checked) {
            customizedBurger.push(option);
        }
        return customizedBurger;
    }, [burger]);
}

// Function to display customization options
function showCustomization(menuIndex) {
    const customizationSection = document.getElementById("customize");
    const selectedMenuItem = menuItems[menuIndex];
    customizationSection.innerHTML = `
        <h2>Customize Your ${selectedMenuItem.name}</h2>
        <div class="customization-options">
            <label>Choose Toppings:</label>
            ${customizationOptions
                .map(
                    option =>
                        `<input type="checkbox" id="${option}">${option}`
                )
                .join("")}
        </div>
        <button id="customize-button">Add to Cart</button>
    `;
}

// Function to add customized burger to cart
function addToCart() {
    const selectedMenuItemIndex = 0; // Adjust this based on selected menu item
    const selectedMenuItem = menuItems[selectedMenuItemIndex];
    const customizedBurger = customizeBurger(
        selectedMenuItem.name,
        customizationOptions
    );
    console.log("Added to cart:", customizedBurger);
}