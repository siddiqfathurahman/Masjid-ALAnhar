import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

const DonasiInfaq = () => {
  const handleDownloadImage = () => {
    const link = document.createElement("a");
    link.href = "/qrismasjidalanhar.jpeg"; 
    link.download = "/qrismasjidalanhar.jpeg";
    link.click();
  };

  const whatsappNumber = "628112690998"; 

  return (
    <div className="p-8 font-poppins">
      <div className="max-w-4xl md:mx-auto -mx-4">
        <div className="bg-hijau p-6 rounded-lg shadow-lg mb-6">
          <h1 className="md:text-3xl text-2xl font-bold text-white text-center mb-6">
            Support Program Dakwah Masjid
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="col-span-1 text-center mb-1">
              <img
                src="/bsi.png"
                alt="Bank BSI"
                className="md:w-full rounded-lg h-auto"
              />
            </div>

            <div className="col-span-1 sm:col-span-3 text-left">
              <div className="pt-2">
                <h2 className="md:text-xl text-white text-lg font-semibold">
                  Bank Syariah Indonesia
                </h2>
                <p className="md:text-2xl text-lg md:pt-2 font-bold text-white">
                  <span className="text-yellow-300 text-4xl">777.057.013.6 </span>
                  An Masjid Al-Anhar
                </p>
              </div>

              <div className="md:pt-3 flex pt-2">
                <button
                  className="md:text-2xl text-sm py-1 px-2 font-semibold rounded-lg bg-red-600 text-white"
                  onClick={handleDownloadImage}
                >
                  QRIS All Payment
                </button>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:text-2xl text-sm py-1 px-2 font-semibold rounded-lg ml-3 bg-green-600 text-white flex items-center"
                >
                  <AiOutlineWhatsApp className="mr-2" />
                  Konfirmasi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonasiInfaq;
