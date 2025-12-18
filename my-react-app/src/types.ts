export type MenuItem = {
    id: number;
    title: string;
    description: string;
    price: number;
};

export type OrderPayload = {
    items: number[];
    total: number;
};

