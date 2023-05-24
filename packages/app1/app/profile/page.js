'use client';
import React from 'react';
import { UserCard } from 'components';

const ProfilePage = () => {
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
      </div>
    </div>
  );
}

export default ProfilePage;