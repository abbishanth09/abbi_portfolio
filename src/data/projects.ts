import serendipWaves from '../assets/Serendip Waves.png';
import aventra from '../assets/Aventra.jpg';
import careConnect from '../assets/Care Connect.jpg';

export type Project = {
  title: string;
  tag: string;
  year: string;
  href: string;
  image: string;
  summary: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: 'Aventra — Smart Clinic Management System',
    tag: 'REAL CLIENT PROJECT / HEALTHCARE PLATFORM',
    year: '2026 – PRESENT',
    href: 'https://github.com/abbishanth09/Aventra-frontend.git',
    image: aventra,
    githubUrl: 'https://github.com/abbishanth09/Aventra-frontend.git',
    summary:
      'Developing a real-world healthcare management platform for a client using a modular monolithic architecture in Spring Boot. The platform includes patient management, appointments, clinical services, lab management, billing, and notifications, with RESTful APIs built using Spring Boot 3 and Spring Data JPA, PostgreSQL and MongoDB persistence, Keycloak OAuth2 and JWT authentication, role-based access control across five roles, Docker Compose containerization, AWS S3 storage, and JasperReports for PDF reports.',
  },
  {
    title: 'GarageGo — Vehicle Service Booking',
    tag: 'DJANGO / REACT / REST API',
    year: '2025',
    href: 'https://github.com/abbishanth09/GarageGo',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=900&q=80',
    githubUrl: 'https://github.com/abbishanth09/GarageGo',
    summary:
      'Built a full-stack garage service booking platform with a Django/MySQL backend and React frontend, featuring real-time slot availability with double-booking prevention and role-based dashboards. Developed RESTful APIs using Django 5.0 and Django REST Framework for vehicle, service, and booking modules with MySQL 8.0. Built booking lifecycle management with status tracking from Pending to Approved, In Progress, and Completed, mechanic assignment, and payment updates. Secured all endpoints with JWT authentication and role-based access control for customers, admins, and mechanics.',
  },
  {
    title: 'Care Connect — Digital Healthcare Platform',
    tag: 'MERN / HEALTHCARE / HACKMS RUNNER-UP',
    year: '2026',
    href: 'https://github.com/abbishanth09/Care_Connect',
    image: careConnect,
    githubUrl: 'https://github.com/abbishanth09/Care_Connect',
    summary:
      'Developed a comprehensive healthcare management system using the MERN stack, enabling secure patient-provider interactions and streamlined clinic operations. Implemented JWT-based authentication and role-based access control with patient dashboards and an admin portal for scheduling and monitoring. Integrated MongoDB with Mongoose for structured data storage and applied RESTful API principles with modular Express.js routes. The frontend was built with React and Vite, styled with Tailwind CSS, and enhanced with React Router and Context API.',
  },
  {
    title: 'Back2Me — Lost & Found Mobile Application',
    tag: 'REACT NATIVE / FIREBASE / MOBILE',
    year: '2026',
    href: 'https://github.com/abbishanth09/Back2Me.git',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
    githubUrl: 'https://github.com/abbishanth09/Back2Me.git',
    summary:
      'Developing a cross-platform mobile application using React Native and Expo to help users report and recover lost items through a centralized platform with real-time data synchronization. Integrated Firebase Authentication for secure login and Firebase Firestore for cloud-based storage with instant updates. Implemented real-time location-based notifications to alert nearby users about newly reported items, and designed modules for search with tab navigation, photo upload, item reporting, user profiles with statistics, and alerts.',
  },
  {
    title: 'Serendip Waves — Cruise Booking Platform',
    tag: 'REACT / PHP / MYSQL',
    year: '2025',
    href: 'https://github.com/abbishanth09/Serendip-Waves-Project-I',
    image: serendipWaves,
    githubUrl: 'https://github.com/abbishanth09/Serendip-Waves-Project-I',
    summary:
      'Built a full-stack cruise booking platform with a PHP/MySQL backend and React frontend, featuring real-time booking, inventory management, and OTP-based user verification. The platform uses modular PHP scripts with RESTful principles and a MySQL database for structured data storage. Its React and Vite frontend includes ESLint integration and a component-based architecture for future expansion.',
  },
];
