import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-20 h-20 border-1 border-[#ff5600] rounded-full animate-spin"></div>
    </div>
  );
}

export default Loading;