import CounterComponent from "../common/CounterComponent";

const Counter = () => {
  const targetNumber = 850;
  const targetNumber1 = 500;
  const targetNumber2 = 97;
  return (
    <div className="flex items-center justify-around px-[76px] py-[100px]">
      <CounterComponent
        targetNumber={targetNumber}
        heading={"Our Adventurers"}
        text={"Memorable experiences in diverse landscapes worldwide"}
      />
      <CounterComponent
        targetNumber={targetNumber1}
        heading={"Unique Trails Offered"}
        text={"Diverse challenges across stunning landscapes"}
        isNewText={true}
        newText={"+"}
      />
      <CounterComponent
        targetNumber={targetNumber2}
        heading={"Satisfaction Rate"}
        text={"Exceptional experiences rated highly by participants."}
        isNewText={true}
        newText={"%"}
      />
    </div>
  );
};

export default Counter;
