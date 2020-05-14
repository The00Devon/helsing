gdjs.StartMenuCode = {};
gdjs.StartMenuCode.GDSilverCountObjects1= [];
gdjs.StartMenuCode.GDSilverCountObjects2= [];
gdjs.StartMenuCode.GDDepthObjects1= [];
gdjs.StartMenuCode.GDDepthObjects2= [];
gdjs.StartMenuCode.GDForegroundObjects1= [];
gdjs.StartMenuCode.GDForegroundObjects2= [];
gdjs.StartMenuCode.GDMossObjects1= [];
gdjs.StartMenuCode.GDMossObjects2= [];
gdjs.StartMenuCode.GDFogObjects1= [];
gdjs.StartMenuCode.GDFogObjects2= [];
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
gdjs.StartMenuCode.GDDarknessObjects1= [];
gdjs.StartMenuCode.GDDarknessObjects2= [];
gdjs.StartMenuCode.GDLanternObjects1= [];
gdjs.StartMenuCode.GDLanternObjects2= [];
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
gdjs.StartMenuCode.GDVampireObjects1= [];
gdjs.StartMenuCode.GDVampireObjects2= [];
gdjs.StartMenuCode.GDSilverObjects1= [];
gdjs.StartMenuCode.GDSilverObjects2= [];
gdjs.StartMenuCode.GDUI_95ExitObjects1= [];
gdjs.StartMenuCode.GDUI_95ExitObjects2= [];
gdjs.StartMenuCode.GDUI_95InteractObjects1= [];
gdjs.StartMenuCode.GDUI_95InteractObjects2= [];
gdjs.StartMenuCode.GDUI_95JumpObjects1= [];
gdjs.StartMenuCode.GDUI_95JumpObjects2= [];
gdjs.StartMenuCode.GDUI_95Dir_95RightObjects1= [];
gdjs.StartMenuCode.GDUI_95Dir_95RightObjects2= [];
gdjs.StartMenuCode.GDUI_95Dir_95LeftObjects1= [];
gdjs.StartMenuCode.GDUI_95Dir_95LeftObjects2= [];
gdjs.StartMenuCode.GDUI_95Mir_95RightObjects1= [];
gdjs.StartMenuCode.GDUI_95Mir_95RightObjects2= [];
gdjs.StartMenuCode.GDUI_95Mir_95LeftObjects1= [];
gdjs.StartMenuCode.GDUI_95Mir_95LeftObjects2= [];
gdjs.StartMenuCode.GDrightObjects1= [];
gdjs.StartMenuCode.GDrightObjects2= [];
gdjs.StartMenuCode.GDleftObjects1= [];
gdjs.StartMenuCode.GDleftObjects2= [];
gdjs.StartMenuCode.GDInfoObjects1= [];
gdjs.StartMenuCode.GDInfoObjects2= [];
gdjs.StartMenuCode.GDBackgroundObjects1= [];
gdjs.StartMenuCode.GDBackgroundObjects2= [];
gdjs.StartMenuCode.GDTitleObjects1= [];
gdjs.StartMenuCode.GDTitleObjects2= [];
gdjs.StartMenuCode.GDCheatsObjects1= [];
gdjs.StartMenuCode.GDCheatsObjects2= [];
gdjs.StartMenuCode.GDStartObjects1= [];
gdjs.StartMenuCode.GDStartObjects2= [];
gdjs.StartMenuCode.GDQuitObjects1= [];
gdjs.StartMenuCode.GDQuitObjects2= [];

gdjs.StartMenuCode.conditionTrue_0 = {val:false};
gdjs.StartMenuCode.condition0IsTrue_0 = {val:false};
gdjs.StartMenuCode.condition1IsTrue_0 = {val:false};


gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.StartMenuCode.GDStartObjects1});gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.StartMenuCode.GDStartObjects1});gdjs.StartMenuCode.eventsList0x77d7ac = function(runtimeScene) {

{


gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level_1", false);
}}

}


}; //End of gdjs.StartMenuCode.eventsList0x77d7ac
gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.StartMenuCode.GDQuitObjects1});gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.StartMenuCode.GDQuitObjects1});gdjs.StartMenuCode.eventsList0x9664cc = function(runtimeScene) {

{


gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.StartMenuCode.eventsList0x9664cc
gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDCheatsObjects1Objects = Hashtable.newFrom({"Cheats": gdjs.StartMenuCode.GDCheatsObjects1});gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDCheatsObjects1Objects = Hashtable.newFrom({"Cheats": gdjs.StartMenuCode.GDCheatsObjects1});gdjs.StartMenuCode.eventsList0x8fecf4 = function(runtimeScene) {

{


gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "CheatsMenu");
}}

}


}; //End of gdjs.StartMenuCode.eventsList0x8fecf4
gdjs.StartMenuCode.eventsList0x5b70b8 = function(runtimeScene) {

{



}


{


gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "_SFX\\234260__tyops__scary-piano-in-church.wav", true, 100, 1);
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
gdjs.StartMenuCode.eventsList0x77d7ac(runtimeScene);} //End of subevents
}

}


