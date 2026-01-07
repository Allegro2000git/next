import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import type {CharacterType, ResponseType} from "@/assets/api/rick-and-morty-api";
import style from "@/styles/CharactersSection.module.scss";
import {CharacterCard} from "@/components/Card/CharacterCard/CharacterCard";

const getCharacters = async (): Promise<ResponseType<CharacterType>> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/character`)
    return res.json()
}

export default async function Characters() {
    const {results} = await getCharacters()

  return (
    <div className={style.sections}>
        <HeadMeta title={"Characters"} />
            {results.length ? results.map(character => <CharacterCard key={character.id} person={character}/>) : "Not chatacters"}
    </div>
  );
}