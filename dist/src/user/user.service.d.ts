export declare class UserService {
    private getTable;
    create(type: string, data: any): Promise<{
        id: number;
        status: string;
        order_id: number;
        method: string;
    }[] | {
        id: number;
        user_id: number;
        product: string;
        amount: number;
        status: string;
    }[] | {
        name: string;
        id: number;
        price: number;
    }[] | {
        name: string;
        id: number;
        email: string;
        age: number | null;
    }[]>;
    findAll(type: string): Promise<({
        id: number;
        name: string;
        email: string;
        age: number | null;
    } | {
        id: number;
        name: string;
        price: number;
    } | {
        id: number;
        user_id: number;
        product: string;
        amount: number;
        status: string;
    } | {
        id: number;
        order_id: number;
        method: string;
        status: string;
    })[]>;
    findOne(type: string, id: number): Promise<{
        id: number;
        name: string;
        email: string;
        age: number | null;
    } | {
        id: number;
        name: string;
        price: number;
    } | {
        id: number;
        user_id: number;
        product: string;
        amount: number;
        status: string;
    } | {
        id: number;
        order_id: number;
        method: string;
        status: string;
    }>;
    update(type: string, id: number, data: any): Promise<{
        id: number;
        name: string;
        email: string;
        age: number | null;
    }[] | {
        id: number;
        name: string;
        price: number;
    }[] | {
        id: number;
        user_id: number;
        product: string;
        amount: number;
        status: string;
    }[] | {
        id: number;
        order_id: number;
        method: string;
        status: string;
    }[]>;
    remove(type: string, id: number): Promise<{
        id: number;
        status: string;
        order_id: number;
        method: string;
    }[] | {
        id: number;
        user_id: number;
        product: string;
        amount: number;
        status: string;
    }[] | {
        name: string;
        id: number;
        price: number;
    }[] | {
        name: string;
        id: number;
        email: string;
        age: number | null;
    }[]>;
}
