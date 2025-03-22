import { ICatImage } from './i-cat-image';

export interface IFavourite {
    id: number;
    image_id: string;
    sub_id: string;
    created_at: string;
    image: ICatImage;
}
