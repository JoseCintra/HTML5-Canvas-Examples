function createAnim() {
 
  //Block 1
  var tela = oCanvas.create({
    canvas: "#canvas",
    background: "#ccc"
  });
 
  //Block 2
  var quadrado = tela.display.rectangle({
    x: 25,
    y: 25,
    width: 20,
    height: 20, 
    fill: "#0aa",
    velocX: 4,
    velocY: 4
  });
  tela.addChild(quadrado);

  //Block 3
   
  tela.bind("click tap", function() {
    quadrado.x = tela.mouse.x;
    quadrado.y = tela.mouse.y;
  });

  //Block 4
  tela.setLoop(function() {
    quadrado.x += quadrado.velocX;
    quadrado.y += quadrado.velocY;
    quadrado.rotation++;    
    if ((quadrado.x <= 0) || (quadrado.x >= (tela.width)))  
      quadrado.velocX = -quadrado.velocX;
    if ((quadrado.y < 20) || (quadrado.y > (tela.height - 20))) 
      quadrado.velocY = -quadrado.velocY;
  }).start();
 
}