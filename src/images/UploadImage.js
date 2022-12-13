import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const UploadImage = ({ onChange = () => {}, name }) => {
  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const bodyFromData = new FormData();
    bodyFromData.append("image", file);
    const response = await axios({
      method: "post",
      url: "https://api.imgbb.com/1/upload?key=4bb6d43216f3a1e39a2b5d82fa69eeb1",
      data: bodyFromData,
      headers: {
        "Content-Type": "mutipart/form-data",
      },
    });
    const imageData = response.data.data;
    if (!imageData) {
      toast.error("Can not upload imagebbAPI");
      return;
    }
    const imageObject = {
      medium: imageData.medium.url,
      thumb: imageData.thumb.url,
      image: imageData.url,
    };
    onChange(name, imageObject);
  };
  return (
    <label className="flex items-center justify-center cursor-pointer w-full border-dashed rounded-xl border border-strockSoft max-h-[141px] h-full">
      <input
        type="file"
        className="hidden"
        onChange={(e) => {
          handleUploadImage(e);
        }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    </label>
  );
};

export default UploadImage;
