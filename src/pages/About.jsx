export default function About() {
  return (
    <div className="bg-[#FFF7ED] pb-[40px]">
      <div className="mb-[40px]">
        <img
          src="../../images/image1.png"
          alt=""
          className="w-full h-80 md:h-auto"
        />
      </div>
      <div className=" px-5 md:px-10 py-8 ">
        <h1 className="text-xl md:text-4xl font-bold mb-5 leading-tight">
          Don’t squeeze in a sedan when{" "}
          <span className="block">you could relax in a van.</span>
        </h1>
        <p className="font-medium max-w-2xl mb-8  ">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="bg-[#FFCC8D]  rounded-[5px] mx-5 md:mx-10 p-6 max-w-xl ">
        <div className="ml-5 pt-5">
          <h1 className="text-2xl font-bold mb-5">
            Your destination is waiting. Your van is ready.
          </h1>
          <button className="w-full max-w-43.5 rounded-[10px] h-12.25 font-bold text-[15.95px] text-[#FFFFFF] bg-[#161616]">
            Explore our vans
          </button>
        </div>
      </div>
    </div>
  );
}
