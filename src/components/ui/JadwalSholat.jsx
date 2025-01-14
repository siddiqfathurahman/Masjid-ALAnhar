import React, { useEffect, useState } from "react";
import axios from "axios";

const JadwalSholat = () => {
  const [jadwalSholat, setJadwalSholat] = useState(null);
  const [nextPrayer, setNextPrayer] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState("");
  const [loading, setLoading] = useState(true);

  const prayerNames = {
    Fajr: "Subuh",
    Dhuhr: "Dzuhur",
    Asr: "Asar",
    Maghrib: "Maghrib",
    Isha: "Isya",
  };

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
      setLoading(false);
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

  if (loading) {
    return (
      <div>
        <img src="/load.gif" className="mx-auto w-14 my-20 bg-none" alt="Loading..." />
      </div>
    );
  }

  return (
    <div className="w-[90%] sm:w-[85%] font-poppins md:w-[80%] lg:w-[70%] mx-auto mt-4 bg-green-800 rounded-2xl p-4 sm:p-6 md:p-8 text-white">
      {jadwalSholat ? (
        <div className="flex flex-col items-center space-y-4 md:space-y-8">
          <div className="flex-1 text-center font-poppins">
            <div className="text-lg sm:text-xl font-medium mb-2">Jadwal Shalat Selanjutnya</div>
            <div className="bg-white text-black rounded-xl shadow-lg sm:p-4 w-full h-auto">
              <div className="text-2xl sm:text-4xl md:text-6xl pt-2 font-medium mb-0 mt:mt-4 md:mb-2">
                Shalat {prayerNames[nextPrayer]}
              </div>
              <div className="text-3xl sm:text-3xl md:text-8xl px-16 md:mb-2 font-bold mb:mt-2">
                {jadwalSholat[nextPrayer]} WIB
              </div>
              <div className="text-sm sm:text-lg pb-2 md:mb-2">{timeRemaining} lagi</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map((prayer) => {
              if (prayer !== nextPrayer) {
                return (
                  <div key={prayer} className="bg-white text-center text-black rounded-xl shadow-lg p-3 sm:p-4">
                    <div className="text-sm md:text-lg font-medium">Shalat {prayerNames[prayer]}</div>
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
  );
};

export default JadwalSholat;
