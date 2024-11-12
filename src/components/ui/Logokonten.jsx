const Logo = () => {
    return (
        <div className="py-10">
            <h1 className="font-poppins text-3xl font-extrabold text-center text-gray-800">
                Organisasi
            </h1>
            <div className="flex justify-center gap-5 mt-5">
                <img src="/muhammadiyah.png" alt="Muhammadiyah" className="w-40 h-40 object-contain hover:scale-110 transition-transform duration-200" />
                <img src="/takmir.png" alt="Takmir" className="w-40 h-40 object-contain hover:scale-110 transition-transform duration-200" />
                <img src="/ramah.png" alt="Ramah" className="w-40 h-40 object-contain hover:scale-110 transition-transform duration-200" />
                <img src="/tpa.png" alt="TPA" className="w-40 h-40 object-contain hover:scale-110 transition-transform duration-200" />
            </div>
        </div>
    );
};

export default Logo;
