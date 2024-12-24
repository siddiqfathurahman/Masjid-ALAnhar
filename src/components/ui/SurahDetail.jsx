import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
{/* */}

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
              className="md:text-2xl mb-2 text-1xl cursor-pointer" 
              onClick={handleGoBack} 
            />
            <div className="">
              <h1 className="md:text-4xl text-2xl font-semibold">{surah.name.transliteration.id}</h1>
              <p className="md:text-sm text-center text-sm">{surah.name.translation.id} | {surah.numberOfVerses} Ayat</p>
            </div>
            <IoIosSettings className='text-4xl'/>
          </div>
          <hr className="opacity-90 mt-2" />
          <h1 className="text-3xl text-center font-amiri justify-center mb-10 mt-14">بِسْــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</h1>
          <div className="mt-5">
            {surah.verses.map((verse, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between mb-10 items-center">
                <p className="relative text-white text-sm pt-16 w-14 h-14 bg-no-repeat bg-center bg-cover flex items-center justify-center"
                  style={{
                  backgroundImage: `url('/ayat.png')`,
                  padding: '16px',
                }}
                >
                {i + 1}
                </p>
                </div>
                <p className="text-right font-amiri leading-10 text-2xl">{verse.text.arab}</p>
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
