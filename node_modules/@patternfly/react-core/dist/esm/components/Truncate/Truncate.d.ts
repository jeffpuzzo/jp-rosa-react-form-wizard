import * as React from 'react';
export declare enum TruncatePosition {
    start = "start",
    end = "end",
    middle = "middle"
}
interface TruncateProps extends React.HTMLProps<HTMLSpanElement> {
    /** Class to add to outer span */
    className?: string;
    /** Text to truncate */
    content: string;
    /** The number of characters displayed in the second half of the truncation */
    trailingNumChars?: number;
    /** Where the text will be truncated */
    position?: 'start' | 'middle' | 'end';
    /** Tooltip position */
    tooltipPosition?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
}
export declare const Truncate: React.FunctionComponent<TruncateProps>;
export {};
//# sourceMappingURL=Truncate.d.ts.map