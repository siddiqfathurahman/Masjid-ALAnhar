const Logo = () => {
    return (
        <div  className="py-10">
            <h1 className="font-poppins text-3xl font-extrabold text-center text-gray-800">
                Lembaga Masjid Al-Anhar
            </h1>
            <div className="flex justify-center flex-wrap gap-5 mt-5">
                <img
                    src="/muhammadiyah.png"
                    alt="Muhammadiyah"
                    className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain hover:scale-110 transition-transform duration-200"
                />
                <img
                    src="/takmir.png"
                    alt="Takmir"
                    className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain hover:scale-110 transition-transform duration-200"
                />
                <img
                    src="/rmh.png"
                    alt="Ramah"
                    className="w-24 h-auto sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain hover:scale-110 transition-transform duration-200"
                />
                <img
                    src="/tpa.png"
                    alt="TPA"
                    className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain hover:scale-110 transition-transform duration-200"
                />
            </div>
        </div>
    );
};

export default Logo;
