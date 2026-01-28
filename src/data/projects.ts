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
}

export const projects: Project[] = [
  {
    id: '3d-product-visualizers',
    title: '3D Product Visualizers',
    description:
      'Discover is a 3D Product Visualisation suite that enables brands to offer highly engaging and realistic car buying experience to their customers',
    image: '/projects/project_1.avif',
    imageFit: 'fill',
    link: '/project/3d-product-visualizers',
    liveUrl: 'https://magniteconfigurator.nissan.in/#/presentation?prevPage=homepage',
    overview:
      'This project focuses on the design and development of an immersive 3D product visualization platform. The goal was to create a modern, intuitive user experience that combines functionality with a sleek, professional design.',
    solution:
      'To meet the needs of automotive brands and their customers, the design solution focused on a balance of user-centric functionality and visual appeal. The platform enables users to explore vehicles in stunning 3D detail, customize colors and features, and experience the product as if they were in a showroom.',
    solutionImages: ['/projects/project_1.avif'],
  },
  {
    id: 'ai-conversational-bot',
    title: 'AI Conversational Bot for Car Dealerships',
    description:
      'An AI assistant that provides customers with round the clock, real-time support. The assistant serves as a knowledgeable and responsive digital partner for both pre-sale and post-sale services',
    image: '/projects/project_2.avif',
    imageFit: 'cover',
    link: '/project/ai-conversational-bot',
    liveUrl: 'https://gacmotoreg.com/',
    overview:
      'This project focuses on the design and development of a comprehensive AI chatbot platform. The goal was to create a modern, intuitive user experience that combines functionality with a sleek, professional design.',
    solution:
      'To meet the needs of dealership customers, the design solution focused on a balance of user-centric functionality and visual appeal. The AI assistant provides instant responses, schedules test drives, answers queries about pricing and features, and handles post-sale support seamlessly.',
    solutionImages: ['/projects/project_2.avif'],
  },
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id)
}
