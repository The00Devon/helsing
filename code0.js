gdjs.StartMenuCode = {};
gdjs.StartMenuCode.GDSilverCountObjects1= [];
gdjs.StartMenuCode.GDSilverCountObjects2= [];
gdjs.StartMenuCode.GDDepthObjects1= [];
gdjs.StartMenuCode.GDDepthObjects2= [];
gdjs.StartMenuCode.GDForegroundObjects1= [];
gdjs.StartMenuCode.GDForegroundObjects2= [];
gdjs.StartMenuCode.GDMossObjects1= [];
gdjs.StartMenuCode.GDMossObjects2= [];
gdjs.StartMenuCode.GDGlassObjects1= [];
gdjs.StartMenuCode.GDGlassObjects2= [];
gdjs.StartMenuCode.GDLadderObjects1= [];
gdjs.StartMenuCode.GDLadderObjects2= [];
gdjs.StartMenuCode.GDDoorwayBackObjects1= [];
gdjs.StartMenuCode.GDDoorwayBackObjects2= [];
gdjs.StartMenuCode.GDDoorwayObjects1= [];
gdjs.StartMenuCode.GDDoorwayObjects2= [];
gdjs.StartMenuCode.GDDoorLightVerticalObjects1= [];
gdjs.StartMenuCode.GDDoorLightVerticalObjects2= [];
gdjs.StartMenuCode.GDDoorLightHorizontalObjects1= [];
gdjs.StartMenuCode.GDDoorLightHorizontalObjects2= [];
gdjs.StartMenuCode.GDDoorHeavyVerticalObjects1= [];
gdjs.StartMenuCode.GDDoorHeavyVerticalObjects2= [];
gdjs.StartMenuCode.GDDoorHeavyHorizontalObjects1= [];
gdjs.StartMenuCode.GDDoorHeavyHorizontalObjects2= [];
gdjs.StartMenuCode.GDCrystalObjects1= [];
gdjs.StartMenuCode.GDCrystalObjects2= [];
gdjs.StartMenuCode.GDButtonObjects1= [];
gdjs.StartMenuCode.GDButtonObjects2= [];
gdjs.StartMenuCode.GDDarknessObjects1= [];
gdjs.StartMenuCode.GDDarknessObjects2= [];
gdjs.StartMenuCode.GDSunlightSourceObjects1= [];
gdjs.StartMenuCode.GDSunlightSourceObjects2= [];
gdjs.StartMenuCode.GDSunlightObjects1= [];
gdjs.StartMenuCode.GDSunlightObjects2= [];
gdjs.StartMenuCode.GDMirrorStaticObjects1= [];
gdjs.StartMenuCode.GDMirrorStaticObjects2= [];
gdjs.StartMenuCode.GDMirrorObjects1= [];
gdjs.StartMenuCode.GDMirrorObjects2= [];
gdjs.StartMenuCode.GDSphereStaticObjects1= [];
gdjs.StartMenuCode.GDSphereStaticObjects2= [];
gdjs.StartMenuCode.GDSphereObjects1= [];
gdjs.StartMenuCode.GDSphereObjects2= [];
gdjs.StartMenuCode.GDPlayerObjects1= [];
gdjs.StartMenuCode.GDPlayerObjects2= [];
gdjs.StartMenuCode.GDSilverObjects1= [];
gdjs.StartMenuCode.GDSilverObjects2= [];
gdjs.StartMenuCode.GDVampireObjects1= [];
gdjs.StartMenuCode.GDVampireObjects2= [];
gdjs.StartMenuCode.GDleftObjects1= [];
gdjs.StartMenuCode.GDleftObjects2= [];
gdjs.StartMenuCode.GDrightObjects1= [];
gdjs.StartMenuCode.GDrightObjects2= [];
gdjs.StartMenuCode.GDBackgroundObjects1= [];
gdjs.StartMenuCode.GDBackgroundObjects2= [];
gdjs.StartMenuCode.GDTitleObjects1= [];
gdjs.StartMenuCode.GDTitleObjects2= [];
gdjs.StartMenuCode.GDPrototypeObjects1= [];
gdjs.StartMenuCode.GDPrototypeObjects2= [];
gdjs.StartMenuCode.GDStartObjects1= [];
gdjs.StartMenuCode.GDStartObjects2= [];
gdjs.StartMenuCode.GDQuitObjects1= [];
gdjs.StartMenuCode.GDQuitObjects2= [];

