import Image from "next/image";
import type {CharacterType} from "@/assets/api/rick-and-morty-api";
import {Card} from "@/components/Card/Card";
import Link from "next/link";
import aliveStatus from "public/statuses/alive.png";
import deadStatus from "public/statuses/dead.png";
import unknownStatus from "public/statuses/unknown.png";

type Props = {
    person: CharacterType
};

const statusImages = {
    Alive: aliveStatus,
    Dead: deadStatus,
    unknown: unknownStatus
}

export const CharacterCard = (props: Props) => {
    const {id, name, image, status } = props.person

    return (
        <Card name={name}>
            <Image src={statusImages[status]} alt={"status of character"} width={20} height={20}/>
            <Link href={`/characters/${id}`}>
                <Image width={300} height={300} src={image} alt={`Picture of ${name}`}/>
            </Link>
        </Card>
    );
};