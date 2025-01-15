import { Facebook, Instagram, Youtube } from "lucide-react";
import tourvd1 from "/vd1.mp4";
import tourvd2 from "/vd2.mp4";
import tourvd3 from "/vd3.mp4";
import tourvd4 from "/vd4.mp4";
import tourvd5 from "/vd5.mp4";

const Tour = () => {
  return (
    <div className="px-4 lg:px-10 grid gap-8">
      {/* Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-6">
        <div className="lg:col-span-3">
          <span className="text-5xl md:text-7xl lg:text-[170px] font-extrabold text-black">
            ADVENTURE
          </span>
        </div>
        <div className="lg:col-span-1">
          <video
            src={tourvd1}
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Journey Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        <div className="lg:col-span-2">
          <h1 className="text-gray-700 text-xl md:text-2xl">
            BEGIN YOUR JOURNEY
          </h1>
          <p className="text-start text-base md:text-lg mt-2 w-full md:w-[80%]">
            Explore the wonders of the great outdoors with our premier hiking
            website. Immerse yourself in stunning vistas, tranquil forests, and
            invigorating trails.
          </p>
        </div>
        <div>
          <video
            src={tourvd2}
            loop
            muted
            autoPlay
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <video
            src={tourvd3}
            loop
            muted
            autoPlay
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Stories Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        <div>
          <h1 className="text-lg md:text-xl font-semibold">
            Exploring Together:
          </h1>
          <h1 className="text-lg md:text-xl font-semibold">
            Stories from our recent trips
          </h1>
          <div className="flex items-center gap-4 mt-4">
            <span className="border border-black p-2 rounded-lg">
              <Instagram />
            </span>
            <span className="border border-black p-2 rounded-lg">
              <Facebook />
            </span>
            <span className="border border-black p-2 rounded-lg">
              <Youtube />
            </span>
          </div>
        </div>
        <div>
          <video src={tourvd4} autoPlay muted loop className="w-full rounded-lg" />
        </div>
        <div>
          <video src={tourvd5} autoPlay muted loop className="w-full rounded-lg" />
        </div>
        <div className="border-black border group hover:border-red-600 cursor-pointer hover:border-2 rounded-lg items-center w-full h-[200px]">
          <div className="p-4">
            <h1 className="text-2xl group-hover:text-red-600">Contact</h1>
            <div className="mt-4">
              <h1 className="text-base font-semibold group-hover:text-red-600">
                Got a Question?
              </h1>
              <h1 className="text-base font-semibold group-hover:text-red-600">
                Dont hesitate to ask
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
