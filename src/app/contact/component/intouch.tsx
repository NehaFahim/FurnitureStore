import { FaPhone} from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa6';

export default function ContactPage() {
  return (
    <div className="  px-8 py-12 w-[1440px] h-[1144px] pl-60">

      <h1 className="text-center text-[36px] font-semibold mb-8  w-[375px] h-[54px] ml-80 pl-6">
        Get In Touch With Us
      </h1>
      <p className="text-center text-gray-500 mb-12 ml-48 w-[644px] h-[48px] ">
      For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[1058px] h-[923px]">
        
        <div className="space-y-12 mt-20 ml-8 w-[393px] h-[537px] px-12 ">
          
          <div className="flex items-center space-x-4  ">
            <div className="w-[22px] h-[28.18px] mb-8">
            <FaMapMarkerAlt/>
            </div>
         
            <div>
              <h2 className="font-medium  text-[24px]">Address</h2>
              <p className="text-black font-normal text-[16px]">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

        
          <div className="flex items-center space-x-4">
            <div className="w-[30px] h-[30px] mb-7">
            <FaPhone/>
            </div>
           
            <div>
              <h2 className="font-medium  text-[24px]">Phone</h2>
              <p className="text-black font-normal text-[16px]">Mobile: +(84) 546-6789</p>
              <p className="text-black font-normal text-[16px]">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-[30px] h-[30px] mb-7">
            <FaClock/>
            </div>
            <div>
              <h2 className="font-medium  text-[24px]">Working Time</h2>
              <p className="text-black font-normal text-[16px]">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-black font-normal text-[16px]">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-12 mt-20">
            <div>
              <label className="block text-black font-medium text-[16px] mb-2 w-[111.25px] h-[24px]">Your name</label>
              <input
                type="text"
                placeholder="Abc"
                className="w-[528.75px] h-[75px] p-3 border border-[#9F9F9F] rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-black font-medium text-[16px] w-[143.75px] h-[24px] mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Abc@def.com"
                className="w-[528.75px] h-[75px] p-3 border border-[#9F9F9F] rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                placeholder="This is an optional subject"
                className="w-[526.75px] h-[75px] p-3 border border-[#9F9F9F] rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                placeholder="Hi! I'd like to ask about..."
                rows={4}
                className="w-[527px] h-[120px] p-3 border border-[#9F9F9F] rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-[237px] h-[48px] border border-black text-black p-3 rounded-2xl ml-2 hover:bg-black hover:text-white transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
