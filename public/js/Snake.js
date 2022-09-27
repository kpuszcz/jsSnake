export default class Snake {
    constructor(scene){
        this.scene = scene;
        this.body = [];
        this.body.push(this.scene.add.rectangle(10,10,16,16,0xff0000).setOrigin(0));
    }

    update(time){
        this.body[0].x += 1;
    }
}