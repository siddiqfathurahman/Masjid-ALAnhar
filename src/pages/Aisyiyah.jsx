import React, { useRef, useState, useEffect } from 'react';
import Gallery from '../components/ui/Gallery';


const Aisyiyah = () => {
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  const images = [
    { id: 1, src: "/bg.JPG", title: "aisyiyah al-anhar" },
    { id: 2, src: "/bg.JPG", title: "aisyiyah al-anhar"  },
    { id: 3, src: "/bg.JPG", title: "aisyiyah al-anhar"  },
    { id: 4, src: "/bg.JPG", title: "aisyiyah al-anhar" },
    { id: 5, src: "/bg.JPG", title: "aisyiyah al-anhar"  },
    { id: 6, src: "/bg.JPG", title: "aisyiyah al-anhar"  },
  ];

  return (
    <div className="font-poppins text-center flex flex-col mb-10 mt-10 px-7">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
        <span
          ref={titleRef}
          className={`relative inline-block mt-2 p-1 text-white transition-transform duration-700 ${
            isVisible ? 'animate-gradient-box scale-105' : 'opacity-0'
          }`}
        >
          AISYIYAH
        </span>
      </h2>
      <p className="px-5 text-lg md:text-xl max-w-4xl md:max-w-3xl lg:max-w-4xl mt-2 md:mt-3 mx-auto">
        Aisyiyah adalah organisasi perempuan yang berafiliasi dengan Muhammadiyah dan berfokus pada pemberdayaan
        perempuan, pendidikan, kesehatan, dan kesejahteraan masyarakat berbasis nilai-nilai Islam.
      </p>  

      <div className="mt-8">
        <h2 className="text-3xl font-bold text-left">Sejarah Singkat Aisyiyah</h2>
        <p className="pt-5 text-left">
        Aisyiyah didirikan pada tahun 1917 sebagai bagian dari Muhammadiyah, 
        dengan tujuan memberdayakan perempuan dan mendidik generasi muda dengan nilai-nilai Islam. 
        Sejak saat itu, Aisyiyah telah berkembang menjadi organisasi yang memainkan peran penting 
        dalam bidang pendidikan, kesehatan, dan sosial di Indonesia.
        </p>
        </div>


      <div>
        <h2 className="mt-8 text-3xl font-bold text-left">Program & Kegiatan</h2>
        <p className="pt-5 text-left">
          Aisyiyah menyelenggarakan berbagai program yang berkontribusi pada pemberdayaan perempuan dan masyarakat.
          Berikut adalah beberapa program utama yang dijalankan:
        </p>
        <ol className="list-decimal list-inside pl-1 text-left">
          {[
            'Pemberdayaan ekonomi perempuan melalui pelatihan keterampilan dan kewirausahaan.',
            'Pendidikan anak usia dini (PAUD) untuk mempersiapkan generasi penerus yang cerdas dan berakhlak.',
            'Layanan kesehatan melalui klinik dan posyandu Aisyiyah.',
            'Kajian keislaman dan penguatan nilai-nilai spiritual untuk perempuan.',
            'Gerakan sosial untuk membantu masyarakat terdampak bencana.',
            'Program literasi dan pemberantasan buta huruf.',
            'Pelatihan kepemimpinan perempuan dalam organisasi dan masyarakat.',
          ].map((item, index) => (
            <li key={index} className="pl-2 pt-2">
              {item}
            </li>
          ))}
        </ol>
      </div>

      <Gallery
        title="Galeri Kegiatan Masjid"
        images={images}
        imageStyle="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Aisyiyah;
