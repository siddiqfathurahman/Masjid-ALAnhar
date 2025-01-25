import { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiDislike, BiSolidDislike } from "react-icons/bi";
import { Link } from "react-router-dom";
import { db } from "../../firebase"; // Pastikan path ini benar
import { doc, getDoc, updateDoc, increment, setDoc } from "firebase/firestore";

const Coment = () => {
  const [isLoved, setIsLoved] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [loveCount, setLoveCount] = useState(0); 

  // Mengacu pada dokumen di Firestore
  const loveDocRef = doc(db, "likes", "articleLove");

  useEffect(() => {
    const fetchLoveCount = async () => {
      const docSnap = await getDoc(loveDocRef);
      if (docSnap.exists()) {
        setLoveCount(docSnap.data().count || 0); 
      } else {
        await setDoc(loveDocRef, { count: 0 });
      }
    };

    fetchLoveCount();
  }, []);

  const handleLoveClick = async () => {
    setIsLoved((prev) => !prev);

    if (!isLoved) {
      setLoveCount((prev) => prev + 1);
      await updateDoc(loveDocRef, {
        count: increment(1),
      });
    } else {
      setLoveCount((prev) => prev - 1);
      await updateDoc(loveDocRef, {
        count: increment(-1), 
      });
    }

    if (isDisliked) setIsDisliked(false);
  };

  const handleDislikeClick = () => {
    setIsDisliked((prev) => !prev);
    if (isLoved) setIsLoved(false); 
  };

  return (
    <div>
      <p className="mt-4 text-gray-800">
        Untuk mendukung kegiatan ini, kami mengajak Anda untuk berpartisipasi melalui{" "}
        <Link
          to="/#screen-infaq"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Infaq & Donasi
        </Link>
        .
      </p>
      <h3 className="mt-2 md:text-lg text-sm font-semibold">
        Apakah Kamu Menyukai Artikel ini?
      </h3>
      <div className="flex items-center space-x-2 mt-1">
        <button
          onClick={handleLoveClick}
          className="md:text-3xl text-2xl transition duration-300"
        >
          {isLoved ? (
            <AiFillHeart className="text-red-500" />
          ) : (
            <AiOutlineHeart className="text-black" />
          )}
        </button>
        <span className="text-lg font-medium">{loveCount}</span>

        <button
          onClick={handleDislikeClick}
          className="md:text-3xl text-2xl transition duration-300"
        >
          {isDisliked ? (
            <BiSolidDislike className="text-black" />
          ) : (
            <BiDislike className="text-black" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Coment;
