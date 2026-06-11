import data from "../../data.json";
export default function Dashboard() {
  return (
    <div className="bg-[#FFF7ED] min-h-screen">
      <section className="bg-[#FFEAD0]  rounded-lg p-10">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">Welcome!</h1>

            <p className="text-gray-600 text-[16px] mt-8">
              Income last <span className="underline font-bold">30 days</span>
            </p>

            <h2 className="text-5xl font-bold mt-8">2,260</h2>
          </div>

          <button className="text-2xl font-medium">Details</button>
        </div>
      </section>
      <section className="bg-[#FFDDB2] p-10 flex justify-between items-center rounded-lg">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold">Review score</h2>

          <div className="flex items-center gap-2">
            <span className="flex items-center text-4xl font-bold">
              <img className="w-6 h-6" src="../../images/star.png" alt="star" />
              5.0
            </span>
            <span className="text-4xl text-gray-500">/5</span>
          </div>
        </div>

        <button className="text-2xl font-medium">Details</button>
      </section>
      <section className="px-10 py-12">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Your listed vans</h2>

          <button className="text-2xl font-medium">View all</button>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {data.vans.map((van) => (
            <div
              key={van.id}
              className="bg-white rounded-xl p-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-6">
                <img
                  src={van.imageUrl}
                  alt={van.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />

                <div>
                  <h3 className="text-3xl font-bold">{van.name}</h3>

                  <p className="text-2xl text-gray-500">{van.price}/day</p>
                </div>
              </div>

              <button className="text-2xl font-medium">Edit</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
