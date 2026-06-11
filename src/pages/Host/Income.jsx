export default function Income() {
  const transactions = [
    {
      id: 1,
      amount: "$720",
      date: "1/12/22",
    },
    {
      id: 2,
      amount: "$560",
      date: "10/11/22",
    },
    {
      id: 3,
      amount: "$980",
      date: "23/11/22",
    },
  ];

  const chartData = [
    { month: "Ju", amount: 3900 },
    { month: "Au", amount: 1400 },
    { month: "Se", amount: 2900 },
    { month: "Oc", amount: 2600 },
    { month: "No", amount: 1500 },
    { month: "De", amount: 500 },
  ];

  const maxAmount = 5000;

  return (
    <div className="bg-[#FFF7ED] min-h-screen">
      {/* Header */}
      <section className="px-4 sm:px-6 md:px-10 pt-8 md:pt-12">
        <h1 className="text-4xl md:text-6xl font-bold">Income</h1>

        <p className="mt-5 text-base md:text-xl text-gray-500">
          Last <span className="underline font-bold">30 days</span>
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mt-6">$2,260</h2>
      </section>

      {/* Chart */}
      <section className="px-4 sm:px-6 md:px-10 mt-12">
        <div className="relative h-[300px] md:h-[450px]">
          {/* Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[5, 4, 3, 2, 1, 0].map((num) => (
              <div key={num} className="flex items-center gap-4">
                <span className="text-gray-500 text-sm md:text-xl w-10 md:w-14">
                  ${num}k
                </span>

                <div className="flex-1 border-t border-dashed border-gray-300"></div>
              </div>
            ))}
          </div>

          {/* Bars */}
          <div className="absolute inset-0 flex items-end justify-between pl-12 md:pl-16">
            {chartData.map((item, index) => (
              <div
                key={item.month}
                className="flex flex-col items-center w-full"
              >
                <div
                  className={`w-8 sm:w-12 md:w-16 rounded-t-lg ${
                    index >= 4 ? "bg-[#FF8C38]" : "bg-[#FFEAD0]"
                  }`}
                  style={{
                    height: `${(item.amount / maxAmount) * 280}px`,
                  }}
                />

                <span className="mt-3 text-lg md:text-2xl text-gray-600">
                  {item.month}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transactions */}
      <section className="px-4 sm:px-6 md:px-10 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold">
            Your transactions (3)
          </h2>

          <p className="text-sm md:text-xl text-gray-500">
            Last <span className="underline font-bold">30 days</span>
          </p>
        </div>

        <div className="space-y-5">
          {transactions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-5 md:p-8 flex justify-between items-center"
            >
              <h3 className="text-3xl md:text-5xl font-bold">{item.amount}</h3>

              <p className="text-lg md:text-3xl text-gray-500">{item.date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
