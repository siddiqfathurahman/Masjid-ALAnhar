import React, { useRef, useState, useEffect } from 'react';
import Gallery from '../components/ui/Gallery';
import AnimatedText from '../components/ui/AnimatedText';
import BidangAisyiyah from '../components/ui/BidangAisyiyah';


const Aisyiyah = () => {

  const images = [
    { id: 1, src: "/bg.JPG", title: "aisyiyah al-anhar" },
    { id: 2, src: "/bg.JPG", title: "aisyiyah al-anhar"  },
    { id: 3, src: "/bg.JPG", title: "aisyiyah al-anhar"  },
    { id: 4, src: "/bg.JPG", title: "aisyiyah al-anhar" },
    { id: 5, src: "/bg.JPG", title: "aisyiyah al-anhar"  },
    { id: 6, src: "/bg.JPG", title: "aisyiyah al-anhar"  },
  ];

  return (
    <div className="font-poppins bg-slate-50 text-center flex flex-col mb-10 mt-10 px-7">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
       <AnimatedText>AISYIYAH</AnimatedText>
      </h2>
      <p className="px-5 text-lg md:text-xl max-w-8xl md:max-w-3xl lg:max-w-4xl mt-2 md:mt-3 mx-auto">
        Aisyiyah adalah organisasi perempuan yang berafiliasi dengan Muhammadiyah dan berfokus pada pemberdayaan
        perempuan, pendidikan, kesehatan, dan kesejahteraan masyarakat berbasis nilai-nilai Islam.
      </p>  



        <div className="mt-8  flex flex-col gap-5 md:flex-row text-left">
        <div className="flex-1 mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold">Visi</h2>
          <p>
          Islam membawa rahmat bagi seluruh umat manusia dengan menciptakan masyarakat yang bahagia, 
          sejahtera, dan berkeadilan. Masyarakat ideal ini terbentuk melalui pembinaan warga, baik pria maupun wanita, 
          yang memiliki potensi dan fungsi penuh dalam kehidupan bermasyarakat. Masyarakat yang utama dibangun dengan menegakkan ajaran 
          Islam secara istiqamah serta aktif dalam dakwah amar makruf nahi mungkar.
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">Misi</h2>
          <ol className="list-decimal list-inside">
            <li className='pt-2'>Menegakkan dan menyebarkan ajaran islam yang didasarkan kepada keyakinan Tauhid yang murni menurut ajaran Al-Qur'an dan Assunah Rasul secara benar,.</li>
            <li className='pt-2'>Mewujudkan kehidupan yang islami dalam din pribadi, keluarga dan masyarakat yang luas.</li>
            <li className='pt-2'>Menggalakkan pemahaman terhadap landasan hidup keagamaan yang menggunakan akal sehat dan dijiwal oleh ruh berfikir yang islami dalam menjawab tuntutan dan menyelesaikan persoalan kehidupan dalam masyarakat luas.</li>
            <li className='pt-2'>Menciptakan semangat beramal dengan beramar makruf nahi mungkar dan dengan menempatkan potensi segenap warga masyarakat baik yang pria maupun yang wanita dalam mencapai tujuan organisasi</li>
          </ol>
        </div>
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

      <BidangAisyiyah />

      <Gallery
        title="Galeri"
        images={images}
        imageStyle="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Aisyiyah;
