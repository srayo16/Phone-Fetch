import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Shared/Firebase.init';
import './Dashboard.css';

const Dashboard = () => {
    const [user] = useAuthState(auth);

    return (
        <div className='container mt-3' style={{ height: '680px' }}>
            <div className='forflex'>
                <div>
                    <img src={user?.photoURL} className='img-fluid' alt="" />
                </div>
                <div className='text-center fixxingforRespo'>
                    <h1>Your Name: {user?.displayName}</h1>
                    <p className='fw-bold'>Email Address: {user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;