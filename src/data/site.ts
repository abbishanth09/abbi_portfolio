export type SocialLink = {
  label: string;
  href: string;
};

export const site = {
  name: 'Thiyagaraja Abbishanth',
  handle: 'ABBISHANTH',
  role: 'CYBER SECURITY ENGINEER',
  email: 'abbishanth09@gmail.com',
  year: new Date().getFullYear(),
  socials: [
    { label: 'GitHub', href: 'https://github.com/abbishanth09' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abbishanth-t-9b3b8b1b7/' },
    { label: 'Email', href: 'mailto:abbishanth09@gmail.com' },
  ] as SocialLink[],
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
  intro: 'Thiyagaraja Abbishanth',
};
