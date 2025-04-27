import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";

const VerificationTestDialog = ({
  isModalOpen,
  setIsModalOpen,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}) => {
  return (
    <Dialog
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "#FFFFFF",
          color: "#222222",
          borderRadius: "32px",
          boxShadow: "0px 81.09px 76.98px 0px #0000000A",
          border: "none",
          padding: "0px",
        },
        "& .MuiDialogContent-root": {
          padding: "30px 40px 10px 40px !important",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        },
        "& .MuiDialogActions-root": {
          padding: "10px 10px 30px 10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <DialogContent>
        <h2 className="text-[24px] font-semibold text-lightblack">
          Submitted Successfully
        </h2>
        <p className="text-[18px] font-normal text-lightblack text-center">
          Your verification test has been submitted successfully. Our team is
          now reviewing your application. Once approved, you'll be able to start
          receiving job opportunities. Thank you for completing the test and
          proving your expertise. We'll notify you once your account is
          verified.
        </p>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() => setIsModalOpen(false)}
          sx={{
            fontSize: 14,
            fontWeight: 500,
            bgcolor: "#1F4B3F",
            borderRadius: "9999px",
            px: 4,
            py: 1,
            "&:hover": { bgcolor: "#1e5e2e" },
          }}
        >
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default VerificationTestDialog;
