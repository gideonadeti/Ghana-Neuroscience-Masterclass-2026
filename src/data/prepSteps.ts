export interface PrepStep {
  id: number;
  title: string;
  fullDetails: string;
  links?: {
    label: string;
    url: string;
  }[];
}

export const prepSteps: PrepStep[] = [
  {
    id: 1,
    title: "Make sure you have internet access",
    fullDetails: "Please make sure you have a reliable internet connection, especially during class hours, since this masterclass is entirely virtual."
  },
  {
    id: 2,
    title: "Make sure you have access to 'git' or 'GitHub'",
    fullDetails: "Navigate to the Git page to learn how to access \"git\" or \"GitHub.\"",
    links: [
      {
        label: "Git",
        url: "https://github.com/gracelowor/Ghana-Neuroscience-Masterclass-2026/wiki/Git"
      }
    ]
  },
  {
    id: 3,
    title: "Provide your info for the People page",
    fullDetails: "Add your profile to the People page or send a brief description and a photo of yourself following the examples to Grace Lowor or Wilson Komla with the subject \"GNM2026: Add to People.\"",
    links: [
      {
        label: "People page",
        url: "https://github.com/gracelowor/Ghana-Neuroscience-Masterclass-2026/wiki/People"
      },
      {
        label: "Grace Lowor",
        url: "https://github.com/gracelowor/Ghana-Neuroscience-Masterclass-2026/wiki/People#grace-lowor"
      },
      {
        label: "Wilson Komla",
        url: "https://github.com/gracelowor/Ghana-Neuroscience-Masterclass-2026/wiki/People#wilson-komla"
      }
    ]
  },
  {
    id: 4,
    title: "Set up your learning environment",
    fullDetails: "The learning environment to be used for this platform will be communicated in due time"
  }
];
