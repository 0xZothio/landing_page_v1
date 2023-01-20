import logo from "../assets/images/newlogo.png";
const Backedby = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
     
      <div className="grid mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4 bg-gray-600 py-10 rounded-3xl shadow text-white">
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-32 h-20 mb-2 shadow"
            src={logo}
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-sm">Zoth</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-32 h-20 mb-2 shadow"
            src={logo}
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-sm">Zoth</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-32 h-20 mb-2 shadow"
            src={logo}
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-sm">Zoth</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-32 h-20 mb-2 shadow"
            src={logo}
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-sm">Zoth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backedby;
