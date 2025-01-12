import geometric = require('geometric');
import { Line, LineInterpolator, Point, Polygon } from 'geometric';

const polygon: Polygon = [
    [0, 0],
    [10, 0],
    [0, 20],
    [10, 20],
];
const polygonB: Polygon = [
    [1, 1],
    [2, 8],
    [10, 0],
];
const point: Point = [1, 2];
const line: Line = [
    [1, 2],
    [3, 4],
];
const interpolator: LineInterpolator = geometric.lineInterpolate(line);
const t0: Point = interpolator(0.5);
const t1: number = geometric.angleReflect(0, 90);
const t2: number = geometric.angleToDegrees(75);
const t3: number = geometric.angleToRadians(1);
const t4: number = geometric.lineAngle(line);
const t5: LineInterpolator = geometric.lineInterpolate(line);
const t6: boolean = geometric.lineIntersectsLine(line, line);
const t7: boolean = geometric.lineIntersectsPolygon(line, polygon);
const t8: number = geometric.lineLength(line);
const t9: Point = geometric.lineMidpoint(line);
const t10: boolean = geometric.pointInPolygon(point, polygon);
const t11: boolean = geometric.pointLeftofLine(point, line);
const t12: boolean = geometric.pointRightofLine(point, line);
const t13: boolean = geometric.pointOnLine(point, line);
const t14: boolean = geometric.pointOnPolygon(point, polygon);
const t15: Point = geometric.pointRotate(point, 90);
const t16: Point = geometric.pointRotate(point, 90, [1, 1]);
const t17: Point = geometric.pointTranslate(point, 75, 100);
const t18: boolean = geometric.pointWithLine(point, line);
const t19: number = geometric.polygonArea(polygon);
const t20: number = geometric.polygonArea(polygon, true);
const t21: [Point, Point] | null = geometric.polygonBounds(polygon);
const t22: Point = geometric.polygonCentroid(polygon);
const t23: Polygon = geometric.polygonHull(polygon);
const t24: boolean = geometric.polygonInPolygon(polygon, polygonB);
const t25: boolean = geometric.polygonIntersectsPolygon(polygon, polygonB);
const t26: number = geometric.polygonLength(polygon);
const t27: Point = geometric.polygonMean(polygon);
const t28: Polygon = geometric.polygonRegular();
const t29: Polygon = geometric.polygonRegular(5);
const t30: Polygon = geometric.polygonRegular(5, 1);
const t31: Polygon = geometric.polygonRegular(5, 1, [0, 0]);
const t32: Polygon = geometric.polygonRotate(polygon, 45);
const t33: Polygon = geometric.polygonRotate(polygon, 45, point);
const t34: Polygon = geometric.polygonScale(polygon, 0.5);
const t35: Polygon = geometric.polygonScale(polygon, 0.5, point);
const t36: Polygon = geometric.polygonTranslate(polygon, 45, 100);
const t37: Line = geometric.lineRotate(line, 1);
const t38: Polygon = geometric.polygonScaleX(polygon, 1.2);
const t39: Polygon = geometric.polygonScaleY(polygon, 1.2);
