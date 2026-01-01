import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import Image from "next/image";
import mainImage from "@/public/rickandMorty.png";
import next from "@/public/next.svg";
import style from "styles/Home.module.scss";


function Home() {
  return (
    <div className={style.main}>
      <HeadMeta title={"Create Next App"} />
        <Image src={mainImage} alt={""} />
        <h1 className={style.title}>Rick and Morty</h1>
        <Image src={next} alt={""} />
    </div>
  );
}

Home.getLayout = getLayout

export default Home