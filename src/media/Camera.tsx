import React, { useEffect, useState } from "react";
import { Video } from "../customElement/Video";

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
    (async () => {
      setDeviceList(await navigator.mediaDevices.enumerateDevices());
    })();

    const handleDeviceChange = async (event: Event) => {
      setDeviceList(await navigator.mediaDevices.enumerateDevices());
    };

    navigator.mediaDevices.addEventListener("devicechange", handleDeviceChange);

    return () =>
      navigator.mediaDevices.removeEventListener(
        "devicechange",
        handleDeviceChange
      );
  }, []);

  return (
    <Video srcObject={localStream} width="400px" muted autoPlay playsInline />
  );
};
