
const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        completed: false
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Web Frontend Development I",
        credits: 2,
        completed: false
    }
];

const courseContainer = document.querySelector("#course-container");
const creditTotal = document.querySelector("#credit-total");

const allButton = document.querySelector("#all-courses");
const wddButton = document.querySelector("#wdd-courses");
const cseButton = document.querySelector("#cse-courses");

function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach((course) => {

        const courseCard = document.createElement("article");

        courseCard.classList.add("course-card");

        if (course.completed) {
            courseCard.classList.add("completed");
        }

        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>Credits: ${course.credits}</p>
            <p>${course.completed ? "Completed" : "Not Completed"}</p>
        `;

        courseContainer.appendChild(courseCard);
    });

    const totalCredits = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );

    creditTotal.textContent = totalCredits;
}

function setActiveButton(activeButton) {

    const buttons = [allButton, wddButton, cseButton];

    buttons.forEach((button) => {
        button.classList.remove("active-filter");
        button.setAttribute("aria-pressed", "false");
    });

    activeButton.classList.add("active-filter");
    activeButton.setAttribute("aria-pressed", "true");
}

allButton.addEventListener("click", () => {
    displayCourses(courses);
    setActiveButton(allButton);
});

wddButton.addEventListener("click", () => {
    const filteredCourses = courses.filter(
        (course) => course.subject === "WDD"
    );

    displayCourses(filteredCourses);
    setActiveButton(wddButton);
});

cseButton.addEventListener("click", () => {
    const filteredCourses = courses.filter(
        (course) => course.subject === "CSE"
    );

    displayCourses(filteredCourses);
    setActiveButton(cseButton);
});

// Display all courses when the page loads.
displayCourses(courses);
