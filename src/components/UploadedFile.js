import {
  Container,
  makeStyles,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";

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
  img: {
    width: "80%",
    borderRadius: 10,
    position: "relative",
    display: "block",
    margin: "auto",
  },
  title: {
    padding: 15,
  },
  copyContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    marginTop: 15,
  },
  urlText: {
    backgroundColor: "rgba(0, 128, 255, 0.05)",
    padding: 8,
    borderRadius: 10,
    border: "1px solid rgba(0, 128, 255, 0.35)",
  },
});

function UploadedFile({ data }) {
  const classes = useStyles();

  const [url, setUrl] = useState();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl("http://localhost:3000/image/" + data._id);
  }, [data]);

  return (
    <Container className={classes.container}>
      <Card>
        <Typography className={classes.title} variant="h4" align="center">
          Uploaded succesfully
        </Typography>
        {data && <img className={classes.img} src={data.name} />}
        <div className={classes.copyContainer}>
          <Typography className={classes.urlText} variant="subtitle2" noWrap>
            {url}
          </Typography>
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              navigator.clipboard.writeText(url);
              setTimeout(() => {
                setCopied(false);
              }, 3000);
              setCopied(true);
            }}
          >
            Copy Link
          </Button>
        </div>
        {copied && (
          <Typography align="center" color="alert">
            Copied to clipboard
          </Typography>
        )}
      </Card>
    </Container>
  );
}

export default UploadedFile;
