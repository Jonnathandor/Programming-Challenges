// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width = 80, height = 60){
    if(width <= 0){ width = 1; }
    if(height <= 0){ height = 1; }
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function(width, height){
    this.width = width;
    this.height = height;
}

export function Position(x = 0, y = 0){
    if(x < 0){ x = 0; }
    if(y < 0){ y = 0; }
    this.x = x;
    this.y = y;
}

Position.prototype.move = function(newX, newY){
    this.x = newX;
    this.y = newY;
}

export class ProgramWindow {
    constructor(){
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(size){
        const maxWidth = this.screenSize.width - this.position.x;
        const maxHeight = this.screenSize.height - this.position.y;

        const newWidth = Math.min(size.width, maxWidth);
        const newHeight = Math.min(size.height, maxHeight);

        this.size.resize(newWidth, newHeight);

    }

    move(position){
        const maxX = this.screenSize.width - this.size.width;
        const maxY = this.screenSize.height - this.size.height;

        const newX = Math.min(position.x, maxX);
        const newY = Math.min(position.y, maxY);

        this.position.move(newX, newY);
    }
}

export function changeWindow(programWindow){
    programWindow.resize(new Size(400,300));
    programWindow.move(new Position(100, 150));
    return programWindow;
}
