console.log('YashHub');

var game = new Phaser.Game(800, 600, Phaser.Auto, '', {preload:preload, create:create, update:update});
var score = 0;
var life = 3;

function  preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star', 'assets/star.png')
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32,)
}

function create(){
	game.physics.startSyste,(Ohaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'sky')
    platforms = game.add.physicsGroup();
    platforms.enableBody = true;
    var ground = platforms.create(0, 550. 'ground');
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;
    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;
    ledge = platforms.create(-150, 250, 'ground');
    ledge.body.immovable = true;
    player = game.add.sprite(32,400, 'dude');
    player.animations.add('left', [0, 1, 2, 3], 10, true );
    player.animations.add('right', [5, 6, 7, 8], 10, true );
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
    enemy1 = game.add.sprite(760, 20, 'baddie');
    enemy1.animations.add('left', [0,1], 10, true);
    enemy1.animations.add('right' [2,3], 10, true);
    game.physics.arcade.enable(enemy1);
    enemy1.body.gravity.y = 500;
    enemy1.body.collideWorldBounds = true;
    

    enemy2 = game.add.sprite(760, 20, 'baddie');
    enemy2.animations.add('left', [0,1], 10, true);
    enemy2.animations.add('right' [2,3], 10, true);
    game.physics.arcade.enable(enemy2);
    enemy2.body.gravity.y = 500;
    enemy2.body.collideWorldBounds = true;

    enemy3 = game.add.sprite(760, 20, 'baddie');
    enemy3.animations.add('left', [0,1], 10, true);
    enemy3.animations.add('right' [2,3], 10, true);
    game.physics.arcade.enable(enemy3);
    enemy3.body.gravity.y = 500;
    enemy3.body.collideWorldBounds = true;

    cursors = game.input.keyboard.createCursorKeys

    stars = game.add.physicsGroup();
    stars.enableBody = true;
    for(var 1 = 0; 1< )

}
 var style = {font: "bold 32px Arial", fill: "#fff", boundsAllignH: "center", boundsAllignV: "middle"};
 scorelabel = game.add.text(-60,0, "Your scre is: ", style);
 scoretext = game.add.text(70,0, score,style);
 scorelabel.setShadow(3,3, 'rgba(0,0,0,0.5)',2;
 scoretext.setShadow(3,3,'rgba(0,0,0,0.5)',2) ;
 scorelabel.setTextBounds(0,520,800,100);
 scoretext.setTextBounds(0,520,800,100);
 lifelabel = game.add.text(-300,0,"Lives: ", style);
 lifetext = game.add.text(-240,0,life,etyle);
 lifelabel.setShadow(3,3,'3,3,'rgba'(0,0,0,0.5)',2);
 lifetext.setShadow(3,3,'3,3,'rgba'(0,0,0,0.5)',2);
 lifelabel.setTextBounds(0,0,800,100);
 lifetext.setTextBounds(0,0,800,100);
} 

function update(){
	game.physics.arcade.collide(player,platforms);
	game.physics.arcade.collide(enemy1,platforms);
	game.physics.arcade.collide(enemy2,platforms);
	game.physics.arcade.collide(enemy3,platforms);
	player.body.velocity.x = 0;

	if(cursors.left.isDown){
		player.body.velocity.x = -150;
		player.animations.play('left');
	} else if(cursors.right.isDown){
		player.body.velocity.x = 150;
		player.animations.play('right');
	} else if {
		player.animations.stop();
		player.frame = 4;
	}

	if (cursors.up.isDown &&  player.body.touching.down){
		player.body.velocity.y. = -300;
	}
	
	if (enemy1.x > 759){
		enemy1.animations.play('left');
		enemy1.body.velocity.x = -120;
	}else if(enemy1.x < 405){
		enemy1.animations.play('right');
		enemy1.body.velocity.x = 80;
	}

	if (enemy2.x > 200){
		enemy2.animations.play('left');
		enemy2.body.velocity.x = -80;
	}else if(enemy2.x < 21){
		enemy2.animations.play('right');
		enemy2.body.velocity.x = 80;
	}

	if (enemy3.x > 759){
		enemy3.animations.play('left');
		enemy3.body.velocity.x = -80;
	}else if(enemy3.x < 201){
		enemy3.animations.play('right');
		enemy3.body.velocity.x = 80;
	}

 game.physics.arcade.collide(stars, platforms);
 game.physics.arcade.overlap(player, star, collectStar, null, this;
 game.physics.arcade.overlaps(player, enemy1, loseLife, null, this);
 game.physics.arcade.overlaps(player, enemy1, loseLifeLeft, null, this);
 game.physics.arcade.overlaps(player, enemy1, loseLife, null, this);

}

function collectStar(player,star){
	star.kill();
	score =score +1;
	scoretext.setText(score);
	star = stars.create(Math.floor(Math.random()+750),0,'star');
	star.body.bounce.y = 0.7 + Math.random()*0.2;
}

function loselife(player, enemy){
	life -= 1;
	lifetext.setText(life);
}
