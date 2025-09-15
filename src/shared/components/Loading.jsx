import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-30">
      <div className="relative ">
        <div className="w-30 h-30 border-0 border-[#ff5600] border-r-4 rounded-full rounded-b-full animate-spin absolute inset-0">
        </div>
        <img src="assets/images/logo.webp" alt="logo.webp" className="flex items-center justify-center p-2 mt-3"/>
      </div>
    </div>

  );
}

export default Loading;