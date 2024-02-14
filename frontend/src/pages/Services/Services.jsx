const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Solar Panel Installation"
            description="We specialize in designing and installing high-quality solar panel systems for residential, commercial, and industrial properties."
            icon="solar-panel"
          />
          <ServiceCard
            title="Solar Panel Maintenance"
            description="Our team provides comprehensive maintenance services to ensure the optimal performance and longevity of your solar panel system."
            icon="maintenance"
          />
          <ServiceCard
            title="Solar Energy Consultation"
            description="We offer expert consultation services to help you make informed decisions about solar energy solutions for your property."
            icon="consultation"
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
      <div className="flex items-center justify-center mb-6">
        <img src="s1.png" alt={title} className="w-16 h-16" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-lg text-gray-700 mb-4">{description}</p>
      <a href="#" className="text-blue-500 hover:underline">
        Learn more
      </a>
    </div>
  );
};

export default Services;
