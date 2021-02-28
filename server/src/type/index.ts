export type typeLocation = {
    name: string,
    locationId: number,
    address: string,
    x: number,
    y: number,
    camp: typeLocationCamp,
};

export type typeLocationCamp = {
    region: string
    deliver: { coca: number, pepsi: number},
    store: { coca: number, pepsi: number},
    pickUP: { coca: number, pepsi: number}
};

export type typeRegistLocation= {
    registUserID: string,
    locationInfo: typeLocation
};

export type typeResult = {
    isSucceeded: boolean,
    message: string,
}