"use client";
import Link from "next/link";
import styles from './links.module.css';
import Navlink from "./navLink/Navlink";
import { useState } from "react";
import Image from "next/image";

const Links = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {
          links.map(link => (
            <Navlink link={link} key={link.title} />
          ))
        }
        {
          session ? (
            <>
              {isAdmin && <Navlink link={{ title: 'Admin', path: '/admin' }} />}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <Navlink link={{ title: 'Login', path: '/login' }} />
          )
        }
      </div>

      {/* MENU BUTTON */}
      {/* <button className={styles.menuButton} onClick={()=>setOpen(!open)}>Menu</button> */}
      <Image src='/menu.png' alt="" width={30} height={30} onClick={()=>setOpen(!open)} className={styles.menuButton}/>
      {
        open && <div className={styles.mobileLinks}>
          {links.map(link=>(
            <Navlink link={link} key={link.title}/>
          ))}
        </div>
      }
    </div>
  )
}

export default Links;