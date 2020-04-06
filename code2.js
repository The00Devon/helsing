gdjs.WinMenuCode = {};
gdjs.WinMenuCode.GDSilverCountObjects1= [];
gdjs.WinMenuCode.GDSilverCountObjects2= [];
gdjs.WinMenuCode.GDDepthObjects1= [];
gdjs.WinMenuCode.GDDepthObjects2= [];
gdjs.WinMenuCode.GDForegroundObjects1= [];
gdjs.WinMenuCode.GDForegroundObjects2= [];
gdjs.WinMenuCode.GDMossObjects1= [];
gdjs.WinMenuCode.GDMossObjects2= [];
gdjs.WinMenuCode.GDGlassObjects1= [];
gdjs.WinMenuCode.GDGlassObjects2= [];
gdjs.WinMenuCode.GDLadderObjects1= [];
gdjs.WinMenuCode.GDLadderObjects2= [];
gdjs.WinMenuCode.GDDoorwayBackObjects1= [];
gdjs.WinMenuCode.GDDoorwayBackObjects2= [];
gdjs.WinMenuCode.GDDoorwayObjects1= [];
gdjs.WinMenuCode.GDDoorwayObjects2= [];
gdjs.WinMenuCode.GDDoorLightVerticalObjects1= [];
gdjs.WinMenuCode.GDDoorLightVerticalObjects2= [];
gdjs.WinMenuCode.GDDoorLightHorizontalObjects1= [];
gdjs.WinMenuCode.GDDoorLightHorizontalObjects2= [];
gdjs.WinMenuCode.GDDoorHeavyVerticalObjects1= [];
gdjs.WinMenuCode.GDDoorHeavyVerticalObjects2= [];
gdjs.WinMenuCode.GDDoorHeavyHorizontalObjects1= [];
gdjs.WinMenuCode.GDDoorHeavyHorizontalObjects2= [];
gdjs.WinMenuCode.GDCrystalObjects1= [];
gdjs.WinMenuCode.GDCrystalObjects2= [];
gdjs.WinMenuCode.GDButtonObjects1= [];
gdjs.WinMenuCode.GDButtonObjects2= [];
gdjs.WinMenuCode.GDDarknessObjects1= [];
gdjs.WinMenuCode.GDDarknessObjects2= [];
gdjs.WinMenuCode.GDSunlightSourceObjects1= [];
gdjs.WinMenuCode.GDSunlightSourceObjects2= [];
gdjs.WinMenuCode.GDSunlightObjects1= [];
gdjs.WinMenuCode.GDSunlightObjects2= [];
gdjs.WinMenuCode.GDMirrorStaticObjects1= [];
gdjs.WinMenuCode.GDMirrorStaticObjects2= [];
gdjs.WinMenuCode.GDMirrorObjects1= [];
gdjs.WinMenuCode.GDMirrorObjects2= [];
gdjs.WinMenuCode.GDSphereStaticObjects1= [];
gdjs.WinMenuCode.GDSphereStaticObjects2= [];
gdjs.WinMenuCode.GDSphereObjects1= [];
gdjs.WinMenuCode.GDSphereObjects2= [];
gdjs.WinMenuCode.GDPlayerObjects1= [];
gdjs.WinMenuCode.GDPlayerObjects2= [];
gdjs.WinMenuCode.GDSilverObjects1= [];
gdjs.WinMenuCode.GDSilverObjects2= [];
gdjs.WinMenuCode.GDVampireObjects1= [];
gdjs.WinMenuCode.GDVampireObjects2= [];
gdjs.WinMenuCode.GDleftObjects1= [];
gdjs.WinMenuCode.GDleftObjects2= [];
gdjs.WinMenuCode.GDrightObjects1= [];
gdjs.WinMenuCode.GDrightObjects2= [];
gdjs.WinMenuCode.GDBackgroundObjects1= [];
gdjs.WinMenuCode.GDBackgroundObjects2= [];
gdjs.WinMenuCode.GDTitleObjects1= [];
gdjs.WinMenuCode.GDTitleObjects2= [];
gdjs.WinMenuCode.GDStartObjects1= [];
gdjs.WinMenuCode.GDStartObjects2= [];
gdjs.WinMenuCode.GDQuitObjects1= [];
gdjs.WinMenuCode.GDQuitObjects2= [];
gdjs.WinMenuCode.GDScoreObjects1= [];
gdjs.WinMenuCode.GDScoreObjects2= [];

