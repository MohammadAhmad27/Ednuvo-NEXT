"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Tooltip } from "@mui/material";
import { Close } from "@mui/icons-material";

interface VerificationDocumentProps {
  formData: {
    verificationDocument: File[];
    [key: string]: any;
  };
  onChange: (data: any) => void;
}

export default function VerificationDocument({
  formData,
  onChange,
}: VerificationDocumentProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [documents, setDocuments] = useState<File[]>(
    formData?.verificationDocument || []
  );

  useEffect(() => {
    setDocuments(formData?.verificationDocument || []);
  }, [formData?.verificationDocument]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files) {
      const selectedFiles = Array?.from(e?.target?.files);
      const imageFiles = selectedFiles?.filter((file) =>
        file?.type?.startsWith("image/")
      );

      const totalFiles = documents?.length + imageFiles?.length;
      if (totalFiles > 2) {
        const allowedFiles = imageFiles?.slice(0, 2 - documents?.length);
        const newDocuments = [...documents, ...allowedFiles];
        setDocuments(newDocuments);
        onChange({ verificationDocument: newDocuments });
      } else {
        const newDocuments = [...documents, ...imageFiles];
        setDocuments(newDocuments);
        onChange({ verificationDocument: newDocuments });
      }
    }
  };

  const handleDivClick = () => {
    fileInputRef?.current?.click();
  };

  return (
    <div>
      <p className="text-[14px] text-primary font-normal mb-8">
        For trust and credibility, upload your verification documents. This
        ensures a safe and professional marketplace for all
      </p>
      <div className="flex flex-col justify-start gap-2">
        <label className="text-[14px] text-lightblack font-normal">
          Select front and back image of your Saudi identification card
        </label>
        <input
          type="file"
          placeholder="hidden"
          accept="image/*"
          multiple
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <div
          className="flex flex-col justify-center items-center p-4 border border-gray border-dashed rounded-xl cursor-pointer mb-8"
          onClick={handleDivClick}
        >
          <Image
            src="/service-provider-onboarding/upload.svg"
            alt="upload-icon"
            width={30}
            height={30}
            className="object-cover"
          />
          <p className="text-[14px] font-normal text-darkgray mt-2 text-center">
            <span className="font-medium text-secondary">
              Upload images of your documents
            </span>{" "}
            or drag and drop
          </p>
          <p className="text-[12px] font-normal text-darkgray">
            PNG, JPG or JPEG
          </p>
        </div>
      </div>

      {/* Preview uploaded documents */}
      {documents?.length > 0 && (
        <div className="mb-8">
          <h3 className="text-[16px] font-medium text-lightblack mb-3">
            Uploaded Documents
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {documents?.map((file, index) => {
              const url = URL?.createObjectURL(file);

              const handleDeleteDocument = (index: number) => {
                const updatedDocuments = documents?.filter(
                  (_, i) => i !== index
                );
                setDocuments(updatedDocuments);
                onChange({ verificationDocument: updatedDocuments });
              };

              return (
                <div
                  key={index}
                  className="w-[75px] h-[75px] relative rounded group"
                >
                  <Tooltip
                    title={
                      <p className="text-[10px] font-medium text-white">
                        {file?.name}
                      </p>
                    }
                    placement="bottom"
                    arrow
                  >
                    <div className="w-full h-full relative">
                      <Image
                        src={url}
                        alt={`document-${index}`}
                        fill
                        className="object-cover rounded hover:grayscale hover:filter"
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteDocument(index);
                        }}
                        className="absolute top-0 right-0 flex justify-center items-center p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black/50 rounded-full"
                      >
                        <Close sx={{ fontSize: 12, color: "white" }} />
                      </button>
                    </div>
                  </Tooltip>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
