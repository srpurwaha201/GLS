import { CaseStyleConverter } from "./CaseStyleConverter";

/**
 * Converts a series of words to "package.lower.case".
 */
export class PackageLowerCaseConverter extends CaseStyleConverter {
    /**
     * @returns Filler between words in a conversion.
     */
    protected getBetweenWords(): string {
        return ".";
    }

    /**
     * Applies this style's transformation to a word.
     *
     * @param word   A word to convert.
     * @returns The word after this style's transformation.
     */
    protected transformWord(word: string): string {
        return word.toLowerCase();
    }
}
