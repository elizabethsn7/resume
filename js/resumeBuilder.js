//Bio Object
var bio = {
  'name': 'Elizabeth Kipp',
  'role': 'Web Developer and Photographer',
  'contacts': {
    'mobile': '773-931-4424',
    'email': 'liz@elizabethkipp.com',
    'github': 'https://github.com/elizabethsn7',
    'twitter': 'https://twitter.com/photogirl1977',
    'location': 'Chicago'
  },
  'welcomeMessage': 'The best way to predict the future is to create it. Peter Drucker ',
  'skills': [
    'HTML', 'CSS', 'JavaScript', 'JQuery', 'Github', 'Adobe Photoshop and Illustrator'
  ],
  'bioPic': 'images/me.png'
};



function displayBio() {
  var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
  $('#header').prepend(formattedBioPic);

  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  $('#header').prepend(formattedName, formattedRole);

 

  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  $('#header').append(formattedWelcomeMsg);
  
  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  $('#topContacts').append(formattedMobile);

  var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
  $('#topContacts').append(formattedEmail);

  var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
  $('#topContacts').append(formattedGithub);

  var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
  $('#topContacts').append(formattedTwitter);

  var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
  $('#topContacts').append(formattedLocation);
  $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile))
    .append(HTMLemail.replace("%data%", bio.contacts.email))
    .append(HTMLgithub.replace("%data%", bio.contacts.github))
    .append(HTMLtwitter.replace("%data%", bio.contacts.twitter))
    .append(HTMLlocation.replace("%data%", bio.contacts.location));
}

if (bio.skills.length > 0) {
  $('#header').append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
  $('#skills').append(formattedSkill);

  var formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
  $('#skills').append(formattedSkill);

  var formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
  $('#skills').append(formattedSkill);

  var formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
  $('#skills').append(formattedSkill);

  var formattedSkill = HTMLskills.replace('%data%', bio.skills[4]);
  $('#skills').append(formattedSkill);

  var formattedSkill = HTMLskills.replace('%data%', bio.skills[5]);
  $('#skills').append(formattedSkill);
}

displayBio();

//Work Object
var work = {
  'jobs': [{
    'employer': 'Elizabeth Kipp Photography',
    'title': 'Owner',
    'location': 'Chicago, Il',
    'dates': 'February 2011 to present',
    'description': 'Photograph weddings, events as well as product. Full knowledge of Adobe Photoshop, Lightroom and Bridge'
  }, {
    'employer': 'George Street Photo and Video',
    'title': 'Lead Photographer',
    'location': 'Chicago, Il',
    'dates': 'April 2012 to present',
    'description': 'Lead wedding photographer'
  }, {
    'employer': 'Parker and Evan Kipp',
    'title': 'Mommala',
    'location': 'Chicago, IL',
    'dates': 'March 2006 to Present',
    'description': 'Play with, teach, console and encourage! Cook and clean and take to places.'
  }],
};

function displayWork() {
  for (var job in work.jobs) {
    if (work.jobs.hasOwnProperty(job)) {
    $('#workExperience').append(HTMLworkStart);
    
      var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
      var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
      $('work-entry:last').append(formattedEmployerTitle);

    var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
    var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
    var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
    $('.work-entry:last').append(formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
    }
  }
}
displayWork();

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

//Projects Object

var projects = {
  'projects': [{
    'title': 'Portfolio',
    'dates': 'November 2015',
    'description': 'This is the first large project I completed in the Udacity Front End Wen Developer Nanodegree program. I made use of HTML, CSS, Modals and Bootstrap showcasing my photography and web development skills.',
    'images': ['images/logo.png', 'images/shoes.png', 'images/lifestyle.png', 'images/product.png']
  }, {
    'title': 'Modern, Timeless, Romantic or Glam Wedding Quiz',
    'dates': 'August 2015',
    'description': 'I created a quiz app using HTML, CSS, JQuery and JavaScript featuring my wedding photography. I was able to create a landing page as well as a results page.',
    'images': ['images/projects-img-1.jpg', 'images/projects-img-2.jpg', 'images/projects-img-3.jpg', 'images/projects-img-4.jpg']
  }]
};

// ** Projects Display **
projects.display = function() {
  for (var project in projects.projects) {
    if (projects.projects.hasOwnProperty(project)) {
    $('#projects').append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
    $('.project-entry:last').append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
    $('.project-entry:last').append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
    $('.project-entry:last').append(formattedDescription);
    for  (var image in projects.projects[project].images) {
      if (projects.projects[project].images.length > 0) {
        var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
        $('.project-entry:last').append(formattedImage);
        }
      }
    }
  }
};
projects.display();

//Education Object
var education = {
  'schools': [{
    'name': 'Keller Graduate School of Management',
    'location': 'Tinley Park, Il',
    'degree': 'MBA',
    'major': 'Marketing',
    'dates': 'June 2010'
  }, {
    'name': 'Columbia College Chicago',
    'location': 'Chicago, Il',
    'degree': 'BA',
    'major': 'Photography',
    'dates': 'June 2002'
  }],
  'onlineCourses': [{
    'title': 'Front End Nanodegree',
    'school': 'Udacity',
    'dates': 'September 2015',
    'url': 'https//www.udacity.com/course/ud804'
  }],
};
education.display = function() {
  var schoolsLength = education.schools.length;
  for (var i = 0; i < schoolsLength; i++) {
    $('#education').append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace('%data%', education.schools[i].name);
    var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
    var formattedSchoolDegree = formattedName + formattedDegree;
    var formattedDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
    var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[i].major);
    var formattedURL = HTMLonlineURL.replace('%data%', education.schools[i].url);
    var formattedLinkedURL = formattedURL.replace('#', education.schools[i].url);
    var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
    $('.education-entry:last').append(formattedSchoolDegree)
      .append(formattedDates)
      .append(formattedMajor)
      .append(formattedLinkedURL)
      .append(formattedLocation);
  }
  if (education.onlineCourses.length > 0) {
    $('#education').append(HTMLonlineClasses);
    var onlineCoursesLength = education.onlineCourses.length;
    for (i = 0; i < onlineCoursesLength; i++) {
      $('#education').append(HTMLschoolStart);
      var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
      var formattedonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
      var formattedTitelonlineSchool = formattedTitle + formattedonlineSchool;
      var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);
      var formattedOnlineURL = HTMLonlineURL.replace('%data%', 'Visit Website');
      var formattedOnlineLinkedURL = formattedOnlineURL.replace('#', education.onlineCourses[i].url);
      $('.education-entry:last').append(formattedTitelonlineSchool)
        .append(formattedOnlineDates)
        .append(formattedOnlineLinkedURL);
    }
  }
};
education.display();

function inName(name) {
  name = bio.name.trim().split(' ');
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + ' ' + name[1];
}

$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);