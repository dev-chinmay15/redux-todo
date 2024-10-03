// src/App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import FormComponent from './components/FormComponent';
import TableComponent from './components/TableComponent';

const App = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <Provider store={store}>
            <div>
                <h1>CRUD with Redux</h1>
                <FormComponent selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
                <TableComponent setSelectedIndex={setSelectedIndex} />
            </div>
        </Provider>
    );
};

export default App;
