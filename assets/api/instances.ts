import axios from "axios";

/**
 * Instance for Rick and Morty API
 */
export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

/**
 * Instance for NextTS API
 */
export const instanceRick = axios.create({
    baseURL: process.env.NEXT_PUBLIC_RICK_API_URL,
});