import React, { useEffect, useState } from "react";
import axios from "axios";

const Hero = () => {
  const [jadwalSholat, setJadwalSholat] = useState(null);
  const [nextPrayer, setNextPrayer] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState("");

  const fetchJadwalSholat = async () => {
    try {
      const response = await axios.get("https://api.aladhan.com/v1/timingsByCity", {
        params: {
          city: "Yogyakarta",
          country: "Indonesia",
          method: 8,
        },
      });

      const timings = response.data.data.timings;
      setJadwalSholat(timings);
      determineNextPrayer(timings);
    } catch (error) {
      console.error("Error fetching jadwal sholat:", error);
    }
  };

  const convertTo24Hour = (time) => {
    const [hours, minutes] = time.split(":");
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date;
  };

  const determineNextPrayer = (timings) => {
    const prayerTimes = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
    const currentTime = new Date();
    const currentTimeWIB = new Date(currentTime.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));

    let next = null;
    let nextPrayerTime = null;

    for (let i = 0; i < prayerTimes.length; i++) {
      const prayerTime = convertTo24Hour(timings[prayerTimes[i]]);
      if (prayerTime > currentTimeWIB) {
        next = prayerTimes[i];
        nextPrayerTime = prayerTime;
        break;
      }
    }

    if (!next) {
      next = prayerTimes[0];
      nextPrayerTime = convertTo24Hour(timings[next]);
    }

    setNextPrayer(next);
    calculateTimeRemaining(nextPrayerTime);
  };

  const calculateTimeRemaining = (nextPrayerTime) => {
    const currentTime = new Date();
    let timeDiff = nextPrayerTime - currentTime;

    // Jika waktu doa berikutnya sudah lewat, tambahkan satu hari ke waktu doa berikutnya
    if (timeDiff < 0) {
      const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
      timeDiff += oneDayInMilliseconds;
    }

    const hoursRemaining = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    setTimeRemaining(`${hoursRemaining} jam dan ${minutesRemaining} menit`);
  };

  useEffect(() => {
    fetchJadwalSholat();
    const interval = setInterval(() => {
      fetchJadwalSholat();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 70%" }}
          src="/masjid.jpg"
          alt="Masjid"
        />
      </div>

      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto mt-4 bg-green-800 rounded-2xl p-4 sm:p-6 md:p-8 text-white">
        {jadwalSholat ? (
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between space-y-4 md:space-y-0">
            <div className="flex-1 text-center font-poppins">
              <div className="text-lg sm:text-xl font-medium mb-2">Jadwal Shalat Selanjutnya</div>
              <div className="bg-white text-black rounded-xl shadow-lg p-3 sm:p-4 w-full md:w-[400px] h-auto">
                <div className="text-3xl sm:text-4xl md:text-4xl font-semibold mb-2">Shalat {nextPrayer}</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">{jadwalSholat[nextPrayer]} WIB</div>
                <div className="text-lg sm:text-x">
                  {timeRemaining} lagi
                </div>
              </div>
            </div>

            <div className="flex-1 font-poppins grid grid-cols-2 gap-2 text-center">
              {["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map((prayer) => {
                if (prayer !== nextPrayer) {
                  return (
                    <div key={prayer} className="bg-white text-black rounded-xl shadow-lg p-3 sm:p-4">
                      <div className="text-base sm:text-lg font-medium">Shalat {prayer}</div>
                      <div className="text-sm sm:text-base">{jadwalSholat[prayer]} WIB</div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        ) : (
          <p className="text-white text-center h-screen">Loading jadwal sholat...</p>
        )}
      </div>
    </div>
  );
};

export default Hero;
