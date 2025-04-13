gdjs.gameCode = {};
gdjs.gameCode.localVariables = [];
gdjs.gameCode.GDcloud1Objects1= [];
gdjs.gameCode.GDcloud1Objects2= [];
gdjs.gameCode.GDcloud1Objects3= [];
gdjs.gameCode.GDcloud2Objects1= [];
gdjs.gameCode.GDcloud2Objects2= [];
gdjs.gameCode.GDcloud2Objects3= [];
gdjs.gameCode.GDplaneObjects1= [];
gdjs.gameCode.GDplaneObjects2= [];
gdjs.gameCode.GDplaneObjects3= [];
gdjs.gameCode.GDskyObjects1= [];
gdjs.gameCode.GDskyObjects2= [];
gdjs.gameCode.GDskyObjects3= [];
gdjs.gameCode.GDenemyObjects1= [];
gdjs.gameCode.GDenemyObjects2= [];
gdjs.gameCode.GDenemyObjects3= [];
gdjs.gameCode.GDdelObjects1= [];
gdjs.gameCode.GDdelObjects2= [];
gdjs.gameCode.GDdelObjects3= [];


gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10715340);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("plane"), gdjs.gameCode.GDplaneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("GamePlaying");
}{for(var i = 0, len = gdjs.gameCode.GDplaneObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplaneObjects1[i].activateBehavior("EllipseMovement", false);
}
}}

}


};gdjs.gameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() > 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).sub(400 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(400 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


};gdjs.gameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("plane"), gdjs.gameCode.GDplaneObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(-(20));
}{runtimeScene.getScene().getVariables().getFromIndex(1).sub(400 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}{for(var i = 0, len = gdjs.gameCode.GDplaneObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDplaneObjects2[i].setAngle(gdjs.gameCode.GDplaneObjects2[i].getAngle() + ((runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() - (gdjs.gameCode.GDplaneObjects2[i].getAngle())) * 10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.gameCode.GDplaneObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDplaneObjects2[i].setY(gdjs.gameCode.GDplaneObjects2[i].getY() + (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("plane"), gdjs.gameCode.GDplaneObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(20);
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(400 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}{for(var i = 0, len = gdjs.gameCode.GDplaneObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDplaneObjects2[i].setAngle(gdjs.gameCode.GDplaneObjects2[i].getAngle() + ((runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() - (gdjs.gameCode.GDplaneObjects2[i].getAngle())) * 10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.gameCode.GDplaneObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDplaneObjects2[i].setY(gdjs.gameCode.GDplaneObjects2[i].getY() + (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}
isConditionTrue_0 = !isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("plane"), gdjs.gameCode.GDplaneObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.gameCode.GDplaneObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplaneObjects1[i].setAngle(gdjs.gameCode.GDplaneObjects1[i].getAngle() + ((runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() - (gdjs.gameCode.GDplaneObjects1[i].getAngle())) * 10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.gameCode.GDenemyObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplaneObjects1Objects = Hashtable.newFrom({"plane": gdjs.gameCode.GDplaneObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.gameCode.GDenemyObjects1});
gdjs.gameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "NotStarted");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("sky"), gdjs.gameCode.GDskyObjects1);
{for(var i = 0, len = gdjs.gameCode.GDskyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDskyObjects1[i].setXOffset(gdjs.gameCode.GDskyObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "GamePlaying");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.gameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "EnemyTimer", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.gameCode.GDenemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects1Objects, 1292, gdjs.randomInRange(50, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 80), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemySpawnTimer");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.gameCode.GDenemyObjects1);
{for(var i = 0, len = gdjs.gameCode.GDenemyObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDenemyObjects1[i].setX(gdjs.gameCode.GDenemyObjects1[i].getX() + (-(8)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.gameCode.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("plane"), gdjs.gameCode.GDplaneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDplaneObjects1Objects, gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDenemyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game_over", false);
}}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDcloud1Objects1.length = 0;
gdjs.gameCode.GDcloud1Objects2.length = 0;
gdjs.gameCode.GDcloud1Objects3.length = 0;
gdjs.gameCode.GDcloud2Objects1.length = 0;
gdjs.gameCode.GDcloud2Objects2.length = 0;
gdjs.gameCode.GDcloud2Objects3.length = 0;
gdjs.gameCode.GDplaneObjects1.length = 0;
gdjs.gameCode.GDplaneObjects2.length = 0;
gdjs.gameCode.GDplaneObjects3.length = 0;
gdjs.gameCode.GDskyObjects1.length = 0;
gdjs.gameCode.GDskyObjects2.length = 0;
gdjs.gameCode.GDskyObjects3.length = 0;
gdjs.gameCode.GDenemyObjects1.length = 0;
gdjs.gameCode.GDenemyObjects2.length = 0;
gdjs.gameCode.GDenemyObjects3.length = 0;
gdjs.gameCode.GDdelObjects1.length = 0;
gdjs.gameCode.GDdelObjects2.length = 0;
gdjs.gameCode.GDdelObjects3.length = 0;

gdjs.gameCode.eventsList3(runtimeScene);
gdjs.gameCode.GDcloud1Objects1.length = 0;
gdjs.gameCode.GDcloud1Objects2.length = 0;
gdjs.gameCode.GDcloud1Objects3.length = 0;
gdjs.gameCode.GDcloud2Objects1.length = 0;
gdjs.gameCode.GDcloud2Objects2.length = 0;
gdjs.gameCode.GDcloud2Objects3.length = 0;
gdjs.gameCode.GDplaneObjects1.length = 0;
gdjs.gameCode.GDplaneObjects2.length = 0;
gdjs.gameCode.GDplaneObjects3.length = 0;
gdjs.gameCode.GDskyObjects1.length = 0;
gdjs.gameCode.GDskyObjects2.length = 0;
gdjs.gameCode.GDskyObjects3.length = 0;
gdjs.gameCode.GDenemyObjects1.length = 0;
gdjs.gameCode.GDenemyObjects2.length = 0;
gdjs.gameCode.GDenemyObjects3.length = 0;
gdjs.gameCode.GDdelObjects1.length = 0;
gdjs.gameCode.GDdelObjects2.length = 0;
gdjs.gameCode.GDdelObjects3.length = 0;


return;

}

gdjs['gameCode'] = gdjs.gameCode;
