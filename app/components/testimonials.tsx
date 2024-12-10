import Image from 'next/image'

const testimonials = [
  {
    content: "Luminari Labs transformed our online presence. Their expertise in web development helped us achieve a stunning, high-performance website that has significantly improved our user engagement and conversion rates.",
    author: "Sarah Johnson",
    role: "CEO, TechInnovate",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    content: "Working with Luminari Labs was a game-changer for our e-commerce platform. Their attention to detail and innovative solutions helped us create a seamless shopping experience for our customers.",
    author: "Michael Chen",
    role: "CTO, ShopSmart",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    content: "The team at Luminari Labs is exceptional. They not only delivered a beautiful website but also provided valuable insights that helped improve our overall digital strategy.",
    author: "Emily Rodriguez",
    role: "Marketing Director, GrowthHub",
    image: "/placeholder.svg?height=100&width=100"
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients about their experience working with Luminari Labs.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <blockquote>
                  <p className="text-lg text-gray-600">&ldquo;{testimonial.content}&rdquo;</p>
                </blockquote>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-12 w-12 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-base text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