{


gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level_1", false);
}}

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
gdjs.StartMenuCode.eventsList0x9664cc(runtimeScene);} //End of subevents
}

}


{

gdjs.StartMenuCode.GDCheatsObjects1.createFrom(runtimeScene.getObjects("Cheats"));

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDCheatsObjects1Objects, runtimeScene, true, true);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartMenuCode.GDCheatsObjects1 */
{for(var i = 0, len = gdjs.StartMenuCode.GDCheatsObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDCheatsObjects1[i].setBold(false);
}
}}

}


{

gdjs.StartMenuCode.GDCheatsObjects1.createFrom(runtimeScene.getObjects("Cheats"));

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDCheatsObjects1Objects, runtimeScene, true, false);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartMenuCode.GDCheatsObjects1 */
{for(var i = 0, len = gdjs.StartMenuCode.GDCheatsObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDCheatsObjects1[i].setBold(true);
}
}
{ //Subevents
gdjs.StartMenuCode.eventsList0x8fecf4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.StartMenuCode.eventsList0x5b70b8


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
gdjs.StartMenuCode.GDFogObjects1.length = 0;
gdjs.StartMenuCode.GDFogObjects2.length = 0;
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
gdjs.StartMenuCode.GDDarknessObjects1.length = 0;
gdjs.StartMenuCode.GDDarknessObjects2.length = 0;
gdjs.StartMenuCode.GDLanternObjects1.length = 0;
gdjs.StartMenuCode.GDLanternObjects2.length = 0;
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
gdjs.StartMenuCode.GDVampireObjects1.length = 0;
gdjs.StartMenuCode.GDVampireObjects2.length = 0;
gdjs.StartMenuCode.GDSilverObjects1.length = 0;
gdjs.StartMenuCode.GDSilverObjects2.length = 0;
gdjs.StartMenuCode.GDUI_95ExitObjects1.length = 0;
gdjs.StartMenuCode.GDUI_95ExitObjects2.length = 0;
gdjs.StartMenuCode.GDUI_95InteractObjects1.length = 0;
gdjs.StartMenuCode.GDUI_95InteractObjects2.length = 0;
gdjs.StartMenuCode.GDUI_95JumpObjects1.length = 0;
gdjs.StartMenuCode.GDUI_95JumpObjects2.length = 0;
gdjs.StartMenuCode.GDUI_95Dir_95RightObjects1.length = 0;
gdjs.StartMenuCode.GDUI_95Dir_95RightObjects2.length = 0;
gdjs.StartMenuCode.GDUI_95Dir_95LeftObjects1.length = 0;
gdjs.StartMenuCode.GDUI_95Dir_95LeftObjects2.length = 0;
gdjs.StartMenuCode.GDUI_95Mir_95RightObjects1.length = 0;
gdjs.StartMenuCode.GDUI_95Mir_95RightObjects2.length = 0;
gdjs.StartMenuCode.GDUI_95Mir_95LeftObjects1.length = 0;
gdjs.StartMenuCode.GDUI_95Mir_95LeftObjects2.length = 0;
gdjs.StartMenuCode.GDrightObjects1.length = 0;
gdjs.StartMenuCode.GDrightObjects2.length = 0;
gdjs.StartMenuCode.GDleftObjects1.length = 0;
gdjs.StartMenuCode.GDleftObjects2.length = 0;
gdjs.StartMenuCode.GDInfoObjects1.length = 0;
gdjs.StartMenuCode.GDInfoObjects2.length = 0;
gdjs.StartMenuCode.GDBackgroundObjects1.length = 0;
gdjs.StartMenuCode.GDBackgroundObjects2.length = 0;
gdjs.StartMenuCode.GDTitleObjects1.length = 0;
gdjs.StartMenuCode.GDTitleObjects2.length = 0;
gdjs.StartMenuCode.GDCheatsObjects1.length = 0;
gdjs.StartMenuCode.GDCheatsObjects2.length = 0;
gdjs.StartMenuCode.GDStartObjects1.length = 0;
gdjs.StartMenuCode.GDStartObjects2.length = 0;
gdjs.StartMenuCode.GDQuitObjects1.length = 0;
gdjs.StartMenuCode.GDQuitObjects2.length = 0;

gdjs.StartMenuCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['StartMenuCode'] = gdjs.StartMenuCode;
