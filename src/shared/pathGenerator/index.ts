const smoothing = 0.23

type Point = [number, number]

const line = (pointA: Point, pointB: Point) => {
    const lengthX = pointB[0] - pointA[0]
    const lengthY = pointB[1] - pointA[1]
    return {
        length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
        angle: Math.atan2(lengthY, lengthX)
    }
}

const controlPoint = (current: Point, previous: Point, next: Point, reverse: boolean): Point => {
    const p = previous || current
    const n = next || current
    const o = line(p, n)
    const angle = o.angle + (reverse ? Math.PI : 0)
    const length = o.length * smoothing
    const x = current[0] + Math.cos(angle) * length
    const y = current[1] + Math.sin(angle) * length
    return [x, y]
}

const bezierCommand = (point: Point, i: number, a: any) => {
    const cps = controlPoint(a[i - 1], a[i - 2], point, false)
    const cpe = controlPoint(point, a[i - 1], a[i + 1], true)
    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`
}

const svgPath = (points: Point[]) => {
    const d = points.reduce((acc, point, i, a) => i === 0
        ? `M ${point[0]},${point[1]}`
        : `${acc} ${bezierCommand(point, i, a)}`
    , '')
    return d;
}

export default svgPath