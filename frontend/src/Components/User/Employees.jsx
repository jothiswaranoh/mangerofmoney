import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../../../src/data/dummy';

const Employees = () => {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    number: '',
    email: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Submitted Data:', userData);
    setUserData({
      name: '',
      number: '',
      email: '',
      address: ''
    });
    setShowModal(false);
  };

  return (
    <div>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Button variant="primary" onClick={() => setShowModal(true)}>Add User</Button>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={userData.name} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="number" className="form-label">Number</label>
            <input type="text" className="form-control" id="number" name="number" value={userData.number} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={userData.email} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control" id="address" name="address" value={userData.address} onChange={handleInputChange} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
      <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
        <GridComponent
          dataSource={employeesData}
          width="auto"
          allowPaging
          allowSorting
          pageSettings={{ pageCount: 5 }}
          editSettings={{ allowDeleting: true, allowEditing: true }}
          toolbar={['Search']}
        >
          <ColumnsDirective>
            {employeesGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Search, Page]} />
        </GridComponent>
      </div>
    </div>
  );
};

export default Employees;
