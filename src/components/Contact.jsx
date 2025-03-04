import React, { useState } from 'react'

export const Contact = () => {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
  
    const validate = () => {
      let newErrors = {};
      if (!formData.name.trim()) newErrors.name = "Name field is required";
      if (!formData.email.trim()) newErrors.email = "Email field is required";
      return newErrors;
    };
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validate();
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        console.log("Form Submitted", formData);
      }
    };

  return (
    <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="font-bold text-3xl text-pink-600">Contact</h2>
                <div className="flex flex-wrap -mx-4 mt-4">

                    <div className="w-full md:w-1/2 px-4">
                        <div className="mb-3 flex items-center">
                            <span className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-md">
                                <i className="ri-mail-line text-blue-500 text-2xl"></i>
                            </span>
                            <div className="ml-3">
                                <p className="text-gray-500 text-sm">Email</p>
                                <span className="font-bold text-gray-600 text-lg">manjitsinghjii1999@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <div className="mb-3 flex items-center">
                            <span className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-md">
                                <i className="ri-phone-line text-orange-500 text-2xl"></i>
                            </span>
                            <div className="ml-3">
                                <p className="text-gray-500 text-sm">Phone</p>
                                <span className="font-bold text-gray-600 text-lg">+91 8948473580</span>
                            </div>
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className=''>
                            <form onSubmit={handleSubmit} className="mx-auto p-4 w-full">
                                <div className="mb-4 w-full">
                                    <label className="block text-gray-700 font-semibold">Name *</label>
                                    <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold">Email *</label>
                                    <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-semibold">Message *</label>
                                    <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-green-600 text-white border px-4 py-2 rounded-md font-semibold hover:bg-green-300 hover:text-black "
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default Contact