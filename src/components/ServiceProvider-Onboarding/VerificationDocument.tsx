"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
    formData.verificationDocument || []
  );

  useEffect(() => {
    setDocuments(formData.verificationDocument || []);
  }, [formData.verificationDocument]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const imageFiles = selectedFiles.filter((file) =>
        file?.type?.startsWith("image/")
      );

      const totalFiles = documents.length + imageFiles.length;
      if (totalFiles > 2) {
        const allowedFiles = imageFiles.slice(0, 2 - documents.length);
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
          className="flex flex-col justify-center items-center p-4 border border-[#E9E9E9] border-dashed rounded-xl cursor-pointer mb-8"
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
            PNG, JPG, JPEG only
          </p>
        </div>
      </div>

      {/* Preview uploaded documents */}
      {documents?.length > 0 && (
        <div className="mb-8">
          <h3 className="text-[16px] font-medium text-lightblack mb-3">
            Uploaded Documents
          </h3>
          <div className="flex flex-wrap gap-4">
            {documents.map((file, index) => {
              const url = URL.createObjectURL(file);
              return (
                <div
                  key={index}
                  className="w-[100px] h-[100px] relative rounded"
                >
                  <Image
                    src={url}
                    alt={`document-${index}`}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
