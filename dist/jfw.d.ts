declare interface IColor {
    /** Red, 0 .. 255 */
    r: number;
    /** Green, 0 .. 255 */
    g: number;
    /** Blue, 0 .. 255 */
    b: number;
    /** Alpha, 0 .. 255 */
    a?: number;
}
declare interface IVec2 {
    x: number;
    y: number;
}
declare interface IRect extends IVec2 {
    w: number;
    h: number;
}
declare interface ITriangle {
    p1: IVec2;
    p2: IVec2;
    p3: IVec2;
}
declare interface ICircle extends IVec2 {
    r: number;
}
declare const jwf: (canvas: HTMLCanvasElement) => {
    gfx: CanvasRenderingContext2D | null;
    drawPixel: (pixel: IVec2) => void;
    drawLine: (p1: IVec2, p2: IVec2, thick?: number) => void;
    drawLineBezier(startPos: IVec2, endPos: IVec2, thick: number, divisions?: number, color?: IColor | undefined): void;
    /**
     *
     * @param rect
     * @param color Optional
     */
    drawRect: (rect: IRect, color?: IColor | undefined) => void;
    drawRectangleLines: (rect: IRect, color?: IColor | undefined) => void;
    drawCircle: (circle: ICircle, color?: IColor | undefined) => void;
    drawCircleLines: (circle: ICircle, color?: IColor | undefined) => void;
    /**
     * Draws an arc.
     * @param circle Circle shape
     * @param startAngle start angle in RADIANS
     * @param endAngle end angle in RADIANS
     * @param color
     */
    drawCircleSector: (circle: ICircle, startAngle: number, endAngle: number, color?: IColor | undefined) => void;
    drawImage: (pos: IVec2, img: HTMLImageElement) => void;
    drawTriangle: (triangle: ITriangle, color?: IColor | undefined) => void;
    clearBackground: () => void;
    checkCollisionRecs: (rect1: IRect, rect2: IRect) => void;
    _colorToString(color: IColor): string;
    _fill(color?: IColor | undefined): void;
};
