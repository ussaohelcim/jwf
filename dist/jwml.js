"use strict";
//Just works math library for jwf
const jwml = {
    DEG2RAD: (deg) => Math.PI / 180,
    RAD2DEG: (rad) => 180 / Math.PI,
    TAU: Math.PI * 2,
    clamp(value, min, max) {
        let result = (value < min) ? min : max;
        result = result > max ? max : result;
        return result;
    },
    /**
     * Calculate linear interpolation between two numbers
     */
    lerp(start, end, amount) {
        return start + amount * (end - start);
    },
    /**
     * Normalize input value within input range
     */
    normalize(value, start, end) {
        return (value - start) / (end - start);
    },
    /**
     * Remap input value within input range to output range
     */
    remap(value, inputStart, inputEnd, outputStart, outputEnd) {
        return (value - inputStart) / (inputEnd - inputStart) * (outputEnd - outputStart) + outputStart;
    },
    vector2Add(v1, v2) {
        return this.vec2(v1.x + v2.x, v1.y + v2.y);
    },
    vector2AddValue(v1, value) {
        return this.vec2(v1.x + value, v1.y + value);
    },
    vector2Subtract(v1, v2) { },
    vector2SubtractValue(v1, value) { },
    vector2Length(v1) { },
    vector2LengthSqrt(v1) { },
    vector2DotProduct(v1, v2) { },
    vector2Distance(v1, v2) { },
    vector2DistanceSqrt(v1, v2) { },
    /**
     * Calculate angle from two vectors
     */
    vector2Angle(v1, v2) {
        return Math.atan2(v2.y, v2.x) - Math.atan2(v1.y, v1.x);
    },
    vector2Scale(v, scale) {
        return this.vec2(v.x * scale, v.y * scale);
    },
    vector2Multiply(v, v2) {
        return this.vec2(v.x * v2.x, v.y * v2.y);
    },
    vector2Negate() { },
    vector2Divide() { },
    vector2Normalize() { },
    vector2Lerp() { },
    vector2Reflect() { },
    vector2Rotate() { },
    vector2MoveTowards() { },
    vector2Invert() { },
    vector2Clamp() { },
    vector2ClampValue() { },
    vector2Equals() { },
    AngleToNormalizedVector2(angle) {
        return this.vec2(Math.cos(angle), Math.sin(angle));
    },
    normalizedVector2ToAngle(v) {
        return Math.atan2(v.y, v.x);
    },
    vec2(x, y) {
        return {
            x: x,
            y: y
        };
    }
};
