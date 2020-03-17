sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.halo, 100)
    info.changeLifeBy(1)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . . 9 9 9 9 9 9 9 . . . . 
. . . . 9 9 9 9 9 9 9 9 9 . . . 
. . . . 9 9 9 9 9 9 9 9 9 . . . 
. . . . 9 9 9 9 9 9 9 9 9 . . . 
. . . . 9 9 9 9 9 9 9 9 9 . . . 
. . . . 9 9 9 9 9 9 9 9 . . . . 
. . . . 9 9 9 9 9 9 9 . . . . . 
. . . . . . 9 9 9 9 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let Bogey: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
1 1 1 1 1 1 1 . . . . . . . . . 
8 8 8 8 8 8 8 1 . . . . . . . . 
8 2 2 2 2 2 2 2 1 . . . . . . . 
8 2 2 2 2 2 2 2 1 . . . . . . . 
8 8 8 8 8 8 8 1 . . . . . . . . 
1 1 1 1 1 1 1 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
game.onUpdateInterval(500, function () {
    Bogey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . 2 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    Bogey.setVelocity(-100, 0)
    Bogey.setPosition(180, Math.randomRange(8, 112))
})
