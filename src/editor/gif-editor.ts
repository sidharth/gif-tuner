/**
 * The core GIF Editor methods.
 */
 interface GifEditor {
    scale(factor: number): void
    crop(topLeftX: number, topLeftY: number, bottomRightX: number, bottomRightY: number): void
    speedup(factor: number): void
}

export class GifEditorImpl implements GifEditor {
    scale(factor: number): void {
        throw new Error("Method not implemented.");
    }
    crop(topLeftX: number, topLeftY: number, bottomRightX: number, bottomRightY: number): void {
        throw new Error("Method not implemented.");
    }
    speedup(factor: number): void {
        throw new Error("Method not implemented.");
    }
}

export default {}