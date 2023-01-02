import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css';

function Footer() {
  return (
      <div className='footer'>
          <div className='socialMediaIcons'>
              <InstagramIcon />
              <FacebookIcon />
              <TwitterIcon />
              <PinterestIcon />
          </div>
          <p> &copy; 2023 Milsan</p>
    </div>
  )
}

export default Footer