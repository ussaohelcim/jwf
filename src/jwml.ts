//Just works math library for jwf

const jwml = {
	DEG2RAD : (deg:number)=> Math.PI/180,
	RAD2DEG: (rad:number) => 180/Math.PI,
	TAU : Math.PI * 2,
	clamp(value:number,min:number,max:number){
		let result = (value < min) ? min : max
		result = result > max ? max : result
		return result
	},
	/**
	 * Calculate linear interpolation between two numbers
	 */
	lerp(start:number,end:number, amount:number){
		return start + amount * (end - start)
	},
	/**
	 * Normalize input value within input range
	 */
	normalize(value:number,start:number,end:number){
		return (value - start)/(end - start)
	},
	/**
	 * Remap input value within input range to output range
	 */
	remap(value:number, inputStart:number, inputEnd:number, outputStart:number, outputEnd:number){
		return (value - inputStart)/(inputEnd - inputStart)*(outputEnd - outputStart) + outputStart
	},
	vector2Add(v1:IVec2,v2:IVec2){
		return this.vec2(v1.x + v2.x, v1.y + v2.y)
	},
	vector2AddValue(v1:IVec2,value:number){
		return this.vec2(v1.x + value, v1.y + value)
	},
	vector2Subtract(v1:IVec2,v2:IVec2){},
	vector2SubtractValue(v1:IVec2,value:number){},
	vector2Length(v1:IVec2){},
	vector2LengthSqrt(v1:IVec2){},
	vector2DotProduct(v1:IVec2,v2:IVec2){},
	vector2Distance(v1:IVec2,v2:IVec2){},
	vector2DistanceSqrt(v1:IVec2,v2:IVec2){},
	/**
	 * Calculate angle from two vectors
	 */
	vector2Angle(v1:IVec2,v2:IVec2){
		return Math.atan2(v2.y, v2.x) - Math.atan2(v1.y, v1.x)
	},
	vector2Scale(v:IVec2,scale:number){
		return this.vec2(v.x * scale,v.y * scale)
	},
	vector2Multiply(v:IVec2,v2:IVec2){
		return this.vec2(v.x * v2.x,v.y * v2.y)
	},
	vector2Negate(){},
	vector2Divide(){},
	vector2Normalize(){},
	vector2Lerp(){},
	vector2Reflect(){},
	vector2Rotate(){},
	vector2MoveTowards(){},
	vector2Invert(){},
	vector2Clamp(){},
	vector2ClampValue(){},
	vector2Equals(){},
	AngleToNormalizedVector2(angle:number){
		return this.vec2(Math.cos(angle),Math.sin(angle));
	},
	normalizedVector2ToAngle(v:IVec2){
		return Math.atan2(v.y,v.x);
	},
	vec2(x:number,y:number):IVec2{
		return {
			x:x,
			y:y
		}
	}
}