gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.GDNewTiledSpriteObjects1= [];
gdjs.menuCode.GDNewTiledSpriteObjects2= [];
gdjs.menuCode.GDheaderObjects1= [];
gdjs.menuCode.GDheaderObjects2= [];
gdjs.menuCode.GDtext_9595playObjects1= [];
gdjs.menuCode.GDtext_9595playObjects2= [];
gdjs.menuCode.GDNewSpriteObjects1= [];
gdjs.menuCode.GDNewSpriteObjects2= [];


gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDtext_95959595playObjects1Objects = Hashtable.newFrom({"text_play": gdjs.menuCode.GDtext_9595playObjects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("text_play"), gdjs.menuCode.GDtext_9595playObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDtext_95959595playObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game", false);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menuCode.GDheaderObjects1.length = 0;
gdjs.menuCode.GDheaderObjects2.length = 0;
gdjs.menuCode.GDtext_9595playObjects1.length = 0;
gdjs.menuCode.GDtext_9595playObjects2.length = 0;
gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
gdjs.menuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.menuCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.menuCode.GDheaderObjects1.length = 0;
gdjs.menuCode.GDheaderObjects2.length = 0;
gdjs.menuCode.GDtext_9595playObjects1.length = 0;
gdjs.menuCode.GDtext_9595playObjects2.length = 0;
gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
