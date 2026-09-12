// ==============================
// PORT HARCOURT BUSINESS CHAMBER
// Directory JavaScript
// ==============================

const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

// Membership level names
const membershipNames = {
    1: "Member",
    2: "Silver Member",
    3: "Gold Member"
};


// Fetch members from JSON
async function getMembers() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Unable to load member data.");
        }

        const members = await response.json();

        displayMembers(members);

    } catch (error) {
        console.error("Error loading members:", error);

        membersContainer.innerHTML = `
            <p class="error-message">
                Sorry, the member directory could not be loaded.
            </p>
        `;
    }
}


// Display members
function displayMembers(members) {

    membersContainer.innerHTML = "";

    members.forEach((member) => {

        const card = document.createElement("article");

        card.classList.add("member-card");

        card.innerHTML = `
            <img
                src="images/${member.image}"
                alt="${member.name} logo"
                loading="lazy"
            >

            <h3>${member.name}</h3>

            <p>${member.description}</p>

            <p>
                <strong>Address:</strong>
                ${member.address}
            </p>

            <p>
                <strong>Phone:</strong>
                ${member.phone}
            </p>

            <a
                href="${member.website}"
                target="_blank"
                rel="noopener"
            >
                Visit Website
            </a>

            <span class="membership-level">
                ${membershipNames[member.membership]}
            </span>
        `;

        membersContainer.appendChild(card);
    });
}


// Grid view
gridButton.addEventListener("click", () => {

    membersContainer.classList.remove("member-list");
    membersContainer.classList.add("member-grid");

    gridButton.classList.add("active");
    listButton.classList.remove("active");
});


// List view
listButton.addEventListener("click", () => {

    membersContainer.classList.remove("member-grid");
    membersContainer.classList.add("member-list");

    listButton.classList.add("active");
    gridButton.classList.remove("active");
});


// Mobile navigation
menuButton.addEventListener("click", () => {

    navigation.classList.toggle("show");

    const isOpen = navigation.classList.contains("show");

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuButton.textContent = isOpen ? "✕" : "☰";
});


// Copyright year
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// Last modification date
document.querySelector("#lastModified").textContent =
    document.lastModified;


// Load the directory
getMembers();