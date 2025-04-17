import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface MUIBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function MUIBreadCrumbs({ items }: MUIBreadcrumbsProps) {
  const breadcrumbs = items?.map((item, index) =>
    item.href ? (
      <Link
        key={index}
        href={item?.href}
        className="text-[14px] font-medium text-darkgray"
      >
        {item?.label}
      </Link>
    ) : (
      <Typography
        key={index}
        sx={{ color: "#1F4B3F", fontSize: 14, fontWeight: 500 }}
      >
        {item?.label}
      </Typography>
    )
  );

  return (
    <Breadcrumbs
      separator={
        <NavigateNextIcon fontSize="small" sx={{ color: "#B7B7B7" }} />
      }
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
}
