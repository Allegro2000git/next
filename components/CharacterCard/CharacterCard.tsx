import Image from "next/image";
import type {CharacterType} from "@/assets/hooks/useCharacters";
import styles from "./CharacterCard.module.scss";

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