"use client";

import React from "react";

const DownloadCV = () => {
  return (
    <div className="px-8 py-34">
      <div className="grid gap-8 items-start justify-center">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-blue-400 rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <a
            href="/Adnan_CV_U(1).pdf"
            download
            className="relative px-2 py-2 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600"
          >
            <span className="flex items-center space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 12v7m0 0l-2.25-2.333M12 19l2.25-2.333M6.6 17.833c-1.988 0-3.6-1.641-3.6-3.666 0-1.669 1.094-3.077 2.592-3.521A.152.152 0 005.7 10.5C5.7 7.462 8.118 5 11.1 5s5.4 2.462 5.4 5.5a.09.09 0 00.11.089c.254-.058.518-.089.79-.089 1.988 0 3.6 1.642 3.6 3.667s-1.612 3.666-3.6 3.666"
                ></path>
              </svg>
              <span className="xs:text-sm sm:text-lg pr-6 text-gray-100">Download My CV</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadCV;
