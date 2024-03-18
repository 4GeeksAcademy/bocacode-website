'use client';
import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player/youtube';
import Image from 'next/image';
import '../../styles/card.css';

const VideoModal = ({ videoLink, play }) => {
  const [isModalOpen, setIsModalOpen] = useState(play);
  const [video, setVideo] = useState(null);

  const src = video;
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = src;
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.src = '';
      }
    };
  }, [videoLink]);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    isModalOpen && (
      <div className="modal-video">
        <div
          className="modal-video-body row"
          // style={{
          //   display: isModalOpen ? 'flex' : 'none',
          // }}
        >
          <div className="modal">
            <ReactPlayer
              url={videoLink}
              playing={isModalOpen}
              controls
              className="video"
              width="100%"
              height="auto"
            />
            <Image
              src="/images/x-icon.png"
              alt="close"
              onClick={() => handleClose()}
              width={35}
              height={35}
              className="close-modal"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default VideoModal;
