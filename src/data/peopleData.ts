export interface Person {
  name: string;
  role: string;
  credentials?: string;
  emails?: string[];
  github?: string;
  linkedin?: string;
  imageUrl: string;
  researchInterests?: string;
  funActivities?: string;
  askMeAbout?: string;
  clinicalInterests?: string;
  website?: string;
  websiteLabel?: string;
  titles?: string[];
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
    name: "Bernie Simone Owusu-Yaw, PhD",
    role: "Faculty Member, Neurological and Psychiatric Disorders",
    credentials: "Postdoctoral Research Fellow, Brigham and Women’s Hospital, Harvard Medical School",
    emails: ["bowusu-yaw@bwh.harvard.edu"],
    linkedin: "bernie-simone-owusu-yaw-30bb9023a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    imageUrl: "https://github.com/user-attachments/assets/fe93df3d-b4b0-47b0-acc2-16ec672fd55c",
    researchInterests: "Gene Therapy, Neurodegenerative diseases, Focused Ultrasound",
    funActivities: "Reading, Gym, Cooking, Singing"
  },
  {
    name: "Benjamin Baah Konadu, OD",
    role: "Faculty Member, Fundamentals of Neuroscience and Brain Function",
    credentials: "PhD Student, Department Of Biology (Neurobiology) / Interdisciplinary Program in Neuroscience, Georgetown University",
    emails: ["bb1232@georgetown.edu", "baahkonadu@gmail.com"],
    linkedin: "benjamin-baah-konadu-od-58a430147",
    imageUrl: "https://github.com/user-attachments/assets/cc3d45c9-925c-4a2a-b4dd-9d462f2fde0c",
    researchInterests: "Neuronal membrane proteasome, Neuroplasticity, Synaptic Plasticity, Proteomics, Experience-dependent Plasticity, BONCAT, Proteasome Activity",
    funActivities: "Badminton, Chess, Classical music (singing and playing)"
  },
  {
    name: "Ama Boakye-Agyei",
    role: "Faculty Member, Neural circuits, Cognition, and Behavior",
    credentials: "PhD Student, Interdisciplinary Program in Neuroscience, George Mason University",
    emails: ["aboakyea@gmu.edu"],
    imageUrl: "https://github.com/user-attachments/assets/1b0f6d7d-345b-4d66-914f-cb357aaf3dee",
    researchInterests: "Cognition and Cognitive Decline, Animal Behavior, Mental Disorders",
    funActivities: "Biking, Gym, Reading and Writing"
  },
  {
    name: "Chance Fleeting",
    role: "Faculty Member, Neurotechnology and Brain-Computer Interfaces",
    credentials: "MD-PhD Student, Biomedical Engineering, University of Florida",
    emails: ["cfleeting@ufl.edu"],
    github: "ChanceFleeting",
    linkedin: "chance-fleeting",
    imageUrl: "https://github.com/user-attachments/assets/5b7628fa-e8b2-4875-8863-885764a35bcc",
    researchInterests: "Human Electrophysiology, Movement Disorders, Neuroengineering, Signal Processing, Machine Learning, Neuromodulation, Deep Brain Stimulation, Focused Ultrasound, and Brain-Computer Interface",
    clinicalInterests: "Functional Neurosurgery",
    funActivities: "Drumming, Music Production, Building/Fixing Musical Instruments, Surfing, and Mountain Biking"
  },
  {
    name: "Jiaqing Zhang, MS",
    role: "Faculty Member, Artificial Intelligence and Computational Neuroscience",
    credentials: "PhD candidate, Electrical and Computer Engineering, University of Florida",
    emails: ["jiaqing.zhang@ufl.edu"],
    website: "http://jiaqing-zhang.com/",
    websiteLabel: "Website",
    imageUrl: "https://github.com/user-attachments/assets/8464e6bb-164f-4756-9c3a-63e186ba0cba",
    researchInterests: "AI for healthcare",
    funActivities: "Bouldering, Pokémon"
  },
  {
    name: "Ava Burgess",
    role: "Faculty Member, Neuroethics",
    credentials: "PhD Student, Biomedical Engineering, University of Florida\nNSF Graduate Fellow",
    emails: ["avaburgess@ufl.edu", "avaburgess2000@gmail.com"],
    linkedin: "avaburgess",
    imageUrl: "https://github.com/user-attachments/assets/e4159f8e-6f07-4dd3-962d-6a5866234a8f",
    researchInterests: "Human Neuroscience, Electrophysiology, Neurological Disorders, Neuroethics, Science Policy, Regulatory Science",
    funActivities: "Baking, Skincare, Nature walks/activities"
  },
  {
    name: "Wilson Komla",
    role: "Project Coordinator I",
    credentials: "Graduate Student, UMass Lowell",
    emails: ["watsonwilson25@gmail.com"],
    linkedin: "wilson-komla",
    imageUrl: "https://github.com/user-attachments/assets/03c229f9-a52c-420d-b83c-2b876daa7781",
    researchInterests: "Pharmaceutics, Drug Delivery & Development, Oncology, Nanomedicine",
    askMeAbout: "Faith, Fitness, Tennis, Medicine"
  },
  {
    name: "Naa Akle Afriyie Okantey",
    role: "Project Coordinator II",
    credentials: "PhD Student, Musicology, Princeton University",
    emails: ["no8260@princeton.edu", "naokantey002@gmail.com"],
    linkedin: "naa-akle-afriyie-okantey",
    imageUrl: "https://github.com/user-attachments/assets/9feb8f3d-21ad-4380-8dad-4c4c70fe8400",
    researchInterests: "Music, Diaspora, New Media, and Sustainability",
    funActivities: "Drawing, Gym, and Singing"
  },
  {
    name: "Matthew Oduamafu",
    role: "Technical Support Lead",
    credentials: "MSc, Mechatronic Engineering, Ashesi University",
    emails: ["mattoduamafu@gmail.com", "matthew.oduamafu@ashesi.edu.gh"],
    github: "Matthew-Oduamafu",
    imageUrl: "https://github.com/user-attachments/assets/3837d03a-ae9c-4bd1-85fa-1128081fed6d",
    researchInterests: "Federated Machine Learning, Precision Agriculture, AI-driven Embedded Systems, Autonomous Robotics",
    funActivities: "Coding, Watching movies/documentaries"
  },
  {
    name: "Benjamin Appiah Yeboah",
    role: "Teaching/Learning Assistant",
    credentials: "MPhil Biomedical Engineering, Kwame Nkrumah University of Science and Technology",
    emails: ["bayeboah24@st.knust.edu.gh"],
    linkedin: "benjamin-yeboah-appiah",
    imageUrl: "https://github.com/user-attachments/assets/5430ea4a-2b9a-4895-a094-3aa455330ae4",
    researchInterests: "Computational Neuroscience, NeuroAI, Neuroimaging, Medical AI",
    funActivities: "Video games, Playing football"
  },
  {
    name: "Elina Owusu, B.A",
    role: "Teaching/Learning Assistant",
    credentials: "Registered Behavioral Technician, BASS ABA Therapy\nPsychology Graduate, Temple University, Aspiring Neuropsychologist",
    emails: ["elinaowusuu@gmail.com"],
    linkedin: "elina-owusu-2003",
    imageUrl: "https://github.com/user-attachments/assets/9572c291-508b-43a5-8312-9c6946dcf39e",
    researchInterests: "Cognitive Neuroscience, Behavioral Neuroscience, Psychology, Neuroanatomy, Developmental Neuroscience.",
    funActivities: "Dancing, Theatre shows, Orchestra Events"
  }
];

