"use client";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React, { useState } from "react";

const PreviewButton = ({ userId }: { userId: string }) => {
  let [isOpen, setIsOpen] = useState(false);
  const handleCopyLink = () => {
    const baseUrl = window.location.origin;
    const previewUrl = `${baseUrl}/preview/${userId}`;
    navigator.clipboard.writeText(previewUrl).then(() => {
      setIsOpen(true);
    });
  };
  return (
    <>
      <button
        onClick={handleCopyLink}
        className={` min-[370px]:w-40 bg-main-purple hover:bg-main-purple-hover flex items-center justify-center px-4 py-3   rounded-lg group font-semibold text-white`}>
        Share Link
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-start justify-center p-4 animate-in">
          <DialogPanel className="max-w-lg space-y-4 bg-white p-6 border border-main-purple rounded-md">
            <DialogTitle className="font-bold">
              Preview Link has been successfully copied!
            </DialogTitle>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default PreviewButton;
