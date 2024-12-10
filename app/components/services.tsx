import { Code, Smartphone, Globe, Zap } from 'lucide-react'

const services = [
  {
    name: 'Web Development',
    description: 'We create responsive, high-performance websites tailored to your needs.',
    icon: Globe,
  },
  {
    name: 'Mobile App Development',
    description: 'We build native and cross-platform mobile apps for iOS and Android.',
    icon: Smartphone,
  },
  {
    name: 'Custom Software Development',
    description: 'We develop bespoke software solutions to streamline your business processes.',
    icon: Code,
  },
  {
    name: 'Performance Optimization',
    description:'We optimize your existing web applications for speed, efficiency, and better user experience.',
    icon: Zap,
  },
]

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What We Offer
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We provide a wide range of web development services to help your business thrive in the digital world.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {services.map((service) => (
              <div key={service.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{service.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{service.description}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
