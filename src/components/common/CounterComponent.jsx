import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CounterComponent = ({
  targetNumber,
  heading,
  text,
  isNewText,
  newText,
}) => {
  const countRef = useRef(null);

  useLayoutEffect(() => {
    if (!countRef.current) return; // Ensure the ref exists before running GSAP

    let ctx = gsap.context(() => {
      gsap.fromTo(
        countRef.current,
        { innerText: 0 },
        {
          innerText: targetNumber,
          duration: 2,
          snap: "innerText",
          onStart: function () {
            if (countRef.current) {
              countRef.current.innerText = `0${isNewText ? newText : ""}`;
            }
          },
          onUpdate: function () {
            if (countRef.current) {
              countRef.current.innerText = `${Math.round(
                this.targets()[0].innerText
              )}${isNewText ? newText : ""}`;
            }
          },
        }
      );

      ScrollTrigger.create({
        trigger: countRef.current,
        start: "top 80%",
        once: true,
        animation: gsap.getTweensOf(countRef.current)[0],
      });
    });

    return () => ctx.revert(); // Cleanup GSAP animations on unmount
  }, [targetNumber, isNewText, newText]);

  return (
    <div className="flex flex-col items-center p-12">
      <h1 ref={countRef} className="text-[100px] font-bold">0</h1>
      <p className="text-[20px] font-bold">{heading}</p>
      <p className="text-[18px] font-medium text-center">{text}</p>
    </div>
  );
};

export default CounterComponent;
