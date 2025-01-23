import { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosSettings } from "react-icons/io";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import SettingsModal from './SettingsModal';
import { IoSearch } from "react-icons/io5";

function SurahDetail() {
  const { id } = useParams();
  const [surah, setSurah] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false); 
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredVerses, setFilteredVerses] = useState([]); 
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
        setFilteredVerses(response.data.data.verses); 
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

  const toggleSearchModal = () => {
    setSearchModalOpen(!searchModalOpen);
    setSearchQuery(""); 
  };

  const convertToArabicNumerals = (number) => {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return number
      .toString()
      .split('')
      .map((digit) => arabicDigits[digit])
      .join('');
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === "" || !surah) {
      setFilteredVerses(surah.verses); 
    } else {
      const index = parseInt(query) - 1;
      if (index >= 0 && index < surah.verses.length) {
        const selectedVerse = surah.verses[index];
        const remainingVerses = surah.verses.filter((_, i) => i !== index);
        setFilteredVerses([selectedVerse, ...remainingVerses]);
      }
    }
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
            <div className="text-center">
              <h1 className="md:text-4xl text-1xl font-semibold">{surah.number}. {surah.name.transliteration.id}</h1>
              <p className="md:text-sm text-xs">{surah.name.translation.id} | {surah.numberOfVerses} Ayat</p>
            </div>
            <div className='flex gap-3 items-center'>
            <IoSearch className="text-2xl cursor-pointer" onClick={toggleSearchModal} />
            <IoIosSettings className="md:text-3xl text-2xl cursor-pointer" onClick={toggleModal} />
            </div>
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

    
          {searchModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-[9999]">
            <div className="bg-white p-5 rounded-lg text-center shadow-lg max-w-md w-60">
              <h2 className="text-lg font-semibold mb-3">Cari Nomor Ayat</h2>
                <input
                type="number"
                className="border text-center border-gray-300 rounded px-3 py-2 w-full mb-3 appearance-none no-spin"
                placeholder="nomor ayat"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{
                  WebkitAppearance: 'none',
                  MozAppearance: 'textfield',
                }}
                />
              <button
                onClick={toggleSearchModal}
                className="bg-hijau text-xs font-bold text-white px-4 py-2 rounded"
              >
              Tutup
              </button>
            </div>
          </div>
        )}


<div className="mt-5">
  {surah.verses.map((verse, i) => (
    <div
      key={verse.number.inSurah}
      ref={(el) => {
        if (parseInt(searchQuery, 10) === verse.number.inSurah) {
          el?.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }}
      className="mb-4"
    >
      <div className="flex justify-between mb-4 items-center">
        <p
          className="relative text-white text-sm w-14 h-14 bg-no-repeat bg-center bg-cover flex items-center justify-center"
          style={{
            backgroundImage: `url('/ayat.png')`,
          }}
        >
          {verse.number.inSurah}
        </p>
      </div>
      <p
        className="text-right font-amiri leading-[60px] mb-3"
        style={{ fontSize: `${arabicSize}px` }}
      >
        {verse.text.arab}
        <span className="" > ({convertToArabicNumerals(i + 1)})</span>
      </p>
      {showLatin && (
        <p
          className="text-left text-hijau"
          style={{ fontSize: `${latinSize}px` }}
        >
          {verse.text.transliteration.en}
        </p>
      )}
      {showTranslation && (
        <p className="text-left mt-2 opacity-80">{verse.translation.id}</p>
      )}
      <hr className="my-3 opacity-50 " />
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
}

export default SurahDetail;
