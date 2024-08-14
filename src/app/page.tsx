import Image from "next/image";
import styles from "./page.module.css";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className={styles.main}>
      <Title
        titleText="Welcome to Bookhive!"
        subTitleText={"Discover more about book's world"}
      />
    </main>
  );
}
