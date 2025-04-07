"use client";
import {
  Typography,
  TextField,
  Grid,
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

interface PackagesDetailProps {
  formData: any;
  onChange: (data: any) => void;
}

export default function PackagesDetail({
  formData,
  onChange,
}: PackagesDetailProps) {
  const packages = formData.packages || [];

  const handleAddPackage = () => {
    const newPackages = [
      ...packages,
      { name: "", description: "", price: "", features: [] },
    ];
    onChange({ packages: newPackages });
  };

  const handleRemovePackage = (index: number) => {
    const newPackages = [...packages];
    newPackages.splice(index, 1);
    onChange({ packages: newPackages });
  };

  const handlePackageChange = (index: number, field: string, value: any) => {
    const newPackages = [...packages];
    newPackages[index] = {
      ...newPackages[index],
      [field]: value,
    };
    onChange({ packages: newPackages });
  };

  const handleAddFeature = (packageIndex: number) => {
    const newPackages = [...packages];
    newPackages[packageIndex].features = [
      ...newPackages[packageIndex].features,
      "",
    ];
    onChange({ packages: newPackages });
  };

  const handleFeatureChange = (
    packageIndex: number,
    featureIndex: number,
    value: string
  ) => {
    const newPackages = [...packages];
    newPackages[packageIndex].features[featureIndex] = value;
    onChange({ packages: newPackages });
  };

  const handleRemoveFeature = (packageIndex: number, featureIndex: number) => {
    const newPackages = [...packages];
    newPackages[packageIndex].features.splice(featureIndex, 1);
    onChange({ packages: newPackages });
  };

  return (
    <div>
      <Typography variant="body1" className="text-center mb-6">
        Create service packages to offer clients different options at various
        price points.
      </Typography>

      <Grid container spacing={3}>
        {packages.map((pkg: any, index: number) => (
          <Grid size={{ xs: 12 }} key={index}>
            <Card className="relative">
              <IconButton
                className="absolute top-2 right-2 z-10"
                size="small"
                onClick={() => handleRemovePackage(index)}
              >
                <Delete fontSize="small" />
              </IconButton>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      placeholder="Package Name"
                      value={pkg.name}
                      onChange={(e) =>
                        handlePackageChange(index, "name", e.target.value)
                      }
                      variant="outlined"
                      className="mb-2"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                      fullWidth
                      placeholder="Price"
                      value={pkg.price}
                      onChange={(e) =>
                        handlePackageChange(index, "price", e.target.value)
                      }
                      variant="outlined"
                      className="mb-2"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      multiline
                      rows={2}
                      placeholder="Package Description"
                      value={pkg.description}
                      onChange={(e) =>
                        handlePackageChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      variant="outlined"
                      className="mb-2"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Typography variant="body2" className="mb-2">
                      Features
                    </Typography>
                    {pkg.features.map(
                      (feature: string, featureIndex: number) => (
                        <div key={featureIndex} className="flex mb-2">
                          <TextField
                            fullWidth
                            placeholder="Feature"
                            value={feature}
                            onChange={(e) =>
                              handleFeatureChange(
                                index,
                                featureIndex,
                                e.target.value
                              )
                            }
                            variant="outlined"
                            size="small"
                          />
                          <IconButton
                            size="small"
                            onClick={() =>
                              handleRemoveFeature(index, featureIndex)
                            }
                            className="ml-2"
                          >
                            <Delete fontSize="small" />
                          </IconButton>
                        </div>
                      )
                    )}
                    <Button
                      variant="text"
                      startIcon={<Add />}
                      onClick={() => handleAddFeature(index)}
                      className="mt-1"
                      size="small"
                    >
                      Add Feature
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid size={{ xs: 12 }}>
          <Button
            variant="outlined"
            startIcon={<Add />}
            onClick={handleAddPackage}
            className="mt-2"
            fullWidth
          >
            Add Package
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
