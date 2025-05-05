import { useEffect, useState } from "react";

export const Blogs = () => {
  const [visibleCards, setVisibleCards] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Leadership", "Organizational Development", "Personal Growth"];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisibleCards(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0201BF] via-[#6D38FF] to-[#D11DD9] bg-clip-text text-transparent">Insights & Resources</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Practical articles, research, and tools to support your leadership and personal development journey.
          </p>
        </div>

        {/* Category Labels */}
        <div className="mb-8">
          <div className="flex justify-center flex-wrap gap-4">
            {categories.map((label) => (
              <button
                key={label}
                onClick={() => setActiveCategory(label)}
                className={`tab-button px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === label
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-primary hover:text-blue-600"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "5 Strategies for Leading Through Uncertainty",
              category: "Leadership",
              date: "May 2, 2025",
              excerpt: "Practical approaches to help leaders navigate complexity and guide their teams through challenging times.",
              image:
                "https://readdy.ai/api/search-image?query=professional%20meeting%20with%20diverse%20team%20discussing%20leadership%20strategies%20in%20modern%20office%20environment%2C%20business%20coaching%20session%2C%20professional%20setting%20with%20natural%20lighting&width=600&height=400&seq=blog1&orientation=landscape",
            },
            {
              title: "Building a Culture of Innovation and Agility",
              category: "Organizational Development",
              date: "April 28, 2025",
              excerpt: "How organizations can foster environments that encourage creative thinking and adaptability.",
              image:
                "https://readdy.ai/api/search-image?query=professional%20organizational%20chart%20or%20team%20structure%20visualization%20in%20modern%20office%20setting%2C%20business%20strategy%20planning%2C%20professional%20environment%20with%20clean%20design%20elements&width=600&height=400&seq=blog2&orientation=landscape",
            },
            {
              title: "Mindfulness Practices for Busy Professionals",
              category: "Personal Growth",
              date: "April 20, 2025",
              excerpt: "Simple techniques to incorporate mindfulness into your daily routine for improved focus and well-being.",
              image:
                "https://readdy.ai/api/search-image?query=professional%20person%20in%20meditation%20or%20mindfulness%20pose%20in%20bright%20modern%20office%20environment%2C%20work-life%20balance%20concept%2C%20wellness%20in%20workplace%2C%20clean%20professional%20setting&width=600&height=400&seq=blog3&orientation=landscape",
            },
          ]
            .filter((blog) => activeCategory === "All" || blog.category === activeCategory)
            .map((blog, idx) => (
              <div
                key={idx}
                className={`blog-card bg-white rounded-lg shadow-md overflow-hidden transform transition duration-700 ease-out hover:shadow-xl hover:-translate-y-1 ${
                  visibleCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <div className="h-48 overflow-hidden group">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <span className="text-xs text-gray-500 ml-3">{blog.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <a
                    href="/blog-single-page"
                    className="inline-block text-primary font-medium hover:text-purple transition-colors gradient-border"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/blog"
            className="btn-primary text-white font-semibold px-8 py-4 rounded-full inline-block whitespace-nowrap hover:shadow-lg transition-all duration-300"
          >
            View All Resources
          </a>
        </div>
      </div>
    </section>
  );
};
