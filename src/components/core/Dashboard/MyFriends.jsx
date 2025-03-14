import { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../components/ui/card";

import toast from "react-hot-toast";
import { GETALLCONNECTION } from "../../../utils/apis";

const MyFriends = () => {
  const [friendsInfo, setFriendsInfo] = useState(null);
  console.log(friendsInfo);
  useEffect(() => {
    const getConnection = async () => {
      try {
        const res = await fetch(GETALLCONNECTION, {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        if (data.success == false) {
          toast.error(data.message);
        }
        console.log(data);
        if (res.ok) {
          setFriendsInfo(data.users);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    getConnection();
  }, []);
  return (
    <div className="px-10">
      <h1 className="text-3xl text-white uppercase">People You May Know</h1>
      <div className="flex items-center justify-between flex-wrap mt-10">
        {friendsInfo &&
          friendsInfo.map((friends, index) => {
            return (
              <div key={index} className="">
                <Card className="w-[220px] flex items-center flex-wrap  border-black shadow-xl bg-yellow-300">
                  <CardContent className="flex items-center justify-between gap-5 uppercase font-bold mt-5">
                    <img
                      src={friends.imageUrl}
                      alt="user profile"
                      className="w-[50px] h-[50px] rounded-full border-black border shadow-xl"
                    />
                    <h1 className="text-black">{friends?.name}</h1>
                  </CardContent>
                  <CardFooter className="flex items-center">
                    <Button>Make Friend</Button>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MyFriends;
