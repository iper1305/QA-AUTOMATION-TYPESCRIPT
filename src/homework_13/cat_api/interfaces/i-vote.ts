import { ICatImage } from './i-cat-image';

export interface IVote {
    id: number;
    image_id: string;
    sub_id: string;
    value: number;
    created_at: string;
    image: ICatImage;
}
