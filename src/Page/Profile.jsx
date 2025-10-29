import React from 'react';
import NavBar from '../Components/NavBar';

const Profile = () => {
    return (
        <div>
            <header>
                <div className="max-w-[1340px] mx-auto px-4">
                    <nav className='h-fit sticky top-0 z-50 left-0 py-5'>
                        <NavBar></NavBar>
                    </nav>
                </div>
            </header>
            <h1>here will be my profile</h1>
        </div>
    );
};

export default Profile;