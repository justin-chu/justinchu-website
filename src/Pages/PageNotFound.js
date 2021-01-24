import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

const PageNotFound = () => {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push("/"), [history]);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Helmet>
        <title>404: Page Not Found - Justin Chu</title>
        <meta name="description" content="404: Page Not Found" />
      </Helmet>
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          padding: 20,
          minHeight: "75vh",
          textAlign: "center",
        }}
      >
        <h1
          className="sub-header"
          style={{ margin: "5% 0 0 0", fontSize: 120 }}
        >
          404
        </h1>
        <p style={{ fontSize: 24, marginTop: 10 }}>Page not found!</p>
        <button
          style={{ margin: 0 }}
          className="button"
          onClick={handleOnClick}
        >
          Go back!
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
