import React from 'react';
import './NotFound.scss';
import PlugBlack from '../../assets/icons/plug2.png';
import PlugWhite from '../../assets/icons/plug3.png';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

const NotFound = (props) => {

    const defaultSettings = {
        theme: "dark",
        background: "#3a3a3a",
        icon: PlugWhite
    }

    const config = {
        theme: props.theme != null ? props.theme : defaultSettings.theme,
        icon: props.theme === "light" ? PlugBlack : PlugWhite,
        background: props.background != null ? props.background : defaultSettings.background,
    };

    const _back = () => {
        window.history.back();
    }

    return (
        <div className={"notFound " + config.theme} style={{ backgroundColor: config.background }}>
            <div className="message">
                <Row className="justify-content-center">
                    <Col xs="6" sm="4" style={{ textAlign: "right" }}><img src={config.icon} alt="404" /></Col>
                    <Col xs="6" sm="4" style={{ textAlign: "left" }}>
                        <h1>404</h1>
                    </Col>
                </Row>
                <br />
                <h3>Uh oh!!</h3>
                <h4>{props.message}</h4>
                <br />
                <Button variant="info" onClick={_back}>{props.buttonText}</Button>
            </div>
        </div>
    );
};

export default NotFound;