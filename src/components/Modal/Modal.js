import React from "react";
import ReactDOM from "react-dom";
import "../UI/ASSETS/style.scss";

const Modal = (props) => {
    const PortalElement = document.getElementById("overlays");

    const BackDrop = () => {
        return <div className="backdrop" onClick={props.onClose} />;
    };

    const ModalOverlay = (props) => {
        return (
            <div className="modal">
                <div>{props.children}</div>
            </div>
        );
    };

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, PortalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, PortalElement)}
        </React.Fragment>
    );
};

export default Modal;
