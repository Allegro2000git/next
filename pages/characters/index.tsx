import {CharacterCard} from "@/components/Card/CharacterCard/CharacterCard";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import Link from "next/link";
import {API} from "@/assets/api/api";
import type {CharacterType, ResponseType} from "@/assets/api/rick-and-morty-api";
import style from "@/styles/CharactersSection.module.scss";

export const getStaticProps = async () => {
    const characters = await API.rickAndMorty.getCharacters()

    return {
        props: {
            characters
        }
    }
}

type Props = {
    characters: ResponseType<CharacterType>
}

function Characters({characters}:Props) {

  return (
    <div className={style.sections}>
        <HeadMeta title={"Characters"} />
            {characters && characters.results.map(character => (
                <Link href={`/characters/${character.id}`} key={character.id}>
                    <CharacterCard person={character}/>
                </Link>
            ))}
    </div>
  );
}

Characters.getLayout = getLayout

export default Characters