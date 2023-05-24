'use client';
import React, { useState } from 'react';
import { UserCard, UserDetails } from 'components';
import { fetchProfileInformation } from './service';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchProfileInformation = async () => {
    setLoading(true);
    const user = await fetchProfileInformation('itsalb3rt');
    setUser(user);
    setLoading(false);
  }

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <p className="text-center mb-10">
        Profile component from the Components package and Ant Design
      </p>
      <h1 className="text-6xl font-bold">
        Profile
      </h1>
      <div>
        <UserCard
          user={{
            githubURL: 'https://github.com/itsalb3rt',
            blog: 'https://blog.albert.do/',
            avatarURL: 'https://avatars.githubusercontent.com/u/35310226?v=4',
            name: 'Albert',
            bio: 'I am a software engineer.'
          }}
        />
        {!user && <div className="text-center my-4">
          <button
            disabled={loading}
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleFetchProfileInformation}>
            Show full information
          </button>
        </div>}

        {user && <div className="mt-4">
          <UserDetails {...user} />
        </div>}
      </div>
    </div>
  );
}

export default ProfilePage;