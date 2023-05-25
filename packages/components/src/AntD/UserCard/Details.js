'use client'
import React from 'react'
import { Card } from 'antd'

const UserDetails = ({ company, location, bio, public_repos, followers, following, created_at, updated_at }) => {
  return (
    <Card title="User Details" style={{ width: 300 }}>
      <p style={{ margin: '10px auto' }}>
        <strong>Bio</strong>: {bio}
      </p>

      <p>
        <strong>Company</strong>: {company}
      </p>
      <p>
        <strong>Location</strong>: {location}
      </p>

      <p>
        <strong>Public Repos</strong>: {public_repos}
      </p>
      <p>
        <strong>Followers</strong>: {followers}
      </p>
      <p>
        <strong>Following</strong>: {following}
      </p>
      <p>
        <strong>Created At</strong>: {created_at}
      </p>
      <p>
        <strong>Updated At</strong>: {updated_at}
      </p>
    </Card>
  )
}

export default UserDetails
