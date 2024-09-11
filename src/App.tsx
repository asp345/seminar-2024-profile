import './App.css';

// import { useState } from 'react';

function App() {
  const profileInfo = {
    name: '임찬영',
    englishName: 'Chanyeong Lim',
    id: 'asp345',
    role: [
      "Dept. of Computer Science & Engineering '23",
      'Wafflestudio 21.5기',
      'Backend Developer @SNUTT (Apr 2024~)',
      'New to Frontend Development',
    ],
    github: 'https://github.com/asp345/',
    instagram: 'https://www.instagram.com/ich_yng44/',
  };
  const iconLinks = {
    github: 'https://cdn.svgporn.com/logos/github-icon.svg',
    instagram: 'https://cdn.svgporn.com/logos/instagram-icon.svg',
  };
  const roleList = profileInfo.role.map((role, index) => {
    return <li key={index}>{role}</li>;
  });
  return (
    <>
      <div className="profile-card">
        <div className="profile-frame">
          <img
            src="https://avatars.githubusercontent.com/u/10955734?v=4"
            className="profile-picture"
          />
          <div className="profile-title">
            <h2>{profileInfo.name}</h2>
            <p>
              {profileInfo.englishName}
              <br />@{profileInfo.id}
            </p>
          </div>
        </div>
        <div className="profile-details">
          <div className="profile-icons">
            <a
              href={profileInfo.github}
              rel="norefferer noreferrer"
              target="_blank"
            >
              <img src={iconLinks.github} className="social-icons" />
            </a>
            <a
              href={profileInfo.instagram}
              rel="norefferer noreferrer"
              target="_blank"
            >
              <img src={iconLinks.instagram} className="social-icons" />
            </a>
          </div>
          <ul>{roleList}</ul>
        </div>
      </div>
    </>
  );
}

export default App;
