"use client"

import { CharacterData } from '@/models/global';
import md5 from 'md5';
import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'https://gateway.marvel.com/v1/public';
const API_PUBLIC_KEY = '97fcce9f9758e9fc2ee04fe1973a6abb';
const API_PRIVATE_KEY = '0c581252f0a32c88b2ce5627365d8ce1ad69d6c6';

const getTimeStamp = () => Date.now().toString();
const getHash = (timeStamp: string) => md5(timeStamp + API_PRIVATE_KEY + API_PUBLIC_KEY);

const timeStamp = getTimeStamp();
const hash = getHash(timeStamp);
const query = `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`;

const handleResponse = async <T>(response: AxiosResponse<T>) => {
    if (response.status >= 400) {
        throw new Error(response.statusText);
    }
    return response.data;
}

export const getCharacters = async (): Promise<CharacterData> => {
    const url = `${API_BASE_URL}/characters?${query}`;
    const response = await axios.get<CharacterData>(url);
    return handleResponse<CharacterData>(response);
}

export const detailCharacter = async (characterId: string): Promise<CharacterData> => {
    const url = `${API_BASE_URL}/characters/${characterId}?${query}`;
    const response = await axios.get<CharacterData>(url);
    return handleResponse<CharacterData>(response);
}

export const searchCharacter = async (querySearch: string | null): Promise<CharacterData> => {
    const url = `${API_BASE_URL}/characters?nameStartsWith=${querySearch}&limit=99&${query}`;
    const response = await axios.get<CharacterData>(url);
    return handleResponse<CharacterData>(response);
}