import { Propriete } from "./propriete.model";

export class Personne {
    _id?: string;
    nom: string;
    prenom: string;
    email: string;
    proprietes?: Propriete[];

    constructor(nom: string, prenom: string, email: string, id: string, proprietes: Propriete[]) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this._id = id;
        this.proprietes = proprietes;
    }

    static fromJSON(data: any): Personne {
        return new Personne(data.nom, data.prenom, data.email, data._id, data.proprietes);
    }

    public static fromJSON_Array(data: any): Personne[] {
        return data.map((person: any) => Personne.fromJSON(person));
    }

}