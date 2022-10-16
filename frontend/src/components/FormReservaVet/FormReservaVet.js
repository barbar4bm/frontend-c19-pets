import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';

export const FormReservaVet = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const loadOptions = async () => await axios.get("http://localhost:3001/api/Vet").then((res) => {
        return res.data.map((i) => ({ value: i.nombre, label: i.nombre }));
    })

    return (
        <div className="FormVet">
            <AsyncSelect
                defaultOptions={true}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                loadOptions={loadOptions}
            />
        </div>
    );

}
