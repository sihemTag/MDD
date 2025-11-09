import { User } from "./user";

export interface Article{
     id: number,
     title: string,
     description: string,
     created_at: Date,
     updated_at: Date,
     owner: User,
}

