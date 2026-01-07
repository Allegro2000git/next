import type {CharacterType, ResponseType} from "@/assets/api/rick-and-morty-api";

const getCharacters = async (): Promise<ResponseType<CharacterType>> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/character`)
    return await res.json()
}

export async function generateStaticParams() {
    const { results } = await getCharacters()

    return results.map((character) => ({id: character.id.toString()}))
}

export async function generateMetadata({ params }: {params: {id: string}}) {
    return {
       title: params.id,
       description: "New nextJs"
   }
}

const Character = ({ params }: {params: {id: string}}) => {
    return (<h1>{params.id}</h1>)
}

export default Character