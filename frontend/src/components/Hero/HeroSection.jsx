import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white py-1">
      <Carousel autoPlay showThumbs={false} infiniteLoop>
        <div className="relative h-96">
          <img
            src="service3.jpg"
            alt="Image 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4">
            <Link to="/services">
              <h1 className="text-4xl lg:text-6xl font-bold">
                Welcome to Barotech
              </h1>
            </Link>
            <p className="text-lg lg:text-xl mt-4 lg:w-2/3">
              Your trusted partner in solar energy solutions
            </p>
            <Link to="/services">
              <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold">
                Explore Our Services
              </button>
            </Link>
          </div>
        </div>

        <div className="relative h-96">
          <img
            src="bg.jpeg"
            alt="Image 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4">
            <Link to="/projects">
              <h1 className="text-4xl lg:text-6xl font-bold">
                Discover Our Projects
              </h1>
            </Link>
            <p className="text-lg lg:text-xl mt-4 lg:w-2/3">
              Explore our portfolio of successful solar energy installations.
            </p>
            <Link to="/projects">
              <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold">
                View Projects
              </button>
            </Link>
          </div>
        </div>

        <div className="relative h-96">
          <img
            src="group.jpeg"
            alt="Image 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4">
            <Link to="/contact">
              <h1 className="text-4xl lg:text-6xl font-bold">
                Contact Us Today
              </h1>
            </Link>
            <p className="text-lg lg:text-xl mt-4 lg:w-2/3">
              Get in touch with our team to discuss your solar energy needs.
            </p>
            <Link to="/contact">
              <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
