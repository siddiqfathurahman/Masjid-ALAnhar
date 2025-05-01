import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();

    const Lembaga = [
        { image: "/muhammadiyah.webp", tittle: "logo muhammadiyah", route: "/organisasi/aisyiyah" },
        { image: "/takmir.webp", tittle: "logo takmir masjid al-anhar", route: "/organisasi/takmir" },
        { image: "/rmh.webp", tittle: "logo remaja masjid al-anhar", route: "/organisasi/ramah" },
        { image: "/tpa.webp", tittle: "logo tpa masjid al-anhar", route: "/organisasi/tpa" },
    ];

    return (
        <div className="py-10">
            <h1 className="font-poppins md:text-3xl text-2xl font-extrabold text-center text-gray-800">
                Lembaga Masjid Al-Anhar
            </h1>
            <div className="flex justify-center gap-2 md:gap-5 flex-wrap mt-5">
                {Lembaga.map((logo, index) => (
                    <div key={index} className="group">
                        <img
                            src={logo.image}
                            alt={logo.tittle}
                            className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 cursor-pointer object-contain hover:scale-110 transition-transform duration-200"
                            onClick={() => navigate(logo.route)}
                            width="160" height="160"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Logo;