gdjs.StartMenuCode.conditionTrue_0 = {val:false};
gdjs.StartMenuCode.condition0IsTrue_0 = {val:false};
gdjs.StartMenuCode.condition1IsTrue_0 = {val:false};


gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.StartMenuCode.GDStartObjects1});gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.StartMenuCode.GDStartObjects1});gdjs.StartMenuCode.eventsList0x6a95e4 = function(runtimeScene) {

{


gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level_1", false);
}}

}


}; //End of gdjs.StartMenuCode.eventsList0x6a95e4
gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.StartMenuCode.GDQuitObjects1});gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.StartMenuCode.GDQuitObjects1});gdjs.StartMenuCode.eventsList0x797f14 = function(runtimeScene) {

{


gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.StartMenuCode.eventsList0x797f14
gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDPrototypeObjects1Objects = Hashtable.newFrom({"Prototype": gdjs.StartMenuCode.GDPrototypeObjects1});gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDPrototypeObjects1Objects = Hashtable.newFrom({"Prototype": gdjs.StartMenuCode.GDPrototypeObjects1});gdjs.StartMenuCode.eventsList0x6d2c54 = function(runtimeScene) {

{


gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Prototype", false);
}}

}


}; //End of gdjs.StartMenuCode.eventsList0x6d2c54
gdjs.StartMenuCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{

gdjs.StartMenuCode.GDStartObjects1.createFrom(runtimeScene.getObjects("Start"));

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartMenuCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.StartMenuCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDStartObjects1[i].setBold(false);
}
}}

}


{

gdjs.StartMenuCode.GDStartObjects1.createFrom(runtimeScene.getObjects("Start"));

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartMenuCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.StartMenuCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDStartObjects1[i].setBold(true);
}
}
{ //Subevents
gdjs.StartMenuCode.eventsList0x6a95e4(runtimeScene);} //End of subevents
}

}


{

gdjs.StartMenuCode.GDQuitObjects1.createFrom(runtimeScene.getObjects("Quit"));

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDQuitObjects1Objects, runtimeScene, true, true);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartMenuCode.GDQuitObjects1 */
{for(var i = 0, len = gdjs.StartMenuCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDQuitObjects1[i].setBold(false);
}
}}

}


{

gdjs.StartMenuCode.GDQuitObjects1.createFrom(runtimeScene.getObjects("Quit"));

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDQuitObjects1Objects, runtimeScene, true, false);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartMenuCode.GDQuitObjects1 */
{for(var i = 0, len = gdjs.StartMenuCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDQuitObjects1[i].setBold(true);
}
}
{ //Subevents
gdjs.StartMenuCode.eventsList0x797f14(runtimeScene);} //End of subevents
}

}


{

gdjs.StartMenuCode.GDPrototypeObjects1.createFrom(runtimeScene.getObjects("Prototype"));

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDPrototypeObjects1Objects, runtimeScene, true, true);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartMenuCode.GDPrototypeObjects1 */
{for(var i = 0, len = gdjs.StartMenuCode.GDPrototypeObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDPrototypeObjects1[i].setBold(false);
}
}}

}


