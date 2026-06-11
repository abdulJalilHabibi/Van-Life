import { Star } from "lucide-react";
export default function Review() {
  const reviews = [
    {
      id: 1,
      name: "Elliot",
      date: "December 1, 2022",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
    },
    {
      id: 2,
      name: "Sandy",
      date: "November 23, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
    },
  ];

  return (
    <div className="bg-[#FFF7ED] min-h-screen">
      <div className="pt-16 pl-6">
        <div className="flex items-center gap-4 flex-wrap">
          <h1 className="text-[32px] font-bold">Your reviews</h1>

          <p className=" text-xl text-gray-500">
            last <span className="underline font-semibold">30 days</span>
          </p>
        </div>

        <div className="flex items-center gap-4 mt-10">
          <h2 className="text-[32px] font-bold">5.0</h2>

          <span className="flex gap-2 justify-center items-center font-medium text-[16px]">
            <img className="w-6 h-6" src="../../images/star.png" alt="star" />
            overall rating
          </span>
        </div>
      </div>
      <div className="mt-12 pl-6 pr-10 space-y-6">
        {[
          { star: 5, percent: "100%" },
          { star: 4, percent: "0%" },
          { star: 3, percent: "0%" },
          { star: 2, percent: "0%" },
          { star: 1, percent: "0%" },
        ].map((item) => (
          <div key={item.star} className="flex items-center gap-4">
            <span className="w-20 text-xl">{item.star} stars</span>

            <div className="flex-1 h-3 rounded-full bg-gray-300 overflow-hidden">
              <div
                className={`h-full ${
                  item.star === 5 ? "w-full bg-[#FF8C38]" : "w-0"
                }`}
              />
            </div>

            <span className="w-16 text-right text-xl">{item.percent}</span>
          </div>
        ))}
      </div>
      <div className="mt-16 pl-6">
        <h2 className="text-4xl font-bold mb-10">Reviews (2)</h2>

        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-300 pb-10 pt-5">
            <div className="flex gap-2 mb-6">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={24} fill="#FF8C38" color="#FF8C38" />
              ))}
            </div>

            <div className="flex gap-3 flex-wrap mb-5">
              <span className="font-bold text-2xl">{review.name}</span>

              <span className="text-gray-400 text-2xl">{review.date}</span>
            </div>

            <p className="text-2xl leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
