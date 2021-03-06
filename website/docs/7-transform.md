# 变换

[上篇文章](/6-shader.md)的最后我们渲染了一个正方形，但是只能看见它的正面。要看到它的其他面就需要对它进行变换处理了。

下面描述的各种变换中除了平移其他都是线性变换，任何线性变换都会将零矢量变换成零矢量，同时线性变换需要满足下方两个条件。

$$
F(a+b) = F(a) + F(b) \\
F(ka) = kF(a)
$$

大家可以理解成线性变换不会使直线扭曲，变换后的平行线将继续平行。

仿射变换是线性变换的超集，仿射变换包含平移。

## 2D 变换模板

在进行 3D 变换之前，我们先来看下 2D 的变换。我们会用下面这个模板代码执行多个不同的变换。

```js
const canvas = document.createElement('canvas')
canvas.width = canvas.height = 300;
document.body.appendChild(canvas)
const ctx = canvas.getContext('2d')

let transform = {下面的变换函数}

const points = [[0,0],[0,100],[100,100],[100,0]] // 正方形的 4 个顶点
ctx.beginPath()
points.forEach(p => ctx.lineTo(...transform(p))) 
// "transform" 函数为下方小节指定的变换函数
// 下面的 "transform" 函数返回新的坐标位置
ctx.closePath()
ctx.fillStyle='rgba(0,255,255,1)'
ctx.fill()
```

上面代码申明了一个正方形的 4 个顶点，然后使用下面个各种变换函数处理这 4 个顶点，返回新的顶点，最终处理渲染后的正方形。

## 2D 平移

平移相信大家都知道怎么做，例如我们想把这个正方形沿 X 轴移动 10px，Y 轴 10px。

```js
function translate([x, y], dx = 10, dy = 10) {
  return [x + dx, y + dy]
}
```

上面代码就实现了移动正方形的功能，在原有位置上加上指定的位移量。

## 2D 缩放

要将一个元素，只需要将它的坐标乘上一个缩放因子就行了，比如这个正方形缩放 0.5 倍，它的新坐标就为 `[[0,0],[0,50],[50,50],[50,0]]`。

