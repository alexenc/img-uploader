import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import UploadedFile from "./components/UploadedFile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import UploadImg from "./components/UploadImg";
import Image from "./components/Image";

const theme = createTheme({
  overrides: {
    MuiDropzoneArea: {
      text: {
        position: "relative",
        bottom: -150,
        fontSize: 16,
        color: "grey",
        backgroundColor: "none",
      },
    },
  },
});

function App() {
  const [data, setData] = useState(null);
  const [isloading, setIsloading] = useState(false);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <ThemeProvider theme={theme}>
              {data ? (
                isloading ? (
                  <Loader />
                ) : (
                  <UploadedFile data={data} />
                )
              ) : (
                <UploadImg setData={setData} setIsloading={setIsloading} />
              )}
            </ThemeProvider>
          </Route>
          <Route path="/image/:id" component={Image} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
