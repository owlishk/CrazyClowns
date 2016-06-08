




//====================event handlers==============
 
$('#big').on('click', makeBigHat)
$('#little').on('click', makeLittleHat)
$('#orange').on('click', makeOrangeHat) 

$('#reset').on('click', reset)
                
                
                
//==============================================
                
function makeBigHat( evt ){
 
 TweenLite.to("#hat-top", 1, {attr:{y:0, height:45}, ease:Linear.easeNone, transformOrigin:"50% bottom"});

}

function makeLittleHat( evt ){
 
 TweenLite.to("#hat-top", 1, {attr:{y:27.715, height:15}, ease:Linear.easeNone, transformOrigin:"50% bottom"});

}

function makeOrangeHat( evt ){
 
 TweenLite.to("#hat-top", 1, {attr:{style:"fill:orange;stroke-width:1px;stroke:orange;"}, ease:Linear.easeNone, transformOrigin:"50% bottom"});
 
 TweenLite.to("#hat-brim", 1, {attr:{style:"fill:orange;stroke-width:1px;stroke:orange;"}, ease:Linear.easeNone, transformOrigin:"50% bottom"});

}

function reset(){
 TweenLite.to("#hat-top", 1, {attr:{height:20.872, y:22.715, style:"fill:black;stroke-width:1px;stroke:black;"}, ease:Linear.easeNone, transformOrigin:"50% bottom"});
 
 TweenLite.to("#hat-brim", 1, {attr:{height:9.562, y:43.588,style:"fill:black;stroke-width:1px;stroke:black;"}, ease:Linear.easeNone, transformOrigin:"50% bottom"});
   
}