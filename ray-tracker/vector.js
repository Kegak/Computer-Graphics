class Vector3 {

    static zero = new Vector3();
    static one = new Vector3(1,1,1);
    static forward = new Vector3(0,0-1)
    static backward = new Vector3(0,0,1)
    static left = new Vector3(0,0,-1)
    static right = new Vector3(0,0,1)
    static up = new Vector3(0,1,0)
    static down = new Vector3(0, -1, 0)
    /**
     * Creates a New Vector3.
     * <p>
     *  Any parameters not supplied defaults to 0.
     * </p.
     */
    constructor(x = 0, y = 0, z = 0){
        this.x = x;
        this.y = y;
        this.z = z;
        Object.freeze(this);
    }

    /**
     * Get the x, treating it a r in RBG
     */
    get r(){
        return this.x;
    }

    /**
     * Get the y, treating it as g in RGB
     */
    get g(){
        return this.y
    }

    /**
     * Get  the z, treating it as b in RGB
     */
    get b(){
        return this.z
    }
    /**
     * Creates a new Vectors of length 1 from this vector.
     * @returns {Vector3} The normalized vector
     */
    normalize(){
        let length = this.length()
        return new Vector3(this.x / length, this.y / length, this.z / length)
    }
    /**
     * Calculates the length of this vector.
     * @returns The length of the vector
     */
    length(){
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2)
    }
    /**
     * Calculates the dot product of this and the other vector
     * @param {Vector3} other The other vector
     * @returns The dot product of this and the other vector
     */
    dot(other){
        return this.x * other.x + this.y * other.y + this.z * other.z
    }
    /**
     * Calculates the cross product of this and the other vector
     * @param {Vector3} other The other vector
     * @returns the cross product of both vectors
     */
    cross(other){
        return new Vector3(this.y * other.z - this.z * other.y, this.z * other.x - this.x * other.z, this.x * other.y - this.y * other.x)
    }
    /**
     * Creates a new Vector3 that is the sum of this and the other vector
     * @param {Vector3} other the other vector
     * @returns A new Vector3 with the sum of both vectors
     */

    add(other){
        return new Vector3(this.x + other.x, this.y + other.y, this.z + other.z)
    }
    /**
     * Create a Vector3 inverse
     * @returns A new Vector3
     */
    negate(){
        return new Vector3(-this.x, -this.y, -this.z)
    }
    /**
     * Creates a new Vector3 that is the subtraction of two vectors
     * @param {*} other The other vector
     * @returns A new Vector3 that is the difference
     */
    minus(other){
        return this.add(other.negate())
    }

    scale(scalar){
        return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar)
    }

}