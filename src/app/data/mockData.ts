export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  budget: string;
  description: string;
  skills: string[];
  postedDate: string;
  applicants: number;
  featured?: boolean;
}

export interface Designer {
  id: string;
  name: string;
  title: string;
  location: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  hourlyRate: string;
  skills: string[];
  portfolio: string[];
  description: string;
  completed: number;
  responseTime: string;
  featured?: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  user: {
    id: string;
    name: string;
    avatar: string;
    online: boolean;
  };
  lastMessage: string;
  timestamp: string;
  unread: number;
}

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior UI/UX Designer for SaaS Platform',
    company: 'TechFlow Inc',
    location: 'Remote',
    type: 'Full-time',
    budget: '₹80k - ₹120k/year',
    description: 'We are looking for an experienced UI/UX designer to lead the design of our SaaS platform. You will work closely with product managers and engineers to create intuitive user experiences.',
    skills: ['Figma', 'Sketch', 'Prototyping', 'User Research', 'Design Systems'],
    postedDate: '2 days ago',
    applicants: 24,
    featured: true,
  },
  {
    id: '2',
    title: 'Mobile App UI Designer',
    company: 'FinanceApp Co',
    location: 'New York, NY',
    type: 'Contract',
    budget: '₹5000 - ₹8000',
    description: 'Design a beautiful and intuitive mobile app interface for our financial management application. Experience with iOS and Android design patterns required.',
    skills: ['Mobile Design', 'iOS', 'Android', 'Figma', 'Animation'],
    postedDate: '5 days ago',
    applicants: 18,
  },
  {
    id: '3',
    title: 'E-commerce Website Redesign',
    company: 'ShopMart',
    location: 'Los Angeles, CA',
    type: 'Freelance',
    budget: '₹3000 - ₹5000',
    description: 'Complete redesign of our e-commerce website to improve conversion rates and user experience. Looking for a designer with strong portfolio in e-commerce.',
    skills: ['Web Design', 'E-commerce', 'Conversion Optimization', 'Figma'],
    postedDate: '1 week ago',
    applicants: 32,
    featured: true,
  },
  {
    id: '4',
    title: 'Product Designer - Healthcare Platform',
    company: 'HealthTech Solutions',
    location: 'San Francisco, CA',
    type: 'Full-time',
    budget: '₹90k - ₹130k/year',
    description: 'Join our team to design innovative healthcare solutions. You will be responsible for the entire design process from research to final implementation.',
    skills: ['Product Design', 'Healthcare', 'Accessibility', 'Prototyping'],
    postedDate: '3 days ago',
    applicants: 15,
  },
  {
    id: '5',
    title: 'Brand Identity & UI Design',
    company: 'StartupHub',
    location: 'Remote',
    type: 'Contract',
    budget: '₹4000 - ₹7000',
    description: 'Create a complete brand identity and design the UI for our new startup marketplace platform.',
    skills: ['Branding', 'Logo Design', 'UI Design', 'Illustrator', 'Figma'],
    postedDate: '4 days ago',
    applicants: 28,
  },
  {
    id: '6',
    title: 'Dashboard UI/UX Designer',
    company: 'DataViz Corp',
    location: 'Austin, TX',
    type: 'Part-time',
    budget: '₹50-₹80/hour',
    description: 'Design complex data visualization dashboards for enterprise clients. Strong understanding of information architecture required.',
    skills: ['Dashboard Design', 'Data Visualization', 'Enterprise UX', 'Sketch'],
    postedDate: '1 week ago',
    applicants: 21,
  },
];

