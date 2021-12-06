import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Homepage from "../compnents/Homepage";
import Header from "../compnents/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Homepage />
    </div>
  );
}
