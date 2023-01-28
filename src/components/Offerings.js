import OfferingCard from "./OfferingCard";

const data = [
  {
    id: 1,
    topic: "Banks",
    description:
      "We provide a secure and complaint infrastructure for you to deliver web 3 benefits to your clients while maintaining your feduciary obligations",
  },
  {
    id: 2,
    topic: "Commodity Traders",
    description:
      "Tokenize your commodities yo hedge your risks - trade in commodity derivates and avail unbroken chain of custody from off-chain to on-chain.",
  },
  {
    id: 3,
    topic: "Real estate industry",
    description:
      "We provide a secure and complaint infrastructure for you to deliver web 3 benefits to your clients while maintaining your feduciary obligations",
  },
  {
    id: 4,
    topic: "hegde funds",
    description:
      "We provide a secure and complaint infrastructure for you to deliver web 3 benefits to your clients while maintaining your feduciary obligations",
  },
  {
    id: 5,
    topic: "De-fi funds",
    description:
      "We provide a secure and complaint infrastructure for you to deliver web 3 benefits to your clients while maintaining your feduciary obligations",
  },
  {
    id: 6,
    topic: "exchanges",
    description:
      "We provide a secure and complaint infrastructure for you to deliver web 3 benefits to your clients while maintaining your feduciary obligations",
  },
  {
    id: 7,
    topic: "Coporate Treasuires",
    description:
      "We provide a secure and complaint infrastructure for you to deliver web 3 benefits to your clients while maintaining your feduciary obligations",
  },
  {
    id: 8,
    topic: "HNIs / Family offices",
    description:
      "We provide a secure and complaint infrastructure for you to deliver web 3 benefits to your clients while maintaining your feduciary obligations",
  },
  {
    id: 9,
    topic: "Algorithmic Traders",
    description:
      "We provide a secure and complaint infrastructure for you to deliver web 3 benefits to your clients while maintaining your feduciary obligations",
  },
];
const Offerings = () => {
  return (
    <div className="mx-auto pt-10 sm:pt-32 w-5/6 mb-10">
      <div>
        <p className="mt-6 leading-8 text-center font-roobert text-2xl">
          Our Offerings across Sectors
        </p>
      </div>
      <div className="mt-12 font-codec">
        <h1 className="text-2xl font-codec sm:text-[60px] font-extrabold leading-8 text-center leading-snug tracking-wider">
          We Enable{" "}
          <span className="text-2xl font-codec sm:text-[60px] font-extrabold leading-8 text-center leading-snug tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            Our Clients
          </span>{" "}
          To Manage And Trade Their Digital Assets
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 pt-12">
        {data.map((item) => {
          return (
            <OfferingCard
              topic={item.topic}
              description={item.description}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Offerings;
