module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "TechXchange Conference",
      description: "The TechXchange Conference is a premier school event that brings together tech enthusiasts, industry experts, and academics for a dynamic exchange of cutting-edge ideas, innovation, and collaboration.",
      date: "August, 23rd",
      // If your event is free, just comment this line
      price: "FREE",
      venue: "SMAT Auditorium",
      address: "Federal University Of Technology, Owerri",
      city: "Owerri",
      state: "Imo"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
      text: "Register now!",
      link: "#"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
      repository: "https://github.com/manuelinfosec/techxchange-conference"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://manuelinfosec.github.io/techxchange-conference/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      // 'schedule',
      'sponsors',
      // 'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      schedule: "Schedule",
      sponsors: "Sponsors",
      partners: "Partners",
      contact: "Contact"
    },

    // The entire schedule
    schedule: [
      {
        name: "Presentation",
        time: "10am"
      },
      {
        name: "Engr. Dr. Amadi Emmanuel",
        photo: "themes/yellow-swan/img/emmanuel-amadi.png",
        bio: "Engr. Dr. Amadi Emmanuel is currently a lecturer at the Department of Information Technology, Federal University of Technology, Owerri (FUTO). He holds a B.Eng (Hons) in Electrical and Electronics Engineering from Abubakar Tafawa Balewa University, Bauchi and M.Sc. degrees in Information Technology from the Federal University of Technology, Owerri. He also holds a PhD degree in Information Technology with specialization in Network and Cyber Security from the Federal University of Technology, Owerri. Amadi Has a strong research interest in game theory application in network/cybersecurity.",
        company: "Federal University Of Technology, Owerri",
        link: {
          href: "#",
          text: "@engr_dr_amadi_emmanuel"
        },
        presentation: {
          title: "Assessing Young Nigerian Students' Presentation Skills",
          description: "Thought-provoking and comprehensive event dedicated to enhancing the communication prowess of Nigeria's young generation. This gathering is designed to delve into the intricate realm of presentation skills assessment among students, recognizing its pivotal role in shaping confident and articulate individuals prepared to navigate a competitive global landscape.",
          time: "10h00"
        }
      },
      {
        name: "Christian Steven Ifeanyichukwu",
        photo: "themes/yellow-swan/img/andre.jpg",
        bio: "Christian is a dynamic and passionate student dedicated to exploring the world of conferences and their impact on knowledge dissemination and networking. Currently pursuing a degree in Computer Science at Federal University of Technology, Christian has always been intrigued by the power of events that bring together experts, enthusiasts, and thought leaders under one roof.",
        company: "Federal University Of Technology, Owerri",
        link: {
          href: "http://github.com/manuelinfosec",
          text: "@christian_steven"
        },
        presentation: {
          title: "TechXchange Conference",
          description: "The TechXchange Conference is a premier school event that brings together tech enthusiasts, industry experts, and academics for a dynamic exchange of cutting-edge ideas, innovation, and collaboration. ",
          time: "10am"
        }
      },
      // {
      //   name: "Lunch",
      //   time: "12h00"
      // },
      // {
      //   name: "Chuck Norris",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Delta Command",
      //   link: {
      //     href: "http://twitter.com/littlechuck",
      //     text: "@littlechuck"
      //   },
      //   presentation: {
      //     title: "How to kill a elephant with one finger",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "13h00"
      //   }
      // },
      // {
      //   name: "Steve Jobs",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Apple, Inc.",
      //   link: {
      //     href: "http://github.com/stevie",
      //     text: "@stevie"
      //   },
      //   presentation: {
      //     title: "Presenting iPad",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "14h00"
      //   }
      // },
      // {
      //   name: "Coffee-break",
      //   time: "15h00"
      // },
      // {
      //   name: "Mark Zuckerberg",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Facebook",
      //   link: {
      //     href: "http://twitter.com/zuck",
      //     text: "@zuck"
      //   },
      //   presentation: {
      //     title: "Revealing Facebook Secrets",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "16h00"
      //   }
      // },
      // {
      //   name: "Steve Wozniak",
      //   photo: "themes/yellow-swan/img/speaker.jpg",
      //   bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //   company: "Apple, Inc.",
      //   link: {
      //     href: "http://twitter.com/woz",
      //     text: "@woz"
      //   },
      //   presentation: {
      //     title: "Why do I prefer Android over iPhone",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      //     time: "17h00"
      //   }
      // }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Federal University of Technology, Owerri",
        logo: "themes/yellow-swan/img/futo-logo.png",
        url: "https://futo.edu.ng"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function () {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function () {
      return this.site.url;
    }
  }
};