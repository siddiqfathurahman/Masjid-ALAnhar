import React from 'react';

const DonasiInfaq = () => {
  return (
    <div className="p-8 font-poppins">
      <div className="max-w-4xl mx-auto">
        <div className="bg-green-800 p-6 rounded-lg shadow-lg mb-6">
          <h1 className="text-3xl font-bold text-white text-center mb-6">Support Program Dakwah</h1>


          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">

            <div className="col-span-1 text-center mb-4">
              <img src="/bg.JPG" alt="Bank BSI" className="w-full h-auto" />
            </div>

            <div className="col-span-1 sm:col-span-3 text-left">
              <div className="pt-2">
                <h2 className="md:text-xl text-white text-lg font-semibold">Bank Syariah Indonesia</h2>
                <p className="md:text-2xl text-lg font-bold text-white">777.057.013.6 An Masjid Al-Anhar</p>
              </div>

              <div className="flex flex-col md:flex-row">
                <h2 className="md:text-xl text-lg font-semibold text-white">Konfirmasi : </h2>
                <p className="md:text-2xl text-lg font-bold text-white">0811-2690-998( Agung Pambudi )</p>
              </div>

              <div className="">
                <button className="text-sm p-2 font-semibold rounded-lg bg-red-600 text-white">
                  Download Qris All Payment
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DonasiInfaq;
