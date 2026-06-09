export interface Person {
  name: string;
  role: string;
  credentials: string;
  emails: string[];
  github?: string;
  linkedin?: string;
  imageUrl: string;
  researchInterests: string;
  funActivities?: string;
  askMeAbout?: string;
}

export const facultyStaff: Person[] = [
  {
    name: "Grace Lowor",
    role: "Founder",
    credentials: "PhD Candidate, Biomedical Engineering, University of Florida",
    emails: ["g.lowor@ufl.edu", "gracelowor@gmail.com"],
    github: "gracelowor",
    imageUrl: "https://github.com/user-attachments/assets/145c2fdf-505e-42c8-8620-e853bbc556cc",
    researchInterests: "Human Neuroscience, Electrophysiology, Movement Disorders, Machine Learning, Human Behavior",
    funActivities: "Running, Gym, Singing/Dancing"
  },
  {
    name: "Wilson Komla",
    role: "Project Coordinator",
    credentials: "Graduate Student, UMass Lowell",
    emails: ["watsonwilson25@gmail.com"],
    linkedin: "wilson-komla",
    imageUrl: "https://github.com/user-attachments/assets/03c229f9-a52c-420d-b83c-2b876daa7781",
    researchInterests: "Pharmaceutics, Drug Delivery & Development, Oncology, Nanomedicine",
    askMeAbout: "Faith, Fitness, Tennis, Medicine"
  },
  {
    name: "Matthew Oduamafu",
    role: "Technical Support Lead",
    credentials: "MSc, Mechatronic Engineering, Ashesi University",
    emails: ["mattoduamafu@gmail.com", "matthew.oduamafu@ashesi.edu.gh"],
    github: "Matthew-Oduamafu",
    imageUrl: "https://github.com/user-attachments/assets/3837d03a-ae9c-4bd1-85fa-1128081fed6d",
    researchInterests: "Federated Machine Learning, Precision Agriculture, AI-driven Embedded Systems, Autonomous Robotics",
    funActivities: "Coding, Watching Movies/Documentaries"
  }
];
