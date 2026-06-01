// Without generics
function logString(data: string): void {
    console.log(data);
}
logString('Hello world');

function logNumber(data: number): void {
    console.log(data);
}
logNumber(252);

function logBoolean(data: boolean): void {
    console.log(data);
}
logBoolean(true);

// With generics (super reusable)
function logData<T>(data: T): void {
    console.log(data);
}
logData('Hello world');
logData(252);
logData(false);
logData(['A', 'B', 'C']);
logData([12, 25, 89]);

// Generics interface
interface IApi<T> {
    success: boolean;
    data: T;
}
const stringResponse: IApi<{ name: string }> = {
    success: true,
    data: {
        name: 'Rana',
    },
};

const numberResponse: IApi<number> = {
    success: true,
    data: 121,
};
