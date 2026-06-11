export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/images/image.png')] bg-no-repeat bg-cover bg-center flex justify-center items-center flex-col text-white text-center gap-4">
      <h1 className=" max-w-[700px] text-3xl  font-extrabold font-extrabolds md:text-5xl ">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="max-w-[500px] font-medium text-sm md:text-lg mb-6 ">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <button className="w-full max-w-[500px] h-12 rounded-[5px] bg-[#FF8C38]  ">
        Find your van
      </button>
    </div>
  );
}
