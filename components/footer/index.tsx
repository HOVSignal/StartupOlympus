import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> <span>Startup</span>Olympus</h6>
            <p></p>
            <ul className="site-footer__social-networks">
              <li><a href="https://www.facebook.com/profile.php?id=100076087909620"><i className="icon-facebook"></i></a></li>
              <li><a href="https://www.linkedin.com/company/startup-olympus/?viewAsMember=true"><i className="icon-linkedin"></i></a></li>
              <li><a href="https://www.instagram.com/startup.olympus/"><i className="icon-instagram"></i></a></li>
              <li><a href="https://www.youtube.com/watch?v=r1rBDEUV5sY"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Shopping online</li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shipping and Delivery</a></li>
              <li><a href="#">Payment options</a></li>
            </ul>

            <ul>
              <li>Contact</li>
              <li><a href="#">inxubationcenter@aui.ma</a></li>
              <li><a href="#">Room 005, Building 4 - Al Akhawayn University in Ifrane</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>STARTUP OLYMPUS - © 2022. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer