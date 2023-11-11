import {useState} from "react";
import { Container, Row, Col} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

export const Conctact = () =>{
    const formInitialDetails = {
        firstName:'',
        lastName:'',
        email: '',
        phone: '',
        message:''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Entre em contato</h2>
                        <form>
                            <Row>
                                <Col sm={6} classname="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstname', e.target.value)}/>
                                </Col>
                                <Col sm={6} classname="px-1">
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}