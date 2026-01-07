"use client"

import {HeadMeta} from "@/components/HeadMeta/HeadMeta";
import type {LocationType} from "@/assets/api/rick-and-morty-api";
import {Card} from "@/components/Card/Card";
import {useEffect, useState} from "react";
import type {Nullable} from "@/assets/types";
import {API} from "@/assets/api/api";

function Locations() {
    const [locations, setLocations] = useState<Nullable<LocationType[]>>(null)

    useEffect(() => {
        API.rickAndMorty.getLocations().then(res => setLocations(res.results))
    }, [])

    if (!locations) return null

  return (
    <>
        <HeadMeta title={"Locations"} />
            {locations.map(location =><Card key={location.id} name={location.name}/>)}
    </>
  );
}
export default Locations