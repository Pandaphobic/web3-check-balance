import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    top: "50%",
    bottom: "50%",
    left: "50%",
    right: "50%",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalComp() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        style={{
          margin: 8,
        }}
        size="medium"
        variant="outlined"
        color="secondary"
      >
        Donate
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="simple-modal-title"
        // aria-describedby="simple-modal-description"
      >
        {"Word"}
      </Modal>
    </>
  );
}
