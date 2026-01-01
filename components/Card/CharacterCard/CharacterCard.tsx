import Image from "next/image";
import styles from "./CharacterCard.module.scss";
import type {CharacterType} from "@/assets/api/rick-and-morty-api";

type Props = {
    person: CharacterType
};
export const CharacterCard = ({person}: Props) => {
    return (
        <div className={styles.card}>
            {person.name}
            <Image width={300} height={300} src={person.image} alt={`Picture of ${person.name}`}/>
        </div>
    );
};