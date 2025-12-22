export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  thumbnail: string;
  featured: boolean;
  
  // Case Study Details
  problem: {
    title: string;
    description: string;
    painPoints: string[];
    context: string;
  };
  
  solution: {
    title: string;
    approach: string;
    keyFeatures: string[];
    architecture: {
      description: string;
      diagram?: string;
    };
  };
  
  impact: {
    title: string;
    metrics: {
      label: string;
      value: string;
      description: string;
    }[];
    outcomes: string[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  };
  
  techStack: {
    category: string;
    technologies: {
      name: string;
      reason: string;
      icon?: string;
    }[];
  }[];
  
  challenges: {
    challenge: string;
    solution: string;
  }[];
  
  improvements: {
    title: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
  }[];
  
  gallery: {
    type: 'image' | 'video' | 'gif';
    url: string;
    caption: string;
    alt: string;
  }[];
  
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  
  timeline: string;
  role: string;
  team?: string;
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: '1',
    slug: 'ai-movie-recommendation',
    title: 'AI-Powered Movie Recommendation System',
    subtitle: 'Personalized movie discovery using machine learning',
    category: 'AI/ML',
    thumbnail: '/placeholder.svg?height=400&width=600',
    featured: true,
    
    problem: {
      title: 'The Challenge',
      description: 'Users struggle to find movies they\'ll enjoy among thousands of options, leading to decision fatigue and poor viewing experiences.',
      painPoints: [
        'Generic recommendations that don\'t match personal taste',
        'Time wasted browsing without finding suitable content',
        'Lack of context-aware suggestions (mood, time of day, etc.)',
        'No learning from user feedback to improve recommendations'
      ],
      context: 'With streaming platforms offering 10,000+ titles, users need intelligent, personalized recommendations that understand their unique preferences and viewing context.'
    },
    
    solution: {
      title: 'The Solution',
      approach: 'Built an AI-powered recommendation engine using collaborative filtering and content-based algorithms, combined with real-time user preference learning.',
      keyFeatures: [
        'Smart recommendations based on viewing history and ratings',
        'Real-time preference learning from user interactions',
        'Mood-based filtering (action, comedy, drama, etc.)',
        'Similar movie discovery using content analysis',
        'Personalized watchlist with priority sorting'
      ],
      architecture: {
        description: 'Microservices architecture with React frontend, Node.js API, Python ML service, and MongoDB for data storage. Real-time updates via WebSockets.',
        diagram: '/architecture/movie-rec-system.svg'
      }
    },
    
    impact: {
      title: 'Results & Impact',
      metrics: [
        {
          label: 'User Engagement',
          value: '+45%',
          description: 'Increase in time spent browsing'
        },
        {
          label: 'Recommendation Accuracy',
          value: '87%',
          description: 'Users rate recommendations as relevant'
        },
        {
          label: 'Response Time',
          value: '< 2s',
          description: 'Average recommendation generation time'
        }
      ],
      outcomes: [
        'Reduced decision fatigue with personalized suggestions',
        'Improved user satisfaction scores by 40%',
        'Increased platform engagement and retention',
        'Successfully deployed to 1,000+ active users'
      ],
      testimonial: {
        quote: 'The recommendations are spot-on! It\'s like the app knows exactly what I want to watch.',
        author: 'Sarah Johnson',
        role: 'Beta User'
      }
    },
    
    techStack: [
      {
        category: 'Frontend',
        technologies: [
          {
            name: 'React',
            reason: 'Component-based architecture for reusable UI elements'
          },
          {
            name: 'TypeScript',
            reason: 'Type safety and better developer experience'
          },
          {
            name: 'Tailwind CSS',
            reason: 'Rapid UI development with utility-first approach'
          }
        ]
      },
      {
        category: 'Backend',
        technologies: [
          {
            name: 'Node.js + Express',
            reason: 'Fast, scalable API server with JavaScript ecosystem'
          },
          {
            name: 'Python + FastAPI',
            reason: 'ML model serving with high performance'
          },
          {
            name: 'WebSockets',
            reason: 'Real-time recommendation updates'
          }
        ]
      },
      {
        category: 'Database',
        technologies: [
          {
            name: 'MongoDB',
            reason: 'Flexible schema for movie metadata and user preferences'
          },
          {
            name: 'Redis',
            reason: 'Caching layer for fast recommendation retrieval'
          }
        ]
      },
      {
        category: 'AI/ML',
        technologies: [
          {
            name: 'Scikit-learn',
            reason: 'Collaborative filtering algorithms'
          },
          {
            name: 'TensorFlow',
            reason: 'Deep learning for content-based filtering'
          }
        ]
      }
    ],
    
    challenges: [
      {
        challenge: 'Cold start problem for new users with no viewing history',
        solution: 'Implemented hybrid approach combining popular movies with quick preference survey to bootstrap recommendations'
      },
      {
        challenge: 'Slow recommendation generation affecting user experience',
        solution: 'Added Redis caching layer and pre-computed recommendations for common scenarios, reducing latency by 80%'
      },
      {
        challenge: 'Model accuracy degradation over time',
        solution: 'Implemented continuous learning pipeline that retrains model weekly with new user interaction data'
      }
    ],
    
    improvements: [
      {
        title: 'Social Features',
        description: 'Add friend recommendations and collaborative watchlists to leverage social connections',
        priority: 'high'
      },
      {
        title: 'Multi-modal Recommendations',
        description: 'Incorporate trailer analysis and poster visual similarity for better content understanding',
        priority: 'medium'
      },
      {
        title: 'A/B Testing Framework',
        description: 'Build infrastructure to test different recommendation algorithms in production',
        priority: 'medium'
      },
      {
        title: 'Offline Mode',
        description: 'Cache recommendations for offline browsing',
        priority: 'low'
      }
    ],
    
    gallery: [
      {
        type: 'image',
        url: '/screenshots/movie-rec-home.png',
        caption: 'Home screen with personalized recommendations',
        alt: 'Movie recommendation app home screen'
      },
      {
        type: 'image',
        url: '/screenshots/movie-rec-details.png',
        caption: 'Movie details with AI-generated insights',
        alt: 'Movie details page'
      },
      {
        type: 'gif',
        url: '/demos/movie-rec-demo.gif',
        caption: 'Real-time recommendation updates',
        alt: 'Demo of recommendation system in action'
      }
    ],
    
    links: {
      live: 'https://movie-rec-demo.vercel.app',
      github: 'https://github.com/yourusername/movie-recommendation',
      demo: 'https://www.youtube.com/watch?v=demo'
    },
    
    timeline: '3 months',
    role: 'Full-Stack Developer & ML Engineer',
    team: 'Solo Project'
  },
  
  // Add more projects here...
];

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return projectsData.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map(project => project.slug);
}

export function getFeaturedProjects(): ProjectCaseStudy[] {
  return projectsData.filter(project => project.featured);
}