gdjs.WinMenuCode.conditionTrue_0 = {val:false};
gdjs.WinMenuCode.condition0IsTrue_0 = {val:false};
gdjs.WinMenuCode.condition1IsTrue_0 = {val:false};


gdjs.WinMenuCode.mapOfGDgdjs_46WinMenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.WinMenuCode.GDStartObjects1});gdjs.WinMenuCode.mapOfGDgdjs_46WinMenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.WinMenuCode.GDStartObjects1});gdjs.WinMenuCode.eventsList0x8157b4 = function(runtimeScene) {

{


gdjs.WinMenuCode.condition0IsTrue_0.val = false;
{
gdjs.WinMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.WinMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Prototype", false);
}}

}


}; //End of gdjs.WinMenuCode.eventsList0x8157b4
gdjs.WinMenuCode.mapOfGDgdjs_46WinMenuCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.WinMenuCode.GDQuitObjects1});gdjs.WinMenuCode.mapOfGDgdjs_46WinMenuCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.WinMenuCode.GDQuitObjects1});gdjs.WinMenuCode.eventsList0x816184 = function(runtimeScene) {

{


gdjs.WinMenuCode.condition0IsTrue_0.val = false;
{
gdjs.WinMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.WinMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartMenu", false);
}}

}


}; //End of gdjs.WinMenuCode.eventsList0x816184
gdjs.WinMenuCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.WinMenuCode.condition0IsTrue_0.val = false;
{
gdjs.WinMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WinMenuCode.condition0IsTrue_0.val) {
gdjs.WinMenuCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.WinMenuCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.WinMenuCode.GDScoreObjects1[i].setString("Depth = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 25) + "\n\nSilver = " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + " x 5 = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * 5) + "\n\nScore = " + gdjs.evtTools.common.toString((gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 25) + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * 5)));
}
}}

}


{

gdjs.WinMenuCode.GDStartObjects1.createFrom(runtimeScene.getObjects("Start"));

gdjs.WinMenuCode.condition0IsTrue_0.val = false;
{
gdjs.WinMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinMenuCode.mapOfGDgdjs_46WinMenuCode_46GDStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.WinMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WinMenuCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.WinMenuCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.WinMenuCode.GDStartObjects1[i].setBold(false);
}
}}

}


{

gdjs.WinMenuCode.GDStartObjects1.createFrom(runtimeScene.getObjects("Start"));

gdjs.WinMenuCode.condition0IsTrue_0.val = false;
{
gdjs.WinMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinMenuCode.mapOfGDgdjs_46WinMenuCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.WinMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WinMenuCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.WinMenuCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.WinMenuCode.GDStartObjects1[i].setBold(true);
}
}
{ //Subevents
gdjs.WinMenuCode.eventsList0x8157b4(runtimeScene);} //End of subevents
}

}


{

gdjs.WinMenuCode.GDQuitObjects1.createFrom(runtimeScene.getObjects("Quit"));

gdjs.WinMenuCode.condition0IsTrue_0.val = false;
{
gdjs.WinMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinMenuCode.mapOfGDgdjs_46WinMenuCode_46GDQuitObjects1Objects, runtimeScene, true, true);
}if (gdjs.WinMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WinMenuCode.GDQuitObjects1 */
{for(var i = 0, len = gdjs.WinMenuCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.WinMenuCode.GDQuitObjects1[i].setBold(false);
}
}}

}


