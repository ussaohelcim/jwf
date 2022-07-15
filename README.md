# jwf - Just works framework  

Browser Game framework highly inspired by Raylib.  
Everything works using static functions.  

```ts
//examples
gfx.drawPixel(pixel)//draws a 1x1 rectangle
gfx.drawImage(img)//draws an image
gfx.drawRect(rect)//draws a rectangle
gfx.drawCircle(circle)//draws a circle
```

## How to use

Just insert `dist/jwf.js` on your html file after a canvas, .  
You can also add `jwf.d.ts` to your project folder to help you with types.  
```html
<canvas id="ctx"></canvas>
<script src="jwf.js"></script>
<script>
	let gfx = jwf(document.querySelector("#ctx"))

	let pixel = {
		x: 0,
		y: 0
	}

	gfx.drawPixel(pixel)
</script>
```

# Roadmap

- [ ] math library  
- [ ] collision library  
- [ ] add more stuff here  

# Examples

You can see examples at [examples](/examples/).

# Contribution

Feel free to open issues and to ask merge requests.  
