import { instance, instanceRick } from "./instances";
import { RickAndMortyApi } from "./rick-and-morty-api";
import { NextTsApi } from "./next-ts-api";

const rickAndMortyApi = new RickAndMortyApi(instance);
const nextTsApi = new NextTsApi(instanceRick);

export const API = {
    rickAndMorty: rickAndMortyApi,
    nextTs: nextTsApi,
};