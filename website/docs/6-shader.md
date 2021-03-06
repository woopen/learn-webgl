# 着色器 / GLSL

WebGL 程序执行主要分为两个阶段，CPU 阶段和 GPU 阶段，在 CPU 中我们可以直接使用 JS 来编写代码，但是如果要控制 GPU 的渲染逻辑就需要使用着色器。

GPU 中的处理过程大致如下图，其中蓝色部分是我们可以控制的（忽略几何着色器，WebGL中没有）。

[![](https://user-images.githubusercontent.com/25923128/121031222-be0a2300-c7dc-11eb-8fab-9c6a35687745.png)](https://learnopengl-cn.github.io/01%20Getting%20started/04%20Hello%20Triangle/)

之前有介绍过，WebGL 只能渲染点、线和三角形，那些复杂的 3D 模型都是一个个三角形组成的。一个三角形是由 3 个顶点组成，如果我们想渲染两个三角形，就提供 6 个顶点，WebGL 每处理完 3 个顶点后会将这三个顶点连接成一个三角形。

## 顶点着色器

顶点着色器用来处理每个顶点。下面是一个最简单的顶点着色器。

```c
attribute vec4 a_position;

void main() {
  gl_Position = a_position;
}
```

WebGL 会默认执行着色器中的 main 函数，顶点着色器中我们使用 `attribute` 存储限定字获取外部传入的顶点信息。然后使用 `gl_Position` （内置变量）输入处理过的顶点位置（比如在顶点着色器中将顶点左移 10px）。

我们可以使用下面的伪代码表示顶点着色器是如何被执行的。

```js
const points = [
  0, 0.5,
  0.5, 0,
  -0.5, -0.5
]
// 三角形的三个顶点，在 CPU 中提供的数据

const vertex = points.map(p => vertexShader(p))
// 获得最终的顶点位置
```

[![](https://user-images.githubusercontent.com/25923128/121054661-282bc380-c7ef-11eb-95d4-4064dfa677dd.gif)](https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-how-it-works.html)

如上图中，我们从外部输入顶点坐标，然后在顶点着色器中对它进行矩阵运算，然后通过 `gl_Position` 变量输出新的坐标。（矩阵变换请查看[下篇文章](/7-transform.md)）

### attribute 存储限定字

`attribute` 只能用在顶点着色器，被用来表示逐顶点信息，比如顶点位置、顶点颜色等信息。我们可以通过它来获取外部传递过来的信息。上面例子中，我们定义了三个顶点传递给 `a_position` 变量，顶点着色器不是一次性获取到这些顶点，而是一个个的获取。

[上篇文章](/5-taste.md)中我们是这样向顶点着色器传递数据的。

```js
const positionLocation = gl.getAttribLocation(program, 'a_position')
const positionBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    0, 0.5,
    0.5, 0,
    -0.5, -0.5
]), gl.STATIC_DRAW)
gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)
```

我们首先获取变量 `a_position` 的位置。由于我们需要传递一堆的顶点，所以这里创建一个 Buffer 来存放这些顶点。我们还需要使用 `vertexAttribPointer` 告诉 WebGL 如何获取 Buffer 中的数据。

## 片段着色器

在顶点着色器处理完顶点后，WebGL 还会把这些三角形进行插值，将三角形变成一个个像素，然后对每个像素执行一次片段着色器，片段着色器中使用 `gl_FragColor` 内置变量输出这个像素的颜色。

[上篇文章](/5-taste.md)中的片段着色器代码如下。

```c
precision mediump float;
uniform vec4 u_color;

void main() {
  gl_FragColor = u_color;
}
```

### uniform 存储限定字

我们先忽略比顶点着色器多出的一行代码 `precision mediump float;`。我们在片段着色器中使用了 `uniform` 存储限定字获取了外部传递的数据。

`uniform` 存储限定字，可以用在片段着色器也可以用在顶点着色器，它是全局的，在着色器程序中是独一无二的。

[上篇文章](/5-taste.md)我们是这样传递数据到片段着色器中。

```js
const colorLocation = gl.getUniformLocation(program, 'u_color')
gl.uniform4f(colorLocation, 0.93, 0, 0.56, 1)
```

由于 `uniform` 是全局唯一的，相当于常量，所以不需要 Buffer，直接设置它的值就行了。`uniform4f` 方法后缀 `4f` 表示 4 个浮点数，在这里我们用来表示一个颜色值的 `rgba`。

## GLSL

OpenGL 的着色器使用 GLSL(OpenGL Shading Language) 语言进行编写，它有点像 C 语言。在 OpenGL ES 和 WebGL 中使用的是 GLSL ES。WebGL1 中使用的 GLSL 1.00 版本。下面简单介绍 GLSL 的语法，更详细文档请点击下方链接。

[https://www.khronos.org/registry/OpenGL/specs/es/2.0/GLSL_ES_Specification_1.00.pdf](https://www.khronos.org/registry/OpenGL/specs/es/2.0/GLSL_ES_Specification_1.00.pdf)

它是强类型语言，每一句都必须有分号。它和 JS 语法也挺像。

注释语法和 JS 一样，变量名规则也和 JS 一样，不能使用关键字，保留字，不能以 `gl_`、`webgl_` 或 `_webgl_` 开头。运算符基本也和 JS 一样，`++` `--` `+=` `&&` `||` 还有三元运算符都支持。

GLSL 中主要有三种数据值类型，浮点数、整数和布尔。注意浮点数必须要带小数点。类型转换可以直接使用 `float`、`int` 和 `bool` 函数。

```c
float f = float(1);
```

### 矢量和矩阵

### 分支和循环

```js
if (true) {} else if (true) {} else {}
for (int i = 0; i < 3; i++) {
	continue; // 或 break
}
```

### 函数

### 精度限定字

精度限定字用来控制数值的精度，越高的精度也就意味着更慢的性能，所以我们要合理的控制程序的精度。GLSL 中有三种精度 `highp`、`mediump` 和 `lowp`，分别是高、中和低精度。

```c
mediump float size; // 声明一个中精度浮点数
highp int len; // 声明一个高精度整数
lowp vec4 v; // 低精度矢量
```

这样一个一个的变量声明，非常麻烦，我们还可以一次性声明。

```c
precision mediump float; // 浮点数全部使用中精度
```

GLSL 帮我们设置了一些默认变量精度。顶点着色器中 `int` 和 `float` 都是 `highp`。

片元着色器中 `int` 是 `mediump`，`float` 没有定义。这也就是为什么上面片元着色器中第一行代码是 `precision mediump float;` 了，因为 OpenGL 没有设置默认值，所以必须得我们自己设置。

另外 `sampler2D` 和 `samplerCube` 都是 `lowp`（它们主要用来渲染图片，后面会详细讲解）。

## 立方体

学习了着色器相关知识，现在再来渲染一个 3D 立方体吧。

立方体一共有 6 个面，一个面可以用两个三角形组成，也就是一个立方体需要 12 个三角形，36 个顶点！

然而实际上立方体其实只需要 8 个顶点就行了，因为一个顶点可以被多个面复用。在 WebGL 中其实也可以复用顶点。

```js
const gl = createGl()

const program = createProgramFromSource(gl, `
attribute vec4 aPos;
attribute vec4 aColor;
varying vec4 vColor;

void main() {
  gl_Position = aPos;
  vColor = aColor;
}
`, `
precision mediump float;
varying vec4 vColor;

void main() {
  gl_FragColor = vColor;
}
`)

const points = new Float32Array([
  -0.5,0.5,-0.5, 0.5,0.5,-0.5, 0.5,-0.5,-0.5, -0.5,-0.5,-0.5,
  0.5,0.5,0.5, -0.5,0.5,0.5, -0.5,-0.5,0.5, 0.5,-0.5,0.5
  // 立方体的 8 个顶点
])
const colors = new Float32Array([
  1,0,0, 0,1,0, 0,0,1, 1,0,1,
  0,0,0, 0,0,0, 0,0,0, 0,0,0
  // 每个顶点的颜色
])
const indices = new Uint8Array([ // 面的索引，值是 points 的下标
  0, 1, 2, 0, 2, 3, // 前
  1, 4, 2, 4, 7, 2, // 右
  4, 5, 6, 4, 6, 7, // 后
  5, 3, 6, 5, 0, 3, // 左
  0, 5, 4, 0, 4, 1, // 上
  7, 6, 3, 7, 3, 2  // 下
])

const [posLoc, posBuffer] = createAttrBuffer(gl, program, 'aPos', points)
const [colorLoc, colorBuffer] = createAttrBuffer(gl, program, 'aColor', colors)
const indexBuffer = gl.createBuffer()
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer) // 绑定 buffer 到 ELEMENT_ARRAY_BUFFER
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW)

gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer) // 绑定 buffer 到 ARRAY_BUFFER
gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(posLoc)

gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer) // 绑定 buffer 到 ARRAY_BUFFER
gl.vertexAttribPointer(colorLoc, 3, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(colorLoc)

gl.enable(gl.DEPTH_TEST)
gl.clearColor(0, 0, 0, 0)
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

gl.drawElements(
  gl.TRIANGLES, // 要渲染的图元类型
  indices.length, // 要渲染的元素数量
  gl.UNSIGNED_BYTE, // 元素数组缓冲区中的值的类型
  0 // 元素数组缓冲区中的偏移量, 字节单位
)

function createShader(gl, type, source) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  return shader;
}

function createProgramFromSource(gl, vertex, fragment) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER,vertex)
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragment)
  const program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  gl.useProgram(program)
  return program
}

function createAttrBuffer(gl, program, attr, data) {
  const location = gl.getAttribLocation(program, attr)
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW)
  return [location, buffer]
}
```

要实现复用顶点，需要使用顶点索引，这样 WebGL 就可以通过索引找到对应顶点，因为索引下标都是整数且最大为 7 （因为只有 8 个顶点），所以这里使用了 `Uint8Array`。

然后创建 Buffer 来存放这些索引，和其他 `attribute` 数据不同，索引数据的绑定目标是 `ELEMENT_ARRAY_BUFFER`。

上面代码中，我们没有使用 `drawArrays`，而是使用 `drawElements`。 它们的主要区别是 `drawArrays` 是根据 `ARRAY_BUFFER` 来渲染，`drawElements` 是根据 `ELEMENT_ARRAY_BUFFER` 来渲染（根据索引来渲染）。

:::info

`glDrawArray` 速度快，费内存（有重复顶点数据）。`glDrawElement` 稍微慢点，省内存（只有一份顶点数据）。

:::

因为我们渲染的是三维物体，需要区分哪个顶点在前哪个顶点在后。上面代码中使用 `gl.enable(gl.DEPTH_TEST)` 启用了深度测试，并且使用 `gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)` 同时重置颜色缓存和深度缓存。深度缓存映射可以回顾[坐标系](/2-coordinate.md)。

:::info

上面代码调用了多次 `bindBuffer` 方法，可能有同学会觉得已经在 `createAttrBuffer` 中调用了一次后面就不用调用了吧。

之前提到过 OpenGL 是一个的状态机，我们在操作 Buffer 之前，需要绑定对应的 Buffer，特别是在代码比较多的情况下，你可能不清楚当前绑定的是哪个 Buffer，直接对 Buffer 进行操作，可能操作到了其他 Buffer。所以在操作 Buffer 之前进行绑定，可以减少 BUG。

:::

### varying 存储限定字

存储限定字其实一共有三个 `attribute`、`uniform` 和 `varying`。上面已经介绍了前两个，它们都是从外部 JS 获取数据。

`varying` 有点特殊，它用于从顶点着色器向片元着色器传送数据。上面例子中我们将 `aColor` 赋值给 `vColor`，然后在片元着色器中就可以使用 `vColor` 了。
叫 `varying` 也是有原因的，我们可以先来看看上面代码最终渲染成什么样子。

![](https://user-images.githubusercontent.com/25923128/121994270-8ea87700-cdd7-11eb-922d-6c2c7e41f837.png)

顶点着色器是逐顶点的，片段着色器是逐像素的，显然像素会比顶点多。`varying` 变量从顶点着色器向片元着色器传递时会被 OpenGL 插值，也就是我们定义了三角形 3 个顶点的颜色，三角形内部的像素都是根据这 3 个顶点颜色插值出来的。比如一个线段一个端点是红色，另一个是绿色，那么这个线段中间就是 50% 的红色和 50% 的绿色。

## 总结

这篇文章讲解了着色器相关知识，我们可以使用 GLSL 编写顶点着色器和片段着色器来控制物体各个顶点和位置和每个像素的颜色。

由于顶点着色器和片段着色器是在 GPU 中执行，我们需要给他们传递数据。

`attribute` 只能在顶点着色器中使用，可以用它来传递逐顶点的数据，我们会创建一个 Buffer 把数据放入 Buffer 中发送到 GPU，为了提升性能，需要使用 `Float32Array`，这样在 GPU 中就无需再解码数据。

`uniform` 类似全局常量，在顶点着色器和片段着色器中都可以使用，一般会使用它传递一些矩阵，后面文章会有讲解。

`varying` 是用于从顶点着色器向片元着色器传送数据，数据在传递到片段着色器之前会被插值。

在文章的最后我们渲染了一个立方体，但是看起来就像一个正方形，这是因为我们在正前方看这个立方体，为了让它看起来像一个立方体，我们需要让它转动起来，如何转动立方体呢？下篇文章将会详细讲解。
