import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col px-3 items-center justify-center h-screen bg-gray-100 text-gray-800">
      <img src="/404.png" alt="" className="w-[700px] h-auto"/>
      <p className="text-3xl mt-2 font-extrabold text-hijau">Oops! PAGE NOT FOUND</p>
      <p className="text-black mt-2 text-center text-1xl max-w-[400px]">
        The page you're looking for might have been removed had its name changed or is temporarily unavailable
      </p>
      <Link to="/" className="mt-6 px-6 py-2 bg-hijau text-white font-semibold rounded-lg hover:bg-green-600 transition">
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
