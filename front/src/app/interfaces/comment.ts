import { Article } from "./article";
import { User } from "./user";

export interface Comment {
	id: number,
	article_id: Article,
	user_id: User,
    commentaire: string,
	created_at: Date,
	updated_at: Date
}