gdjs.game_95overCode = {};
gdjs.game_95overCode.localVariables = [];
gdjs.game_95overCode.GDNewTiledSpriteObjects1= [];
gdjs.game_95overCode.GDNewTiledSpriteObjects2= [];
gdjs.game_95overCode.GDTitleObjects1= [];
gdjs.game_95overCode.GDTitleObjects2= [];
gdjs.game_95overCode.GDreplayObjects1= [];
gdjs.game_95overCode.GDreplayObjects2= [];
gdjs.game_95overCode.GDmenuObjects1= [];
gdjs.game_95overCode.GDmenuObjects2= [];


gdjs.game_95overCode.mapOfGDgdjs_9546game_959595overCode_9546GDreplayObjects1Objects = Hashtable.newFrom({"replay": gdjs.game_95overCode.GDreplayObjects1});
gdjs.game_95overCode.mapOfGDgdjs_9546game_959595overCode_9546GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.game_95overCode.GDmenuObjects1});
gdjs.game_95overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("replay"), gdjs.game_95overCode.GDreplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.game_95overCode.mapOfGDgdjs_9546game_959595overCode_9546GDreplayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.game_95overCode.GDmenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.game_95overCode.mapOfGDgdjs_9546game_959595overCode_9546GDmenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


};

gdjs.game_95overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_95overCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.game_95overCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.game_95overCode.GDTitleObjects1.length = 0;
gdjs.game_95overCode.GDTitleObjects2.length = 0;
gdjs.game_95overCode.GDreplayObjects1.length = 0;
gdjs.game_95overCode.GDreplayObjects2.length = 0;
gdjs.game_95overCode.GDmenuObjects1.length = 0;
gdjs.game_95overCode.GDmenuObjects2.length = 0;

gdjs.game_95overCode.eventsList0(runtimeScene);
gdjs.game_95overCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.game_95overCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.game_95overCode.GDTitleObjects1.length = 0;
gdjs.game_95overCode.GDTitleObjects2.length = 0;
gdjs.game_95overCode.GDreplayObjects1.length = 0;
gdjs.game_95overCode.GDreplayObjects2.length = 0;
gdjs.game_95overCode.GDmenuObjects1.length = 0;
gdjs.game_95overCode.GDmenuObjects2.length = 0;


return;

}

gdjs['game_95overCode'] = gdjs.game_95overCode;
