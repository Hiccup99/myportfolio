export interface Brand {
  name: string
  logo: string
}

export interface ResultStat {
  value: string
  label: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  imageFit: string
  link: string
  liveUrl?: string
  overview: string
  challenge: string
  solution: string
  impact: string
  results: ResultStat[]
  solutionImages?: string[]
  role?: string[]
  caseStudyUrl?: string
  impactUrl?: string
  brands?: Brand[]
  brandsDisplayMode?: 'loop' | 'static'
}

export const projects: Project[] = [
  {
    id: 'autodome',
    title: 'Autodome',
    description:
      'Autodome is a 3D Product Visualisation suite that enables brands to offer highly engaging and realistic car buying experience to their customers',
    image: '/projects/stellantis/thumbnail.avif',
    imageFit: 'cover',
    link: '/project/autodome',
    liveUrl: 'https://www.jeep-dubai.com/en/grand-wagoneer/configurator.html',
    caseStudyUrl: 'https://www.metadome.ai/case-study/jeep-stellantis',
    impactUrl:
      'https://www.marutisuzuki.com/corporate/media/press-releases/2023/november/maruti-suzuki-announces-winners-of-mail-cohort-8-winning-startups-earn-proof-of-concept?srsltid=AfmBOoo2oCeAzn-I81cuLmWcDCFdVHTvRHWuzVh42n3X-0oBAmhfQcsE',
    overview:
      'Jeep Dubai, part of Stellantis, faced a challenge launching the Grand Wagoneer Series III without sufficient physical inventory across dealerships. Prospective buyers were limited to static images and videos, which fell short in conveying the scale, craftsmanship, and premium experience of the vehicle. To bridge this gap, Jeep Dubai partnered with Metadome.ai to deliver a cinematic, immersive digital experience that allowed customers to explore the vehicle in depth without requiring VR headsets or a learning curve.',
    challenge:
      'Stellantis aimed to launch its flagship Grand Wagoneer simultaneously across multiple Middle Eastern markets before the vehicle was physically available in dealerships. The key challenge was enabling customers to meaningfully experience, understand, and interact with the car online in a way that matched its premium positioning and influenced purchase intent.',
    solution:
      "Using Metadome.ai's flagship platform, Autodome, customers were able to explore life-like 3D models of the Grand Wagoneer, interact with multiple configurations and variants, and experience the vehicle through high-fidelity web-based 3D and AR. All of this was accessible directly from smartphones, tablets, and desktops, bringing a showroom-grade experience into customers' homes.",
    impact:
      'The immersive experience significantly increased user engagement and purchase consideration. Customers spent more time exploring the vehicle, developed a deeper understanding of its features, and were more likely to progress down the funnel. Average session duration increased to 10 minutes, 25% of users spent more than 14 minutes per session, and 5.3% of users converted to Get a Quote.',
    results: [
      { value: '10 min', label: 'Average time spent per user' },
      { value: '5.3%', label: 'Conversion rate on Get a Quote' },
      { value: '25%', label: 'Users with sessions exceeding 14 minutes' },
      { value: '15', label: 'Unique configurations created and explored' },
    ],
    solutionImages: ['/projects/stellantis/solution.avif'],
    role: [
      'Product Strategy & Roadmap',
      'End-to-End Product Ownership',
      'Client & Stakeholder Leadership',
      'Cross-Functional Leadership',
      '0->1->10 Product Execution',
    ],
    brands: [
      { name: 'Brand 1', logo: '/brands/autodome/gm.avif' },
      { name: 'Brand 2', logo: '/brands/autodome/harleydavidson.avif' },
      { name: 'Brand 3', logo: '/brands/autodome/hero.avif' },
      { name: 'Brand 4', logo: '/brands/autodome/mg.avif' },
      { name: 'Brand 5', logo: '/brands/autodome/nissan.avif' },
      { name: 'Brand 6', logo: '/brands/autodome/royalenfield.avif' },
      { name: 'Brand 7', logo: '/brands/autodome/vinfast.avif' },
    ],
    brandsDisplayMode: 'loop',
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
      'Jameel Motors, a leading automotive player in Egypt, faced challenges in handling high volumes of customer inquiries across pre-sales and post-sales journeys. Existing rule-based chatbots lacked conversational depth, resulting in poor engagement, delayed responses, and missed high-intent leads. To address this, Jameel Motors partnered with Metadome.ai to deploy an AI-powered Virtual Assistant that could deliver real-time, human-like conversations at scale while seamlessly integrating with backend systems.',
    challenge:
      'Jameel Motors needed a scalable solution to manage customer interactions across sales, test drives, and after-sales services without overwhelming the sales team. Key challenges included delayed or missed responses, lost leads from high-intent customers, and excessive manual effort spent on repetitive queries instead of closing deals.',
    solution:
      'Metadome.ai introduced an AI-powered Virtual Assistant designed to act as a digital sales and service partner for Jameel Motors. The assistant provided 24×7 conversational support, guiding customers through vehicle discovery, answering queries instantly, and booking test drives. It also unified post-sales workflows by enabling maintenance booking, service tracking, and spare part requests within a single conversational flow. The solution was fully integrated with CRM systems and Metadome’s analytics dashboard, allowing real-time lead tracking and performance insights.',
    impact:
      'The AI-driven conversational experience significantly improved engagement, operational efficiency, and revenue outcomes. Customers received faster responses, smoother handoffs, and a more personalized experience, while sales teams were freed to focus on high-value interactions.',
    results: [
      { value: '30%', label: 'Lead conversion rate' },
      { value: '56%', label: 'Increase in test drive bookings' },
      { value: '90%', label: 'Customer satisfaction score' },
      { value: '$200K+', label: 'Sales impact in 2 months' },
    ],
    solutionImages: ['/projects/alj/solution.avif'],
    role: [
      'Product Strategy & Roadmap',
      'End-to-End Product Ownership',
      'Client & Stakeholder Leadership',
      '0->1 Product Execution',
      'Cross-Functional Leadership',
    ],
    brands: [
      { name: 'Brand 1', logo: '/brands/aivsa/alj.avif' },
      { name: 'Brand 2', logo: '/brands/aivsa/vinfast.avif' },
    ],
    brandsDisplayMode: 'static',
  },
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id)
}
