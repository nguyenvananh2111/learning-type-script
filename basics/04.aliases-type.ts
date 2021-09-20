// Create your own types
type Point = {
    x: number;
    y: number;
}

function printCoord(point: Point) {
    console.log({
        x: point.x,
        y: point.y
    });
}

printCoord({
    x: 10,
    y: 100
});