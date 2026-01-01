import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import {getLayout} from "@/components/Layout/BaseLayout/BaseLayout";
import type {LocationType, ResponseType} from "@/assets/api/rick-and-morty-api";
import axios from "axios";
import {dehydrate, QueryClient, useQuery} from "@tanstack/react-query";
import {Card} from "@/components/Card/Card";

export const getLocations = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/location`);
    return res.data;
}

export const getStaticProps = async () => {
    const queryClient = new QueryClient()

    await queryClient.fetchQuery({queryKey: ['locations'], queryFn: getLocations })

    return {
        props: {
          dehydratedState: dehydrate(queryClient)
        }
    }
}

function Locations() {

    const {data: locations} = useQuery<ResponseType<LocationType>>({ queryKey: ['locations'], queryFn: getLocations })

    if (!locations) {
        return null
    }

  return (
    <>
        <HeadMeta title={"Locations"} />
            {locations && locations.results.map(location =><Card key={location.id} name={location.name}/>)}
    </>
  );
}

Locations.getLayout = getLayout

export default Locations