
import Fil from '../components/ui/Fil';
import Sejarah from '../components/ui/Sejarah';

const ProfilMasjid = () => {
  

  return (
    <>
    <div className="px-3 md:px-10 font-poppins mt-10 md:mt-14 pb-10 text-left">
      <Fil />
      <h2 className="mt-16 text-2xl font-semibold text-left">Asal Muasal Nama Masjid</h2>
      <p className="px-5 pt-5 text-justify indent-8 text-left">
      Nama <span className="font-bold">"Al-Anhar"</span>, yang berarti <span className="font-bold">"sungai-sungai"</span> dalam bahasa Arab, terinspirasi dari gambaran surga dalam Al-Qur'an. Nama ini mencerminkan harapan agar Masjid Al-Anhar menjadi sumber kedamaian dan keberkahan, layaknya sungai yang mengalir membawa kehidupan. Dengan semangat tersebut, masjid ini berkomitmen untuk terus mengalirkan kebaikan bagi umat dan masyarakat sekitar.
      </p>
      <Sejarah />


      <h2 className="mt-8 text-3xl font-bold text-left">Pengurus Harian</h2>
      <table className="min-w-full mt-4 table-auto border-collapse border-2 border-gray-300">
        <thead>
          <tr className="bg-white">
            <th className="px-4 py-2 text-center border-2">No</th>
            <th className="px-4 py-2 text-center border-2">Nama</th>
            <th className="px-4 py-2 text-center border-2">Jabatan</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2 text-center border-2">{index + 1}</td>
              <td className="px-4 py-2 text-center border-2">Lorem Ipsum</td>
              <td className="px-4 py-2 text-center border-2">Jabatan {index + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default ProfilMasjid;
