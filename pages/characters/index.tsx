import {CharacterCard} from "@/components/Card/CharacterCard/CharacterCard";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/BaseLayout/BaseLayout";
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
            {characters && characters.results.map(character => <CharacterCard key={character.id} person={character}/>)}
    </div>
  );
}

Characters.getLayout = getLayout

export default Characters