import { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosSettings } from "react-icons/io";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import SettingsModal from './SettingsModal'; 

function SurahDetail() {
  const { id } = useParams();
  const [surah, setSurah] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [arabicSize, setArabicSize] = useState(24);  
  const [latinSize, setLatinSize] = useState(16);    
  const [showLatin, setShowLatin] = useState(true);  
  const [showTranslation, setShowTranslation] = useState(true);
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

  const toggleModal = () => {
    setModalOpen(!modalOpen);
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
              className="md:text-2xl mb-2 text-2xl cursor-pointer" 
              onClick={handleGoBack} 
            />
            <div className="">
              <h1 className="md:text-4xl text-2xl font-semibold">{surah.number}. {surah.name.transliteration.id}</h1>
              <p className="md:text-sm text-center text-xs md:text-sm">{surah.name.translation.id} | {surah.numberOfVerses} Ayat</p>
            </div>
            <IoIosSettings className='md:text-3xl text-2xl cursor-pointer' onClick={toggleModal} />
          </div>
          <hr className="opacity-90 mt-2" />
          <h1 className="text-3xl text-center font-amiri justify-center mb-10 mt-14">بِسْــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</h1>

          
          <SettingsModal
            modalOpen={modalOpen}
            toggleModal={toggleModal}
            arabicSize={arabicSize}
            setArabicSize={setArabicSize}
            latinSize={latinSize}
            setLatinSize={setLatinSize}
            showLatin={showLatin}
            setShowLatin={setShowLatin}
            showTranslation={showTranslation}
            setShowTranslation={setShowTranslation}
          />

          <div className="mt-5">
            {surah.verses.map((verse, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between mb-4 items-center">
                  <p
                    className="relative text-white  text-sm  w-14 h-14 bg-no-repeat bg-center bg-cover flex items-center justify-center"
                    style={{
                      backgroundImage: `url('/ayat.png')`,
                    }}
                  >
                    {i + 1}
                  </p>
                </div>
                <p className="text-right font-amiri leading-[60px] mb-3" style={{ fontSize: `${arabicSize}px` }}>
                  {verse.text.arab}
                </p>
                {showLatin && (
                  <p className="text-right text-hijau" style={{ fontSize: `${latinSize}px` }}>
                    {verse.text.transliteration.en}
                  </p>
                )}
                {showTranslation && (
                  <p className="text-right mt-2 opacity-80">
                    {verse.translation.id}
                  </p>
                )}
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