![](https://user-images.githubusercontent.com/25923128/121117746-3f989a00-c84b-11eb-86ee-e284c758bad6.png)

我们可以使用两个缩放因子来分别缩放 X 轴和 Y 轴。

```js
function scale([x, y], xs = 1, ys = xs) {
  return [x * xs, y * ys]
}
```

## 2D 反射

反射也叫镜像，它可以用来翻转物体，和照镜子效果一样。实现起来也比较简单使用上方缩放方法将 `x` 轴或 `y` 轴缩放 `-1` 倍（也就是垂直或水平镜像）就行了。

## 2D 错切

错切可以用来倾斜物体，它会不均匀的拉伸物体，物体错切后它的面积和体积不会发生变化。

执行错切的一个思路是将一个坐标的倍数加到另一个坐标上，比如下面将 1 倍的 Y 坐标加到 X 坐标上。

```js
function skew([x, y]) {
  return [x + 1 * y, y]
}
```

![](https://user-images.githubusercontent.com/25923128/121117699-255ebc00-c84b-11eb-86c0-63fee61d149d.png)

我们知道 CSS 里面也有错切方法，不过 CSS 中的 `skew` 函数支持设置倾斜角度。

```css
div {
  transform: skew(30deg);
}
```

我们可以稍微改造下，来支持度数参数。

```js
function skew([x, y], sx = 0, sy = 0) {
  const rad = r => r * Math.PI / 180
  return [x + Math.tan(rad(sx)) * y, y + Math.tan(rad(sy)) * x]
}
```

我们首先把角度变为弧度，然后利用 `tan` 函数来计算具体倾斜量，因为 `tan` 等于对边比临边，再乘上临边就是需要的倾斜量了。

## 2D 旋转

旋转是这几个变换中最难的一个。要知道如何旋转一个物体，我们可以从下面这幅图开始。

![](https://user-images.githubusercontent.com/25923128/121728695-3136d080-cb20-11eb-8307-3f81ff836e85.png)

根据三角函数，我们知道 $P$ 点的 $x$ 为 $r * cos(a)$ ，$y$ 为 $r * sin(a)$ 。我们将 $P$ 点旋转 $a$ 得到 $P'$ 点，同样可以知道 $P'$ 点的坐标为 $[r * cos(a + b), r * sin(a + b)]$ 。

根据三角函数两角和公式。

$$
sin(a \pm b) = sin(a)cos(b) \pm cos(a)sin(b) \\
cos(a \pm b) = cos(a)cos(b) \mp sin(a)sin(b)
$$

我们将 $P'$ 点坐标分解为。


$$
\begin{aligned}
  P'&=[r * cos(a + b), r * sin(a + b)] \\
  &=[r * (cos(a) * cos(b) - sin(a) * sin(b)), r * (sin(a) * cos(b) + cos(a) * sin(b))] \\
  &=[P.x * cos(b) - P.y * sin(b), P.x * sin(b) + P.y * cos(b)]
\end{aligned}
$$

现在我们得到了旋转公式，套用公式就可以写出旋转函数。

```js
function rotate([x, y], deg = 0) {
  const rad = deg * Math.PI / 180
  return [
     x * Math.cos(rad) - y * Math.sin(rad), 
     x * Math.sin(rad) + y * Math.cos(rad)
  ]
}
```

![](https://user-images.githubusercontent.com/25923128/121117617-019b7600-c84b-11eb-9677-04020c5ae3cd.png)

## 矩阵

上面所有的变换公式我们还可以写成矩阵的形式。例如下方将缩放变换变成矩阵形式。

$$
\begin{aligned}
scaledPosition&=\begin{bmatrix}
   sx & 0 \\
   0 & sy
\end{bmatrix}
\begin{bmatrix}
   x \\
   y
\end{bmatrix} \\
&=\begin{bmatrix}
   sx * x \\
   sy * y
\end{bmatrix}
\end{aligned}
$$

同样的错切可以用这个矩阵。

$$
skewMatrix=\begin{bmatrix}
   1 & tan(\theta) \\
   tan(\theta) & 1
\end{bmatrix}
$$

旋转可以用这个矩阵。

$$
rotationMatrix=\begin{bmatrix}
   cos(\theta) & -sin(\theta) \\
   sin(\theta) & cos(\theta)
\end{bmatrix}
$$

需要注意我们使用的是列矢量，如果使用的是横矢量（也就是矢量在矩阵左边），需要将旋转矩阵转置下。

$$
\begin{bmatrix}
  x & y
\end{bmatrix}\begin{bmatrix}
   cos(\theta) & sin(\theta) \\
   -sin(\theta) & cos(\theta)
\end{bmatrix}
$$

对于最简单的平移变换，我们没有办法使用 `2 x 2` 矩阵来完成。要实现平移矩阵我们需要提升一个维度。

## 齐次坐标

齐次坐标就是将一个原本是 `n` 维的矢量用一个 `n+1` 维矢量来表示。一般将新加的分量使用 `w` 表示，对于二维坐标将变为 `[x, y, w]`，三维将变成 `[x, y, z, w]`。

利用齐次坐标我们将二维点，表示在三维中 `w = 1` 的平面上，对于 `w != 1` 的点，需要将它的各个分量除以 `w` (`[x / w, y / w, w / w]`) 投影到 `w = 1` 的平面。所以齐次坐标实际上表示二维的点是 `[x / w, y / w]`。

当 `w = 0` 时，`x / 0` 是未定义的。我们可以将 `w = 0` 表示为矢量，`w != 0` 表示为位置。这和[矢量](/3-vector.md)中区分点和矢量一致。

有了齐次坐标我们就可以实现平移矩阵了。

$$
\begin{aligned}
translated&=\begin{bmatrix}
   1 & 0 & dx \\
   0 & 1 & dy \\
   0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
   x \\
   y \\
   1
\end{bmatrix} \\
&=\begin{bmatrix}
   x + dx \\
   y + dy \\
   1
\end{bmatrix}
\end{aligned}
$$

我们在 `2 x 2` 矩阵上加了一行和一列，在新增的一列中包含了平移的信息。如果我们对矢量进行平移变换。

```js
translateMatrix * [x, y, 0] = [x, y, 0]
```

最终结果还是原来的矢量，这也说明了矢量是没有位置的，它不会发生平移。

终于我们通过矩阵实现了所有的变换了。

## 组合变换和逆变换

可能有同学要问了，为啥非要用矩阵来表示这些变换，之前不挺好的吗？

用矩阵来实现，我们就可以利用矩阵的特性，实现非常强大的功能，比如我们可以将多个矩阵组合为一个单一矩阵，这个单一矩阵包含了所有的变换。

比如我们将一位置应用两个变换 A 和 B 矩阵。我们让 (B * A) 等于 C 矩阵。

```js
newPosition = B * (A * position)
            = (B * A) * position
            = C * position
```

我们利用矩阵乘法可结合的性质，将 A 变换和 B 变换组合成了 C 变换。这样只用将位置乘上这个 C 矩阵就行了。我们可以拿这个 C 矩阵对其他点进行同样的变换了，而不需要每个点都重新计算下 `B * A`。

:::caution

需要注意，我们首先是应用的 A 变换，然后再是 B 变换。但是由于我们使用的是列矢量，所以是 `B * A * position`，B 在 A 的前面。

:::

### 旋转和平移

下面 A 是旋转变换，B 是平移变换。

$$
\begin{aligned}
  C&=B*A \\
  &=\begin{bmatrix}
    1 & 0 & dx \\
    0 & 1 & dy \\
    0 & 0 & 1
  \end{bmatrix}
  \begin{bmatrix}
    cos(\theta) & -sin(\theta) & 0 \\
    sin(\theta) & cos(\theta) & 0 \\
    0 & 0 & 1
  \end{bmatrix} \\
  &=\begin{bmatrix}
    cos(\theta) & -sin(\theta) & dx \\
    sin(\theta) & cos(\theta) & dy \\
    0 & 0 & 1
  \end{bmatrix}
\end{aligned}
$$

可以发现，C 矩阵是将旋转和平移组合起来，最右那一列是平移部分。也就是我们可以将一个矩阵变成线性变换部分和平移部分。

### 逆变换

使用矩阵的另一个好处是可以对一个变换做它的逆变换，用于撤销原始变换。比如向右旋转 90 度，那么它的逆变换就是向左旋转 90 度。

$$
F^{-1}(F(a)) = F(F^{-1}(a)) = a
$$

对一个映射 $F$ 是可逆的需要存在一个逆运算 $F^{-1}$ ，满足上方式子。

我们可以发现上方介绍的变换都是可逆的，例如平移变换。

$$
matrix = \begin{bmatrix}
    1 & 0 & dx \\
    0 & 1 & dy \\
    0 & 0 & 1
  \end{bmatrix}
$$
$$
invertMatrix = \begin{bmatrix}
    1 & 0 & -dx \\
    0 & 1 & -dy \\
    0 & 0 & 1
  \end{bmatrix}
$$

将它平移部分变为负的即可。

### 绕中心旋转

我们旋转一个物体时，一般希望绕它的中心旋转，而不是其他地方。要实现这个效果，我们可以对物体进行三次变换。

![](https://user-images.githubusercontent.com/25923128/121772402-c7faa000-cba7-11eb-9a96-ac152c6df98a.png)

1. 首先我们可以用平移矩阵 $T$ 将物体移动到原点。
2. 再使用旋转矩阵 $R$ 旋转物体
3. 最后使用第一次平移矩阵的逆矩阵 $T^{-1}$ 将物体移回原处

$$
T = \begin{bmatrix}
  1 & 0 & -dx \\
  0 & 1 & -dy \\
  0 & 0 & 1
\end{bmatrix}
$$
$$
R = \begin{bmatrix}
  cos(\theta) & -sin(\theta) & 0 \\
  sin(\theta) & cos(\theta) & 0 \\
  0 & 0 & 1
\end{bmatrix}
$$
$$
T^{-1} = \begin{bmatrix}
  1 & 0 & dx \\
  0 & 1 & dy \\
  0 & 0 & 1
\end{bmatrix}
$$

根据上方旋转和平移中得出的矩阵 $T^{-1}*R$ 等于。

$$
\begin{bmatrix}
   cos(\theta) & -sin(\theta) & dx \\
   sin(\theta) & cos(\theta) & dy \\
   0 & 0 & 1
\end{bmatrix}
$$

我们将这些矩阵组合起来。

$$
\begin{aligned}
M&=T^{-1}*R*T \\
&=\begin{bmatrix}
  cos(\theta) & -sin(\theta) & -dx * cos(\theta) + dy * sin(\theta) + dx \\
  sin(\theta) & cos(\theta) & -dx * sin(\theta) -dy * cos(\theta)+dy \\
  0 & 0 & 1
\end{bmatrix}
\end{aligned}
$$

旋转部分还是没有，只改变了平移的部分，在仿射变换中额外的平移只改变平移部分（最后一列）。

## 3D 变换

上面展示的都是 2D 变换，我们只需稍微扩展就可以将这边变换变成三维变换。

### 平移矩阵

$$
\begin{bmatrix}
1 & 0 & 0 & dx \\
0 & 1 & 0 & dy \\
0 & 0 & 1 & dz \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

### 缩放矩阵

$$
\begin{bmatrix}
sx & 0 & 0 & 0 \\
0 & sy & 0 & 0 \\
0 & 0 & sz & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$

#### 任意方向缩放

除了 X，Y，Z 轴方向，我们还可以实现任意方向缩放。假设我们任意方向是单位矢量 N。

![](https://user-images.githubusercontent.com/25923128/121781566-f7290580-cbd7-11eb-85ca-657b30a02c30.png)

上图中将矢量 $V$ ，沿着单位矢量 $N$ 进行缩放，缩放比例为 k，得到矢量 $V'$ 。

将矢量 $V$ 分解为 $V\|$ 和 $V\bot$ ，使得 $V\|$ 平行 $N$ ， $V\bot$ 垂直于 $V\|$ ，并且 $V=V\| + V\bot$ 。同样的将 $V'$ 也分为 $V'\|$ 和 $V'\bot$ 。

由于 $V\bot$ 垂直 $N$ ，所以它不会受到缩放操作影响，对 $V$ 的缩放也就是对 $V\|$ 的缩放。

我们可以发现 $V\|$ 等于 $(V \cdot N) * N$，那么变换后 $V'$ 就为。

$$
V=V\| + V\bot
$$
$$
V\| = (V \cdot N) * N
$$
$$
\begin{aligned}
  V'\bot &= V\bot \\
  &= V-V\| \\
  &= V-(V \cdot N) * N
\end{aligned}
$$
$$
\begin{aligned}
  V'\| &= kV\| \\
  &= k * (V \cdot N) * N
\end{aligned}
$$
$$
\begin{aligned}
  V' &= V'\bot + V'\| \\
  &= V - (V \cdot N) * N + k * (V \cdot N) * N \\
  &= V + (k - 1) * (V \cdot N) * N
\end{aligned}
$$

求出了 $V'$ ，我们就可以得到在任意单位矢量 $N$ 方向，缩放 $k$ 的缩放矩阵。

$$
\begin{bmatrix}
  1+(k-1)N_x^2 & (k-1)N_xN_y & (k-1)N_xN_z & 0 \\
  (k-1)N_xN_y & 1+(k-1)N_y^2 & (k-1)N_xN_z & 0 \\
  (k-1)N_xN_z & (k-1)N_yN_z & 1+(k-1)N_z^2 & 0 \\
  0 & 0 & 0 & 1
\end{bmatrix}
$$

### 旋转矩阵

对于三维旋转，我们可以绕 X、Y 和 Z 轴旋转，每个旋转对应一个旋转矩阵。

我们还需要确认哪个方向是旋转正方向，我们这里用[坐标系](/2-coordinate.md)中提到的右手坐标系。

绕 X 轴旋转，X 轴坐标不变。

$$
R_x = \begin{bmatrix}
   1 & 0 & 0 & 0 \\
   0 & cos(\theta) & -sin(\theta) & 0 \\
   0 & sin(\theta) & cos(\theta) & 0 \\
   0 & 0 & 0 & 1
\end{bmatrix}
$$

绕 Y 轴旋转，Y 轴坐标不变。

$$
R_y = \begin{bmatrix}
   cos(\theta) & 0 & sin(\theta) & 0 \\
   0 & 1 & 0 & 0 \\
   -sin(\theta) & 0 & cos(\theta) & 0 \\
   0 & 0 & 0 & 1
\end{bmatrix}
$$

绕 Z 轴旋转，Z 轴坐标不变。

$$
R_z = \begin{bmatrix}
   cos(\theta) & -sin(\theta) & 0 & 0 \\
   sin(\theta) & cos(\theta) & 0 & 0 \\
   0 & 0 & 1 & 0 \\
   0 & 0 & 0 & 1
\end{bmatrix}
$$

:::info

旋转矩阵是[正交矩阵](/4-matrix.md)，它的逆矩阵就等于它的转置矩阵。

:::

#### 绕任意过原点轴旋转

除了绕 X、Y、Z 轴，还可以绕任意轴旋转（该轴穿过原点，不考虑位移的情况）。假设绕任意轴单位矢量 N。

![](https://user-images.githubusercontent.com/25923128/121803153-bf22d080-cc72-11eb-90fa-113b9bd7220a.png)

和任意方向缩放中一样，上图中 $V'$ 是矢量 $V$ 沿单位矢量 $N$ 旋转 $\theta$ 度后的结果。要求出 $V'$ 的位置，我们可以将 $V$ 和 $V'$ 拆分成垂直和平行分量，其中平行分量平行于 $N$ 。

我们可以发现旋转是应用在垂直分量上的，因为平行分量于旋转方向 $N$ 平行，不受旋转影响。我们现在可以把目标放在 2 维平面上的垂直矢量 $V\bot$ 和 $V'\bot$ 。

我们可以构造一个 $W$ 矢量， $W$ 垂直 $V\bot$ ，长度于 $V\bot$ 相等。 $W$ 矢量等于 $N$ 叉乘 $V\bot$ （叉乘在[矢量](/3-vector.md)中有讲）。

$W$、 $V\bot$ 、 $V'\bot$ 都在一个平面上，并且 $W$ 与 $V\bot$ 垂直，我们把 $W$ 和 $V\bot$ 当成水平和垂直坐标轴，根据上方讲到的二维旋转，我们可以得到。

$$
V'\bot=cos(\theta)*V\bot + sin(\theta)*W
$$

那么 $V'$ 就等于。

$$
V\| =(V \cdot N)N
$$
$$
\begin{aligned}
V\bot &= V-V\| \\
&=V-(V \cdot N)N
\end{aligned}
$$
$$
\begin{aligned}
W &= N \times V\bot \\
&=N \times (V - V\|) \\
&=N \times V - N \times V\| \\
&=N \times V
\end{aligned}
$$
$$
\begin{aligned}
V' &= V'\bot + V'\| \\
&=cos(\theta) * V\bot + sin(\theta) * W + (V \cdot N) * N \\
&=cos(\theta) * (V - (V \cdot N) * N) + sin(\theta) * (N \times V) + (V \cdot N) * N
\end{aligned}
$$

把坐标轴基矢量带入上方式子中，那么绕任意过原点轴旋转的矩阵如下。

$$
\begin{bmatrix}
  N_x^2(1-cos(\theta))+cos(\theta) & N_xN_y(1-cos(\theta))-N_zsin(\theta) & N_xN_z(1-cos(\theta))+N_ysin(\theta) & 0 \\
  N_xN_y(1-cos(\theta))+N_zsin(\theta) & N_y^2(1-cos(\theta))+cos(\theta) & N_yN_z(1-cos(\theta))-N_xsin(\theta) & 0 \\
  N_xN_z(1-cos(\theta))-N_ysin(\theta) & N_yN_z(1-cos(\theta))+N_xsin(\theta) & N_z^2(1-cos(\theta))+cos(\theta) & 0 \\
  0 & 0 & 0 & 1
\end{bmatrix}
$$

## 总结

这篇文章如何变换物体，以及使用矩阵来变换物体和使用矩阵的好处。这篇文章中的矩阵都是数学中的形式，如果要在 WebGL 中使用需要将**矩阵转置**一下，变成列主序矩阵。

知道了如何变换物体，[下篇文章](/8-box.md)就让立方体旋转起来吧。
