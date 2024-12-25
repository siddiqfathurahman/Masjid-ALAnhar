import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HeroQuran() {
    const [surahs, setSurah] = useState([]);
    const [filteredSurahs, setFilteredSurahs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('https://api.quran.gading.dev/surah');
                setSurah(response.data.data);
                setFilteredSurahs(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);

    const handleSearch = (event) => {
        const text = event.target.value;
        setSearchText(text);
        const filtered = surahs.filter(surah =>
            surah.name.transliteration.id.toLowerCase().includes(text.toLowerCase()) ||
            surah.name.translation.id.toLowerCase().includes(text.toLowerCase()) ||
            surah.number.toString().includes(text)
        );
        setFilteredSurahs(filtered);
    };

    return (
        <div className="flex justify-center items-center bg-gray-100 font-poppins min-h-screen">
            <div className="w-full max-w-5xl">
                <div className="flex-col w-full p-5 bg-white shadow-lg rounded-lg">
                    <div className="flex justify-between items-center mb-5">
                        <h2 className="md:text-3xl text-xl font-medium">Qur'an Digital</h2>
                    </div>
                    <input
                        type="text"
                        value={searchText}
                        onChange={handleSearch}
                        className="w-full bg-gray-100 rounded-full py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-hijau text-gray-800"
                        placeholder="Cari Surah"
                    />
                    {loading ? (
                        <img src="/load.gif" className="mx-auto w-10 my-20 mt-5" alt="Loading..." />
                    ) : (
                        filteredSurahs.length > 0 ? (
                            filteredSurahs.map((surah, i) => (
                                <Link to={`./surah/${surah.number}`} key={i}>
                                    <div className="flex items-center py-4 gap-4 border-b border-gray-200 hover:bg-gray-50 transition">
                                        <p className="font-medium text-lg">{surah.number}.</p>
                                        <div className="flex w-full justify-between items-center">
                                            <div className="flex flex-col">
                                                <p className="font-medium text-lg">{surah.name.transliteration.id}</p>
                                                <p className="text-gray-500">{surah.name.translation.id} | {surah.numberOfVerses} Ayat</p>
                                            </div>
                                            <span className="text-2xl font-serif text-hijau">{surah.name.short}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 mt-5">Nama Surah Tidak Ditemukan</p>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default HeroQuran;
