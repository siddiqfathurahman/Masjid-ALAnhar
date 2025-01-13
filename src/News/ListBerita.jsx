import { Artikel } from '../data/databerita'; 
import { Link } from "react-router-dom"; 

const ListBerita = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 font-poppins px-2 py-5">
      <div className="w-full max-w-7xl">
        <div className="flex-col w-full md:p-8 p-4 bg-white shadow-lg rounded-lg">
          <h1 className="md:text-3xl max-w-5xl text-black text-lg font-extrabold mb-1">
            Lihat Berita Lainnya
          </h1>
          <div className="w-28 h-1 bg-hijau mb-5"></div>
          {Artikel.map((item, index) => (
            <div key={index} className="p-2 transition duration-300 relative">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                <Link
                  to={item.path}
                  className="mb:text-2xl text-lg font-semibold text-hijau mb-1 hover:underline"
                >
                  {item.tittle}
                </Link>
                <p className="text-sm text-gray-500 mt-2 md:mt-0">{item.date}</p>
              </div>
              <hr className="border-t border-gray-200 my-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListBerita;
