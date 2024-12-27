import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col px-3 items-center justify-center h-screen">
      <img src="/404.png" alt="" className="w-[700px] h-auto"/>
      <p className="md:text-4xl text-2xl mt-2 font-extrabold text-hijau">Oops! PAGE NOT FOUND</p>
      <p className="text-black mt-2 text-center text-base md:text-1xl max-w-[500px]">
        The page you're looking for might have been removed had its name changed or is temporarily unavailable
      </p>
      <Link to="/" className="mt-6 px-6 py-2 bg-hijau text-white font-semibold rounded-lg hover:bg-green-600 transition">
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
