import React from "react";
import { PopUp } from "./style";
import error from "../../assets/icons/error.svg";

export default function Popup(props) {
    const { msg, show } = props; //TODO color
    if (!show) return null;
    return (
        <PopUp>
            <p>
                <img src={error} alt="error icon" width="20" height="20"></img>
                {msg}
            </p>
        </PopUp>
    );
}
