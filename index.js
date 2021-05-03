// Your code here
class Polygon {
    constructor(side) {
        this.side = side;
        this.count = this.side.length
    }
    get countSides() {
        return this.count
    }
    get perimeter() {
        // return parseInt(this.side) * parseInt(this.count)
        if (!Array.isArray(this.side)) return;
        let sum = 0;
        for (let num of this.side) {
            sum += num
        }
        return sum
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (!Array.isArray(this.side)) return;
        if (this.count !== 3) return;
        let one = this.side[0]
        let two = this.side[1]
        let three = this.side[2]
        return ((one + two > three) && (one + three > two) && (two + three > one));
    }
}

class Square extends Polygon {
    get isValid() {
        if (!Array.isArray(this.side)) return;
        if (this.count !== 4) return;
        let one = this.side[0]
        let two = this.side[1]
        let three = this.side[2]
        let four = this.side[3]
        return ((one === two) && (one === three) && (one === four))
    }
    get area() {
        if (!Array.isArray(this.side)) return;
        if (this.count !== 4) return;
        let one = this.side[0]
        return one * one;
    }
}