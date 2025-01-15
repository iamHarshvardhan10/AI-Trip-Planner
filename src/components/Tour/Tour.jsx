import { Facebook, Instagram, Youtube } from "lucide-react";
import tourvd1 from "/vd1.mp4";
import tourvd2 from "/vd2.mp4";
import tourvd3 from "/vd3.mp4";
import tourvd4 from "/vd4.mp4";
import tourvd5 from "/vd5.mp4";

const Tour = () => {
  return (
    <div className="pr-10 pl-10 grid grid-rows-4">
      <div className="grid grid-cols-4  items-center">
        <div className="col-span-3">
          <span className="text-[170px] font-extrabold text-black">
            ADVENTURE
          </span>
        </div>
        <div className="col-span-1">
          <video
            src={tourvd1}
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 items-center -mt-20">
        <div className="col-span-2">
          <h1 className="text-gray-700">BEGIN YOUR JOURNEY</h1>
          <p className="text-start text-lg mt-2 w-[80%]">
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
      <div className="grid grid-cols-4 gap-2 items-center -mt-40">
        <div>
          <h1>Exploring Together:</h1>
          <h1>stories from our recent trips</h1>
          <div className="flex items-center gap-4 mt-2">
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
          <video src={tourvd4} autoPlay muted loop className="rounded-lg" />
        </div>
        <div>
          <video src={tourvd5} autoPlay muted loop className="rounded-lg" />
        </div>
        <div className="border-black border group hover:border-red-600  cursor-pointer hover:border-2 rounded-lg items-center  w-[352px] h-[198px]">
          <div className="p-6">
            <h1 className="text-[32px] group-hover:text-red-600">Contact</h1>
            <div className="mt-4">
              <h1 className="text-[16px] font-semibold group-hover:text-red-600 ">
                Got Question?
              </h1>
              <h1 className="text-[16px] font-semibold  group-hover:text-red-600">
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
