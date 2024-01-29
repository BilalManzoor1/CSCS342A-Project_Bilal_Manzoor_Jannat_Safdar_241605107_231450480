import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {Container, Modal, Form} from 'react-bootstrap';
import './Laurels.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Laurels = () => {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([]);

    const [formData, setFormData] = useState({
        firstName: '', lastName: '', busId: '', seatNumber: 1, email: '',
    });
    const [errors, setErrors] = useState({
        firstName: '', busId: '', seatNumber: '', email: '',
    });

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setShowModal(false);
        setErrors({
            firstName: '', busId: '', seatNumber: '', email: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors({
            firstName: '', busId: '', seatNumber: '', email: '',
        });

        if (!formData.firstName) {
            setErrors({...errors, firstName: 'Please enter your first name.'});
            return;
        }

        if (!formData.busId) {
            setErrors({...errors, busId: 'Bus ID is required.'});
            return;
        }

        if (!formData.seatNumber) {
            setErrors({...errors, seatNumber: 'Seat Number is required.'});
            return;
        }

        if (!formData.email) {
            setErrors({...errors, email: 'Email is required.'});
            return;
        }

        const updatedData = data.map((bus) => {
            if (bus.id.toString() === formData.busId) {
                const bookedSeatNumbers = bus.booked_seat_numbers || [];
                const updatedBookedSeatNumbers = [...bookedSeatNumbers, formData.seatNumber];

                return {
                    ...bus,
                    seats_available: bus.capacity - updatedBookedSeatNumbers.length,
                    booked_seat_numbers: updatedBookedSeatNumbers,
                };
            }
            return bus;
        });

        setData(updatedData);

        const confirmationMessage = `Seat ${formData.seatNumber} booked successfully. Do you want to close the window?`;

        if (window.confirm(confirmationMessage)) {
            setFormData({
                firstName: '', lastName: '', busId: '', seatNumber: 1, email: '',
            });
            setShowModal(false);
        } else {
            // User clicked Cancel in the confirmation dialog
        }
    };

    useEffect(() => {
        console.log('Fetching data...');
        fetch('http://localhost:8000/api/buses/')
            .then(response => response.json())
            .then(data => {
                console.log('Response Body:', data);
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const convertTo12HourFormat = (time24) => {
        const [hours, minutes] = time24.split(":");
        const parsedHours = parseInt(hours, 10);

        const period = parsedHours >= 12 ? "PM" : "AM";
        const hours12 = parsedHours % 12 || 12;

        return `${hours12}:${minutes} ${period}`;
    };

    return (
        <div>
            <Container>
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Booking Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formFirstName" style={{marginBottom: '15px'}}>
                                <Form.Label style={{fontSize: '18px'}}>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your first name"
                                    style={{fontSize: '16px', padding: '10px'}}
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                />
                                {errors.firstName && <div style={{color: 'red'}}>{errors.firstName}</div>}
                            </Form.Group>

                            <Form.Group controlId="formLastName" style={{marginBottom: '15px'}}>
                                <Form.Label style={{fontSize: '18px'}}>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your last name"
                                              style={{fontSize: '16px', padding: '10px'}}/>
                            </Form.Group>

                            <Form.Group controlId="formBusId" style={{marginBottom: '15px'}}>
                                <Form.Label style={{fontSize: '18px'}}>Bus ID</Form.Label>
                                <Form.Control
                                    as="select"
                                    style={{fontSize: '16px', padding: '10px'}}
                                    value={formData.busId}
                                    onChange={(e) => setFormData({...formData, busId: e.target.value})}
                                >
                                    <option value="" disabled>Select a Bus ID</option>
                                    {data.map((bus) => (<option key={bus.id} value={bus.id}>{bus.bus_id}</option>))}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formSeatNumber" style={{marginBottom: '15px'}}>
                                <Form.Label style={{fontSize: '18px'}}>Seat Number</Form.Label>
                                <Form.Control
                                    as="select"
                                    style={{fontSize: '16px', padding: '10px'}}
                                    value={formData.seatNumber}
                                    onChange={(e) => setFormData({...formData, seatNumber: e.target.value})}
                                    disabled={!formData.busId}
                                >
                                    {data
                                        .filter((bus) => bus.id.toString() === formData.busId)
                                        .map((selectedBus) => {
                                            const bookedSeatNumbers = selectedBus.booked_seat_numbers || [];
                                            const allSeatNumbers = Array.from({length: selectedBus.capacity}, (_, index) => index + 1);

                                            return allSeatNumbers.map((seatNumber) => (
                                                <option key={seatNumber}
                                                        disabled={bookedSeatNumbers.includes(seatNumber)}>
                                                    {seatNumber}
                                                </option>
                                            ));
                                        })}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formEmail" style={{marginBottom: '15px'}}>
                                <Form.Label style={{fontSize: '18px'}}>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    style={{fontSize: '16px', padding: '10px'}}
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                                {errors.email && <div style={{color: 'red'}}>{errors.email}</div>}
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Container>

            <Container>
                <div className="aboutcustom text-center p-3 m-5">
                    <h1>Booking List</h1>
                    <div className="mt-5">
                        <Button variant="outline-primary" size="lg" onClick={handleShowModal}>
                            Book a Seat!
                        </Button>
                    </div>
                </div>

                <div>
                    <Table responsive="sm">
                        <thead>
                        <tr>
                            <th>Bus ID</th>
                            <th>Plate Number</th>
                            <th>Capacity</th>
                            <th>Booking Seats Available</th>
                            <th>Origin</th>
                            <th>Destination</th>
                            <th>Departure Time</th>
                            <th>Arrival Time</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>{row.bus_id}</td>
                                <td>{row.plate_number}</td>
                                <td>{row.capacity}</td>
                                <td>{row.seats_available}</td>
                                <td>{row.origin}</td>
                                <td>{row.destination}</td>
                                <td>{convertTo12HourFormat(row.departure_time)}</td>
                                <td style={{color: row.status === 'Arrived' ? 'greenyellow' : 'inherit'}}>
                                    {convertTo12HourFormat(row.arrival_time)}
                                </td>
                                <td style={{color: row.status === 'Arrived' ? 'red' : 'blue'}}>{row.status}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </Container>

        </div>
    );
};

export default Laurels;



