import React from "react";
import {
  Card,
  Container,
  createTheme,
  makeStyles,
  Typography,
  ThemeProvider,
} from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import axios from "axios";

const useStyles = makeStyles({
  card: {
    margin: 0,
    width: "100%",
    height: "500px",
    borderRadius: 10,
  },
  container: {
    width: 600,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  title: {
    marginTop: 20,
  },
  dropzone: {
    marginTop: 15,
    margin: "0 auto",
    width: "70%",
    backgroundColor: "rgba(0, 128, 255, 0.05)",
    borderStyle: "dashed",
    borderColor: "rgba(0, 128, 255, 0.25)",
    borderRadius: 15,
  },
  img: {
    position: "relative",
    bottom: "50%",
    left: "35%",
    width: 150,
  },
});

function UploadImg({ setData, setIsloading }) {
  const classes = useStyles();

  const onDropHandler = async (e) => {
    setIsloading(true);
    setData("on");
    const file = new FormData();
    file.append("image", e[0]);

    console.log(file);

    const result = await axios.post(
      "http://localhost:4000/img/upload",

      file,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log(result);
    setIsloading(false);
    setData(result.data);
  };
  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <Typography className={classes.title} variant="h4" align="center">
          Upload your image
        </Typography>
        <Typography variant="subtitle1" align="center">
          File should be .jpeg, png...
        </Typography>
        <DropzoneArea
          name="image"
          onDrop={(e) => onDropHandler(e)}
          Icon={"o"}
          dropzoneClass={classes.dropzone}
          filesLimit={1}
          acceptedFiles={["image/*"]}
          maxFileSize={10000000}
          dropzoneText="Drag and drop your image here"
        />
        <img
          className={classes.img}
          src="https://cdni.iconscout.com/illustration/premium/thumb/camera-1884989-1597908.png"
        />
        <Typography>Or</Typography>
      </Card>
    </Container>
  );
}

export default UploadImg;
