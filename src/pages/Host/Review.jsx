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
      {/* Header */}
      <div className="pt-8 md:pt-12 lg:pt-16 px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-2 md:gap-4 flex-wrap">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Your reviews
          </h1>

          <p className="text-sm md:text-lg text-gray-500">
            last <span className="underline font-semibold">30 days</span>
          </p>
        </div>

        <div className="flex items-center gap-3 md:gap-4 mt-6 md:mt-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">5.0</h2>

          <span className="flex gap-2 items-center font-medium text-sm md:text-base lg:text-lg">
            <img
              className="w-4 h-4 md:w-6 md:h-6"
              src="/images/star.png"
              alt="star"
            />
            overall rating
          </span>
        </div>
      </div>

      {/* Rating Bars */}
      <div className="mt-8 md:mt-12 px-4 md:px-6 lg:px-8 space-y-4 md:space-y-6">
        {[
          { star: 5, percent: "100%" },
          { star: 4, percent: "0%" },
          { star: 3, percent: "0%" },
          { star: 2, percent: "0%" },
          { star: 1, percent: "0%" },
        ].map((item) => (
          <div key={item.star} className="flex items-center gap-2 md:gap-4">
            <span className="w-14 md:w-20 text-sm md:text-lg">
              {item.star} stars
            </span>

            <div className="flex-1 h-2 md:h-3 rounded-full bg-gray-300 overflow-hidden">
              <div
                className={`h-full ${
                  item.star === 5 ? "w-full bg-[#FF8C38]" : "w-0"
                }`}
              />
            </div>

            <span className="w-12 md:w-16 text-right text-sm md:text-lg">
              {item.percent}
            </span>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <div className="mt-10 md:mt-16 px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-10">
          Reviews (2)
        </h2>

        {reviews.map((review) => (
          <div
            key={review.id}
            className="border-b border-gray-300 py-6 md:py-8"
          >
            <div className="flex gap-1 md:gap-2 mb-4 md:mb-6">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  className="md:w-6 md:h-6"
                  fill="#FF8C38"
                  color="#FF8C38"
                />
              ))}
            </div>

            <div className="flex items-center gap-2 md:gap-3 flex-wrap mb-3 md:mb-5">
              <span className="font-bold text-lg md:text-xl lg:text-2xl">
                {review.name}
              </span>

              <span className="text-gray-400 text-sm md:text-lg lg:text-xl">
                {review.date}
              </span>
            </div>

            <p className="text-sm md:text-lg lg:text-xl leading-relaxed text-gray-800">
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
