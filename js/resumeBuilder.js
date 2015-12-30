var bio = {
    "name" : "Greydon Uchida",
    "role" : "Software Engineer",
    "contacts" : {
        "mobile" : "(415)555-1234",
        "email" : "Email:g@greydon.org",
        "github" : "https://github.com/guchida",
        "location" : "San Francisco Bay Area"
    },
    "biopic" : "images/image.png",
    "welcomeMessage" : "This is my resume.",
    "skills" : ["Jenkins", "unix", "mac", "python", "devops"],
    "display" : function() {
        $("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", this.name));
        $("#topContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", this.contacts.email));
        $("#topContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
        $("#topContacts").append(HTMLlocation.replace("%data%", this.contacts.location));
        $("#header").append(HTMLbioPic.replace("%data%", this.biopic));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
        if (this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(skill) {
                $("#skills").append(HTMLskills.replace("%data%", skill));
            });
        }
    }
};

var work = {
    "jobs" : [
        {
            "title" : "Software Engineer",
            "employer" : "if(we)",
            "dates" : "2010 - Current",
            "location" : "San Francisco, CA",
            "description" : "This is what if(we) does, etc."
        }
    ],
    "display" : function() {
        this.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedJob = HTMLworkEmployer.replace("%data%", job.employer);
            formattedJob += HTMLworkTitle.replace("%data%", job.title);
            formattedJob += HTMLworkDates.replace("%data%", job.dates);
            formattedJob += HTMLworkLocation.replace("%data%", job.location);
            formattedJob += HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formattedJob);
        })
    }
};

var education = {
    "schools" : [
        {
            "name" : "UC Davis",
            "dates" : "2000-2005",
            "location" : "Davis, CA",
            "majors" : ["Computer Science and Engineering"],
            "degree" : "Bachelor of Science",
            "url" : "http://ucdavis.edu/"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front End Web Developer Nanodegree",
            "school" : "Udacity",
            "date" : "2015-2016",
            "url" : "http://www.udacity.com"
        }
    ],
    "display" : function() {
        this.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedSchool = HTMLschoolName.replace("#", school.url).replace("%data%", school.name);
            formattedSchool += HTMLschoolDegree.replace("%data%", school.degree);
            formattedSchool += HTMLschoolDates.replace("%data%", school.dates);
            formattedSchool += HTMLschoolLocation.replace("%data%", school.location);
            school.majors.forEach(function(major) {
                formattedSchool += HTMLschoolMajor.replace("%data%", major);
            });
            $(".education-entry:last").append(formattedSchool);
        });
        if (this.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            this.onlineCourses.forEach(function(course) {
                $("#education").append(HTMLschoolStart);
                var formattedCourse = HTMLonlineTitle.replace("#", course.url).replace("%data%", course.title);
                formattedCourse += HTMLonlineSchool.replace("%data%", course.school);
                formattedCourse += HTMLonlineDates.replace("%data%", course.date);
                formattedCourse += HTMLonlineURL.replace("%data%", course.url);
                $(".education-entry:last").append(formattedCourse);
            });
        }
    }
};

var projects = {
    "projects" : [
        {
            "link" : "https://github.com/guchida/frontend-nanodegree-resume",
            "title" : "Resume",
            "date" : "2015", 
            "description" : "Use frontend web technology to create a great looking resume.",
            "images" : [""]
        },
        {
            "link" : "https://github.com/guchida/portfolio-site",
            "title" : "Portfolio Site",
            "date" : "2015", 
            "description" : "Create a modern looking porfolio showcase.",
            "images" : [""]
        },
        {
            "link" : "https://github.com/guchida/intro-project-html5-hello-world",
            "title" : "Hello World",
            "date" : "2015", 
            "description" : "Basic 'Hello World' project using html5.",
            "images" : [""]
        }
    ],
    "display" : function() {
        this.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            var formattedProject = HTMLprojectTitle.replace("#", project.link).replace("%data%", project.title);
            formattedProject += HTMLprojectDates.replace("%data%", project.date);
            formattedProject += HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formattedProject);
        })
    }
};

bio.display();
work.display();
education.display();
projects.display();

$(document).click(function(loc) {
    logClicks(loc.clientX,loc.client);
});

function locationizer(work_obj) {
    var locations = [];
    work_obj.jobs.forEach(function(job) {
        location.push(jobs.location);
    })
};

$("#main").append(internationalizeButton);

function inName(name) {
    names = name.split(" ");
    var nameString = names[0].toUpperCase() + given.substring(1).toLowerCase();
    nameString += ' ' + family.toUpperCase();
    return nameString;
};

console.log(inName("gREYDON", "uChIDA"));
