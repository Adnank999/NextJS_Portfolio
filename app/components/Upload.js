import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";

const Upload = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "dtivxbmxa" } });

  Cloudinary.upload("/FInal2.mp4",
  { resource_type: "video",
    public_id: "video_upload_example"
  }).then((data) => {
    console.log(data.playback_url);
  }).catch((err) => {
    console.err(err)
  });
};

export default Upload;
