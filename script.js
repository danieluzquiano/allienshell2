t=1e4
setup=_=>{createCanvas(w=windowWidth,h=windowHeight),noiseSeed(fxrand()*999999)}
  draw=_=>{
    for(
      background(0),
      translate(w/2,h/2),
      scale(125),
      noStroke(),
      fill(255),
      n=map(mouseX,0,w,0,3),
      a=0;
      a<5;
      a+=4e-4
    )
    x=1e4*a,
    y=cos(a)/sin(t/x),
    e=cos(x)*1.3,
    f=2.5*noise(tan(e)),
    circle(sin(tan(cos(y))+n)*f*e,sin(tan(sin(y))+t)*f,.012);
    t += .03
  }; //#つぶやきProcessing
