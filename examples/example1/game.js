let canvas = document.querySelector("#ctx")

let age = jwf(canvas)

let mousePos = {
	x:0,
	y:0
}

let red = {
	r:255,
	g:0,
	b:0
}

addEventListener('mousemove',(m)=>{
	mousePos.x = m.clientX
	mousePos.y = m.clientY
})

let background = {
	x:0,
	y:0,
	w:300,
	h:200
}

let pomao = new Image()
pomao.src = "https://i.4cdn.org/vg/1657829147886.gif"

let line = {
	p1: {x:0,y:0},
	p2: {x:600,y:600}
}


setInterval(() => {
	age.clearBackground()

	age.drawLine(line.p1,line.p2)
	age.drawRect(background,randColor())

	age.drawCircle({
		x:mousePos.x ,
		y:mousePos.y,
		r: 100
	},randColor())

	age.drawTriangle({
		p1: {x: mousePos.x + 100, y:mousePos.y },
		p2: {x: mousePos.x, y:mousePos.y + 100},
		p3: {x: mousePos.x + 100, y:mousePos.y + 100}
	},randColor())

	age.drawImage({
		x:mousePos.x - (pomao.width / 2),
		y:mousePos.y - (pomao.width / 2)
	},pomao)

}, 16);

function randColor(){
	return {
		r:Math.random() * 255,
		g:Math.random() * 255,
		b:Math.random() * 255,
		a: Math.random() * 255
	}
}
