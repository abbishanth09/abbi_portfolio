export type Project = {
  title: string;
  tag: string;
  year: string;
  href: string;
  image: string;
  summary: string;
};

export const projects: Project[] = [
  {
    title: 'Network Security Audit',
    tag: 'VULNERABILITY ASSESSMENT / HARDENING',
    year: '2025',
    href: '#',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    summary: 'Security review of network infrastructure, identifying exposure points and recommending hardening measures.',
  },
  {
    title: 'Threat Detection Lab',
    tag: 'SIEM / LOG ANALYSIS',
    year: '2025',
    href: '#',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    summary: 'Hands-on detection workflows focused on suspicious activity, alert triage, and response fundamentals.',
  },
  {
    title: 'Endpoint Security Practice',
    tag: 'EDR / DEFENSE IN DEPTH',
    year: '2024',
    href: '#',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    summary: 'Practical endpoint protection experiments covering patch hygiene, malware analysis, and layered defenses.',
  },
  {
    title: 'Web App Security Notes',
    tag: 'OWASP / APPSEC',
    year: '2024',
    href: '#',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    summary: 'Security testing notes exploring common web vulnerabilities, mitigation strategies, and secure coding patterns.',
  },
  {
    title: 'Python Security Scripts',
    tag: 'AUTOMATION / TOOLING',
    year: '2024',
    href: '#',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    summary: 'Small automation tools for reconnaissance, log parsing, and repeatable security checks in a learning workflow.',
  },
];
