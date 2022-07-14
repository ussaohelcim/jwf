declare interface IColor{
	/** Red, 0 .. 255 */
	r:number
	/** Green, 0 .. 255 */
	g:number
	/** Blue, 0 .. 255 */
	b:number
	/** Alpha, 0 .. 255 */
	a?:number
}

declare interface IVec2{
	x:number
	y:number
}

declare interface IRect extends IVec2{
	w:number
	h:number
}

declare interface ITriangle {
	p1:IVec2
	p2:IVec2
	p3:IVec2
}

declare interface ICircle extends IVec2{
	r:number
}

const jwf = (canvas:HTMLCanvasElement) => {
	console.log("Welcome to jwf")
	return {
		gfx:canvas.getContext('2d'),
		drawPixel: function (pixel: IVec2): void {
			this.gfx?.beginPath()

			this.gfx?.fillRect(pixel.x,pixel.y,1,1)

		},
		drawLine: function (p1:IVec2,p2:IVec2,thick:number = 5):void{
			this.gfx?.beginPath()
			this.gfx!.lineWidth = thick
			this.gfx?.moveTo(p1.x,p1.y)
			this.gfx?.lineTo(p2.x,p2.y)
			this.gfx?.stroke()
		},
		drawLineBezier(startPos:IVec2,endPos:IVec2,thick:number,divisions:number=24,color?:IColor):void{
			throw Error("Not implemented")
		},
		//#region Rectangle
		/**
		 * 
		 * @param rect 
		 * @param color Optional
		 */
		drawRect: function (rect: IRect,color?:IColor): void {
			this.gfx?.beginPath()
			this._fill(color)
			this.gfx?.fillRect(rect.x,rect.y,rect.w,rect.h)
		},
		drawRectangleLines: function (rect: IRect,color?:IColor): void {
			this.gfx?.beginPath()

			this.gfx?.rect(rect.x,rect.y,rect.w,rect.y)
			this.gfx?.stroke()
		},
		//#endregion
		//#region Circle
		drawCircle: function (circle: ICircle,color?:IColor): void {
			this.gfx?.beginPath();
			this.gfx?.arc(circle.x,circle.y,circle.r,0,Math.PI * 2)
			this._fill(color)
		},
		drawCircleLines: function (circle: ICircle,color?:IColor): void {
			this.gfx?.beginPath();
			this.gfx?.arc(circle.x,circle.y,circle.r,0,Math.PI * 2)
			this.gfx?.stroke()
		},
		/**
		 * Draws an arc. 
		 * @param circle Circle shape
		 * @param startAngle start angle in RADIANS
		 * @param endAngle end angle in RADIANS
		 * @param color 
		 */
		drawCircleSector: function (circle: ICircle, startAngle:number, endAngle:number,color?:IColor): void {
			this.gfx?.beginPath();
			this.gfx?.arc(circle.x,circle.y,circle.r,startAngle,endAngle)
			this._fill(color)
		},
		//#endregion
		drawImage: function (pos:IVec2,img:HTMLImageElement): void {
			this.gfx?.drawImage(img,pos.x,pos.y)
		},
		drawTriangle: function (triangle:ITriangle,color?:IColor):void{
			this.gfx?.beginPath()

			this.gfx?.moveTo(triangle.p1.x,triangle.p1.y)

			this.gfx?.lineTo(triangle.p2.x,triangle.p2.y)
			this.gfx?.lineTo(triangle.p3.x,triangle.p3.y)
			this.gfx?.lineTo(triangle.p1.x,triangle.p1.y)

			this._fill(color)
			this.gfx?.closePath()

		},
		clearBackground: function (): void {
			this.gfx?.clearRect(0,0,canvas.width,canvas.height)
		},
		checkCollisionRecs : function(rect1:IRect,rect2:IRect):void {
			throw Error("Not implemented")
		},

		//#region Private functions
		//those functions below are supossed to only be used by the framework
		
		_colorToString(color:IColor) {
			return `rgba(${color.r},${color.g},${color.b},${color.a ?? 255})`
		},
		_fill(color?:IColor) {
			if(this.gfx && color)
			{
				this.gfx.fillStyle = this._colorToString(color)
				this.gfx.fill()
			}
		},

		//#endregion
	}
}
