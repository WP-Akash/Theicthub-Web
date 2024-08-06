import Link from 'next/link';
import React from 'react'
import Image from 'next/image'
import Logo from "@/public/img/The-ICT-hub-logo.png"
import Foote_bg from "@/public/img/footer-bg.jpg"
function Footer() {
  const backgroundImageStyle = {
    backgroundImage: 'url{Foote_bg}',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

  return (
    <>
      <section className='bg-white py-2 footer_area' style={{ backgroundImage: "url(../img/footer-bg.jpg)"}}>
        <div className="container mx-auto footer_top">
          <div className="flex justify-between">
            <div className="footer_up">
              <h6>Send Email</h6>
              <Link href="mailto:info@theicthub.com">info@theicthub.com</Link>
            </div>
            <div className="footer_up">
              <Image src={Logo} width={100} height={100} />
            </div>
            <div className="footer_up">
              <h6>Call now</h6>
              <Link href="tel:+8801708591899">+880 1708 591 899</Link>
            </div>
          </div>
        </div>
        <div className="container mx-auto footer_bottom">
          <div className="flex justify-between">
            <div className="footer_down">
              <h4>QUICK LINK</h4>
              <ul>
                <li><Link href="#">Home</Link></li>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Services</Link></li>
                <li><Link href="#">Industry</Link></li>
                <li><Link href="#">Career</Link></li>
                <li><Link href="#">Contact Us</Link></li>
              </ul>

            </div>
            <div className="footer_down">
              <h6>Explore Services</h6>
              <ul>
                <li><Link href="#">Software Development</Link></li>
                <li><Link href="#">Web Application</Link></li>
                <li><Link href="#">E-Commerce & Marketplace</Link></li>
                <li><Link href="#">Mobile App Development</Link></li>
                <li><Link href="#">Enterprise Software Development</Link></li>
                <li><Link href="#">Game Development</Link></li>
                <li><Link href="#">Website Design And Development</Link></li>
                <li><Link href="#">Business Intelligence</Link></li>
                <li><Link href="#">Digital Marketing</Link></li>
              </ul>
            </div>
            <div className="footer_down">
              <h6>Contact</h6>
              <p>House no. 8, 2nd Floor, Mohammadia<br /> Housing main road, Mohammadpur,<br /> Dhaka – 1207</p>
              <div className="social_media">
                <Link href="tel:+8801708591899">Facebook</Link>
                <Link href="tel:+8801708591899">Twitter</Link>
                <Link href="tel:+8801708591899">Linkdin</Link>
              </div>

            </div>
          </div>
        </div>
      </section>
      <footer>
        <p className='text-center'>© Copyright 2024 by theicthub.com</p>
      </footer>
    </>
  )
}

export default Footer;
