"use client";
import React from "react";

const PreviewButton = ({ userId }: { userId: string }) => {
  const handleCopyLink = () => {
    const baseUrl = window.location.origin;
    const previewUrl = `${baseUrl}/preview/${userId}`;
    navigator.clipboard.writeText(previewUrl).then(() => {
      alert("Preview Link has been copied");
    });
  };
  return (
    <button
      onClick={handleCopyLink}
      className={` min-[370px]:w-40 bg-main-purple hover:bg-main-purple-hover flex items-center justify-center px-4 py-3   rounded-lg group font-semibold text-white`}>
      Share Link
    </button>
  );
};

export default PreviewButton;