export const advisors: Person[] = [
  {
    name: "Michael S. Okun, MD",
    role: "Advisor",
    titles: [
      "Adelaide Lackner Distinguished Professor of Neurology",
      "Executive Director, Norman Fixel Institute for Neurological Diseases",
      "University of Florida"
    ],
    emails: ["okun@neurology.ufl.edu"],
    linkedin: "michael-s-okun-97075565",
    imageUrl: "https://github.com/user-attachments/assets/dcacb553-9430-485b-8a2b-92af78532fc2"
  },
  {
    name: "Aysegul Gunduz, PhD",
    role: "Advisor",
    titles: [
      "Professor, J. Crayton Pruitt Family Department of Biomedical Engineering",
      "Fixel Endowed Professor, Norman Fixel Institute for Neurological Diseases",
      "Fellow, American Institute for Medical and Biological Engineering (AIMBE)",
      "Fellow, Biomedical Engineering Society (BMES)"
    ],
    emails: ["agunduz@bme.ufl.edu"],
    website: "http://brainmappinglab.org/",
    websiteLabel: "Brain Mapping Lab",
    imageUrl: "https://github.com/user-attachments/assets/a824beb6-7d0d-4694-99a1-35529cfdcb00"
  },
  {
    name: "Teddy Totimeh, MD",
    role: "Advisor",
    titles: [
      "Consultant Neurosurgeon, Accra Medical Centre",
      "Board Member, International Federation of Neuroendoscopy",
      "Executive Board Member, International Society of Paediatric Neurosurgery",
      "Member of Editorial Board, World Federation of Neurooncology Societies"
    ],
    linkedin: "teddy-totimeh-61133514",
    imageUrl: "https://github.com/user-attachments/assets/8538b4dd-3afd-48b5-b960-b6bbfa5d1d1d"
  }
];
