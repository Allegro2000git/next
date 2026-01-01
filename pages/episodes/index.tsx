import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/Layout";
import {API} from "@/assets/api/api";
import type {EpisodeType, ResponseType} from "@/assets/api/rick-and-morty-api";
import {Card} from "@/components/Card/Card";

export const getServerSideProps = async () => {
    const episodes = await API.rickAndMorty.getEpisodes()

    if (!episodes) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            episodes
        }
    }
}

type Props = {
    episodes: ResponseType<EpisodeType>
}

function Episodes({episodes}:Props) {

  return (
    <>
        <HeadMeta title={"Episodes"} />
            {episodes && episodes.results.map(episode => <Card key={episode.id} name={episode.name}/>)}
    </>
  );
}

Episodes.getLayout = getLayout

export default Episodes