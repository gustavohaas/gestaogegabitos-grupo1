import { useEffect, useState } from "react";
import { CloseBtn, Content, Overlay, Popup, Title } from "./style";
import PropTypes from "prop-types";

const CustomPopup = (props) => {
    const [show, setShow] = useState(false);

    const closeHandler = (e) => {
        setShow(false);
        props.onClose(false);
    };

    useEffect(() => {
        setShow(props.show);
    }, [props.show]);

    return (
        <Overlay style={{ visibility: show ? "visible" : "hidden", opacity: show ? "1" : "0" }}>
            <Popup>
                <Title>{props.title}</Title>
                {/* <CloseBtn onClick={closeHandler}>
                    &times;
                </CloseBtn> */}
                <Content>{props.children}</Content>
            </Popup>
        </Overlay>
    );
};

CustomPopup.propTypes = {
    title: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default CustomPopup;