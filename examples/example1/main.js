"use strict";
const jwf = (canvas) => {
    console.log("Welcome to jwf");
    return {
        gfx: canvas.getContext('2d'),
        drawPixel: function (pixel) {
            this.gfx?.beginPath();
            this.gfx?.fillRect(pixel.x, pixel.y, 1, 1);
        },
        drawLine: function (p1, p2, thick = 5) {
            this.gfx?.beginPath();
            this.gfx.lineWidth = thick;
            this.gfx?.moveTo(p1.x, p1.y);
            this.gfx?.lineTo(p2.x, p2.y);
            this.gfx?.stroke();
        },
        drawLineBezier(startPos, endPos, thick, divisions = 24, color) {
            throw Error("Not implemented");
        },
        //#region Rectangle
        /**
         *
         * @param rect
         * @param color Optional
         */
        drawRect: function (rect, color) {
            this.gfx?.beginPath();
            this._fill(color);
            this.gfx?.fillRect(rect.x, rect.y, rect.w, rect.h);
        },
        drawRectangleLines: function (rect, color) {
            this.gfx?.beginPath();
            this.gfx?.rect(rect.x, rect.y, rect.w, rect.y);
            this.gfx?.stroke();
        },
        //#endregion
        //#region Circle
        drawCircle: function (circle, color) {
            this.gfx?.beginPath();
            this.gfx?.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
            this._fill(color);
        },
        drawCircleLines: function (circle, color) {
            this.gfx?.beginPath();
            this.gfx?.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
            this.gfx?.stroke();
        },
        /**
         * Draws an arc.
         * @param circle Circle shape
         * @param startAngle start angle in RADIANS
         * @param endAngle end angle in RADIANS
         * @param color
         */
        drawCircleSector: function (circle, startAngle, endAngle, color) {
            this.gfx?.beginPath();
            this.gfx?.arc(circle.x, circle.y, circle.r, startAngle, endAngle);
            this._fill(color);
        },
        //#endregion
        drawImage: function (pos, img) {
            this.gfx?.drawImage(img, pos.x, pos.y);
        },
        drawTriangle: function (triangle, color) {
            this.gfx?.beginPath();
            this.gfx?.moveTo(triangle.p1.x, triangle.p1.y);
            this.gfx?.lineTo(triangle.p2.x, triangle.p2.y);
            this.gfx?.lineTo(triangle.p3.x, triangle.p3.y);
            this.gfx?.lineTo(triangle.p1.x, triangle.p1.y);
            this._fill(color);
            this.gfx?.closePath();
        },
        clearBackground: function () {
            this.gfx?.clearRect(0, 0, canvas.width, canvas.height);
        },
        checkCollisionRecs: function (rect1, rect2) { },
        //#region Private functions
        _colorToString(color) {
            return `rgba(${color.r},${color.g},${color.b},${color.a ?? 255})`;
        },
        _fill(color) {
            if (this.gfx && color) {
                this.gfx.fillStyle = this._colorToString(color);
                this.gfx.fill();
            }
        },
        //#endregion
    };
};
