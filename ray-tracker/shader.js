/**
 * An Ambient shader
 */
class AmbientShader{
    constructor(ambientColor){
        this.ambientColor = ambientColor;
    }
    illuminateObject(rayFrom, rayCollision, normal, collisionObject, remaining){
        return this.ambientColor;
    }
}