{

gdjs.WinMenuCode.GDQuitObjects1.createFrom(runtimeScene.getObjects("Quit"));

gdjs.WinMenuCode.condition0IsTrue_0.val = false;
{
gdjs.WinMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinMenuCode.mapOfGDgdjs_46WinMenuCode_46GDQuitObjects1Objects, runtimeScene, true, false);
}if (gdjs.WinMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.WinMenuCode.GDQuitObjects1 */
{for(var i = 0, len = gdjs.WinMenuCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.WinMenuCode.GDQuitObjects1[i].setBold(true);
}
}
{ //Subevents
gdjs.WinMenuCode.eventsList0x816184(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.WinMenuCode.eventsList0x5b6e18


gdjs.WinMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinMenuCode.GDSilverCountObjects1.length = 0;
gdjs.WinMenuCode.GDSilverCountObjects2.length = 0;
gdjs.WinMenuCode.GDDepthObjects1.length = 0;
gdjs.WinMenuCode.GDDepthObjects2.length = 0;
gdjs.WinMenuCode.GDForegroundObjects1.length = 0;
gdjs.WinMenuCode.GDForegroundObjects2.length = 0;
gdjs.WinMenuCode.GDMossObjects1.length = 0;
gdjs.WinMenuCode.GDMossObjects2.length = 0;
gdjs.WinMenuCode.GDGlassObjects1.length = 0;
gdjs.WinMenuCode.GDGlassObjects2.length = 0;
gdjs.WinMenuCode.GDLadderObjects1.length = 0;
gdjs.WinMenuCode.GDLadderObjects2.length = 0;
gdjs.WinMenuCode.GDDoorwayBackObjects1.length = 0;
gdjs.WinMenuCode.GDDoorwayBackObjects2.length = 0;
gdjs.WinMenuCode.GDDoorwayObjects1.length = 0;
gdjs.WinMenuCode.GDDoorwayObjects2.length = 0;
gdjs.WinMenuCode.GDDoorLightVerticalObjects1.length = 0;
gdjs.WinMenuCode.GDDoorLightVerticalObjects2.length = 0;
gdjs.WinMenuCode.GDDoorLightHorizontalObjects1.length = 0;
gdjs.WinMenuCode.GDDoorLightHorizontalObjects2.length = 0;
gdjs.WinMenuCode.GDDoorHeavyVerticalObjects1.length = 0;
gdjs.WinMenuCode.GDDoorHeavyVerticalObjects2.length = 0;
gdjs.WinMenuCode.GDDoorHeavyHorizontalObjects1.length = 0;
gdjs.WinMenuCode.GDDoorHeavyHorizontalObjects2.length = 0;
gdjs.WinMenuCode.GDCrystalObjects1.length = 0;
gdjs.WinMenuCode.GDCrystalObjects2.length = 0;
gdjs.WinMenuCode.GDButtonObjects1.length = 0;
gdjs.WinMenuCode.GDButtonObjects2.length = 0;
gdjs.WinMenuCode.GDDarknessObjects1.length = 0;
gdjs.WinMenuCode.GDDarknessObjects2.length = 0;
gdjs.WinMenuCode.GDSunlightSourceObjects1.length = 0;
gdjs.WinMenuCode.GDSunlightSourceObjects2.length = 0;
gdjs.WinMenuCode.GDSunlightObjects1.length = 0;
gdjs.WinMenuCode.GDSunlightObjects2.length = 0;
gdjs.WinMenuCode.GDMirrorStaticObjects1.length = 0;
gdjs.WinMenuCode.GDMirrorStaticObjects2.length = 0;
gdjs.WinMenuCode.GDMirrorObjects1.length = 0;
gdjs.WinMenuCode.GDMirrorObjects2.length = 0;
gdjs.WinMenuCode.GDSphereStaticObjects1.length = 0;
gdjs.WinMenuCode.GDSphereStaticObjects2.length = 0;
gdjs.WinMenuCode.GDSphereObjects1.length = 0;
gdjs.WinMenuCode.GDSphereObjects2.length = 0;
gdjs.WinMenuCode.GDPlayerObjects1.length = 0;
gdjs.WinMenuCode.GDPlayerObjects2.length = 0;
gdjs.WinMenuCode.GDSilverObjects1.length = 0;
gdjs.WinMenuCode.GDSilverObjects2.length = 0;
gdjs.WinMenuCode.GDVampireObjects1.length = 0;
gdjs.WinMenuCode.GDVampireObjects2.length = 0;
gdjs.WinMenuCode.GDleftObjects1.length = 0;
gdjs.WinMenuCode.GDleftObjects2.length = 0;
gdjs.WinMenuCode.GDrightObjects1.length = 0;
gdjs.WinMenuCode.GDrightObjects2.length = 0;
gdjs.WinMenuCode.GDBackgroundObjects1.length = 0;
gdjs.WinMenuCode.GDBackgroundObjects2.length = 0;
gdjs.WinMenuCode.GDTitleObjects1.length = 0;
gdjs.WinMenuCode.GDTitleObjects2.length = 0;
gdjs.WinMenuCode.GDStartObjects1.length = 0;
gdjs.WinMenuCode.GDStartObjects2.length = 0;
gdjs.WinMenuCode.GDQuitObjects1.length = 0;
gdjs.WinMenuCode.GDQuitObjects2.length = 0;
gdjs.WinMenuCode.GDScoreObjects1.length = 0;
gdjs.WinMenuCode.GDScoreObjects2.length = 0;

gdjs.WinMenuCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['WinMenuCode'] = gdjs.WinMenuCode;
