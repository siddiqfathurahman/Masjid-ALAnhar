import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IoIosArrowBack } from "react-icons/io";

function SurahDetail() {
  const { id } = useParams();
  const [surah, setSurah] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const getSurahDetail = async () => {
      try {
        const response = await axios.get(`https://api.quran.gading.dev/surah/${id}`);
        setSurah(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching surah detail:', error);
      }
    };
    getSurahDetail();
  }, [id]);

  const handleGoBack = () => {
    navigate('/al-quran');
  };

  if (loading) {
    return (
      <div>
        <img src="/load.gif" className="mx-auto w-10 my-40 bg-none" alt="Loading..." />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center bg-gray-100 font-poppins min-h-screen">
      <div className="w-full max-w-3xl">
        <div className="flex-col w-full p-5 rounded-md shadow-lg bg-white text-black">
        <div className="flex items-center justify-between gap-2">
            <IoIosArrowBack 
              className="md:text-3xl mb-2 text-1xl cursor-pointer" 
              onClick={handleGoBack} 
            />
            <div className="flex-grow">
              <h1 className="md:text-4xl text-2xl mb-2 font-semibold">{surah.name.transliteration.id}</h1>
            </div>
            <p className="md:text-xl mb-2 text-sm">{surah.numberOfVerses} Ayat</p>
          </div>
          <hr className='opacity-50'/>
          <h1 className='text-3xl text-center justify-center mb-10 mt-14'>بِسْــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</h1>
          <div className="mt-5">
            {surah.verses.map((verse, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between mb-10 items-center">
                  <p>{i + 1}</p>
                </div>
                <p className="text-right font-[Amiri] text-2xl">{verse.text.arab}</p>
                <p className="text-right text-hijau">{verse.text.transliteration.en}</p>
                <p className="text-right mt-2 opacity-50">{verse.translation.id}</p>
                <hr className="my-3 opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurahDetail;
