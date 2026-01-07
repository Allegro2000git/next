import {CharacterCard} from "@/components/Card/CharacterCard/CharacterCard";
import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/BaseLayout/BaseLayout";
import {API} from "@/assets/api/api";
import type {CharacterType} from "@/assets/api/rick-and-morty-api";
import style from "@/styles/CharactersSection.module.scss";
import type {GetStaticPaths, GetStaticProps} from "next";
import {useRouter} from "next/router";

export const getStaticPaths: GetStaticPaths = async () => {
    const {results} = await API.rickAndMorty.getCharacters()

    const paths = results.map(character => ({
        params: {id: String(character.id)}
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {id} = params || {}

    const character = await API.rickAndMorty.getCharacter(id as string)

    if (!character) return {
        notFound: true
    }

    return {
        props: {
            character
        }
    }
}

type Props = {
    character: CharacterType
}

function Character({character}:Props) {

    const router = useRouter()

    if(router.isFallback) return <h2>Loading...</h2>

    const goToCharacters = () => router.push('/characters')

    return (
        <div className={style.inner}>
            <HeadMeta title={"Characters"} />
            <CharacterCard key={character.id} person={character}/>
            <button className={style.button} onClick={goToCharacters}>Go to Characters</button>
        </div>
    );
}

Character.getLayout = getLayout

export default Character