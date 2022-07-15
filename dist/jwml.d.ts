declare const jwml: {
    DEG2RAD: (deg: number) => number;
    RAD2DEG: (rad: number) => number;
    TAU: number;
    clamp(value: number, min: number, max: number): number;
    /**
     * Calculate linear interpolation between two numbers
     */
    lerp(start: number, end: number, amount: number): number;
    /**
     * Normalize input value within input range
     */
    normalize(value: number, start: number, end: number): number;
    /**
     * Remap input value within input range to output range
     */
    remap(value: number, inputStart: number, inputEnd: number, outputStart: number, outputEnd: number): number;
    vector2Add(v1: IVec2, v2: IVec2): IVec2;
    vector2AddValue(v1: IVec2, value: number): IVec2;
    vector2Subtract(v1: IVec2, v2: IVec2): void;
    vector2SubtractValue(v1: IVec2, value: number): void;
    vector2Length(v1: IVec2): void;
    vector2LengthSqrt(v1: IVec2): void;
    vector2DotProduct(v1: IVec2, v2: IVec2): void;
    vector2Distance(v1: IVec2, v2: IVec2): void;
    vector2DistanceSqrt(v1: IVec2, v2: IVec2): void;
    /**
     * Calculate angle from two vectors
     */
    vector2Angle(v1: IVec2, v2: IVec2): number;
    vector2Scale(v: IVec2, scale: number): IVec2;
    vector2Multiply(v: IVec2, v2: IVec2): IVec2;
    vector2Negate(): void;
    vector2Divide(): void;
    vector2Normalize(): void;
    vector2Lerp(): void;
    vector2Reflect(): void;
    vector2Rotate(): void;
    vector2MoveTowards(): void;
    vector2Invert(): void;
    vector2Clamp(): void;
    vector2ClampValue(): void;
    vector2Equals(): void;
    AngleToNormalizedVector2(angle: number): IVec2;
    normalizedVector2ToAngle(v: IVec2): number;
    vec2(x: number, y: number): IVec2;
};
