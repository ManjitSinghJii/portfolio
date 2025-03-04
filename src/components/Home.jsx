import React, { useEffect, useState } from 'react'
import Resume from "./Resume"
import Work from "./Work"
import Contact from "./Contact"
import whatsapp from "/images/whatsapp.png"
export const Home = () => {

  const bgImg = "images/bg.jpg"; 
  const [activeTab, setActiveTab] = useState("resume")
  const [download, setDownload] = useState(false)
  const resume = '';

  useEffect(() => {
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center m-12" >
            <div className="container mx-auto px-4 relative">
                <div className="flex flex-wrap">
                    {/* Left Sidebar - Profile Section */}
                    <div className="w-full md:w-1/3 lg:w-1/4 bg-white p-4 rounded-lg shadow-md sticky top-16 h-fit">
                        <div className="text-center">
                            <div className="relative inline-block">
                              <div className="w-[150px] h-[150px]">
                              <img
                                    src="images/manjit.png"
                                    alt="Profile"
                                    className='border border-3 border-[#e4cfee] shadow  object-cover -mt-[70px] object-top bg-white rounded-lg'
                                />
                              </div>
                            </div>
                            <h4 className="font-bold mt-3">Manjit Singh</h4>
                            <p className="text-gray-600">Full Stack Developer</p>
                        </div>

                        {/* Contact Details */}
                        <div className="bg-gray-100 p-2 rounded mt-3">
                            <div className="mb-3 flex items-center">
                                <span className="flex items-center justify-center w-10 h-10 bg-white shadow-md rounded-md ">
                                    <i className="ri-mail-fill text-blue-600 text-2xl hover:text-green-600"></i>
                                </span>
                                <div className="ml-3">
                                    <p className="text-gray-500 text-sm">Email</p>
                                    <span className="font-bold text-gray-600 hover:text-blue-600">manjitsinghjii@gmail.com</span>
                                </div>
                            </div>
                            <div className="mb-3 flex items-center">
                                <span className="flex items-center justify-center w-10 h-10 bg-white shadow-md rounded-md">
                                    <i className="ri-phone-line text-[#ec4899] text-2xl hover:text-green-600"></i>
                                </span>
                                <div className="ml-3 ">
                                    <p className="text-gray-500 text-sm">Phone</p>
                                    <span className="font-bold text-gray-600 hover:text-[#ec4899]">+91 8948473580</span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="flex items-center justify-center w-10 h-10 bg-white shadow-md rounded-md">
                                    <i className="ri-map-pin-2-line text-violet-600 text-2xl hover:text-green-600"></i>
                                </span>
                                <div className="ml-3">
                                    <p className="text-gray-500 text-sm">Location</p>
                                    <span className="font-bold text-gray-600 hover:text-violet-600">Pune, India</span>
                                </div>
                            </div>
                        </div>

                        <a id='button_download' href='/resume.pdf' target='_blank' className="w-full mt-3 p-2 bg-[#ec4899] text-white rounded-md shadow-md flex items-center justify-center gap-2 hover:bg-green-500 hover:text-white">
                            <i className="ri-download-cloud-2-line"></i> Download CV
                        </a>
                    </div>

                    {/* Right Section - Content */}
                    <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col mt-6 md:mt-0 md:pl-6">
                        {/* Tab Buttons */}
                        <div className="flex justify-end mb-4">
                            <div className="flex bg-white p-3 rounded-lg shadow-md gap-3">
                                <button
                                    className={`p-4 rounded-md transition-all flex flex-col items-center hover:bg-gray-100 ${activeTab === "resume" ? "bg-gradient-to-r from-pink-500 to-red-500 text-white scale-105" : "bg-gray-200 text-gray-700"}`}
                                    onClick={() => setActiveTab("resume")}
                                >
                                    <i className="ri-file-text-line text-xl mb-1"></i> Resume
                                </button>
                                <button
                                    className={`p-4 rounded-md transition-all flex flex-col items-center hover:bg-gray-100 ${activeTab === "works" ? "bg-gradient-to-r from-pink-500 to-red-500 text-white scale-105" : "bg-gray-200 text-gray-700"}`}
                                    onClick={() => setActiveTab("works")}
                                >
                                    <i className="ri-briefcase-line text-xl mb-1"></i> Works
                                </button>
                                <button
                                    className={`p-4 rounded-md transition-all flex flex-col items-center hover:bg-gray-100 ${activeTab === "contact" ? "bg-gradient-to-r from-pink-500 to-red-500 text-white scale-105" : "bg-gray-200 text-gray-700"}`}
                                    onClick={() => setActiveTab("contact")}
                                >
                                    <i className="ri-phone-line text-xl mb-1"></i> Contact
                                </button>
                            </div>
                        </div>

                        {/* Content Section - Fixed Minimum Height */}
                        <div className="bg-white p-10 rounded-lg shadow-md flex-grow mb-5 min-h-[400px]">
                            {activeTab === "resume" && <Resume />}
                            {activeTab === "works" && <Work />}
                            {activeTab === "contact" && <Contact />}
                        </div>
                    </div>
                </div>

                <div className="relative ">
                {/* <!-- Elfsight WhatsApp Chat | Untitled WhatsApp Chat --> */}
               <div className=" bounce-text">
               <script src="https://static.elfsight.com/platform/platform.js" async></script>
               <div class="elfsight-app-c6c53ab6-f553-46b9-b909-0120b746a307" data-elfsight-app-lazy></div>
               </div>
              {/* <a href="https://api.whatsapp.com/send?phone=+918948473580&text=Hi%20Sir%20!" className='fixed  bounce-text right-1 bottom-5 '><img  width={50} src={whatsapp} alt="" /></a> */}
                </div>
            </div>
        </div>
  )
}

export default Home