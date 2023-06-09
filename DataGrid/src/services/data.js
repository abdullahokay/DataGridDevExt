const socials = [
  {
    ID: 1,
    SocialLink: "instagram.com/mobilerast/",
    Social: "instagram",
    Description: "We'll help you to finish your development project successfully.",
  },
  {
    ID: 2,
    SocialLink: "tr.linkedin.com/company/rastmobile",
    Social: "linkedin",
    Description: "Hire vetted developers from Rast Mobile to scale up your tech projects.",
  },
  {
    ID: 3,
    SocialLink: "behance.net/rastmobile",
    Social: "behance",
    Description: "Software Development Agency Rast Mobile Information Technology Ltd.",
  },
  {
    ID: 4,
    SocialLink: "twitter.com/rastmobile",
    Social: "twitter",
    Description: "Software Development Agency Rast Mobile Information Technology Ltd.",
  },
]
localStorage.setItem("socials", JSON.stringify(socials));

export default {
  getSocials() {
    return socials
  },
};
