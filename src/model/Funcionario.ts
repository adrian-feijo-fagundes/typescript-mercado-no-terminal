export class Funcionario {
    private idFuncionario: number;
    private cpf: string;
    private nome: string;
    private dataContratacao: string;
    private cargo: string;

    constructor(
        idFuncionario: number,
        cpf: string,
        nome: string,
        dataContratacao: string,
        cargo: string
    ) {
        this.idFuncionario = idFuncionario;
        this.cpf = cpf;
        this.nome = nome;
        this.dataContratacao = dataContratacao;
        this.cargo = cargo;
    }

    public getId(): number {
        return this.idFuncionario;
    }
    
    public getCpf(): string {
        return this.cpf;
    }
    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }
    
    public getNome(): string {
        return this.nome;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }
    
    public getDataContratacao(): string {
        return this.dataContratacao;
    }
    public setDataContratacao(data: string): void {
        this.dataContratacao = data;
    }
    
    public getCargo(): string {
        return this.cargo;
    }
    public setCargo(cargo: string): void {
        this.cargo = cargo;
    }

}