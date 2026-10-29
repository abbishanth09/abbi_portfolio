import serendipWaves from '../assets/Serendip Waves.png';

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
    title: 'Avntra — Smart Clinic Management System',
    tag: 'REAL CLIENT PROJECT / HEALTHCARE PLATFORM',
    year: '2026 – PRESENT',
    href: '#contact',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=80',
    summary: 'Modular Spring Boot and PostgreSQL healthcare platform for patient management, appointments, clinical services, lab tests, billing, notifications, and reporting.',
  },
  {
    title: 'GarageGo — Vehicle Service Booking',
    tag: 'DJANGO / REACT / REST API',
    year: '2025',
    href: '#contact',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=900&q=80',
    summary: 'Full-stack vehicle service booking and scheduling platform with real-time availability, role-based dashboards, service administration, and mechanics workflows.',
  },
  {
    title: 'Care Connect — Digital Healthcare Platform',
    tag: 'MERN / HEALTHCARE / HACKMS RUNNER-UP',
    year: '2026',
    href: '#contact',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    summary: 'MERN healthcare management system with JWT authentication, role-based access control, patient and provider interaction, appointment booking, and health summaries.',
  },
  {
    title: 'Back2Me — Lost & Found Mobile Application',
    tag: 'REACT NATIVE / FIREBASE / MOBILE',
    year: '2026',
    href: '#contact',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
    summary: 'Cross-platform mobile app for reporting, searching, and reclaiming lost items with authentication, image uploads, push notifications, location matching, and moderation.',
  },
  {
    title: 'Serendip Waves — Cruise Booking Platform',
    tag: 'REACT / PHP / MYSQL',
    year: '2025',
    href: 'https://github.com/abbishanth09/Serendip-Waves-Project-I',
    image: serendipWaves,
    summary:
      'Built a full-stack cruise booking platform with a PHP/MySQL backend and React frontend, featuring real-time booking, inventory management, and OTP-based user verification. The platform uses modular PHP scripts with RESTful principles and a MySQL database for structured data storage. Its React and Vite frontend includes ESLint integration and a component-based architecture for future expansion.',
  },
];
