sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite, effects.halo, 200)
})
let projectile: Sprite = null
scene.setBackgroundColor(6)
info.startCountdown(30)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    3 d d d d d d d d d d d d d d 3 
    3 d d d d d d d d d d d d d d 3 
    . 3 d d d d d d d d d d d d 3 . 
    . 3 3 d d d d d d d d d d 3 3 . 
    . . 3 d d d d d d d d d d 3 . . 
    . . 3 3 d d d d d d d d 3 3 . . 
    . . . 3 3 d d d d d d 3 3 . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.setPosition(76, 100)
game.onUpdateInterval(randint(800, 1500), function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . d d d 2 . . . . . . . 
        . . . . d d 2 2 2 2 . . . . . . 
        . . d d 2 1 2 2 2 2 2 . . . . . 
        d d 2 2 1 1 2 2 2 2 2 . . . . . 
        2 2 2 2 1 1 2 2 2 2 2 . . . . . 
        . 2 2 2 2 2 1 1 2 2 2 . . . . . 
        . . 2 2 2 2 2 1 2 2 2 . . . . . 
        . . 2 2 2 2 2 1 2 2 2 2 2 . . . 
        . . . 2 2 2 2 1 1 2 2 2 2 2 2 . 
        . . . 2 2 2 2 2 1 2 2 2 2 2 2 2 
        . . . 2 2 2 2 2 1 1 1 2 2 2 2 2 
        . . . . 2 2 2 2 2 2 1 1 2 2 2 d 
        . . . . 2 2 2 2 2 2 2 1 1 2 d d 
        . . . . . 2 2 2 2 2 2 2 1 d d . 
        . . . . . . . 2 2 2 2 2 d d . . 
        . . . . . . . . 2 2 2 d d . . . 
        `, mySprite, 0, 50)
    projectile.setPosition(randint(10, 150), 0)
})
