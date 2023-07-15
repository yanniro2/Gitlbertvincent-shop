import React from "react";

const ContactPage = () => {
  return (
    <div className="section2">
      <div className="context">
        <div>
          <h1 className="h1">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            Have a question, need support, or want to book a repair service?
            Feel free to get in touch with us using the contact details below or
            by filling out the contact form.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              <p className="text-base text-gray-600 mb-4">Expert Repair</p>
              <p className="text-base text-gray-600 mb-4">123 Main Street</p>
              <p className="text-base text-gray-600 mb-4">City, State 12345</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Contact Information
              </h2>
              <p className="text-base text-gray-600 mb-4">
                Phone: (123) 456-7890
              </p>
              <p className="text-base text-gray-600 mb-4">
                Email: info@example.com
              </p>
              <p className="text-base text-gray-600 mb-4">
                Opening Hours: Mon-Fri, 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
          <form className="bg-orange w-full p-10 flex items-center justify-center rounded-xl">
            <div className="bg-white p-10 rounded font-Lato">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-700 mb-2 block"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-700 mb-2 block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="text-base font-medium text-gray-700 mb-2 block"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="block w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="mt-6">
                <button type="submit" className="btn w-full text-white">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
