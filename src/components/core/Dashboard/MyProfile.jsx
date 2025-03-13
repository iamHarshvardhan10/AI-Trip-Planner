import { useDispatch, useSelector } from "react-redux";
import profileImg from "../../../assets/asset 19.jpeg";
import { Link, NavLink } from "react-router-dom";
import { FaPenToSquare } from "react-icons/fa6";
import { useEffect, useState } from "react";
import UploadImageModal from "../../../components/common/UploadImageModal";
import toast from "react-hot-toast";
import { UPDATEPICTURE } from "../../../utils/apis";
import { setImageUpdate } from "../../../redux/slices/profileSlice";

const MyProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const [displayPicture, setDisplayPicture] = useState(null);
  const handleOpenModal = () => {
    setConfirmationModal({
      text1: "Update Your Profile Image",
      btn1text: "Close",
      btn1Handler: () => setConfirmationModal(null),
      btn2text: "Upload",
      btn2Handler: () => uploadImage(),
    });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file instanceof File) {
      setDisplayPicture(file);
    } else {
      console.error("Invalid file selected!");
    }
  };

  const uploadImage = async () => {
    if (displayPicture == null) {
      console.error("No file selected!");
      return;
    }

    const formData = new FormData();
    formData.append("displayPicture", displayPicture);

    // Debugging FormData
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": ", pair[1]);
    }

    try {
      const res = await fetch(UPDATEPICTURE, {
        method: "PUT",
        body: formData,
        credentials: "include",
      });

      const data = await res.json();
      // console.log("Upload Response:", data);
      if (res.ok) {
        toast.success("Image Upload Successfully");
        setConfirmationModal(null);
        dispatch(setImageUpdate(data.data.imageUrl));
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (displayPicture instanceof File) {
      uploadImage();
    }
  }, [displayPicture]);

  const friendsNumber = 500;
  return (
    <>
      <div>
        <img
          src={profileImg}
          alt=""
          className="h-[50vh] w-full bg-cover rounded-b-2xl border border-b-black"
        />
        <div className="relative">
          <img
            src={user?.imageUrl}
            alt=""
            className="absolute rounded-full w-[150px] h-[150px] left-[45%] -top-[90px] border-4 border-white"
          />
          <span className="text-white absolute left-[53%] -bottom-10 text-2xl cursor-pointer">
            <FaPenToSquare onClick={handleOpenModal} />
          </span>
          <span className="absolute top-16 text-gray-600 text-lg px-12 ">
            Hey <span className="text-white">{user?.name},</span> You are
            connected with{" "}
            <span className="text-blue-900">
              <NavLink to={"/my-connections"}>
                {friendsNumber} amazing connections
              </NavLink>
            </span>
            . Explore more on the{" "}
            <span className="text-blue-500">
              <Link to={"/dashboard/connect"}>Connect page</Link>
            </span>{" "}
            and make every journey unforgettable!
          </span>
        </div>
      </div>
      {confirmationModal && (
        <UploadImageModal
          modalData={{ ...confirmationModal, InputHandler: handleFileChange }}
        />
      )}
    </>
  );
};

export default MyProfile;
