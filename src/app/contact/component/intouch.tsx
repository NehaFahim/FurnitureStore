import { FaPhone } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa6';

export default function ContactPage() {
  return (
    <div className="px-4 py-12 w-full h-auto max-w-7xl mx-auto">
      <h1 className="text-center text-3xl md:text-4xl font-semibold mb-6">
        Get In Touch With Us
      </h1>
      <p className="text-center text-gray-500 mb-12 text-sm md:text-base">
        For More Information About Our Product & Services. Please Feel Free To Drop Us <br className="hidden md:block" /> 
        An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-8 mt-10 px-4 md:px-8">
          <div className="flex items-center space-x-4">
            <div className="text-2xl text-black">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h2 className="font-medium text-lg md:text-xl">Address</h2>
              <p className="text-black text-sm md:text-base">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-2xl text-black">
              <FaPhone />
            </div>
            <div>
              <h2 className="font-medium text-lg md:text-xl">Phone</h2>
              <p className="text-black text-sm md:text-base">Mobile: +(84) 546-6789</p>
              <p className="text-black text-sm md:text-base">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-2xl text-black">
              <FaClock />
            </div>
            <div>
              <h2 className="font-medium text-lg md:text-xl">Working Time</h2>
              <p className="text-black text-sm md:text-base">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-black text-sm md:text-base">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="px-4 md:px-8">
          <form className="space-y-6 mt-10">
            <div>
              <label className="block text-black font-medium text-sm md:text-base mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Abc"
                className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-black font-medium text-sm md:text-base mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Abc@def.com"
                className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-black font-medium text-sm md:text-base mb-2">Subject</label>
              <input
                type="text"
                placeholder="This is an optional subject"
                className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-black font-medium text-sm md:text-base mb-2">Message</label>
              <textarea
                placeholder="Hi! I'd like to ask about..."
                rows={4}
                className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
