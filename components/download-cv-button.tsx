"use client"

import { Download } from "lucide-react"

interface DownloadCVButtonProps {
  cvUrl: string
}

export default function DownloadCVButton({ cvUrl }: DownloadCVButtonProps) {
  return (
    <a
      href={cvUrl}
      download="Kevin_Ilama_Portuguez_CV_2025.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
      aria-label="Download CV"
    >
      <button
        className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-slate-800 rounded-md group"
        type="button"
        aria-label="Download CV"
      >
        <span
          className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-56 group-hover:h-56"
          aria-hidden="true"
        ></span>
        <span className="absolute bottom-0 left-0 h-full -ml-2" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-auto h-full opacity-100 object-stretch"
            viewBox="0 0 487 487"
            aria-hidden="true"
          >
            <path
              fillOpacity=".1"
              fillRule="nonzero"
              fill="#FFF"
              d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
            ></path>
          </svg>
        </span>
        <span className="absolute top-0 right-0 w-12 h-full -mr-3" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="object-cover w-full h-full"
            viewBox="0 0 487 487"
            aria-hidden="true"
          >
            <path
              fillOpacity=".1"
              fillRule="nonzero"
              fill="#FFF"
              d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
            ></path>
          </svg>
        </span>
        <span
          className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
          aria-hidden="true"
        ></span>
        <span className="relative text-base font-semibold flex items-center gap-2">
          <Download size={18} aria-hidden="true" />
          <span>Download CV</span>
        </span>
      </button>
    </a>
  )
}

