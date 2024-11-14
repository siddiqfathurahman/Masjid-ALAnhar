import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Hero = () => {
  const [jadwalSholat, setJadwalSholat] = useState(null);
  const [nextPrayer, setNextPrayer] = useState(null);

  const fetchJadwalSholat = async () => {
    try {
      const response = await axios.get('https://api.aladhan.com/v1/timingsByCity', {
        params: {
          city: 'Yogyakarta',
          country: 'Indonesia',
          method: 8,
        },
      });

      const timings = response.data.data.timings; 
      setJadwalSholat(timings);
      determineNextPrayer(timings);
    } catch (error) {
      console.error('Error fetching jadwal sholat:', error);
    }
  };

  const convertTo24Hour = (time) => {
    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date;
  };

  const determineNextPrayer = (timings) => {
    const prayerTimes = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']; 
    const currentTime = new Date();
    const currentTimeWIB = new Date(currentTime.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));

    let next = null;


    for (let i = 0; i < prayerTimes.length; i++) {
      const prayerTime = convertTo24Hour(timings[prayerTimes[i]]);
      if (prayerTime > currentTimeWIB) {
        next = prayerTimes[i];
        break;
      }
    }

    if (!next) {
      next = prayerTimes[0]; 
    }

    setNextPrayer(next);
  };

  useEffect(() => {
    fetchJadwalSholat();
    const interval = setInterval(() => {
      fetchJadwalSholat(); 
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px]">
      <img
        className="w-full h-full object-cover"
        style={{ objectPosition: 'center 70%' }}
        src="/masjid.jpg"
        alt="Masjid"
      />

      <div
        className="absolute left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[70%] h-[40%] md:h-[50%] bg-green-800 rounded-2xl"
        style={{ bottom: '-20%' }}
      >
        {jadwalSholat ? (
          <div className="text-white px-4 py-3 flex flex-col md:flex-row items-start justify-between h-full">
     
            <div className="flex-1 mb-6 font-poppins md:mb-0 text-center">
              <div className="text-xl font-bold mb-2">Jadwal Shalat Selanjutnya</div>

         
              <div className="bg-white text-black font-poppins rounded-xl shadow-lg p-4 w-[440px] h-[140px]">
                <div className="text-5xl font-semibold mb-2">Shalat {nextPrayer}</div>
                <div className="text-4xl font-bold mt-2">{jadwalSholat[nextPrayer]} WIB</div>
              </div>
            </div>


            <div className="flex-1 font-poppins grid grid-cols-2 text-center gap-2 sm:grid-cols-2 lg:grid-cols-2">
              {['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map((prayer) => {
                if (prayer !== nextPrayer) {
                  return (
                    <div key={prayer} className="bg-white text-black rounded-xl shadow-lg p-4">
                      <div className="text-lg font-medium">Shalat {prayer}</div>
                      <div>{jadwalSholat[prayer]} WIB</div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        ) : (
          <p className="text-white text-center">Loading jadwal sholat...</p>
        )}
      </div>
    </div>
  );
};

export default Hero;
