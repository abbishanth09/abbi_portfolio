import uvaXtreme from '../assets/UVAXTREME 1.0.png';
import python from '../assets/Python.jpg';
import hackMS from '../assets/HackMS.jpeg';
import deloitte from '../assets/Deloitte Technology Job Simulation.png';
import azure from '../assets/Azure AI Speech Translation & Serverless APIs Workshop.png';
import apsc from '../assets/APSC Cyber security Competition.jpeg';
import cyberSecurityPdf from '../assets/Cyber Security & Ethical Hacking.pdf';
import cloudPdf from '../assets/Introduction_to_Cloud_Skills_with_AWS-Certificate.pdf';
import aiMlPdf from '../assets/AI___Machine_Learning_Research_Fundamentals-Certificate.pdf';

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  image?: string;
  href: string;
};

export const certifications: Certification[] = [
  {
    title: 'Cybersecurity & Ethical Hacking',
    issuer: 'CapriccioSec University',
    year: '2025',
    href: cyberSecurityPdf,
  },
  {
    title: 'Cybersecurity Competition',
    issuer: 'APSC Cyber Security Fund / Cyber Security Hub, UWU',
    year: '2025',
    image: apsc,
    href: apsc,
  },
  {
    title: 'Deloitte Technology Job Simulation',
    issuer: 'Forage',
    year: '2024',
    image: deloitte,
    href: deloitte,
  },
  {
    title: 'Introduction to Cloud Skills with AWS',
    issuer: 'QrioMatrix Technologies / Qcerty',
    year: '2026',
    image: undefined,
    href: cloudPdf,
  },
  {
    title: 'AI & Machine Learning Research Fundamentals',
    issuer: 'QrioMatrix Technologies / Qcerty',
    year: '2026',
    href: aiMlPdf,
  },
  {
    title: 'Azure AI Speech Translation & Serverless APIs Workshop',
    issuer: 'Microsoft Student Ambassadors, MS Club of UWU',
    year: '2024',
    image: azure,
    href: azure,
  },
  {
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    year: '2025',
    image: python,
    href: python,
  },
  {
    title: 'HackMS 2026 Hackathon — 2nd Runner-Up',
    issuer: 'MS Club of Uva Wellassa University',
    year: '2026',
    image: hackMS,
    href: hackMS,
  },
  {
    title: 'UVAXTREME 1.0',
    issuer: 'Participation',
    year: '2024',
    image: uvaXtreme,
    href: uvaXtreme,
  },
];
