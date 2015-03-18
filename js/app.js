

(function() {

    document.addEventListener('DOMContentLoaded', function() {
        // create an new instance of a pixi stage
        var stage = new PIXI.Stage(0x66FF99);
        
        // Base viewport
        var height = 576;
        var width = 1024;
        
        // Add changement
        var viewport = document.getElementById('idViewport');
        viewport.setAttribute('content','width='+width+' height='+height);

        var renderer = PIXI.autoDetectRenderer(width, height);

        // add the renderer view element to the DOM
        document.body.appendChild(renderer.view);

        
        // create a texture from an image path
        
        var explosionTextures = []
        for (var i=0; i < 5; i++)
        {
             var texture = PIXI.Texture.fromImage("asset/sprite"+(i+1)+".png");
             explosionTextures.push(texture);
        };

            // create an explosion MovieClip
            var explosion = new PIXI.MovieClip(explosionTextures);
            explosion.position.x = 120;
            explosion.position.y = height-210;
            explosion.anchor.x = 0.5;
            explosion.anchor.y = 0.5;
            explosion.animationSpeed = 0.2
            explosion.gotoAndPlay(1);
            stage.addChild(explosion);

        
        
        var farTexture = PIXI.Texture.fromImage("asset/maxresdefault.jpg");
        far = new PIXI.TilingSprite(farTexture, width, height);
        far.scale.x = 1;
        far.scale.y = 1;

        var groundTexture = PIXI.Texture.fromImage("asset/ground.jpg");
        ground = new PIXI.TilingSprite(groundTexture, width, 60);
        ground.position.y = height-60;
        
        var buldingTexture = PIXI.Texture.fromImage("asset/building.png");
        building = new PIXI.TilingSprite(buldingTexture, width, 404);
        building.position.y = height-404;
        
        
        stage.addChild(far);
        stage.addChild(building);
        stage.addChild(ground);
        stage.addChild(explosion);
        
        requestAnimFrame(animate);
        function animate() {
            requestAnimFrame(animate);
            far.tilePosition.x -= 0.1;
            ground.tilePosition.x -=10;
            building.tilePosition.x -= 1;
            // just for fun, let's rotate mr rabbit a little

            // render the stage
            renderer.render(stage);
        }
    }, false);
    
    
    ionic.Platform.ready(function() {
    // hide the status bar using the StatusBar plugin
    StatusBar.hide();
    });
}());
