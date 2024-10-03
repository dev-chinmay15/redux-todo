// src/components/TableComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData } from '../redux/actions/formActions';
import './styles.css'; 
const TableComponent = ({ setSelectedIndex }) => {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.form.formData);

    const handleEdit = (index) => {
        setSelectedIndex(index);
    };

    const handleDelete = (index) => {
        dispatch(deleteData(index));
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile No</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {formData.map((data, index) => (
                    <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.mobile}</td>
                        <td>{data.age}</td>
                        <td>{data.city}</td>
                        <td>
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableComponent;