export const mockDesigners: Designer[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Senior Product Designer',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: '₹85/hr',
    skills: ['UI/UX', 'Figma', 'Prototyping', 'User Research', 'Design Systems'],
    portfolio: [
      'https://images.unsplash.com/photo-1610834651699-1d76adff0c6c?w=400',
      'https://images.unsplash.com/photo-1739298061707-cefee19941b7?w=400',
      'https://images.unsplash.com/photo-1752860872185-78926b52ef77?w=400',
    ],
    description: 'Product designer with 8+ years of experience creating beautiful and functional digital products. Specialized in SaaS platforms and enterprise software.',
    completed: 156,
    responseTime: '1 hour',
    featured: true,
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'UI/UX Designer & Developer',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    rating: 4.8,
    reviewCount: 94,
    hourlyRate: '₹75/hr',
    skills: ['Web Design', 'Mobile Design', 'React', 'Tailwind CSS', 'Figma'],
    portfolio: [
      'https://images.unsplash.com/photo-1610834651699-1d76adff0c6c?w=400',
      'https://images.unsplash.com/photo-1739298061707-cefee19941b7?w=400',
    ],
    description: 'Full-stack designer who codes. I bring designs to life with clean code and pixel-perfect implementations.',
    completed: 132,
    responseTime: '2 hours',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    title: 'Brand & Visual Designer',
    location: 'Los Angeles, CA',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    rating: 5.0,
    reviewCount: 83,
    hourlyRate: '₹90/hr',
    skills: ['Branding', 'Illustration', 'Logo Design', 'Print Design', 'Adobe Suite'],
    portfolio: [
      'https://images.unsplash.com/photo-1752860872185-78926b52ef77?w=400',
      'https://images.unsplash.com/photo-1610834651699-1d76adff0c6c?w=400',
    ],
    description: 'Creative designer specializing in brand identity and visual storytelling. I help businesses stand out with memorable design.',
    completed: 98,
    responseTime: '3 hours',
    featured: true,
  },
  {
    id: '4',
    name: 'David Kim',
    title: 'Mobile App Designer',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    rating: 4.7,
    reviewCount: 112,
    hourlyRate: '₹70/hr',
    skills: ['iOS Design', 'Android Design', 'Mobile UX', 'Prototyping', 'Sketch'],
    portfolio: [
      'https://images.unsplash.com/photo-1739298061707-cefee19941b7?w=400',
    ],
    description: 'Mobile-first designer with expertise in creating intuitive apps for iOS and Android platforms.',
    completed: 145,
    responseTime: '1 hour',
  },
  {
    id: '5',
    name: 'Jessica Martinez',
    title: 'UX Researcher & Designer',
    location: 'Remote',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150',
    rating: 4.9,
    reviewCount: 76,
    hourlyRate: '₹80/hr',
    skills: ['User Research', 'Usability Testing', 'Information Architecture', 'Wireframing'],
    portfolio: [
      'https://images.unsplash.com/photo-1610834651699-1d76adff0c6c?w=400',
      'https://images.unsplash.com/photo-1752860872185-78926b52ef77?w=400',
    ],
    description: 'Data-driven designer who believes great design starts with understanding users. Expert in research methodologies and testing.',
    completed: 89,
    responseTime: '2 hours',
  },
  {
    id: '6',
    name: 'Alex Thompson',
    title: 'Creative Director',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    rating: 5.0,
    reviewCount: 65,
    hourlyRate: '₹120/hr',
    skills: ['Art Direction', 'Creative Strategy', 'Team Leadership', 'Brand Design'],
    portfolio: [
      'https://images.unsplash.com/photo-1739298061707-cefee19941b7?w=400',
      'https://images.unsplash.com/photo-1752860872185-78926b52ef77?w=400',
    ],
    description: 'Award-winning creative director with 12+ years experience leading design teams and creating impactful campaigns.',
    completed: 78,
    responseTime: '4 hours',
    featured: true,
  },
];

export const mockConversations: Conversation[] = [
  {
    id: '1',
    user: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      online: true,
    },
    lastMessage: 'Thanks! I can start working on this next week.',
    timestamp: '2 min ago',
    unread: 2,
  },
  {
    id: '2',
    user: {
      id: '2',
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      online: false,
    },
    lastMessage: 'Ive sent over the initial designs for review.',
    timestamp: '1 hour ago',
    unread: 0,
  },
  {
    id: '3',
    user: {
      id: '3',
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      online: true,
    },
    lastMessage: 'When can we schedule a call to discuss the project?',
    timestamp: '3 hours ago',
    unread: 1,
  },
];

export const mockMessages: Message[] = [
  {
    id: '1',
    senderId: '1',
    receiverId: 'me',
    content: 'Hi! I saw your project posting and I am very interested.',
    timestamp: '10:30 AM',
    read: true,
  },
  {
    id: '2',
    senderId: 'me',
    receiverId: '1',
    content: 'Great! Can you share your portfolio and availability?',
    timestamp: '10:35 AM',
    read: true,
  },
  {
    id: '3',
    senderId: '1',
    receiverId: 'me',
    content: 'Sure! Ive worked on similar projects. I can start next week.',
    timestamp: '10:40 AM',
    read: true,
  },
  {
    id: '4',
    senderId: 'me',
    receiverId: '1',
    content: 'Perfect! What is your estimated timeline and budget?',
    timestamp: '10:45 AM',
    read: true,
  },
  {
    id: '5',
    senderId: '1',
    receiverId: 'me',
    content: 'Thanks! I can start working on this next week.',
    timestamp: '10:50 AM',
    read: false,
  },
];
