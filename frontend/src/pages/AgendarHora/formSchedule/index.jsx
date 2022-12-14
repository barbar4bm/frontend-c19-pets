import { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { toast } from 'react-toastify';

import { apiHost } from "../../../config/client";
import { validateForms } from "../../../helpers/validateForms";

const defaultValuesForm = {
  name: "",
  email: "",
  phone: "",
  date: "",
  hour: ""
};

const defaultValuesError = {
  name: false,
  email: false,
  phone: false,
  date: false,
  hour: false
};

const defaultValuesCancel = {
  code: ""
};

const defaultValuesCancelError = {
  code: false
};

export const FormScheduleModal = ({ show, setShow, title, type, service }) => {
  const [formData, setFormData] = useState(defaultValuesForm);
  const [formError, setFormError] = useState(defaultValuesError);

  const [formDataCancel, setFormDataCancel] = useState(defaultValuesCancel);
  const [formErrorCancel, setFormErrorCancel] = useState(defaultValuesCancelError);

  const cleanData = () => {
    setFormData(defaultValuesForm);
    setFormError(defaultValuesError);

    setFormDataCancel(defaultValuesCancel);
    setFormErrorCancel(defaultValuesCancelError);
  };

  const handleClose = () => {
    cleanData();
    setShow(false);
  };

  const requestCreateSchedule = async (formData) => {
    return await apiHost.post(`/schedule/${service}`, formData);
  };

  const requestCancelSchedule = async (code) => {
    return await apiHost.delete(`/schedule/${code}`);
  };

  const handleSumit = async (event) => {
    event.preventDefault();
    const { state, errors } = validateForms(formData);
    setFormError({ formError, ...errors });
    if (state) {
      const { status, data } = await requestCreateSchedule(formData);
      if (status) {
        toast.success(data.msg);
      } else {
        toast.error(data.msg);
      }
      handleClose();
    }
  };

  const handleSumitCancel = async (event) => {
    event.preventDefault();
    const { state, errors } = validateForms(formDataCancel);
    setFormErrorCancel({ formErrorCancel, ...errors });
    if (state) {
      const { status, data } = await requestCancelSchedule(formDataCancel.code);
      if (status) {
        toast.success(data.msg);
      } else {
        toast.error(data.msg);
      }
      handleClose();
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        {type === "create" ? (
          <BodyForm
            formData={formData}
            setFormData={setFormData}
            formError={formError}
            service={service}
            handleSumit={handleSumit}
          />
        ) : (
          <BodyCancel
            formDataCancel={formDataCancel}
            setFormDataCancel={setFormDataCancel}
            formErrorCancel={formErrorCancel}
            handleSumit={handleSumitCancel}
          />
        )}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button
            variant="primary"
            onClick={type === "create" ? handleSumit : handleSumitCancel}
          >
            {type === "create" ? 'Agendar' : 'Anular'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const BodyForm = ({ formData, setFormData, formError, service, handleSumit }) => {
  const [hours, setHours] = useState([]);
  const [loading, setLoading] = useState(false);

  const requestAvailableHour = async (date, service) => {
    setLoading(true);
    const { data } = await apiHost.get(`/schedule/available/${date}/${service}`);
    setHours(data);
    setLoading(false);
  };

  const handleChange = async (target) => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
    if (name === 'date') {
      await requestAvailableHour(value, service);
    }
  };

  return (
    <Modal.Body>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                name="name"
                type="text"
                autoFocus
                value={formData.name}
                onChange={(event) => handleChange(event.target)}
                isInvalid={formError.name}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Correo electr??nico</Form.Label>
              <Form.Control
                name="email"
                type="email"
                autoFocus
                value={formData.email}
                onChange={(event) => handleChange(event.target)}
                isInvalid={formError.email}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>N??mero telef??nico</Form.Label>
              <Form.Control
                name="phone"
                type="text"
                autoFocus
                value={formData.phone}
                onChange={(event) => handleChange(event.target)}
                isInvalid={formError.phone}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Fecha de la reserva</Form.Label>
              <Form.Control
                name="date"
                type="date"
                autoFocus
                value={formData.date}
                onChange={(event) => handleChange(event.target)}
                isInvalid={formError.date}
              />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Select
              disabled={loading}
              name="hour"
              value={formData.hour}
              onChange={(event) => handleChange(event.target)}
              isInvalid={formError.hour}
            >
              <option>Seleccione hora disponible</option>
              {hours.length > 0 && <RenderOption options={hours} />}
            </Form.Select>
          </Col>
        </Row>
    </Modal.Body>
  );
};

const BodyCancel = ({ formDataCancel, setFormDataCancel, formErrorCancel, handleSumit }) => {
  
  const handleChange = async (target) => {
    const { name, value } = target;
    setFormDataCancel({ ...formDataCancel, [name]: value });
  };

  return (
    <Modal.Body>
        <Row>
          <Col md={12}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>C??digo de la reserva</Form.Label>
              <Form.Control
                name="code"
                type="text"
                autoFocus
                value={formDataCancel.code}
                onChange={(event) => handleChange(event.target)}
                isInvalid={formErrorCancel.code}
              />
            </Form.Group>
          </Col>
        </Row>
    </Modal.Body>
  );
};

const RenderOption = ({ options }) => {
  return options.map((value) => <option key={value.id} value={value.id}>{value.hour}</option>);
};