import React, { useState, useRef } from 'react';
import { FaPlay } from 'react-icons/fa'; // Import the play icon from react-icons
import { Button } from '@nextui-org/react';

const ContactManagement = ({ onUpload }) => {
  const [csvFile, setCsvFile] = useState(null);
  const fileInputRef = useRef(null);
  
  const playDemoVideo = () => {
    // Placeholder for video logic
    console.log('Play demo video logic will be implemented here.');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCsvFile(file);
  };

  const handleUpload = () => {
    if (csvFile) {
      onUpload(csvFile);
      setCsvFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-reachly-bg">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Create AI Icebreaker</h1>
        <p className="mb-10 text-lg text-gray-600">Use AI and Machine Learning to create Email personalization at scale</p>
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <label htmlFor="file-upload" className="flex items-center justify-center w-52 h-52 border-2 border-dashed rounded-lg cursor-pointer bg-white shadow-lg overflow-hidden">
              <svg className="w-24 h-24" viewBox="0 0 40 40">
                <image href="/images/file-xls.png" width="40" height="40" />
              </svg>
            </label>
            <input id="file-upload" type="file" className="hidden" accept=".csv" onChange={handleFileChange} ref={fileInputRef} />
          </div>
          <Button variant="primary" className="mb-4 text-lg px-8 py-3 shadow-md hover:shadow-lg">
            Click to upload a .CSV
          </Button>
          <Button variant="outline" className="flex items-center text-lg text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out" onClick={playDemoVideo}>
            <FaPlay className="mr-2" /> Watch demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactManagement;
