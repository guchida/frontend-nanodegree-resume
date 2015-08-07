var bio = {
    name:"Greydon Uchida",
    role:"Software Engineer",
    cell:"(415)555-1234",
    email:"Email:g@greydon.org",
    location:"San Francisco Bay Area",
    pictureURL:"images/image.png",
    welcome:"This is my resume.",
    skills:"Jenkins, unix, mac, python, devops"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedCell = HTMLmobile.replace("%data%", bio.cell);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);
var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedCell);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedPicture);
$("#topContacts").append(formattedWelcome);
