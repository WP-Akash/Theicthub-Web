import Image from "next/image";
import Foote_bg from "@/public/img/footer-bg.jpg"
// export default function Home() {
//   return (
//     <>

//     </>
//   );
// }

import React from 'react'
import Link from "next/link";
import Service from "./Components/Service";

function page() {
  return (
    <>
      <section className='bg-white py-2 footer_area' style={{ backgroundImage: "url(../img/pattern-1.jpg)" }}>
        <div className="container mx-auto">
          <div className="flex justify-between text-white mb-20">
            <div>
              <span className="uppercase">our services</span>
              <h2>Services we offer</h2>
            </div>
            <div className="">
              <Link className="btn" href="#">View All Services</Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Service/>
            <Service/>
            <Service/>
            <Service/>
            <Service/>
            <Service/>
          </div>
        </div>

      </section><br />
    </>
  )
}

export default page
