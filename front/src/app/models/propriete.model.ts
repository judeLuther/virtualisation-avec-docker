export class Propriete {
    id?: number;
    entreprise: string;
    administration: string;
    
    constructor(administration: string, entreprise: string) {
        this.administration = administration;
        this.entreprise = entreprise;
    }
}