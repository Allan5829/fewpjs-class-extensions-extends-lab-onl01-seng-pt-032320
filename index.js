class Polygon {

    constructor(array) {
        this.array = array;
    }

    get countSides() {
        return this.array.length
    }

    get perimeter () {
        let p = 0;
        this.array.map( num => p += num)
        return p;
    }

}

class Triangle extends Polygon {

    get isValid () {
        let a = this.array[0];
        let b = this.array[1];
        let c = this.array[2];
        let ab = a + b;
        let bc = b + c;
        let ac = a + c;
        if (ab > c && bc > a && ac > b) {
            return true
        } else {
            return false
        }
    }

}

class Square extends Polygon {

    get area() {
        return this.array[0] ** 2
    }

    get isValid () {
        let a = this.array;
        if (a[0] === a[1] && a[1] === a[2] && a[2] === a[3]) {
            return true
        } else {
            return false
        }
    }

}