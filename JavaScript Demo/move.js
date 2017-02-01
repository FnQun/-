function move(point,stepX,stepY) {
point.x = point.x + stepX;
point.y = point.y + stepY;
return point;
}
var point = {x:1, y:2};
var pointmove = move(point, 2, 2);
pointmove;// {x:3, y:4}
