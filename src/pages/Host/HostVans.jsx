import { hostVans } from "../../hostVans";
export default function HostVans() {
  const vansDetail = hostVans.map((vans) => {
    return (
      <div key={vans.id} className="p-5 flex bg-[#FFFFFF] h-auto w-full gap-3">
        <div>
          <img
            className="size-16.25 rounded-[5px]"
            src={vans.imageUrl}
            alt="vans"
          />
        </div>
        <div>
          <h1 className="font-semibold text-[20px] text-[#161616]">
            {vans.name}
          </h1>
          <p className="font-medium text-[#4D4D4D]">
            ${vans.price}
            <span>/day</span>
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col md:gap-8 p-6 w-full  bg-[#FFF7ED]">
      <h1 className="font-bold text-3xl text-[#161616]">Your listed vans</h1>
      <div className="flex flex-col gap-3 md:gap-6">{vansDetail}</div>
    </div>
  );
}
