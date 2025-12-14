gdjs.MainGameCode = {};
gdjs.MainGameCode.localVariables = [];
gdjs.MainGameCode.idToCallbackMap = new Map();
gdjs.MainGameCode.GDGroundObjects1= [];
gdjs.MainGameCode.GDGroundObjects2= [];
gdjs.MainGameCode.GDGroundObjects3= [];
gdjs.MainGameCode.GDMyBaseObjects1= [];
gdjs.MainGameCode.GDMyBaseObjects2= [];
gdjs.MainGameCode.GDMyBaseObjects3= [];
gdjs.MainGameCode.GDEnemyBaseObjects1= [];
gdjs.MainGameCode.GDEnemyBaseObjects2= [];
gdjs.MainGameCode.GDEnemyBaseObjects3= [];
gdjs.MainGameCode.GDMamboObjects1= [];
gdjs.MainGameCode.GDMamboObjects2= [];
gdjs.MainGameCode.GDMamboObjects3= [];
gdjs.MainGameCode.GDUlalaObjects1= [];
gdjs.MainGameCode.GDUlalaObjects2= [];
gdjs.MainGameCode.GDUlalaObjects3= [];
gdjs.MainGameCode.GDJumpScareObjects1= [];
gdjs.MainGameCode.GDJumpScareObjects2= [];
gdjs.MainGameCode.GDJumpScareObjects3= [];
gdjs.MainGameCode.GDGoldShipObjects1= [];
gdjs.MainGameCode.GDGoldShipObjects2= [];
gdjs.MainGameCode.GDGoldShipObjects3= [];
gdjs.MainGameCode.GDMoneyTextObjects1= [];
gdjs.MainGameCode.GDMoneyTextObjects2= [];
gdjs.MainGameCode.GDMoneyTextObjects3= [];
gdjs.MainGameCode.GDUlalaSpawnObjects1= [];
gdjs.MainGameCode.GDUlalaSpawnObjects2= [];
gdjs.MainGameCode.GDUlalaSpawnObjects3= [];
gdjs.MainGameCode.GDMamboSpawnObjects1= [];
gdjs.MainGameCode.GDMamboSpawnObjects2= [];
gdjs.MainGameCode.GDMamboSpawnObjects3= [];
gdjs.MainGameCode.GDGoldShip2Objects1= [];
gdjs.MainGameCode.GDGoldShip2Objects2= [];
gdjs.MainGameCode.GDGoldShip2Objects3= [];
gdjs.MainGameCode.GDMamboDObjects1= [];
gdjs.MainGameCode.GDMamboDObjects2= [];
gdjs.MainGameCode.GDMamboDObjects3= [];
gdjs.MainGameCode.GDUlalaDObjects1= [];
gdjs.MainGameCode.GDUlalaDObjects2= [];
gdjs.MainGameCode.GDUlalaDObjects3= [];
gdjs.MainGameCode.GDGoldShipDObjects1= [];
gdjs.MainGameCode.GDGoldShipDObjects2= [];
gdjs.MainGameCode.GDGoldShipDObjects3= [];
gdjs.MainGameCode.GDBlackCurtainObjects1= [];
gdjs.MainGameCode.GDBlackCurtainObjects2= [];
gdjs.MainGameCode.GDBlackCurtainObjects3= [];
gdjs.MainGameCode.GDGorushiObjects1= [];
gdjs.MainGameCode.GDGorushiObjects2= [];
gdjs.MainGameCode.GDGorushiObjects3= [];
gdjs.MainGameCode.GDDialogBoxObjects1= [];
gdjs.MainGameCode.GDDialogBoxObjects2= [];
gdjs.MainGameCode.GDDialogBoxObjects3= [];
gdjs.MainGameCode.GDStoryTextObjects1= [];
gdjs.MainGameCode.GDStoryTextObjects2= [];
gdjs.MainGameCode.GDStoryTextObjects3= [];


