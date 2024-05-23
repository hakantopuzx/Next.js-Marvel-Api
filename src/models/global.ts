export interface CharacterData {
    data: {
        results: Characters[];
    };
}

export interface Characters {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    }
}