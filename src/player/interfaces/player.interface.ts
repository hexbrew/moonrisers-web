import {Document} from 'mongoose';

export interface Player extends Document {
    username: string;
}