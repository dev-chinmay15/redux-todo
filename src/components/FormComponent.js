// src/components/FormComponent.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, updateData } from '../redux/actions/formActions';
import './styles.css'; 
const FormComponent = ({ selectedIndex, setSelectedIndex }) => {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.form.formData);
    
    const [form, setForm] = useState({
        name: '',
        email: '',
        mobile: '',
        age: '',
        city: '',
    });

    useEffect(() => {
        if (selectedIndex !== null) {
            const data = formData[selectedIndex];
            setForm(data);
        } else {
            setForm({
                name: '',
                email: '',
                mobile: '',
                age: '',
                city: '',
            });
        }
    }, [selectedIndex, formData]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedIndex !== null) {
            dispatch(updateData(selectedIndex, form));
        } else {
            dispatch(addData(form));
        }
        setForm({
            name: '',
            email: '',
            mobile: '',
            age: '',
            city: '',
        });
        setSelectedIndex(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
            <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile No" required />
            <input name="age" value={form.age} onChange={handleChange} placeholder="Age" required />
            <input name="city" value={form.city} onChange={handleChange} placeholder="City" required />
            <button type="submit">{selectedIndex !== null ? 'Update' : 'Add'}</button>
        </form>
    );
};

export default FormComponent;
