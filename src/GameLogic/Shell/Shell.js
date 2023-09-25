import Phaser from "phaser";
import mapData from '../../MapData/mapData.json';  // Adjust this path to where your JSON file is actually located

class Shell extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, angle, power, wind = { angle: 0, force: 0 }) {
    super(scene, x, y, 'shell');
    scene.add.existing(this);
    scene.physics.add.existing(this);
    
    this.isActive = true;
    this.wind = wind;
    this.gravity = 9.8;
    this.powerScale = 10;
    const angleInRadians = Phaser.Math.DegToRad(angle);

    const velocityX = power * Math.cos(angleInRadians) * this.powerScale;
    const velocityY = -power * Math.sin(angleInRadians) * this.powerScale;

    this.setVelocity(velocityX, velocityY);
    this.setBounce(0.5);
    this.setCollideWorldBounds(false);
  }

  update() {
    if (!this.isActive) {
      return;
    }

    if (this.y > 550) {
      this.destroy();
      return;
    }
    
    this.angle = Phaser.Math.RadToDeg(
      Math.atan2(-this.body.velocity.y, this.body.velocity.x)
    );
    this.setAccelerationY(this.gravity);
    const windAngleInRadians = Phaser.Math.DegToRad(this.wind.angle);
    this.setAccelerationX(this.wind.force * Math.cos(windAngleInRadians));
    this.setAccelerationY(-this.wind.force * Math.sin(windAngleInRadians));
  }


  checkCollision(enemyTank) {
    if (!this.isActive) {
      return;
    }

    const terrainInfo = mapData[Math.floor(this.x).toString()];
    if (terrainInfo && this.y >= terrainInfo.y) {
      this.destroy();
      return;
    }

    const enemyTankX = enemyTank.position.x;
    const enemyTankY = enemyTank.position.y;
    const collisionBoxSize = 10; 
    if (
      this.x >= enemyTankX - collisionBoxSize &&
      this.x <= enemyTankX + collisionBoxSize &&
      this.y >= enemyTankY - collisionBoxSize &&
      this.y <= enemyTankY + collisionBoxSize
    ) {
      this.destroy();
      enemyTank.health -= 1; 
    }
  }


  destroy() {
    super.destroy();
    this.isActive = false;
  }
}

export default Shell;
