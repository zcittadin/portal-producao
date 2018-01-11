export class Registro {
    id: string;
    data: Date;
    temp: number;

    public constructor(id: string, data: Date, temp: number) {
        this.id = id;
        this.data = data;
        this.temp = temp;
    }
}