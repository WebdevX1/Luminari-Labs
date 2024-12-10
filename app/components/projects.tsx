import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce platform with advanced filtering and search capabilities.',
    imageUrl: '/placeholder.svg?height=400&width=600',
    link: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'A comprehensive dashboard for managing multiple social media accounts with analytics.',
    imageUrl: '/placeholder.svg?height=400&width=600',
    link: '#',
  },
  {
    title: 'Fitness Tracking App',
    description: 'A mobile-first web application for tracking workouts and nutrition with data visualization.',
    imageUrl: '/placeholder.svg?height=400&width=600',
    link: '#',
  },
  {
    title: 'Real Estate Listing Portal',
    description: 'A feature-rich real estate platform with map integration and virtual tour capabilities.',
    imageUrl: '/placeholder.svg?height=400&width=600',
    link: '#',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Work</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Recent Projects
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Explore some of our latest web development projects that showcase our expertise and creativity.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {projects.map((project) => (
            <div key={project.title} className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="relative h-48 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-base text-gray-500">{project.description}</p>
                <div className="mt-4">
                  <Link
                    href={project.link}
                    className="text-indigo-600 hover:text-indigo-500 font-medium"
                  >
                    View Project
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
