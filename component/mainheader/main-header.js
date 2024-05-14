import Link from "next/link";
import Image from "next/image";
import logo from'@/assets/logo.png'
import classes from'./main-header.module.css'
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-Link";
export default function  MainHeader()
{
    return (
      <>
      <MainHeaderBackground/>
  <header className={classes.header}>
    <Link href='/' className={classes.logo}>
        <Image src={logo} alt="food on the plate"  priority></Image>
        Nextlevel food
    </Link>

    <nav className={classes.nav}>
    <ul>
       <li>
      <NavLink href="/meals">Meal</NavLink>
       </li>
       <li>
       <NavLink href="/community">Community</NavLink>
       </li>
    </ul>
   </nav>
  </header>
  </>
  
    );
}