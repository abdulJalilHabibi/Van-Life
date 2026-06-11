import data from "../../data.json";
export default function Dashboard() {
  return (
    <div className="bg-[#FFF7ED] min-h-screen">
      <section className="bg-[#FFEAD0] rounded-lg p-5 md:p-8 lg:p-10">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Welcome!
            </h1>

            <p className="text-gray-600 text-sm md:text-base mt-4 md:mt-6">
              Income last <span className="underline font-bold">30 days</span>
            </p>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 md:mt-6">
              $2,260
            </h2>
          </div>

          <button className="text-sm md:text-lg font-medium">Details</button>
        </div>
      </section>

      <section className="bg-[#FFDDB2] p-5 md:p-8 flex justify-between items-center rounded-lg">
        <div className="flex items-center gap-2 md:gap-4">
          <h2 className="text-xl md:text-3xl font-bold">Review score</h2>

          <div className="flex items-center gap-1 md:gap-2">
            <span className="flex items-center text-xl md:text-3xl font-bold">
              <img
                className="w-4 h-4 md:w-6 md:h-6"
                src="/images/star.png"
                alt="star"
              />
              5.0
            </span>

            <span className="text-lg md:text-2xl text-gray-500">/5</span>
          </div>
        </div>

        <button className="text-sm md:text-lg font-medium">Details</button>
      </section>

      <section className="px-4 md:px-8 lg:px-10 py-8 md:py-12">
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-3xl font-bold">Your listed vans</h2>

          <button className="text-sm md:text-lg font-medium">View all</button>
        </div>

        <div className="mt-8 flex flex-col gap-4 md:gap-6">
          {data.vans.map((van) => (
            <div
              key={van.id}
              className="bg-white rounded-xl p-4 md:p-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-3 md:gap-6">
                <img
                  src={van.imageUrl}
                  alt={van.name}
                  className="w-16 h-16 md:w-24 md:h-24 rounded-lg object-cover"
                />

                <div>
                  <h3 className="text-lg md:text-2xl font-bold">{van.name}</h3>

                  <p className="text-sm md:text-lg text-gray-500">
                    {van.price}/day
                  </p>
                </div>
              </div>

              <button className="text-sm md:text-lg font-medium">Edit</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
