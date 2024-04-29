/**
 * A class that explains a sphere parametrically
 */
class Sphere{
    /**
     * Create a sphere with a given coordinate
     * and radius
     * @param {Vector3} center The center of a sphere
     * @param {Number} radius
     */
    constructor(center, radius){
        this.center = center
        this.radius = radius
    }
    /**
     * Calculates the intersection point between a ray and
     * this sphere
     * @param {Vector3} o 
     * @param {Vector3} d
     * @returns undefined if there are no real roots or both roots are
     * behind the ray origin, the coordinate of the closest collision point otherwise
     */
    intersect(o, d){
        let c = this.center;
        let r = this.radius;
        let oMinusC = o.minus(this.center);


        let A = 1;
        let B = 2 * d.dot(oMinusC)
        let C = (d.dot(oMinusC)) ** 2 - this.radius ** 2

        let discriminant = (d.dot(oMinusC)) ** 2 - (oMinusC.dot(oMinusC) - r ** 2)

        if (discriminant <= 0){
            return undefined;
        }



        let sqrt = Math.sqrt(discriminant);
        let t1 = (-d.dot(oMinusC) - sqrt)
        let t2 = (-d.dot(oMinusC) + sqrt)

        let timeToCollision;

        //If both collision points are positive, choose the closest one
        if (t1 > 0 && t2 > 0){
            timeToCollision = Math.min(t1, t2)
        }
        //Both collision points were not in front of the ray.
        else{
            //Check if t1 is positive
            if (t1 > 0)
                timeToCollision = t1;
            else if (t2 > 0)
                timeToCollision = t2;
            else
                return undefined;
        }

        let collisionLocation = o.add(d.scale(timeToCollision));

        return new Collision(timeToCollision, collisionLocation, collisionLocation.minus(this.center).normalize())
    }
} 