/**
 * An Ambient shader
 */
class AmbientShader{
    constructor(ambientColor){
        this.ambientColor = ambientColor;
    }
    illuminateObject(rayFrom = null, rayCollision = null, normal = null, collisionObject = null, remaining = 0){
        return this.ambientColor;
    }
}

/**
 * A diffuse shader
 */
class DiffuseShader {
    constructor(diffuseColor, lightDirection) {
      this.diffuseColor = diffuseColor;
      this.lightDirection = lightDirection;
    }
    illuminateObject(rayFrom, rayCollision, normal, collisionObject = null, remaining = 0) {
      let dot = normal.dot(this.lightDirection)
      if (dot < 0) dot = 0;
      let color = this.diffuseColor.scale(dot)
      return color;
    }
  
  }
  
  /**
   * combine two shaders
   */
  
  class AddShader {
    constructor(one, two) {
      this.one = one;
      this.two = two;
    }
    illuminateObject(rayFrom, rayCollision, normal, collisionObject = null, remaining = 0) {
      let colorOne = this.one.illuminateObject(rayFrom, rayCollision, normal, collisionObject, remaining)
      let colorTwo = this.two.illuminateObject(rayFrom, rayCollision, normal, collisionObject, remaining)
      let color = colorOne.add(colorTwo)
      return color;
    }
  
  }