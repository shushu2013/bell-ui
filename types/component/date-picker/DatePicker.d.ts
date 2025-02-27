import { CustomEventInterface } from 'yox';
import { Shortcut } from './util';
declare const _default: import("yox").ComponentOptions<{
    defaultSimpleDate: unknown;
    formatedValues: unknown;
}, unknown, {
    'change.date': unknown;
    'change.year': unknown;
    'change.month': unknown;
    'change.week': unknown;
    'change.range': unknown;
    outside: unknown;
}, {
    handleClearClick(event: CustomEventInterface): void;
    handleRemoveItem(event: CustomEventInterface, index: number): void;
    handleShortcutClick(data: Shortcut): void;
    dateChange(timestamp: number, dateFormat?: string): void;
    dateRangeChange(start: number, end: number): void;
    fireChange(value: any): void;
}> & ThisType<{
    handleClearClick(event: CustomEventInterface): void;
    handleRemoveItem(event: CustomEventInterface, index: number): void;
    handleShortcutClick(data: Shortcut): void;
    dateChange(timestamp: number, dateFormat?: string): void;
    dateRangeChange(start: number, end: number): void;
    fireChange(value: any): void;
} & import("yox").YoxInterface>;
export default _default;
