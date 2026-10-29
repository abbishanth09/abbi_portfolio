export type SocialLink = {
  label: string;
  href: string;
};

export type Role = {
  id: string;
  title: string;
  label: string;
};

export const site = {
  name: 'Thiyagaraja Abbishanth',
  handle: 'ABBISHANTH',
  role: 'NETWORK SOFTWARE ENGINEER',
  email: 'abbishanth1209@gmail.com',
  year: new Date().getFullYear(),
  socials: [
    { label: 'GitHub', href: 'https://github.com/abbishanth09' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abbishanth/' },
    { label: 'Email', href: 'mailto:abbishanth1209@gmail.com' },
  ] as SocialLink[],
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#work' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ],
  intro: 'Thiyagaraja Abbishanth',
  roles: [
    { id: 'network-engineer', title: 'Network Engineer', label: 'Network' },
    { id: 'cyber-security-engineer', title: 'Cyber Security Engineer', label: 'Cyber Security' },
    { id: 'software-engineer', title: 'Software Engineer', label: 'Software' },
    { id: 'systems-engineer', title: 'Systems Engineer', label: 'Systems' },
    { id: 'mobile-app-developer', title: 'Mobile App Developer', label: 'Mobile Apps' },
  ] as Role[],
};
