"use client"
import { useState } from "react"
import {
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Box,
  IconButton,
} from "@mui/material"
import { CloudUpload, CheckCircle, Delete } from "@mui/icons-material"

interface VerificationDocumentProps {
  formData: any
  onChange: (data: any) => void
}

export default function VerificationDocument({ formData, onChange }: VerificationDocumentProps) {
  const [documentType, setDocumentType] = useState(formData.documentType || "id")
  const [file, setFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState("")

  const handleDocumentTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setDocumentType(value)
    onChange({ documentType: value })
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0]
      setFile(selectedFile)
      setFileName(selectedFile.name)
      onChange({ verificationDocument: selectedFile })
    }
  }

  const handleRemoveFile = () => {
    setFile(null)
    setFileName("")
    onChange({ verificationDocument: null })
  }

  return (
    <div>
      <Typography variant="body1" className="text-center mb-6">
        Please upload a verification document to complete your profile.
      </Typography>

      <Grid container spacing={3}>
      <Grid size={{ xs: 12 }}>

          <Card>
            <CardContent>
              <Typography variant="body2" className="mb-3">
                Document Type
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup row value={documentType} onChange={handleDocumentTypeChange}>
                  <FormControlLabel value="id" control={<Radio />} label="ID Card" />
                  <FormControlLabel value="passport" control={<Radio />} label="Passport" />
                  <FormControlLabel value="license" control={<Radio />} label="Professional License" />
                </RadioGroup>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12 }}>

          <Card className="border-dashed border-2 border-gray-300">
            <CardContent className="flex flex-col items-center justify-center p-6">
              {!file ? (
                <>
                  <CloudUpload className="text-gray-400 text-5xl mb-3" />
                  <Typography variant="body1" className="mb-3 text-center">
                    Drag and drop your document here or click to browse
                  </Typography>
                  <Typography variant="body2" className="text-gray-500 mb-4 text-center">
                    Supported formats: PDF, JPG, PNG (Max size: 5MB)
                  </Typography>
                  <Button component="label" variant="contained" className="bg-[#2e5c41] hover:bg-[#224431]">
                    Upload Document
                    <input type="file" hidden accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} />
                  </Button>
                </>
              ) : (
                <Box className="w-full">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded mb-2">
                    <div className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" />
                      <Typography variant="body2">{fileName}</Typography>
                    </div>
                    <IconButton size="small" onClick={handleRemoveFile}>
                      <Delete fontSize="small" />
                    </IconButton>
                  </div>
                  <Typography variant="body2" className="text-center text-gray-500">
                    Document uploaded successfully
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

