class character {

    constructor (path, x, y) {
        this.path = path;
        this.x = x;
        this.y = y;
    }

    getImage() 
    {
        var myImage = loadImage(this.path);
        return myImage;
    }

    getX()
    {
        return this.x;
    }
    
    getY()
    {
        return this.y;
    }

    setX(x) {
        this.x = x;
        return this.x;
    }
}