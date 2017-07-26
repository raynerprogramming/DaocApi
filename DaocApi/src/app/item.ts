export class ItemFlags {
    emblemizable: boolean;
    dyable: boolean;
}

export class Bonus {
    type: number;
    value: number;
    id: number; 
}

export class TypeData {
    dps: number;
    clamped_dps: number;
    speed: number;
    damage_type: number;
    base_quality: number;
    range: number;
    two_handed: number;
    left_handed: number;
    armor_factor: number;
    clamped_armor_factor: number;
    absorption: number;
    slot: number;
}

export interface MappedBonus {
    MythicType?: number;
    MythicId?: number;
    MythicValue?: number;
    Type?: string;
    Name?: string;
    Value?: string;
    Text: String;
}

export interface Item {
    id?: number;
    name: string;
    category: number;
    realm: number;
    icon: number;
    material: number;
    salvage_amount: number;
    artifact: boolean;
    sell_value: number;
    flags: ItemFlags;
    bonuses: Bonus[];
    mappedBonuses?: MappedBonus[];
    type_data: TypeData;
    sources: string[];
    requirements: number;
    use_duration: number;
    bonus_level: number;
    dye_type: number;
    delve_text: string;
    toa_utility: number;
    utility:number;
}
