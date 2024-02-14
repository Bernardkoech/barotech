const Projects = () => {
  const projects = [
    {
      title: "Residential Solar Installation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero id quam blandit congue.",
      imageUrl: "./service1.jpeg",
    },
    {
      title: "Commercial Solar Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero id quam blandit congue.",
      imageUrl: "./service2.jpeg",
    },
    {
      title: "Industrial Solar Projects",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero id quam blandit congue.",
      imageUrl: "./bg.jpeg",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const { title, description, imageUrl } = project;
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-lg text-gray-700 mb-4">{description}</p>
        <a href="#" className="text-blue-500 hover:underline">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Projects;
