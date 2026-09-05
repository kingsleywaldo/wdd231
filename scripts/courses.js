const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        description: "This course introduces students to the basic building blocks of programming.",
        completed: true
    },

    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        description: "Students learn to create, use, test, and debug functions to solve problems.",
        completed: false
    },

    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        description: "This course introduces students to web development and the fundamentals of creating websites.",
        completed: true
    },

    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        description: "Students learn HTML, CSS, JavaScript, and responsive web development.",
        completed: true
    },

    {
        subject: "WDD",
        number: 231,
        title: "Web Frontend Development I",
        credits: 2,
        description: "Students focus on user experience, accessibility, performance, and basic API usage.",
        completed: false
    },

    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        description: "This course introduces classes, objects, encapsulation, inheritance, and polymorphism.",
        completed: true
    }
];

const courseContainer = document.querySelector("#course-container");
const creditTotal = document.querySelector("#credit-total");

const allButton = document.querySelector("#all-courses");
const wddButton = document.querySelector("#wdd-courses");
const cseButton = document.querySelector("#cse-courses");


function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("article");

        card.classList.add("course-card");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p><strong>${course.title}</strong></p>
            <p>${course.description}</p>
            <p><strong>${course.credits} Credits</strong></p>

            ${
                course.completed
                    ? '<p class="completed-label">✓ Completed</p>'
                    : '<p class="incomplete-label">In Progress</p>'
            }
        `;

        courseContainer.appendChild(card);
    });

    const totalCredits = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );

    creditTotal.textContent = totalCredits;
}


function setActiveButton(activeButton) {

    document.querySelectorAll(".course-filter").forEach(button => {
        button.classList.remove("active-filter");
    });

    activeButton.classList.add("active-filter");
}


allButton.addEventListener("click", () => {

    displayCourses(courses);
    setActiveButton(allButton);

});


wddButton.addEventListener("click", () => {

    const wddCourses = courses.filter(course =>
        course.subject === "WDD"
    );

    displayCourses(wddCourses);
    setActiveButton(wddButton);

});


cseButton.addEventListener("click", () => {

    const cseCourses = courses.filter(course =>
        course.subject === "CSE"
    );

    displayCourses(cseCourses);
    setActiveButton(cseButton);

});


displayCourses(courses);