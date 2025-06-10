import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Header from "../components/Homepage/header";
import Footer from "../components/Homepage/footer"

export default function Home() {
  return (
    <div>
      <Header/>
      <Footer/>
    </div>
  );
}
