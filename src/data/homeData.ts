export interface CoreTopic {
  id: string;
  title: string;
  iconName: string;
}

export interface HomeData {
  title: string;
  logoUrl: string;
  paragraphs: string[];
  coreTopics: CoreTopic[];
  expectedOutcomes: string[];
}

export const homeData: HomeData = {
  title: "Welcome to the Ghana Neuroscience Masterclass 2026!",
  logoUrl: "https://github.com/user-attachments/assets/bb0a9949-91cf-49f6-8c13-f301880d9a16",
  paragraphs: [
    "The Ghana Neuroscience Masterclass (GNM) is a premier annual training program designed to inspire, educate, and mentor outstanding undergraduate students across Ghana and Africa who are interested in neuroscience, neuroengineering, brain health, and emerging neurotechnologies. The program aims to cultivate a pipeline of future researchers, clinicians, innovators, and leaders equipped to address neurological and mental health challenges facing Africa.",
    "Africa bears a growing burden of neurological disorders, including stroke, epilepsy, Parkinson's disease, dementia, and mental health conditions. Despite these challenges, opportunities for structured neuroscience training at the undergraduate level remain limited. The Ghana Neuroscience Masterclass seeks to bridge this gap by providing early exposure to neuroscience research, cutting-edge technologies, scientific mentorship, and career development.",
    "The inaugural program will recruit a highly competitive cohort of 20-25 undergraduate students from diverse disciplines including biology, biomedical engineering, medicine, psychology, computer science, mathematics, and related STEM fields. Participants will be selected based on academic excellence, leadership potential, curiosity for neuroscience, and commitment to advancing science in Africa.",
    "The 6-week-long intensive masterclass will feature lectures, hands-on workshops, research demonstrations, panel discussions, and mentorship sessions led by distinguished faculty from Ghana, Africa, and international institutions. Core topics will include:",
    "A unique aspect of the program will be its emphasis on interdisciplinary learning, highlighting the convergence of neuroscience, engineering, data science, and medicine. Participants will engage in team-based capstone projects to develop innovative solutions to African brain health challenges. These projects will encourage creativity, collaboration, and problem-solving while fostering a culture of scientific entrepreneurship.",
    "Beyond technical training, the masterclass will establish a long-term mentorship network connecting students with researchers, clinicians, graduate students, and industry professionals. This network will provide guidance on research opportunities, graduate education, fellowships, and career development.",
    "The long-term vision is to establish the Ghana Neuroscience Masterclass as a flagship African training initiative that nurtures scientific talent, promotes international collaboration, and strengthens neuroscience capacity across the continent. By investing in the next generation of African scientists, the program will help build a sustainable workforce capable of advancing neuroscience research, innovation, and healthcare solutions for Africa's future."
  ],
  coreTopics: [
    {
      id: "fundamentals",
      title: "Fundamentals of neuroscience and brain function",
      iconName: "Brain"
    },
    {
      id: "circuits",
      title: "Neural circuits, cognition, and behavior",
      iconName: "Network"
    },
    {
      id: "disorders",
      title: "Neurological and psychiatric disorders",
      iconName: "Activity"
    },
    {
      id: "neurotech",
      title: "Neurotechnology and brain-computer interfaces",
      iconName: "Cpu"
    },
    {
      id: "computational",
      title: "Artificial intelligence and computational neuroscience",
      iconName: "Binary"
    },
    {
      id: "methods",
      title: "Research methods, ethics, and scientific communication",
      iconName: "FileText"
    },
    {
      id: "careers",
      title: "Career pathways in academia, industry, and healthcare",
      iconName: "Compass"
    }
  ],
  expectedOutcomes: [
    "Train high-potential undergraduate students annually.",
    "Increase awareness and participation in neuroscience research careers.",
    "Foster interdisciplinary collaborations and mentorship networks.",
    "Develop student-led solutions addressing African brain health challenges.",
    "Establish Ghana as a regional hub for neuroscience education and innovation."
  ]
};
