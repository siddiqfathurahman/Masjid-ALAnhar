const dokumentasiItems = [
    {
        href: "https://drive.google.com/drive/folders/1MSFWWyitFl-nOBB55k5htPZR1jwB7IWo",
        label: "TAKBIRAN 1443H/2023",
        badge: "Video",
        badgeColor: "bg-red-400",
    },
    {
        href: "https://drive.google.com/drive/folders/1LmZZQMijD80Z0CouqqsfEFmifyCCH-Ex?usp=sharing",
        label: "TAKBIRAN 1444H/2023",
        badge: "Foto",
        badgeColor: "bg-blue-400",
    },
    {
        href: "https://drive.google.com/drive/folders/1JCdWP1ZH1CS9utbF8Tsk2W_XDrPG2dIj",
        label: "TAKBIRAN 1445H/2024",
        badge: "Foto",
        badgeColor: "bg-blue-400",
    },
    {
        href: "https://drive.google.com/drive/folders/1Y8nYdK9GSJ1WBsTY_6izJAjDnRwiINFX?usp=drive_link",
        label: "QURBAN 1445H/2024",
        badge: "Foto",
        badgeColor: "bg-blue-400",
    },
];

const Dokumentasi = () => {
    return (
        <div className="py-20 grid md:px-32 px-4 grid-cols-1 font-poppins md:grid-cols-2 gap-6">
            {dokumentasiItems.map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-700 text-white p-6 rounded-lg shadow-lg hover:shadow-green-500/50 hover:bg-green-800 transform hover:-translate-y-2 transition duration-300 text-center relative"
                >
                    <div
                        className={`absolute top-1 right-1 ${item.badgeColor} text-white px-2 py-1 rounded text-[10px] font-semibold`}
                    >
                        {item.badge}
                    </div>
                    {item.label}
                </a>
            ))}
        </div>
    );
};

export default Dokumentasi;