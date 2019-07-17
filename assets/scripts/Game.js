// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // refer the starPrefab resource
        starPrefab: {
            default: null,
            type: cc.Prefab,
        },

        // star vanish random time
        maxStarDuration: 0,
        minStarDuration: 0,

        // ground node
        ground: {
            default: null,
            type: cc.Node,
        },

        // Player node
        player: {
            default: null,
            type: cc.Node,
        },
    },

    spawnNewStar: function () {
        // create a new star node from star Prefab
        var newStar = cc.instantiate(this.starPrefab);
        // add star node to canvas
        this.node.addChild(newStar);
        newStar.setPosition(this.getNewStarPosition());
        // save game instant to star
        newStar.getComponent('Star').game = this;
        cc.log(newStar.getComponent('star'));
    },

    getNewStarPosition: function () {
        var randX = 0;
        var maxX = this.node.width / 2;
        randX = (Math.random() - 0.5) * 2 * maxX;
        var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50;
        return cc.v2(randX, randY);
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // get ground Y position
        this.groundY = this.ground.y + this.ground.height / 2;
        // spawn a new star
        this.spawnNewStar();
    },

    start() {

    },

    // update (dt) {},
});
