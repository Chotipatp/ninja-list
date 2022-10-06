import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja | Home</title>
        <meta name='keywords' content='ninjas'/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magnam,
          exercitationem officia totam nesciunt laboriosam itaque possimus
          sapiente magni tenetur sit quo error officiis tempore expedita quae
          quaerat molestiae. Cum?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat
          facilis quidem voluptates necessitatibus cum quo dolorem voluptatum
          laborum, reprehenderit officiis sint unde veritatis suscipit porro
          tenetur, eaque rerum molestiae!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja List</a>
        </Link>
      </div>
    </>
  );
}
