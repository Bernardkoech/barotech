const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <img
              src="./group.jpeg"
              className="w-full md:w-96 rounded-lg shadow-lg mb-6 md:mb-0"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-6">
              Barotech is a leading provider of solar energy solutions dedicated
              to powering a sustainable future. With years of experience and
              expertise in the solar industry, we offer innovative and efficient
              solar solutions for residential, commercial, and industrial
              clients.
            </p>
            <p className="text-lg mb-6">
              Our mission is to make solar energy accessible and affordable for
              everyone while reducing our carbon footprint and promoting
              environmental sustainability. We believe in harnessing the power
              of the sun to create a cleaner and brighter future for generations
              to come.
            </p>
            <p className="text-lg mb-6">
              At Barotech, we are committed to excellence, integrity, and
              customer satisfaction. Our team of skilled professionals works
              tirelessly to deliver high-quality solar installations,
              maintenance services, and energy solutions tailored to meet our
              clients needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
