import React from "react";
import "./custom-button.styles.scss";

export default function CusttomButton({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) {
  return (
    <button
      className={`
      ${inverted ? "inverted" : ""}
         ${isGoogleSignIn ? "google-sign-in" : ""} custom-button  `}
      {...otherProps}
    >
      {children}
    </button>
  );
}
