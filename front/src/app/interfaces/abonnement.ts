import { Theme } from "./theme";
import { User } from "./user";

export interface Abonnement{
    id:number,
    theme: Theme,
    user: User
}