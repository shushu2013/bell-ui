export declare const screenWidth: number;
export declare const supportTransform: boolean;
export declare function onTransitionEnd(el: HTMLElement, callback: () => void): void;
export declare function getPageX(): number;
export declare function getPageY(): number;
export declare const requestAnimationFrame: any;
export declare function contains(element: HTMLElement, target: HTMLElement): boolean;
export declare function toNumber(value: any, defaultValue?: any): any;
export declare function toString(value: any, defaultValue?: any): string;
export declare function toBoolean(value: any): any;
export declare function findComponentUpward(parent: any, componentName: string | string[]): any;
export declare function oneOf(values: any[]): (key: string, value: any, componentName: string | undefined) => void;
export declare function padStart(value: number): string;
export declare function scrollTo(element: HTMLElement | Window, from: number, to: number, duration?: number, callback?: () => void): void;
