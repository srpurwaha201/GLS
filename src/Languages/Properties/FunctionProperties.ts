import { CaseStyle } from "../Casing/CaseStyle";

/**
 * Metadata on a language's functions.
 */
export class FunctionProperties {
    /**
     * Case style for function names.
     */
    public case: CaseStyle;

    /**
     * A line for after a function's definition.
     */
    public defineEnd: string;

    /**
     * A prefix before defining a function, such as "def " or "function ".
     */
    public defineStartLeft: string;

    /**
     * A suffix after defining a function, such as " {" or ":".
     */
    public defineStartRight: string;

    /**
     * Whether return types should be explicitly stated.
     */
    public explicitReturns: boolean;

    /**
     * Precedes exceptions that the funtion throws.
     */
    public functionThrows: string;

    /**
     * Whether langauge requires functin to declare possible exceptions.
     */
    public requiresExceptions: boolean;

    /**
     * Whether return types should be after the name, rather than before.
     */
    public returnTypeAfterName: boolean;

    /**
     * A label between function name and its type, if type is after the name.
     */
    public returnTypeMarker: string;
}
