import React from "react";
import { defaultSignature } from "./defaultSignature";

interface CertificateProps {
  recipientName: string;
  courseName: string;
  date: string;
  verificationId: string;
  signatureUrl?: string; // made optional
}

export const Certificate: React.FC<CertificateProps> = ({
  recipientName,
  courseName,
  date,
  verificationId,
  signatureUrl,
}) => {
  // Gracefully handle local Windows/Mac file paths by reverting to default vector signature
  const isLocalPath = signatureUrl && (
    signatureUrl.startsWith("C:") || 
    signatureUrl.startsWith("file:") || 
    signatureUrl.includes("\\") || 
    signatureUrl.includes("/Users/") ||
    signatureUrl.includes("/Downloads/")
  );
  
  const finalSignatureUrl = (!signatureUrl || isLocalPath) ? defaultSignature : signatureUrl;
  return (
    <div className="w-[800px] bg-[#fdfdfb] border-[14px] border-[#112244] rounded-sm p-8 font-serif shadow-xl flex flex-col justify-between aspect-[1.414] text-slate-900 relative overflow-hidden select-none">
      {/* Inner border */}
      <div className="absolute inset-1.5 border-2 border-double border-amber-600/40 pointer-events-none" />

      {/* Header */}
      <div className="text-center flex flex-col items-center mt-2">
        <div className="flex flex-col items-center gap-0.5 mb-2 font-sans">
          <div className="w-12 h-12 bg-slate-900 flex items-center justify-center [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] border border-amber-500">
            <span className="text-white font-black text-sm tracking-tighter">
              N<span className="text-blue-500">L</span>
            </span>
          </div>
          <span className="text-slate-900 font-black text-xl tracking-tight">
            NodeLab
          </span>
        </div>
        <h1 className="text-[#112244] text-3xl font-bold uppercase tracking-wider mt-2">
          Certificate Of Achievement
        </h1>
        <p className="text-slate-500 text-sm italic font-sans mt-1">Awarded to</p>
      </div>

      {/* Recipient */}
      <div className="flex flex-col items-center w-full my-1">
        <div className="text-center w-[75%] border-b border-dotted border-slate-400 pb-1">
          <span className="text-[#112244] text-3xl font-sans font-bold tracking-wide">
            {recipientName}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="text-center px-12 font-sans text-sm text-slate-700 leading-relaxed max-w-2xl mx-auto">
        <p>
          For successfully completing the{" "}
          <span className="font-extrabold text-[#112244]">
            {courseName} Assessment
          </span>{" "}
          on NodeLab.
        </p>
        <p className="text-xs text-slate-500 mt-1 tracking-wide">
          Demonstrated exceptional proficiency in digital skills and data analysis.
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-end px-4 mt-2 font-sans">
        {/* Date */}
        <div className="w-1/4 flex items-baseline gap-1 text-xs">
          <span className="font-bold text-slate-800">Date:</span>
          <span className="border-b border-dotted border-slate-400 flex-grow text-center font-semibold pb-0.5">
            {date}
          </span>
        </div>

        {/* Verification */}
        <div className="text-[10px] text-slate-400 tracking-wider text-center pb-0.5">
          Verification ID:{" "}
          <span className="font-mono font-bold text-slate-600">
            {verificationId}
          </span>
        </div>

        {/* Signature Image */}
        <div className="w-[240px] flex flex-col items-center relative">
          <img
            src={finalSignatureUrl}
            alt="Signature"
            className="w-[180px] h-[65px] object-contain mb-1"
          />
          <div className="w-full border-t border-slate-400 text-center pt-1.5 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
            Authorized Signature (Website Administrator)
          </div>
        </div>
      </div>

      {/* Ribbon */}
      <div className="absolute top-1/2 right-[-40px] bg-blue-600 text-white px-6 py-2 transform rotate-45 font-bold shadow-md">
        PASS
      </div>
    </div>
  );
};

export default Certificate;
