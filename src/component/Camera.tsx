import React, { useEffect, useState, useRef } from "react";
import { Video } from "./Video";

export const Camera = () => {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [deviceList, setDeviceList] = useState<
    Array<InputDeviceInfo | MediaDeviceInfo>
  >([]);

  useEffect(() => {
    (async () => {
      setLocalStream(
        await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        })
      );
    })();
  }, [deviceList]);

  useEffect(() => {
    const updateDeviceList = async () => {
      setDeviceList(await navigator.mediaDevices.enumerateDevices());
    };

    updateDeviceList();

    navigator.mediaDevices.addEventListener("devicechange", updateDeviceList);

    return () =>
      navigator.mediaDevices.removeEventListener(
        "devicechange",
        updateDeviceList
      );
  }, []);

  return (
    <Video srcObject={localStream} width="400px" muted autoPlay playsInline />
  );
};
