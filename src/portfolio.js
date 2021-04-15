
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Eugene Lukale",
  title: "Software Developer",
  subTitle: emoji("A passionate, experienced and dedicated Software Developer  🚀  with impressive expertise in building Mobile and Web applications using Kotlin, Flutter, Dart Nodejs , Python and Javascript. Develops, implements software and delivers products on time."),
  //resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/lukalenersus",
  //linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "lukaleugene.le@gmail.com",
  twitter:"https://www.twitter.com/nealCodeStrong"
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //tackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE DEVELOPER WHO EXPLORES EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop native mobile applications and frameworks using Kotlin ,Swift and Flutter"),
    emoji("⚡ Implement robust app architectures and user interfaces"),
    emoji("⚡ Integration of third party services such as Firebase/ Mongodb /M-pesa /Restful API"),
    emoji("⚡ Use code versioning tools such as bitbucket, github and gitlab to manage and implement changes to programs"),
    
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "node",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Jomo Kenyatta University",
      logo: require("./assets/images/jkuat.png"),
      subHeader: "Bachelors of Science in Mathematics and Computer Science",
      duration: "March 2016 - March 2021",
     // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   ]
    // }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Kotlin",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Firebase",
      progressPercentage: "70%"
    },
    {
      Stack: "Rest Api",
      progressPercentage: "60%"
    },
    {
      Stack: "Node",
      progressPercentage: "55%"
    },
    {
      Stack: "Flutter",
      progressPercentage: "70%"
    },
    {
      Stack: "Dart",
      progressPercentage: "60%"
    },
    {
      Stack: "python",
      progressPercentage: "55%"
    },
    {
      Stack: "JavaScript",
      progressPercentage: "40%"
    },
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Novatta Africa",
      companylogo: require("./assets/images/bmblogo.png"),
      date: "Nov 2019 – Dec 2020",
      desc: "Developed a peer to peer betting android application.",
      //descBullets: [
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },

    {
      role: "Software Developer",
      company: "Nela",
      companylogo: require("./assets/images/icons2.png"),
       date: "Jan 2021 – Present",
      desc: "Developing local event android application.",
      //descBullets: [
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //"Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    },
   
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "MY PROJECTS AND COMPANIES THAT I HAVE WORKED WITH",
  projects: [
   
    {
      image: require("./assets/images/generated.png"),
      link: "https://play.google.com/store/apps/details?id=com.lukale.buddie" ,
    
    },
    {
      image: require("./assets/images/bmb.png"),
      link: "https://play.google.com/store/apps/details?id=com.lukale.buddie" 
    }

  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    }]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://developers.decoded.africa/index.php/2020/09/10/android-consuming-restful-api-with-kotlin/",
      title: "Consuming Restful API",
      description: "A quick guide on how to connect your android app with the restful api."
    },
  
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji(" ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "lukaleugene.le@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
