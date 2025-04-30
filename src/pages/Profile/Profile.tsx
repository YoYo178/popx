import './Profile.css'

export const Profile = () => {
  return (
    <div className="profile-modal">
      <span>Account Settings</span>
      <div className="profile-section">
        <div className="profile-container">
          <img src="/popx/profile-photo.png" alt="profile-photo" className="profile-photo" width='84' height='84' />
          <div className="profile-details-container">
            <strong>Marry Doe</strong>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>
        <div className="profile-description">
          <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing</p>
          <p>Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut</p>
          <p>Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
        </div>
      </div>
      <div className="profile-border"></div>
    </div>
  )
}
