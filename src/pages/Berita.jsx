import { Link } from "react-router-dom"; 
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Artikel } from '../data/databerita';
import { MdDateRange } from "react-icons/md";
import Line from "../components/element/Line";

const Berita = () => {

  return (
    <div className="flex justify-center items-center bg-gray-100 font-poppins px-2 py-10">
      <div className="w-full max-w-7xl">
        <div className="flex-col w-full md:p-8 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="md:text-3xl text-lg font-bold md:mb-1">
              Seputar Berita Menarik di Masjid Al-Anhar
            </h2>
            <Line />

        </div>
        <div className="grid md:grid-cols-3 py-10 gap-6">
          {Artikel.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 relative"
            >
              <Link
                to={item.path}
                className="text-2xl font-semibold text-hijau mb-1 hover:underline"
              >
                {item.tittle}
              </Link>
              <p className="text-sm text-gray-500 flex items-center gap-2 mt-1 mb-4"><MdDateRange className='text-base'/>{item.date}</p>
              <p className="text-gray-700 mb-5">{item.berita}</p>
              <div className="absolute bottom-4 right-4">
                <Link
                  to={item.path}
                  className="text-sm font-semibold text-black flex items-center gap-2 hover:text-blue-500"
                >
                  Baca Lebih Lengkap
                  <FaArrowUpRightFromSquare className="inline-block text-xs md:text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Berita;
