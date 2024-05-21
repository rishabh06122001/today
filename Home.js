import React, { useState } from 'react';
import { LiaLanguageSolid } from 'react-icons/lia';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import { CiWallet } from 'react-icons/ci';
import { MdSupportAgent } from 'react-icons/md';
import { IoMdInformationCircle } from "react-icons/io";


const Home = () => {
  const [isChatOn, setIsChatOn] = useState(false);
  const [isCallOn, setIsCallOn] = useState(false);
  const [isVideoCallOn, setIsVideoCallOn] = useState(false);
  const [isEmergencyChat, setEmergencyChat] = useState(false);
  const [isEmergencyCall, setEmergencyCall] = useState(false);

  const handleChatClick = () => {
    setIsChatOn((prevState) => !prevState); // Toggle the state for Chat
  };

  const handleCallClick = () => {
    setIsCallOn((prevState) => !prevState); // Toggle the state for Call
  };

  const handleVideoCallClick = () => {
    setIsVideoCallOn((prevState) => !prevState); // Toggle the state for Video Call
  };

  const handleEmergencyChat= () => {
    setEmergencyChat((prevState) => !prevState); // Toggle the state for Video Call
  };

  const handleEmergencyCall = () => {
    setEmergencyCall((prevState) => !prevState); // Toggle the state for Video Call
  };
  return (
    <div className='mb-8 bg-slate-100 flex flex-col gap-2'>
      {/* Navbar Section */}
      <div id='Navbar' className='flex flex-row justify-between p-3 m-3 bg-white'>
        <div className='flex items-center space-x-4'>
          <span className="inline-block pl-10">Rishabh</span>
          <span className="inline-block">(id: 1234)</span>
        </div>
        <div className="flex pr-10 m-3">
          <button className="flex items-center space-x-4">
            <span className="inline-block">
              <LiaLanguageSolid className="w-6 h-6" />
            </span>
            <span className="inline-block">
              <HiOutlineBellAlert className="w-6 h-6" />
            </span>
            <span className="inline-block">
              <CiWallet className="w-6 h-6" />
            </span>
            <span className="inline-block">
              <MdSupportAgent className="w-6 h-6" />
            </span>
          </button>
        </div>
      </div>

      {/* Choose option selection */}
      <div className='items-center justify-center rounded ml-2 mr-2 border border-gray-100 bg-white'>
        {/* Header */}
        <div className='flex flex-row justify-between pl-10 pr-10'>
          <span className='font-bold text-xl pl-10'>Type</span>
          <span className='font-bold text-xl'>Status</span>
          <span className='font-bold text-xl'>Next Online Time</span>
        </div>

        {/* Options */}
        <div className="flex flex-row justify-between pl-10 pr-10 items-center my-4">
          <div className="flex flex-col items-start">
            <span className='pl-10 font-semibold'>Chat</span>
            <span className="pl-5">Indai: $9.0</span>
          </div>
          <button onClick={handleChatClick} className={`relative rounded-full w-24 h-8 flex items-center p-1 ${isChatOn ? 'bg-green-400' : 'bg-gray-300'}`}>
            <div className={`absolute left-1 top-1 rounded-full w-9 h-6 bg-white shadow-md transform transition-transform ${isChatOn ? 'translate-x-12' : ''}`} />
            <span className={`absolute left-2 text-xs font-medium ${isChatOn ? 'text-gray-300' : 'text-gray-700'}`}>OFF</span>
            <span className={`absolute right-4 text-xs font-medium ${isChatOn ? 'text-gray-700' : 'text-gray-300'}`}>ON</span>
          </button>
          <span className="border border-black flex items-center justify-center p-2 rounded">
            03 May 24, 11:00 AM
          </span>
        </div>

        <div className="flex flex-row justify-between pl-10 pr-10 items-center my-4">
        <div className="flex flex-col items-start">
            <span className='pl-10 font-semibold'>Call</span>
            <span className="pl-5">Indai: $9.0</span>
          </div>
          <button onClick={handleCallClick} className={`relative rounded-full w-24 h-8 flex items-center p-1 ${isCallOn ? 'bg-green-400' : 'bg-gray-300'}`}>
            <div className={`absolute left-1 top-1 rounded-full w-9 h-6 bg-white shadow-md transform transition-transform ${isCallOn ? 'translate-x-12' : ''}`} />
            <span className={`absolute left-2 text-xs font-medium ${isCallOn ? 'text-gray-300' : 'text-gray-700'}`}>OFF</span>
            <span className={`absolute right-4 text-xs font-medium ${isCallOn ? 'text-gray-700' : 'text-gray-300'}`}>ON</span>
          </button>
          <span className="border border-black flex items-center justify-center p-2 rounded">
            03 May 24, 11:00 AM
          </span>
        </div>

        <div className="flex flex-row justify-between pl-10 pr-10 items-center my-4">
            <div className="flex flex-col items-start">
                <span className='pl-5 font-semibold'>Video Call</span>
                <span className="pl-5">Indai: $9.0</span>
            </div>
          <button onClick={handleVideoCallClick} className={`relative rounded-full w-24 h-8 flex items-center p-1 ${isVideoCallOn ? 'bg-green-400' : 'bg-gray-300'}`}>
            <div className={`absolute left-1 top-1 rounded-full w-9 h-6 bg-white shadow-md transform transition-transform ${isVideoCallOn ? 'translate-x-12' : ''}`} />
            <span className={`absolute left-2 text-xs font-medium ${isVideoCallOn ? 'text-gray-300' : 'text-gray-700'}`}>OFF</span>
            <span className={`absolute right-4 text-xs font-medium ${isVideoCallOn ? 'text-gray-700' : 'text-gray-300'}`}>ON</span>
          </button>
          <span className="border border-black flex items-center justify-center p-2 rounded">
            03 May 24, 11:00 AM
          </span>
        </div>

        <div>
        
        <div className="flex flex-row justify-between pl-10 pr-40 items-center my-4">
            <div className="flex flex-col items-start">
                <span className=' font-semibold'>Emergency Chat</span>
                <span className="pl-5">Indai: $9.0</span>
            </div>
            <div className='pr-6'>
              <button onClick={handleEmergencyChat} className={`relative rounded-full w-24 h-8 flex items-center p-1 ${isEmergencyChat ? 'bg-green-400' : 'bg-gray-300'}`}>
                  <div className={`absolute left-1 top-1 rounded-full w-9 h-6 bg-white shadow-md transform transition-transform ${isEmergencyChat ? 'translate-x-12' : ''}`} />
                  <span className={`absolute left-2 text-xs font-medium ${isEmergencyChat ? 'text-gray-300' : 'text-gray-700'}`}>OFF</span>
                  <span className={`absolute right-4 text-xs font-medium ${isEmergencyChat ? 'text-gray-700' : 'text-gray-300'}`}>ON</span>
              </button>
            </div>
            <div>
            <span>Used: 0</span>
            
        </div>
        </div>
        <div className="flex flex-row justify-between pl-10 pr-36 items-center my-4">
            <div className="flex flex-col items-start">
                <span className=' font-semibold'>Emergency Call</span>
                <span className="pl-5">Indai: $9.0</span>
            </div>
            <div className='pl-16'>
              <button onClick={handleEmergencyCall} className={`relative rounded-full w-24 h-8 flex items-center p-1 ${isEmergencyCall ? 'bg-green-400' : 'bg-gray-300'}`}>
                  <div className={`absolute left-1 top-1 rounded-full w-9 h-6 bg-white shadow-md transform transition-transform ${isEmergencyCall ? 'translate-x-12' : ''}`} />
                  <span className={`absolute left-2 text-xs font-medium ${isEmergencyCall ? 'text-gray-300' : 'text-gray-700'}`}>OFF</span>
                  <span className={`absolute right-4 text-xs font-medium ${isEmergencyCall ? 'text-gray-700' : 'text-gray-300'}`}>ON</span>
              </button>
            </div>
            <div className='pl-20'>
                <span className='pl-2'>Total: 150</span>
                <p className='pl-5'><IoMdInformationCircle /></p>
            </div>
        </div>
      </div>
      </div>

      {/* view performance */}
      <div className=' bg-yellow-300 p-3 m-3 border rounded flex items-center gap-40 justify-between'>
        <div className='pl-4'>
          <p className=''>Check Your Performance</p>
          <p className=''>Look into your daily rating, earning and performance on AstroCaptain</p>
        </div>
        <div>
          <button className='bg-white border rounded p-4'>
            View my Score
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