gdjs.MainGameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StoryText"), gdjs.MainGameCode.GDStoryTextObjects2);
{for(var i = 0, len = gdjs.MainGameCode.GDStoryTextObjects2.length ;i < len;++i) {
    gdjs.MainGameCode.GDStoryTextObjects2[i].setBBText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(4).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10966996);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StoryText"), gdjs.MainGameCode.GDStoryTextObjects1);
{for(var i = 0, len = gdjs.MainGameCode.GDStoryTextObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDStoryTextObjects1[i].setBBText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)))));
}
}
}

}


};gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShip2Objects1Objects = Hashtable.newFrom({"GoldShip2": gdjs.MainGameCode.GDGoldShip2Objects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDMamboSpawnObjects1Objects = Hashtable.newFrom({"MamboSpawn": gdjs.MainGameCode.GDMamboSpawnObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDMamboObjects1Objects = Hashtable.newFrom({"Mambo": gdjs.MainGameCode.GDMamboObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDMamboObjects1Objects = Hashtable.newFrom({"Mambo": gdjs.MainGameCode.GDMamboObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDEnemyBaseObjects1Objects = Hashtable.newFrom({"EnemyBase": gdjs.MainGameCode.GDEnemyBaseObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDMamboObjects1Objects = Hashtable.newFrom({"Mambo": gdjs.MainGameCode.GDMamboObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShipObjects1Objects = Hashtable.newFrom({"GoldShip": gdjs.MainGameCode.GDGoldShipObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDMamboObjects1Objects = Hashtable.newFrom({"Mambo": gdjs.MainGameCode.GDMamboObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShip2Objects1Objects = Hashtable.newFrom({"GoldShip2": gdjs.MainGameCode.GDGoldShip2Objects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDUlalaObjects1Objects = Hashtable.newFrom({"Ulala": gdjs.MainGameCode.GDUlalaObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShipObjects1Objects = Hashtable.newFrom({"GoldShip": gdjs.MainGameCode.GDGoldShipObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDUlalaObjects1Objects = Hashtable.newFrom({"Ulala": gdjs.MainGameCode.GDUlalaObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShip2Objects1Objects = Hashtable.newFrom({"GoldShip2": gdjs.MainGameCode.GDGoldShip2Objects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDMamboDObjects1Objects = Hashtable.newFrom({"MamboD": gdjs.MainGameCode.GDMamboDObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDUlalaDObjects1Objects = Hashtable.newFrom({"UlalaD": gdjs.MainGameCode.GDUlalaDObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShipDObjects1Objects = Hashtable.newFrom({"GoldShipD": gdjs.MainGameCode.GDGoldShipDObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShipDObjects1Objects = Hashtable.newFrom({"GoldShipD": gdjs.MainGameCode.GDGoldShipDObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDJumpScareObjects1Objects = Hashtable.newFrom({"JumpScare": gdjs.MainGameCode.GDJumpScareObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDUlalaSpawnObjects1Objects = Hashtable.newFrom({"UlalaSpawn": gdjs.MainGameCode.GDUlalaSpawnObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDUlalaObjects1Objects = Hashtable.newFrom({"Ulala": gdjs.MainGameCode.GDUlalaObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDUlalaObjects1Objects = Hashtable.newFrom({"Ulala": gdjs.MainGameCode.GDUlalaObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDEnemyBaseObjects1Objects = Hashtable.newFrom({"EnemyBase": gdjs.MainGameCode.GDEnemyBaseObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShipObjects1Objects = Hashtable.newFrom({"GoldShip": gdjs.MainGameCode.GDGoldShipObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDMyBaseObjects1Objects = Hashtable.newFrom({"MyBase": gdjs.MainGameCode.GDMyBaseObjects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShip2Objects1Objects = Hashtable.newFrom({"GoldShip2": gdjs.MainGameCode.GDGoldShip2Objects1});
gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDMyBaseObjects1Objects = Hashtable.newFrom({"MyBase": gdjs.MainGameCode.GDMyBaseObjects1});
gdjs.MainGameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8273508);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.clamp(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) - gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0)), 640, 6300), "", 0);
}
}

}


};gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShipObjects1Objects = Hashtable.newFrom({"GoldShip": gdjs.MainGameCode.GDGoldShipObjects1});
gdjs.MainGameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() == 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9651212);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "StoryLayer");
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).add(1);
}

{ //Subevents
gdjs.MainGameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StoryText"), gdjs.MainGameCode.GDStoryTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDStoryTextObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDStoryTextObjects1[i].getBBText() == "END" ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDStoryTextObjects1[k] = gdjs.MainGameCode.GDStoryTextObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDStoryTextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "StoryLayer");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnGoldShip");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StoryText"), gdjs.MainGameCode.GDStoryTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDStoryTextObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDStoryTextObjects1[i].getBBText() == "END2" ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDStoryTextObjects1[k] = gdjs.MainGameCode.GDStoryTextObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDStoryTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10967204);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyBase"), gdjs.MainGameCode.GDEnemyBaseObjects1);
gdjs.MainGameCode.GDGoldShip2Objects1.length = 0;

{gdjs.evtTools.camera.hideLayer(runtimeScene, "StoryLayer");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShip2Objects1Objects, (( gdjs.MainGameCode.GDEnemyBaseObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDEnemyBaseObjects1[0].getPointX("")), (( gdjs.MainGameCode.GDEnemyBaseObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDEnemyBaseObjects1[0].getPointY("")) + 120, "");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "run.wav", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackCurtain"), gdjs.MainGameCode.GDBlackCurtainObjects1);
{for(var i = 0, len = gdjs.MainGameCode.GDBlackCurtainObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDBlackCurtainObjects1[i].getBehavior("Opacity").setOpacity(100);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "timer") >= 0.2;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(5);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MoneyText"), gdjs.MainGameCode.GDMoneyTextObjects1);
{for(var i = 0, len = gdjs.MainGameCode.GDMoneyTextObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMoneyTextObjects1[i].getBehavior("Text").setText("Tiền: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MamboSpawn"), gdjs.MainGameCode.GDMamboSpawnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDMamboSpawnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 200);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MyBase"), gdjs.MainGameCode.GDMyBaseObjects1);
gdjs.MainGameCode.GDMamboObjects1.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).sub(200);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDMamboObjects1Objects, (( gdjs.MainGameCode.GDMyBaseObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDMyBaseObjects1[0].getPointX("")), (( gdjs.MainGameCode.GDMyBaseObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDMyBaseObjects1[0].getPointY("")) + 100, "");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "intro.wav", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyBase"), gdjs.MainGameCode.GDEnemyBaseObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mambo"), gdjs.MainGameCode.GDMamboObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDMamboObjects1Objects, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDEnemyBaseObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9359772);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDEnemyBaseObjects1 */
/* Reuse gdjs.MainGameCode.GDMamboObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDEnemyBaseObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDEnemyBaseObjects1[i].returnVariable(gdjs.MainGameCode.GDEnemyBaseObjects1[i].getVariables().getFromIndex(0)).sub(20);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDMamboObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMamboObjects1[i].clearForces();
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDMamboObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMamboObjects1[i].setX(gdjs.MainGameCode.GDMamboObjects1[i].getX() + (150));
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDMamboObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMamboObjects1[i].returnVariable(gdjs.MainGameCode.GDMamboObjects1[i].getVariables().getFromIndex(1)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDMamboObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMamboObjects1[i].resetTimer("Stun");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoldShip"), gdjs.MainGameCode.GDGoldShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mambo"), gdjs.MainGameCode.GDMamboObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDMamboObjects1Objects, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShipObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9738836);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDGoldShipObjects1 */
/* Reuse gdjs.MainGameCode.GDMamboObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShipObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShipObjects1[i].returnVariable(gdjs.MainGameCode.GDGoldShipObjects1[i].getVariables().getFromIndex(1)).sub(20);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDMamboObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMamboObjects1[i].clearForces();
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDMamboObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMamboObjects1[i].setX(gdjs.MainGameCode.GDMamboObjects1[i].getX() + (150));
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDMamboObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMamboObjects1[i].returnVariable(gdjs.MainGameCode.GDMamboObjects1[i].getVariables().getFromIndex(1)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDMamboObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMamboObjects1[i].resetTimer("Stun");
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDMamboObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMamboObjects1[i].returnVariable(gdjs.MainGameCode.GDMamboObjects1[i].getVariables().getFromIndex(0)).sub(25);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShipObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShipObjects1[i].clearForces();
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShipObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShipObjects1[i].setX(gdjs.MainGameCode.GDGoldShipObjects1[i].getX() - (50));
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShipObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShipObjects1[i].returnVariable(gdjs.MainGameCode.GDGoldShipObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShipObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShipObjects1[i].resetTimer("Stun");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoldShip2"), gdjs.MainGameCode.GDGoldShip2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Mambo"), gdjs.MainGameCode.GDMamboObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDMamboObjects1Objects, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShip2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10029748);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDGoldShip2Objects1 */
/* Reuse gdjs.MainGameCode.GDMamboObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShip2Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShip2Objects1[i].returnVariable(gdjs.MainGameCode.GDGoldShip2Objects1[i].getVariables().getFromIndex(1)).sub(20);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDMamboObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMamboObjects1[i].clearForces();
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDMamboObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMamboObjects1[i].setX(gdjs.MainGameCode.GDMamboObjects1[i].getX() + (150));
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDMamboObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMamboObjects1[i].returnVariable(gdjs.MainGameCode.GDMamboObjects1[i].getVariables().getFromIndex(1)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDMamboObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMamboObjects1[i].resetTimer("Stun");
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDMamboObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMamboObjects1[i].returnVariable(gdjs.MainGameCode.GDMamboObjects1[i].getVariables().getFromIndex(0)).sub(50);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShip2Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShip2Objects1[i].clearForces();
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShip2Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShip2Objects1[i].setX(gdjs.MainGameCode.GDGoldShip2Objects1[i].getX() - (25));
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShip2Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShip2Objects1[i].returnVariable(gdjs.MainGameCode.GDGoldShip2Objects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShip2Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShip2Objects1[i].resetTimer("Stun");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoldShip"), gdjs.MainGameCode.GDGoldShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ulala"), gdjs.MainGameCode.GDUlalaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDUlalaObjects1Objects, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShipObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9588380);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDGoldShipObjects1 */
/* Reuse gdjs.MainGameCode.GDUlalaObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShipObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShipObjects1[i].returnVariable(gdjs.MainGameCode.GDGoldShipObjects1[i].getVariables().getFromIndex(1)).sub(10);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDUlalaObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDUlalaObjects1[i].clearForces();
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDUlalaObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDUlalaObjects1[i].setX(gdjs.MainGameCode.GDUlalaObjects1[i].getX() + (150));
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDUlalaObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDUlalaObjects1[i].returnVariable(gdjs.MainGameCode.GDUlalaObjects1[i].getVariables().getFromIndex(1)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDUlalaObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDUlalaObjects1[i].resetTimer("Stun");
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDUlalaObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDUlalaObjects1[i].returnVariable(gdjs.MainGameCode.GDUlalaObjects1[i].getVariables().getFromIndex(0)).sub(25);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShipObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShipObjects1[i].clearForces();
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShipObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShipObjects1[i].setX(gdjs.MainGameCode.GDGoldShipObjects1[i].getX() - (50));
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShipObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShipObjects1[i].returnVariable(gdjs.MainGameCode.GDGoldShipObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShipObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShipObjects1[i].resetTimer("Stun");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoldShip2"), gdjs.MainGameCode.GDGoldShip2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ulala"), gdjs.MainGameCode.GDUlalaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDUlalaObjects1Objects, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShip2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9390124);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDGoldShip2Objects1 */
/* Reuse gdjs.MainGameCode.GDUlalaObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShip2Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShip2Objects1[i].returnVariable(gdjs.MainGameCode.GDGoldShip2Objects1[i].getVariables().getFromIndex(1)).sub(10);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDUlalaObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDUlalaObjects1[i].clearForces();
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDUlalaObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDUlalaObjects1[i].setX(gdjs.MainGameCode.GDUlalaObjects1[i].getX() + (150));
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDUlalaObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDUlalaObjects1[i].returnVariable(gdjs.MainGameCode.GDUlalaObjects1[i].getVariables().getFromIndex(1)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDUlalaObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDUlalaObjects1[i].resetTimer("Stun");
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDUlalaObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDUlalaObjects1[i].returnVariable(gdjs.MainGameCode.GDUlalaObjects1[i].getVariables().getFromIndex(0)).sub(50);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShip2Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShip2Objects1[i].clearForces();
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShip2Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShip2Objects1[i].setX(gdjs.MainGameCode.GDGoldShip2Objects1[i].getX() - (25));
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShip2Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShip2Objects1[i].returnVariable(gdjs.MainGameCode.GDGoldShip2Objects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShip2Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShip2Objects1[i].resetTimer("Stun");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mambo"), gdjs.MainGameCode.GDMamboObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDMamboObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDMamboObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Stun") >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDMamboObjects1[k] = gdjs.MainGameCode.GDMamboObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDMamboObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDMamboObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDMamboObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMamboObjects1[i].returnVariable(gdjs.MainGameCode.GDMamboObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDMamboObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMamboObjects1[i].resetTimer("Stun");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mambo"), gdjs.MainGameCode.GDMamboObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDMamboObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDMamboObjects1[i].getVariableNumber(gdjs.MainGameCode.GDMamboObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDMamboObjects1[k] = gdjs.MainGameCode.GDMamboObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDMamboObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDMamboObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDMamboObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMamboObjects1[i].addForce(-(200), 0, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mambo"), gdjs.MainGameCode.GDMamboObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDMamboObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDMamboObjects1[i].getVariableNumber(gdjs.MainGameCode.GDMamboObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDMamboObjects1[k] = gdjs.MainGameCode.GDMamboObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDMamboObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9871156);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDMamboObjects1 */
gdjs.MainGameCode.GDMamboDObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDMamboDObjects1Objects, (( gdjs.MainGameCode.GDMamboObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDMamboObjects1[0].getPointX("")), (( gdjs.MainGameCode.GDMamboObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDMamboObjects1[0].getPointY("")), "");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "mambo.wav", false, 100, 1);
}
{for(var i = 0, len = gdjs.MainGameCode.GDMamboObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMamboObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ulala"), gdjs.MainGameCode.GDUlalaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDUlalaObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDUlalaObjects1[i].getVariableNumber(gdjs.MainGameCode.GDUlalaObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDUlalaObjects1[k] = gdjs.MainGameCode.GDUlalaObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDUlalaObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9213460);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDUlalaObjects1 */
gdjs.MainGameCode.GDUlalaDObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDUlalaDObjects1Objects, (( gdjs.MainGameCode.GDUlalaObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDUlalaObjects1[0].getPointX("")), (( gdjs.MainGameCode.GDUlalaObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDUlalaObjects1[0].getPointY("")), "");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ulalaoutro.wav", false, 100, 1);
}
{for(var i = 0, len = gdjs.MainGameCode.GDUlalaObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDUlalaObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoldShip"), gdjs.MainGameCode.GDGoldShipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDGoldShipObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDGoldShipObjects1[i].getVariableNumber(gdjs.MainGameCode.GDGoldShipObjects1[i].getVariables().getFromIndex(1)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDGoldShipObjects1[k] = gdjs.MainGameCode.GDGoldShipObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDGoldShipObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10026860);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDGoldShipObjects1 */
gdjs.MainGameCode.GDGoldShipDObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShipDObjects1Objects, (( gdjs.MainGameCode.GDGoldShipObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDGoldShipObjects1[0].getPointX("")), (( gdjs.MainGameCode.GDGoldShipObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDGoldShipObjects1[0].getPointY("")), "");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "emote2.wav", false, 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(7).add(1);
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShipObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShipObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoldShip2"), gdjs.MainGameCode.GDGoldShip2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDGoldShip2Objects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDGoldShip2Objects1[i].getVariableNumber(gdjs.MainGameCode.GDGoldShip2Objects1[i].getVariables().getFromIndex(1)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDGoldShip2Objects1[k] = gdjs.MainGameCode.GDGoldShip2Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDGoldShip2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10568860);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDGoldShip2Objects1 */
gdjs.MainGameCode.GDGoldShipDObjects1.length = 0;

gdjs.MainGameCode.GDJumpScareObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShipDObjects1Objects, (( gdjs.MainGameCode.GDGoldShip2Objects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDGoldShip2Objects1[0].getPointX("")), (( gdjs.MainGameCode.GDGoldShip2Objects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDGoldShip2Objects1[0].getPointY("")), "");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "StoryLayer");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDJumpScareObjects1Objects, 0, 0, "StoryLayer");
}
{for(var i = 0, len = gdjs.MainGameCode.GDJumpScareObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDJumpScareObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDJumpScareObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDJumpScareObjects1[i].getBehavior("Resizable").setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "emote2.wav", false, 100, 1);
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShip2Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShip2Objects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MamboD"), gdjs.MainGameCode.GDMamboDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDMamboDObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDMamboDObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDMamboDObjects1[k] = gdjs.MainGameCode.GDMamboDObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDMamboDObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDMamboDObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDMamboDObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMamboDObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UlalaD"), gdjs.MainGameCode.GDUlalaDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDUlalaDObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDUlalaDObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDUlalaDObjects1[k] = gdjs.MainGameCode.GDUlalaDObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDUlalaDObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDUlalaDObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDUlalaDObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDUlalaDObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoldShipD"), gdjs.MainGameCode.GDGoldShipDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDGoldShipDObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDGoldShipDObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDGoldShipDObjects1[k] = gdjs.MainGameCode.GDGoldShipDObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDGoldShipDObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDGoldShipDObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShipDObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShipDObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("UlalaSpawn"), gdjs.MainGameCode.GDUlalaSpawnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDUlalaSpawnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 100);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MyBase"), gdjs.MainGameCode.GDMyBaseObjects1);
gdjs.MainGameCode.GDUlalaObjects1.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).sub(100);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDUlalaObjects1Objects, (( gdjs.MainGameCode.GDMyBaseObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDMyBaseObjects1[0].getPointX("")), (( gdjs.MainGameCode.GDMyBaseObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDMyBaseObjects1[0].getPointY("")) + 100, "");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ulalaintro.wav", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyBase"), gdjs.MainGameCode.GDEnemyBaseObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ulala"), gdjs.MainGameCode.GDUlalaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDUlalaObjects1Objects, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDEnemyBaseObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9304100);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDEnemyBaseObjects1 */
/* Reuse gdjs.MainGameCode.GDUlalaObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDEnemyBaseObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDEnemyBaseObjects1[i].returnVariable(gdjs.MainGameCode.GDEnemyBaseObjects1[i].getVariables().getFromIndex(0)).sub(10);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDUlalaObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDUlalaObjects1[i].clearForces();
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDUlalaObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDUlalaObjects1[i].setX(gdjs.MainGameCode.GDUlalaObjects1[i].getX() + (150));
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDUlalaObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDUlalaObjects1[i].returnVariable(gdjs.MainGameCode.GDUlalaObjects1[i].getVariables().getFromIndex(1)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDUlalaObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDUlalaObjects1[i].resetTimer("Stun");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoldShip"), gdjs.MainGameCode.GDGoldShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("MyBase"), gdjs.MainGameCode.GDMyBaseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShipObjects1Objects, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDMyBaseObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8987332);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDGoldShipObjects1 */
/* Reuse gdjs.MainGameCode.GDMyBaseObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDMyBaseObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMyBaseObjects1[i].returnVariable(gdjs.MainGameCode.GDMyBaseObjects1[i].getVariables().getFromIndex(0)).sub(200);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShipObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShipObjects1[i].clearForces();
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShipObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShipObjects1[i].setX(gdjs.MainGameCode.GDGoldShipObjects1[i].getX() - (150));
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShipObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShipObjects1[i].returnVariable(gdjs.MainGameCode.GDGoldShipObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShipObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShipObjects1[i].resetTimer("Stun");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoldShip2"), gdjs.MainGameCode.GDGoldShip2Objects1);
gdjs.copyArray(runtimeScene.getObjects("MyBase"), gdjs.MainGameCode.GDMyBaseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShip2Objects1Objects, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDMyBaseObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9393436);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDGoldShip2Objects1 */
/* Reuse gdjs.MainGameCode.GDMyBaseObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDMyBaseObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDMyBaseObjects1[i].returnVariable(gdjs.MainGameCode.GDMyBaseObjects1[i].getVariables().getFromIndex(0)).sub(500);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShip2Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShip2Objects1[i].clearForces();
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShip2Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShip2Objects1[i].setX(gdjs.MainGameCode.GDGoldShip2Objects1[i].getX() - (150));
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShip2Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShip2Objects1[i].returnVariable(gdjs.MainGameCode.GDGoldShip2Objects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShip2Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShip2Objects1[i].resetTimer("Stun");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ulala"), gdjs.MainGameCode.GDUlalaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDUlalaObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDUlalaObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Stun") >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDUlalaObjects1[k] = gdjs.MainGameCode.GDUlalaObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDUlalaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDUlalaObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDUlalaObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDUlalaObjects1[i].returnVariable(gdjs.MainGameCode.GDUlalaObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDUlalaObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDUlalaObjects1[i].resetTimer("Stun");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ulala"), gdjs.MainGameCode.GDUlalaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDUlalaObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDUlalaObjects1[i].getVariableNumber(gdjs.MainGameCode.GDUlalaObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDUlalaObjects1[k] = gdjs.MainGameCode.GDUlalaObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDUlalaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDUlalaObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDUlalaObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDUlalaObjects1[i].addForce(-(100), 0, 0);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.6, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainGameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SpawnGoldShip") >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() <= 10);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyBase"), gdjs.MainGameCode.GDEnemyBaseObjects1);
gdjs.MainGameCode.GDGoldShipObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainGameCode.mapOfGDgdjs_9546MainGameCode_9546GDGoldShipObjects1Objects, (( gdjs.MainGameCode.GDEnemyBaseObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDEnemyBaseObjects1[0].getPointX("")), (( gdjs.MainGameCode.GDEnemyBaseObjects1.length === 0 ) ? 0 :gdjs.MainGameCode.GDEnemyBaseObjects1[0].getPointY("")) + 120, "");
}
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpawnGoldShip");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "outro.wav", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoldShip"), gdjs.MainGameCode.GDGoldShipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDGoldShipObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDGoldShipObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Stun") >= 2 ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDGoldShipObjects1[k] = gdjs.MainGameCode.GDGoldShipObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDGoldShipObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDGoldShipObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShipObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShipObjects1[i].returnVariable(gdjs.MainGameCode.GDGoldShipObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShipObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShipObjects1[i].resetTimer("Stun");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoldShip2"), gdjs.MainGameCode.GDGoldShip2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDGoldShip2Objects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDGoldShip2Objects1[i].getTimerElapsedTimeInSecondsOrNaN("Stun") >= 1 ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDGoldShip2Objects1[k] = gdjs.MainGameCode.GDGoldShip2Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDGoldShip2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDGoldShip2Objects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShip2Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShip2Objects1[i].returnVariable(gdjs.MainGameCode.GDGoldShip2Objects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShip2Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShip2Objects1[i].resetTimer("Stun");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoldShip"), gdjs.MainGameCode.GDGoldShipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDGoldShipObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDGoldShipObjects1[i].getVariableNumber(gdjs.MainGameCode.GDGoldShipObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDGoldShipObjects1[k] = gdjs.MainGameCode.GDGoldShipObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDGoldShipObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDGoldShipObjects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShipObjects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShipObjects1[i].addForce(250, 0, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoldShip2"), gdjs.MainGameCode.GDGoldShip2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDGoldShip2Objects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDGoldShip2Objects1[i].getVariableNumber(gdjs.MainGameCode.GDGoldShip2Objects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDGoldShip2Objects1[k] = gdjs.MainGameCode.GDGoldShip2Objects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDGoldShip2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainGameCode.GDGoldShip2Objects1 */
{for(var i = 0, len = gdjs.MainGameCode.GDGoldShip2Objects1.length ;i < len;++i) {
    gdjs.MainGameCode.GDGoldShip2Objects1[i].addForce(300, 0, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MyBase"), gdjs.MainGameCode.GDMyBaseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainGameCode.GDMyBaseObjects1.length;i<l;++i) {
    if ( gdjs.MainGameCode.GDMyBaseObjects1[i].getVariableNumber(gdjs.MainGameCode.GDMyBaseObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.MainGameCode.GDMyBaseObjects1[k] = gdjs.MainGameCode.GDMyBaseObjects1[i];
        ++k;
    }
}
gdjs.MainGameCode.GDMyBaseObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10181340);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainGame", false);
}
}

}


};

gdjs.MainGameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainGameCode.GDGroundObjects1.length = 0;
gdjs.MainGameCode.GDGroundObjects2.length = 0;
gdjs.MainGameCode.GDGroundObjects3.length = 0;
gdjs.MainGameCode.GDMyBaseObjects1.length = 0;
gdjs.MainGameCode.GDMyBaseObjects2.length = 0;
gdjs.MainGameCode.GDMyBaseObjects3.length = 0;
gdjs.MainGameCode.GDEnemyBaseObjects1.length = 0;
gdjs.MainGameCode.GDEnemyBaseObjects2.length = 0;
gdjs.MainGameCode.GDEnemyBaseObjects3.length = 0;
gdjs.MainGameCode.GDMamboObjects1.length = 0;
gdjs.MainGameCode.GDMamboObjects2.length = 0;
gdjs.MainGameCode.GDMamboObjects3.length = 0;
gdjs.MainGameCode.GDUlalaObjects1.length = 0;
gdjs.MainGameCode.GDUlalaObjects2.length = 0;
gdjs.MainGameCode.GDUlalaObjects3.length = 0;
gdjs.MainGameCode.GDJumpScareObjects1.length = 0;
gdjs.MainGameCode.GDJumpScareObjects2.length = 0;
gdjs.MainGameCode.GDJumpScareObjects3.length = 0;
gdjs.MainGameCode.GDGoldShipObjects1.length = 0;
gdjs.MainGameCode.GDGoldShipObjects2.length = 0;
gdjs.MainGameCode.GDGoldShipObjects3.length = 0;
gdjs.MainGameCode.GDMoneyTextObjects1.length = 0;
gdjs.MainGameCode.GDMoneyTextObjects2.length = 0;
gdjs.MainGameCode.GDMoneyTextObjects3.length = 0;
gdjs.MainGameCode.GDUlalaSpawnObjects1.length = 0;
gdjs.MainGameCode.GDUlalaSpawnObjects2.length = 0;
gdjs.MainGameCode.GDUlalaSpawnObjects3.length = 0;
gdjs.MainGameCode.GDMamboSpawnObjects1.length = 0;
gdjs.MainGameCode.GDMamboSpawnObjects2.length = 0;
gdjs.MainGameCode.GDMamboSpawnObjects3.length = 0;
gdjs.MainGameCode.GDGoldShip2Objects1.length = 0;
gdjs.MainGameCode.GDGoldShip2Objects2.length = 0;
gdjs.MainGameCode.GDGoldShip2Objects3.length = 0;
gdjs.MainGameCode.GDMamboDObjects1.length = 0;
gdjs.MainGameCode.GDMamboDObjects2.length = 0;
gdjs.MainGameCode.GDMamboDObjects3.length = 0;
gdjs.MainGameCode.GDUlalaDObjects1.length = 0;
gdjs.MainGameCode.GDUlalaDObjects2.length = 0;
gdjs.MainGameCode.GDUlalaDObjects3.length = 0;
gdjs.MainGameCode.GDGoldShipDObjects1.length = 0;
gdjs.MainGameCode.GDGoldShipDObjects2.length = 0;
gdjs.MainGameCode.GDGoldShipDObjects3.length = 0;
gdjs.MainGameCode.GDBlackCurtainObjects1.length = 0;
gdjs.MainGameCode.GDBlackCurtainObjects2.length = 0;
gdjs.MainGameCode.GDBlackCurtainObjects3.length = 0;
gdjs.MainGameCode.GDGorushiObjects1.length = 0;
gdjs.MainGameCode.GDGorushiObjects2.length = 0;
gdjs.MainGameCode.GDGorushiObjects3.length = 0;
gdjs.MainGameCode.GDDialogBoxObjects1.length = 0;
gdjs.MainGameCode.GDDialogBoxObjects2.length = 0;
gdjs.MainGameCode.GDDialogBoxObjects3.length = 0;
gdjs.MainGameCode.GDStoryTextObjects1.length = 0;
gdjs.MainGameCode.GDStoryTextObjects2.length = 0;
gdjs.MainGameCode.GDStoryTextObjects3.length = 0;

gdjs.MainGameCode.eventsList2(runtimeScene);
gdjs.MainGameCode.GDGroundObjects1.length = 0;
gdjs.MainGameCode.GDGroundObjects2.length = 0;
gdjs.MainGameCode.GDGroundObjects3.length = 0;
gdjs.MainGameCode.GDMyBaseObjects1.length = 0;
gdjs.MainGameCode.GDMyBaseObjects2.length = 0;
gdjs.MainGameCode.GDMyBaseObjects3.length = 0;
gdjs.MainGameCode.GDEnemyBaseObjects1.length = 0;
gdjs.MainGameCode.GDEnemyBaseObjects2.length = 0;
gdjs.MainGameCode.GDEnemyBaseObjects3.length = 0;
gdjs.MainGameCode.GDMamboObjects1.length = 0;
gdjs.MainGameCode.GDMamboObjects2.length = 0;
gdjs.MainGameCode.GDMamboObjects3.length = 0;
gdjs.MainGameCode.GDUlalaObjects1.length = 0;
gdjs.MainGameCode.GDUlalaObjects2.length = 0;
gdjs.MainGameCode.GDUlalaObjects3.length = 0;
gdjs.MainGameCode.GDJumpScareObjects1.length = 0;
gdjs.MainGameCode.GDJumpScareObjects2.length = 0;
gdjs.MainGameCode.GDJumpScareObjects3.length = 0;
gdjs.MainGameCode.GDGoldShipObjects1.length = 0;
gdjs.MainGameCode.GDGoldShipObjects2.length = 0;
gdjs.MainGameCode.GDGoldShipObjects3.length = 0;
gdjs.MainGameCode.GDMoneyTextObjects1.length = 0;
gdjs.MainGameCode.GDMoneyTextObjects2.length = 0;
gdjs.MainGameCode.GDMoneyTextObjects3.length = 0;
gdjs.MainGameCode.GDUlalaSpawnObjects1.length = 0;
gdjs.MainGameCode.GDUlalaSpawnObjects2.length = 0;
gdjs.MainGameCode.GDUlalaSpawnObjects3.length = 0;
gdjs.MainGameCode.GDMamboSpawnObjects1.length = 0;
gdjs.MainGameCode.GDMamboSpawnObjects2.length = 0;
gdjs.MainGameCode.GDMamboSpawnObjects3.length = 0;
gdjs.MainGameCode.GDGoldShip2Objects1.length = 0;
gdjs.MainGameCode.GDGoldShip2Objects2.length = 0;
gdjs.MainGameCode.GDGoldShip2Objects3.length = 0;
gdjs.MainGameCode.GDMamboDObjects1.length = 0;
gdjs.MainGameCode.GDMamboDObjects2.length = 0;
gdjs.MainGameCode.GDMamboDObjects3.length = 0;
gdjs.MainGameCode.GDUlalaDObjects1.length = 0;
gdjs.MainGameCode.GDUlalaDObjects2.length = 0;
gdjs.MainGameCode.GDUlalaDObjects3.length = 0;
gdjs.MainGameCode.GDGoldShipDObjects1.length = 0;
gdjs.MainGameCode.GDGoldShipDObjects2.length = 0;
gdjs.MainGameCode.GDGoldShipDObjects3.length = 0;
gdjs.MainGameCode.GDBlackCurtainObjects1.length = 0;
gdjs.MainGameCode.GDBlackCurtainObjects2.length = 0;
gdjs.MainGameCode.GDBlackCurtainObjects3.length = 0;
gdjs.MainGameCode.GDGorushiObjects1.length = 0;
gdjs.MainGameCode.GDGorushiObjects2.length = 0;
gdjs.MainGameCode.GDGorushiObjects3.length = 0;
gdjs.MainGameCode.GDDialogBoxObjects1.length = 0;
gdjs.MainGameCode.GDDialogBoxObjects2.length = 0;
gdjs.MainGameCode.GDDialogBoxObjects3.length = 0;
gdjs.MainGameCode.GDStoryTextObjects1.length = 0;
gdjs.MainGameCode.GDStoryTextObjects2.length = 0;
gdjs.MainGameCode.GDStoryTextObjects3.length = 0;


return;

}

gdjs['MainGameCode'] = gdjs.MainGameCode;
