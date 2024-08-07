import React from 'react';
import { Select, Space } from 'antd';
import "../assets/style/antDesignCustom.css"
import { useWeatherStation } from '../pages/weatherStationProvider';

const SelectWeatherStation = () => {
  const { selectedStation, setSelectedStation } = useWeatherStation();

  const handleChange = (value) => {
    setSelectedStation(value);
  };

  return (
    <Space wrap style={{ backgroundColor: "transparent", width: '100%' }}>
      <Select
        defaultValue={selectedStation}
        value={selectedStation}
        style={{ width: "100%", borderRadius: '2rem', borderColor: '#fff !important'}}
        size="medium"
        className="ant-selector-custom"
        dropdownStyle={{ backgroundColor: '#303845' }}
        onChange={handleChange}
        options={[
          { value: 'San Andres', label: 'San Andres' },
          { value: 'Santiago de Maria', label: 'Santiago de Maria' },
          { value: 'Nueva Concepcion', label: 'Nueva Concepcion' },
          { value: 'Monte Cristo', label: 'Monte Cristo' },
        ]}
      />
    </Space>
  );
};

export default SelectWeatherStation;