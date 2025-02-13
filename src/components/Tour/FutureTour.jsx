import { Button } from "../ui/button";
import FutureTour1 from "../../assets/asset 4.jpeg";
import FutureTour2 from "../../assets/asset 5.jpeg";
import FutureTour3 from "../../assets/asset 6.jpeg";
import FutureTour4 from "../../assets/asset 7.jpeg";

const FutureTour = () => {
  return (
    <div className="px-12 py-8 flex flex-col lg:flex-row items-center justify-center gap-12">
      {/* Image Grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-2 lg:w-[50%]">
        {[FutureTour1, FutureTour2, FutureTour3, FutureTour4].map(
          (img, index) => (
            <img
              key={index}
              src={img}
              alt={`Future Tour ${index + 1}`}
              className="w-[350px] h-[220px] object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 shadow-md"
            />
          )
        )}
      </div>

      {/* Text Section */}
      <div className="lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="text-8xl font-semibold text-gray-900 capitalize leading-tight mb-6">
          Future Trips
        </h1>
        <p className="text-lg text-black leading-relaxed mb-4">
          Looking ahead to future hiking adventures, explore new trails and
          diverse landscapes to challenge yourself and experience the beauty of
          nature. Embrace the opportunity to discover different cultures,
          wildlife, and natural wonders.
        </p>
        <p className="text-lg text-black leading-relaxed mb-6">
          Whether planning solo excursions or group expeditions, each trip
          promises unique experiences and lasting memories. Keep exploring and
          expanding your horizons with every hike.
        </p>
        <Button className="px-10 py-6 text-lg font-medium  text-white rounded-lg shadow-lg  transition duration-300">
          Choose Trip
        </Button>
      </div>
    </div>
  );
};

export default FutureTour;
