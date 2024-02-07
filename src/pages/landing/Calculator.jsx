import React, { useState } from 'react';

const Calculator = () => {
  const [service, setService] = useState('');
  const [paperType, setPaperType] = useState('');
  const [urgency, setUrgency] = useState('');
  const [pages, setPages] = useState('');
  const [level, setLevel] = useState('');

  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  const handlePaperTypeChange = (e) => {
    setPaperType(e.target.value);
  };

  const handleUrgencyChange = (e) => {
    setUrgency(e.target.value);
  };

  const handlePagesChange = (e) => {
    setPages(e.target.value);
  };

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    
  };

  return (
    <div className="w-[40%]">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='w-full'>
          <label htmlFor="service" className="block text-gray-700">Services:</label>
          <select
            id="service"
            className="form-select h-10 mt-1 block w-[95%] rounded-md border-2"
            required
            value={service}
            onChange={handleServiceChange}
          >
            <option value="">Select Service</option>
            <option value="service1">Service 1</option>
            <option value="service2">Service 2</option>
            <option value="service3">Service 3</option>
          </select>
        </div>
        <div className='w-full'>
          <label htmlFor="paperType" className="block text-gray-700">Type of paper:</label>
          <select
            id="paperType"
            className="form-select h-10 mt-1 block w-[95%] rounded-md border-2"
            required
            value={paperType}
            onChange={handlePaperTypeChange}
          >
            <option value="">Select Paper Type</option>
            <option value="paperType1">Paper Type 1</option>
            <option value="paperType2">Paper Type 2</option>
            <option value="paperType3">Paper Type 3</option>
          </select>
        </div>
        <div className='w-full'>
          <label htmlFor="urgency" className="block text-gray-700">Urgency:</label>
          <select
            id="urgency"
            className="form-select h-10 mt-1 block w-[95%] rounded-md border-2"
            required
            value={urgency}
            onChange={handleUrgencyChange}
          >
            <option value="">Select Urgency</option>
            <option value="urgent">Urgent</option>
            <option value="normal">Normal</option>
            <option value="not-urgent">Not Urgent</option>
          </select>
        </div>
        <div className='w-full'>
          <label htmlFor="pages" className="block text-gray-700">Pages:</label>
          <select
            id="pages"
            className="form-select h-10 mt-1 block w-[95%] rounded-md border-2"
            required
            value={pages}
            onChange={handlePagesChange}
          >
            <option value="">Select Pages</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className='w-full'>
          <label htmlFor="level" className="block text-gray-700">Level:</label>
          <select
            id="level"
            className="form-select h-10 mt-1 block w-[95%] rounded-md border-2"
            required
            value={level}
            onChange={handleLevelChange}
          >
            <option value="">Select Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-[95%]">
          Continue
        </button>
      </form>
    </div>

  );
};

export default Calculator;
