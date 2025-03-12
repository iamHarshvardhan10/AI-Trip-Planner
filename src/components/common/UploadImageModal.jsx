import { Button } from "../ui/button";

const UploadImageModal = ({ modalData }) => {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg border border-gray-400 bg-black">
        <p className="text-2xl font-semibold text-white">{modalData?.text1}</p>
        <input
          type="file"
          accept="image/*"
          name="displayPicture"
          className="w-full mt-3 mb-5 leading-6 text-white"
          onChange={modalData?.InputHandler}
        />
        <div className="flex items-center gap-x-4">
          <Button onClick={modalData?.btn1Handler}>{modalData.btn1text}</Button>
          <Button onClick={modalData?.btn2Handler}>
            {modalData?.btn2text}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadImageModal;
