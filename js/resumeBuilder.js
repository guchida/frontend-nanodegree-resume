var bio = {
    "name": "Greydon Uchida",
    "role": "Software Engineer",
    "contacts":{
        "cell": "(415)555-1234",
        "email": "Email:g@greydon.org",
        "location": "San Francisco Bay Area"
    },
    "pictureURL": "images/image.png",
    "welcome": "This is my resume.",
    "skills": ["Jenkins", "unix", "mac", "python", "devops"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedCell = HTMLmobile.replace("%data%", bio.contacts.cell);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedCell);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedPicture);
$("#topContacts").append(formattedWelcome);
$("#topContacts").append(HTMLskillsStart);
$("#topContacts").append(formattedSkills);
