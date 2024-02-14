const Contacts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfo
            icon="location-pin"
            title="Location"
            description="123 Main Street, Cityville, State, Country"
          />
          <ContactInfo icon="phone" title="Phone" description="+123 456 789" />
          <ContactInfo
            icon="email"
            title="Email"
            description="info@barotech.com"
          />
          <ContactInfo
            icon="clock"
            title="Working Hours"
            description="Mon - Fri: 9:00 AM - 5:00 PM"
          />
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, description }) => {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 mr-4">
        <img src={`/${icon}.svg`} alt={title} className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Contacts;
