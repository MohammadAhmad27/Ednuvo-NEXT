"use client"
import { Typography, TextField, Grid, Button, Card, CardMedia, CardContent, IconButton } from "@mui/material"
import { Add, Delete } from "@mui/icons-material"

interface PortfolioDetailsProps {
  formData: any
  onChange: (data: any) => void
}

export default function PortfolioDetails({ formData, onChange }: PortfolioDetailsProps) {
  const portfolioItems = formData.portfolioItems || []

  const handleAddPortfolioItem = () => {
    const newPortfolioItems = [...portfolioItems, { title: "", description: "", imageUrl: "" }]
    onChange({ portfolioItems: newPortfolioItems })
  }

  const handleRemovePortfolioItem = (index: number) => {
    const newPortfolioItems = [...portfolioItems]
    newPortfolioItems.splice(index, 1)
    onChange({ portfolioItems: newPortfolioItems })
  }

  const handlePortfolioItemChange = (index: number, field: string, value: string) => {
    const newPortfolioItems = [...portfolioItems]
    newPortfolioItems[index] = {
      ...newPortfolioItems[index],
      [field]: value,
    }
    onChange({ portfolioItems: newPortfolioItems })
  }

  return (
    <div>
      <Typography variant="body1" className="text-center mb-6">
        Showcase your best work to attract potential clients.
      </Typography>

      <Grid container spacing={3}>
        {portfolioItems.map((item: any, index: number) => (
                    <Grid size={{ xs: 12, md: 6 }} key={index}>
            
            <Card className="relative">
              <IconButton
                className="absolute top-2 right-2 bg-white z-10"
                size="small"
                onClick={() => handleRemovePortfolioItem(index)}
              >
                <Delete fontSize="small" />
              </IconButton>
              <CardMedia
                component="img"
                height="140"
                image={item.imageUrl || "/placeholder.svg?height=140&width=300"}
                alt={item.title}
              />
              <CardContent>
                <TextField
                  fullWidth
                  placeholder="Project Title"
                  value={item.title}
                  onChange={(e) => handlePortfolioItemChange(index, "title", e.target.value)}
                  variant="outlined"
                  className="mb-2"
                  size="small"
                />
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  placeholder="Project Description"
                  value={item.description}
                  onChange={(e) => handlePortfolioItemChange(index, "description", e.target.value)}
                  variant="outlined"
                  size="small"
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
                        <Grid size={{ xs: 12 }}>

          <Button variant="outlined" startIcon={<Add />} onClick={handleAddPortfolioItem} className="mt-2" fullWidth>
            Add Portfolio Item
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

