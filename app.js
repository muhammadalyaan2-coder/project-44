
// Change Profile Information

function changeProfile() {

    document.getElementById("profileName").innerText = "Muhammad Alyaan";

    document.getElementById("profileRole").innerText = "JavaScript Developer";

    document.getElementById("profileHeading").innerText = "New Profile";

}


// Change Profile Image

function changeImage() {

    document.getElementById("profileImage").src =
        "https://i.pravatar.cc/300?img=33";

}


// Mouseover Event

function imageOver() {

    document.getElementById("profileImage").style.transform =
        "scale(1.1)";

}


// Mouseout Event

function imageOut() {

    document.getElementById("profileImage").style.transform =
        "scale(1)";

}


// User Input

function showName() {

    var name = document.getElementById("userInput").value;

    document.getElementById("userName").innerText =
        "Welcome, " + name;

}


// Bonus Feature

function changeDescription() {

    document.getElementById("description").innerText =
        "I love coding, designing websites and learning new JavaScript concepts!";

}

