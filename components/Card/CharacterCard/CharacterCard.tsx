import Image from "next/image";
import type {CharacterType} from "@/assets/api/rick-and-morty-api";
import {Card} from "@/components/Card/Card";
import Link from "next/link";

type Props = {
    person: CharacterType
};
export const CharacterCard = (props: Props) => {
    const {id, name, image, status} = props.person

    return (
        <Card name={name}>
            <Link href={`/characters/${id}`}>
                <Image width={300} height={300} src={image} alt={`Picture of ${name}`}/>
            </Link>
        </Card>
    );
};