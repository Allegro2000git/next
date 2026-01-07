import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {Card} from "@/components/Card/Card";
import type {EpisodeType, ResponseType} from "@/assets/api/rick-and-morty-api";
import {notFound} from "next/navigation";

const getEpisodes = async (): Promise<ResponseType<EpisodeType>> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/episode`)
    return res.json()
}

export default async function Episodes() {
    const {results} = await getEpisodes()

    if (!results) {
        notFound()
    }

  return (
    <>
        <HeadMeta title={"Episodes"} />
            {results.length ? results.map(episode => <Card key={episode.id} name={episode.name}/>) : "Ничего нет"}
    </>
  );
}