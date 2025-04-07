"use client"
import { Typography, TextField, Grid, Chip, Autocomplete } from "@mui/material"

interface ServiceExperienceProps {
  formData: any
  onChange: (data: any) => void
}

export default function ServiceExperience({ formData, onChange }: ServiceExperienceProps) {
  // Sample service categories
  const serviceCategories = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Graphic Design",
    "Digital Marketing",
    "Content Writing",
    "SEO",
    "Social Media Management",
  ]

  return (
    <div>
      <Typography variant="body1" className="text-center mb-6">
        Tell us about your services and professional experience to help clients understand what you offer.
      </Typography>

      <Grid container spacing={3}>
      <Grid size={{ xs: 12 }}>

          <Typography variant="body2" className="mb-2">
            Service Categories
          </Typography>
          <Autocomplete
            multiple
            options={serviceCategories}
            defaultValue={formData.serviceCategories || []}
            onChange={(_, newValue) => onChange({ serviceCategories: newValue })}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" placeholder="Select service categories" />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip label={option} {...getTagProps({ index })} className="bg-gray-100" />
              ))
            }
          />
        </Grid>
        <Grid size={{ xs: 12 }}>

          <Typography variant="body2" className="mb-2">
            Years of Experience
          </Typography>
          <TextField
            fullWidth
            type="number"
            placeholder="Enter years of experience"
            value={formData.yearsOfExperience || ""}
            onChange={(e) => onChange({ yearsOfExperience: e.target.value })}
            variant="outlined"
            className="mb-4"
          />
        </Grid>
        <Grid size={{ xs: 12 }}>

          <Typography variant="body2" className="mb-2">
            Professional Summary
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="Write a brief summary of your professional experience and expertise"
            value={formData.professionalSummary || ""}
            onChange={(e) => onChange({ professionalSummary: e.target.value })}
            variant="outlined"
            className="mb-4"
          />
        </Grid>
      </Grid>
    </div>
  )
}

