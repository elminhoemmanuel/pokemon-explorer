export interface IPokemonsEach {
    name: string,
    img: string
}

export interface IPokemonsResult {
    name: string,
    url: string
}
export interface IResult {
    count: number,
    next: string | null,
    previous: string | null,
    results: IPokemonsResult[]
}

export interface IFetch{ 
    loading:boolean,
    error:string
}

export interface IBasic {
    name:string,
    url:string
}

export interface IStats{
    base_stat:number,
    effort:0,
    stat:IBasic
}
export interface IType{
    slot:number,
    type:IBasic
}
export interface IVersion{
    level_learned_at:number,
    move_learn_method:IBasic,
    version_group:IBasic
}

export interface IMove{
    move:IBasic,
    version_group_details:IVersion[]
}

export interface IPokemonDetails{ 
    species:IBasic,
    stats:IStats[],
    types:IType[],
    weight:number,
    moves:IMove[],
    [extra:string]:any

}

export interface IPagination{
    next:string | null,
    previous:string | null,
    nextPage:()=>void,
    prevPage:()=>void,
}
