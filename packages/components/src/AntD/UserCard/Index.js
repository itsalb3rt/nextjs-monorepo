import React from 'react';
import { Card, Avatar } from 'antd';

const { Meta } = Card;

const UserCard = ({ user }) => {

  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      actions={[
        <a href={user.githubURL} target="_blank" rel="noopener noreferrer">GitHub</a>,
        <a href={user.blog} target="_blank" rel="noopener noreferrer">Blog</a>,
      ]}
    >
      <Meta
        avatar={<Avatar src={user.avatarURL} />}
        title={user.name}
        description={user.bio}
      />
    </Card>
  );
}

export default UserCard;