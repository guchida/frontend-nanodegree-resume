var bio = {
    "name" : "Greydon Uchida",
    "role" : "Software Engineer",
    "contacts" : {
        "mobile" : "(415)555-1234",
        "email" : "Email:g@greydon.org",
        "github" : "https://github.com/guchida",
        "location" : "San Francisco Bay Area"
    },
    "pictureURL" : "images/image.png",
    "welcome" : "This is my resume.",
    "skills" : ["Jenkins", "unix", "mac", "python", "devops"]
};

var work = {
    "jobs" : [
        {
            "position" : "Software Engineer",
            "employer" : "if(we)",
            "years" : "5",
            "location" : "San Francisco, CA",
            "description" : "This is what if(we) does, etc."
        }
    ]
};

var education = {
    "school" : "UC Davis",
    "gradYear" : "2005",
    "city" : "Davis, CA",
    "major" : "Computer Science and Engineering",
    "minor" : "Communication"
};

$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
        $("#skills").append(HTMLskills.replace("%data%", skill));
    });
}

$("#workExperience").append(HTMLworkStart);
work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkEmployer.replace("%data%", job.employer));
    $("#workExperience").append(HTMLworkTitle.replace("%data%", job.position));
});
