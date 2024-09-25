// Listing Element
var form = document.getElementById('resumeForm');
var resumeDisplayElement = document.getElementById('resumeOutput');
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilePicture');
    // Type assertions 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    // Create resume output
    var resumeOutput = "\n            <h2>Editable Resume</h2>\n            ".concat(profilePictureURL ? "<img src='".concat(profilePictureURL, "' alt='Profile Picture' class='profilePicture'>") : '<p>No profile picture uploaded.</p>', "\n            <h3>Personal Information</h3>\n            <p><strong>Name:</strong> <span contenteditable=\"true\">  ").concat(name, " </span></p>\n            <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n            <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n            <p><strong>Address:</strong> <span contenteditable=\"true\">").concat(address, "</span></p>\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n            <h3>Experience</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(skills, "</p>\n        ");
    var resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.style.display = "block";
    }
    else {
        console.error('One or more output elements are missing');
    }
});