{

gdjs.StartMenuCode.GDPrototypeObjects1.createFrom(runtimeScene.getObjects("Prototype"));

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDPrototypeObjects1Objects, runtimeScene, true, false);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartMenuCode.GDPrototypeObjects1 */
{for(var i = 0, len = gdjs.StartMenuCode.GDPrototypeObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDPrototypeObjects1[i].setBold(true);
}
}
{ //Subevents
gdjs.StartMenuCode.eventsList0x6d2c54(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.StartMenuCode.eventsList0x5b6e18


gdjs.StartMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartMenuCode.GDSilverCountObjects1.length = 0;
gdjs.StartMenuCode.GDSilverCountObjects2.length = 0;
gdjs.StartMenuCode.GDDepthObjects1.length = 0;
gdjs.StartMenuCode.GDDepthObjects2.length = 0;
gdjs.StartMenuCode.GDForegroundObjects1.length = 0;
gdjs.StartMenuCode.GDForegroundObjects2.length = 0;
gdjs.StartMenuCode.GDMossObjects1.length = 0;
gdjs.StartMenuCode.GDMossObjects2.length = 0;
gdjs.StartMenuCode.GDGlassObjects1.length = 0;
gdjs.StartMenuCode.GDGlassObjects2.length = 0;
gdjs.StartMenuCode.GDLadderObjects1.length = 0;
gdjs.StartMenuCode.GDLadderObjects2.length = 0;
gdjs.StartMenuCode.GDDoorwayBackObjects1.length = 0;
gdjs.StartMenuCode.GDDoorwayBackObjects2.length = 0;
gdjs.StartMenuCode.GDDoorwayObjects1.length = 0;
gdjs.StartMenuCode.GDDoorwayObjects2.length = 0;
gdjs.StartMenuCode.GDDoorLightVerticalObjects1.length = 0;
gdjs.StartMenuCode.GDDoorLightVerticalObjects2.length = 0;
gdjs.StartMenuCode.GDDoorLightHorizontalObjects1.length = 0;
gdjs.StartMenuCode.GDDoorLightHorizontalObjects2.length = 0;
gdjs.StartMenuCode.GDDoorHeavyVerticalObjects1.length = 0;
gdjs.StartMenuCode.GDDoorHeavyVerticalObjects2.length = 0;
gdjs.StartMenuCode.GDDoorHeavyHorizontalObjects1.length = 0;
gdjs.StartMenuCode.GDDoorHeavyHorizontalObjects2.length = 0;
gdjs.StartMenuCode.GDCrystalObjects1.length = 0;
gdjs.StartMenuCode.GDCrystalObjects2.length = 0;
gdjs.StartMenuCode.GDButtonObjects1.length = 0;
gdjs.StartMenuCode.GDButtonObjects2.length = 0;
gdjs.StartMenuCode.GDDarknessObjects1.length = 0;
gdjs.StartMenuCode.GDDarknessObjects2.length = 0;
gdjs.StartMenuCode.GDSunlightSourceObjects1.length = 0;
gdjs.StartMenuCode.GDSunlightSourceObjects2.length = 0;
gdjs.StartMenuCode.GDSunlightObjects1.length = 0;
gdjs.StartMenuCode.GDSunlightObjects2.length = 0;
gdjs.StartMenuCode.GDMirrorStaticObjects1.length = 0;
gdjs.StartMenuCode.GDMirrorStaticObjects2.length = 0;
gdjs.StartMenuCode.GDMirrorObjects1.length = 0;
gdjs.StartMenuCode.GDMirrorObjects2.length = 0;
gdjs.StartMenuCode.GDSphereStaticObjects1.length = 0;
gdjs.StartMenuCode.GDSphereStaticObjects2.length = 0;
gdjs.StartMenuCode.GDSphereObjects1.length = 0;
gdjs.StartMenuCode.GDSphereObjects2.length = 0;
gdjs.StartMenuCode.GDPlayerObjects1.length = 0;
gdjs.StartMenuCode.GDPlayerObjects2.length = 0;
gdjs.StartMenuCode.GDSilverObjects1.length = 0;
gdjs.StartMenuCode.GDSilverObjects2.length = 0;
gdjs.StartMenuCode.GDVampireObjects1.length = 0;
gdjs.StartMenuCode.GDVampireObjects2.length = 0;
gdjs.StartMenuCode.GDleftObjects1.length = 0;
gdjs.StartMenuCode.GDleftObjects2.length = 0;
gdjs.StartMenuCode.GDrightObjects1.length = 0;
gdjs.StartMenuCode.GDrightObjects2.length = 0;
gdjs.StartMenuCode.GDBackgroundObjects1.length = 0;
gdjs.StartMenuCode.GDBackgroundObjects2.length = 0;
gdjs.StartMenuCode.GDTitleObjects1.length = 0;
gdjs.StartMenuCode.GDTitleObjects2.length = 0;
gdjs.StartMenuCode.GDPrototypeObjects1.length = 0;
gdjs.StartMenuCode.GDPrototypeObjects2.length = 0;
gdjs.StartMenuCode.GDStartObjects1.length = 0;
gdjs.StartMenuCode.GDStartObjects2.length = 0;
gdjs.StartMenuCode.GDQuitObjects1.length = 0;
gdjs.StartMenuCode.GDQuitObjects2.length = 0;

gdjs.StartMenuCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['StartMenuCode'] = gdjs.StartMenuCode;
