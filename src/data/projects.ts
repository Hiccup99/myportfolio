export interface Project {
  id: string
  title: string
  description: string
  image: string
  imageFit: string
  link: string
  liveUrl?: string
  overview: string
  solution: string
  solutionImages?: string[]
  role?: string[]
  caseStudyUrl?: string
  impactUrl?: string
}

export const projects: Project[] = [
  {
    id: '3d-product-visualizers',
    title: '3D Product Visualizers',
    description:
      'Discover is a 3D Product Visualisation suite that enables brands to offer highly engaging and realistic car buying experience to their customers',
    image: '/projects/stellantis/thumbnail.avif',
    imageFit: 'cover',
    link: '/project/3d-product-visualizers',
    liveUrl: 'https://www.jeep-dubai.com/en/grand-wagoneer/configurator.html',
    caseStudyUrl: 'https://www.metadome.ai/case-study/jeep-stellantis',
    impactUrl:
      'https://www.marutisuzuki.com/corporate/media/press-releases/2023/november/maruti-suzuki-announces-winners-of-mail-cohort-8-winning-startups-earn-proof-of-concept?srsltid=AfmBOoo2oCeAzn-I81cuLmWcDCFdVHTvRHWuzVh42n3X-0oBAmhfQcsE',
    overview:
      'This project focuses on the design and development of an immersive 3D product visualization platform. The goal was to create a modern, intuitive user experience that combines functionality with a sleek, professional design.',
    solution:
      'To meet the needs of automotive brands and their customers, the design solution focused on a balance of user-centric functionality and visual appeal. The platform enables users to explore vehicles in stunning 3D detail, customize colors and features, and experience the product as if they were in a showroom.',
    solutionImages: ['/projects/stellantis/solution.avif'],
    role: [
      'Product Strategy & Roadmap',
      'End-to-End Product Ownership',
      'Client & Stakeholder Leadership',
      '0->1 Product Execution',
      'Cross-Functional Leadership',
    ],
  },
  {
    id: 'ai-conversational-bot',
    title: 'AI Conversational Bot for Car Dealerships',
    description:
      'An AI assistant that provides customers with round the clock, real-time support. The assistant serves as a knowledgeable and responsive digital partner for both pre-sale and post-sale services',
    image: '/projects/alj/thumbnail.avif',
    imageFit: 'cover',
    link: '/project/ai-conversational-bot',
    liveUrl: 'https://gacmotoreg.com/',
    caseStudyUrl:
      'https://drive.google.com/file/d/1UrfFwLTTbQaGG8TJeZE_BIGJz0DtlR5y/view?usp=sharing',
    overview:
      'This project focuses on the design and development of a comprehensive AI chatbot platform. The goal was to create a modern, intuitive user experience that combines functionality with a sleek, professional design.',
    solution:
      'To meet the needs of dealership customers, the design solution focused on a balance of user-centric functionality and visual appeal. The AI assistant provides instant responses, schedules test drives, answers queries about pricing and features, and handles post-sale support seamlessly.',
    solutionImages: ['/projects/alj/solution.avif'],
    role: [
      'Product Strategy & Roadmap',
      'End-to-End Product Ownership',
      'Client & Stakeholder Leadership',
      'Cross-Functional Leadership',
      '0->1->10 Product Execution',
    ],
  },
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id)
}
