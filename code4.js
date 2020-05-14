gdjs.NextMenuCode = {};
gdjs.NextMenuCode.GDSilverCountObjects1= [];
gdjs.NextMenuCode.GDSilverCountObjects2= [];
gdjs.NextMenuCode.GDDepthObjects1= [];
gdjs.NextMenuCode.GDDepthObjects2= [];
gdjs.NextMenuCode.GDForegroundObjects1= [];
gdjs.NextMenuCode.GDForegroundObjects2= [];
gdjs.NextMenuCode.GDMossObjects1= [];
gdjs.NextMenuCode.GDMossObjects2= [];
gdjs.NextMenuCode.GDFogObjects1= [];
gdjs.NextMenuCode.GDFogObjects2= [];
gdjs.NextMenuCode.GDGlassObjects1= [];
gdjs.NextMenuCode.GDGlassObjects2= [];
gdjs.NextMenuCode.GDLadderObjects1= [];
gdjs.NextMenuCode.GDLadderObjects2= [];
gdjs.NextMenuCode.GDDoorwayBackObjects1= [];
gdjs.NextMenuCode.GDDoorwayBackObjects2= [];
gdjs.NextMenuCode.GDDoorwayObjects1= [];
gdjs.NextMenuCode.GDDoorwayObjects2= [];
gdjs.NextMenuCode.GDDoorLightVerticalObjects1= [];
gdjs.NextMenuCode.GDDoorLightVerticalObjects2= [];
gdjs.NextMenuCode.GDDoorLightHorizontalObjects1= [];
gdjs.NextMenuCode.GDDoorLightHorizontalObjects2= [];
gdjs.NextMenuCode.GDDoorHeavyVerticalObjects1= [];
gdjs.NextMenuCode.GDDoorHeavyVerticalObjects2= [];
gdjs.NextMenuCode.GDDoorHeavyHorizontalObjects1= [];
gdjs.NextMenuCode.GDDoorHeavyHorizontalObjects2= [];
gdjs.NextMenuCode.GDCrystalObjects1= [];
gdjs.NextMenuCode.GDCrystalObjects2= [];
gdjs.NextMenuCode.GDDarknessObjects1= [];
gdjs.NextMenuCode.GDDarknessObjects2= [];
gdjs.NextMenuCode.GDLanternObjects1= [];
gdjs.NextMenuCode.GDLanternObjects2= [];
gdjs.NextMenuCode.GDSunlightSourceObjects1= [];
gdjs.NextMenuCode.GDSunlightSourceObjects2= [];
gdjs.NextMenuCode.GDSunlightObjects1= [];
gdjs.NextMenuCode.GDSunlightObjects2= [];
gdjs.NextMenuCode.GDMirrorStaticObjects1= [];
gdjs.NextMenuCode.GDMirrorStaticObjects2= [];
gdjs.NextMenuCode.GDMirrorObjects1= [];
gdjs.NextMenuCode.GDMirrorObjects2= [];
gdjs.NextMenuCode.GDSphereStaticObjects1= [];
gdjs.NextMenuCode.GDSphereStaticObjects2= [];
gdjs.NextMenuCode.GDSphereObjects1= [];
gdjs.NextMenuCode.GDSphereObjects2= [];
gdjs.NextMenuCode.GDPlayerObjects1= [];
gdjs.NextMenuCode.GDPlayerObjects2= [];
gdjs.NextMenuCode.GDVampireObjects1= [];
gdjs.NextMenuCode.GDVampireObjects2= [];
gdjs.NextMenuCode.GDSilverObjects1= [];
gdjs.NextMenuCode.GDSilverObjects2= [];
gdjs.NextMenuCode.GDUI_95ExitObjects1= [];
gdjs.NextMenuCode.GDUI_95ExitObjects2= [];
gdjs.NextMenuCode.GDUI_95InteractObjects1= [];
gdjs.NextMenuCode.GDUI_95InteractObjects2= [];
gdjs.NextMenuCode.GDUI_95JumpObjects1= [];
gdjs.NextMenuCode.GDUI_95JumpObjects2= [];
gdjs.NextMenuCode.GDUI_95Dir_95RightObjects1= [];
gdjs.NextMenuCode.GDUI_95Dir_95RightObjects2= [];
gdjs.NextMenuCode.GDUI_95Dir_95LeftObjects1= [];
gdjs.NextMenuCode.GDUI_95Dir_95LeftObjects2= [];
gdjs.NextMenuCode.GDUI_95Mir_95RightObjects1= [];
gdjs.NextMenuCode.GDUI_95Mir_95RightObjects2= [];
gdjs.NextMenuCode.GDUI_95Mir_95LeftObjects1= [];
gdjs.NextMenuCode.GDUI_95Mir_95LeftObjects2= [];
gdjs.NextMenuCode.GDrightObjects1= [];
gdjs.NextMenuCode.GDrightObjects2= [];
gdjs.NextMenuCode.GDleftObjects1= [];
gdjs.NextMenuCode.GDleftObjects2= [];
gdjs.NextMenuCode.GDInfoObjects1= [];
gdjs.NextMenuCode.GDInfoObjects2= [];
gdjs.NextMenuCode.GDScoreObjects1= [];
gdjs.NextMenuCode.GDScoreObjects2= [];
gdjs.NextMenuCode.GDBackgroundObjects1= [];
gdjs.NextMenuCode.GDBackgroundObjects2= [];
gdjs.NextMenuCode.GDTitleObjects1= [];
gdjs.NextMenuCode.GDTitleObjects2= [];
gdjs.NextMenuCode.GDStartObjects1= [];
gdjs.NextMenuCode.GDStartObjects2= [];
gdjs.NextMenuCode.GDQuitObjects1= [];
gdjs.NextMenuCode.GDQuitObjects2= [];

gdjs.NextMenuCode.conditionTrue_0 = {val:false};
gdjs.NextMenuCode.condition0IsTrue_0 = {val:false};
gdjs.NextMenuCode.condition1IsTrue_0 = {val:false};


gdjs.NextMenuCode.eventsList0x760abc = function(runtimeScene) {

{


gdjs.NextMenuCode.condition0IsTrue_0.val = false;
{
gdjs.NextMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6));
}if (gdjs.NextMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "WinMenu", false);
}}

}


}; //End of gdjs.NextMenuCode.eventsList0x760abc
gdjs.NextMenuCode.mapOfGDgdjs_46NextMenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.NextMenuCode.GDStartObjects1});gdjs.NextMenuCode.mapOfGDgdjs_46NextMenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.NextMenuCode.GDStartObjects1});gdjs.NextMenuCode.userFunc0x7609d0 = function(runtimeScene) {
"use strict";

let lvl = runtimeScene.getGame().getVariables()._variables.items&&runtimeScene.getGame().getVariables()._variables.items.Level._value;

runtimeScene.requestChange(gdjs.RuntimeScene.REPLACE_SCENE, (lvl>0 ? "Level_"+lvl : "StartMenu"));
};
gdjs.NextMenuCode.eventsList0x7774bc = function(runtimeScene) {

{


gdjs.NextMenuCode.userFunc0x7609d0(runtimeScene);

}


}; //End of gdjs.NextMenuCode.eventsList0x7774bc
gdjs.NextMenuCode.eventsList0x7772ec = function(runtimeScene) {

{


gdjs.NextMenuCode.condition0IsTrue_0.val = false;
{
gdjs.NextMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.NextMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NextMenuCode.eventsList0x7774bc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.NextMenuCode.eventsList0x7772ec
gdjs.NextMenuCode.userFunc0x777848 = function(runtimeScene) {
"use strict";

let lvl = runtimeScene.getGame().getVariables()._variables.items&&runtimeScene.getGame().getVariables()._variables.items.Level._value;

runtimeScene.requestChange(gdjs.RuntimeScene.REPLACE_SCENE, (lvl>0 ? "Level_"+lvl : "StartMenu"));
};
gdjs.NextMenuCode.eventsList0x77778c = function(runtimeScene) {

{


gdjs.NextMenuCode.userFunc0x777848(runtimeScene);

}


}; //End of gdjs.NextMenuCode.eventsList0x77778c
gdjs.NextMenuCode.mapOfGDgdjs_46NextMenuCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.NextMenuCode.GDQuitObjects1});gdjs.NextMenuCode.mapOfGDgdjs_46NextMenuCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.NextMenuCode.GDQuitObjects1});gdjs.NextMenuCode.eventsList0x777c7c = function(runtimeScene) {

{


gdjs.NextMenuCode.condition0IsTrue_0.val = false;
{
gdjs.NextMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.NextMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartMenu", false);
}}

}


}; //End of gdjs.NextMenuCode.eventsList0x777c7c
gdjs.NextMenuCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.NextMenuCode.condition0IsTrue_0.val = false;
{
gdjs.NextMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NextMenuCode.condition0IsTrue_0.val) {
gdjs.NextMenuCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
gdjs.NextMenuCode.GDTitleObjects1.createFrom(runtimeScene.getObjects("Title"));
{for(var i = 0, len = gdjs.NextMenuCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.NextMenuCode.GDScoreObjects1[i].setString("Depth = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))) + "\n\nSilver = " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + " x 5 = " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * 5) + "\n\nScore = " + gdjs.evtTools.common.toString((gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))) + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * 5)));
}
}{for(var i = 0, len = gdjs.NextMenuCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.NextMenuCode.GDTitleObjects1[i].setString("Level " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) - 1) + "\nFINISHED");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "_SFX\\234260__tyops__scary-piano-in-church.wav", true, 100, 1);
}
{ //Subevents
gdjs.NextMenuCode.eventsList0x760abc(runtimeScene);} //End of subevents
}

}


{

gdjs.NextMenuCode.GDStartObjects1.createFrom(runtimeScene.getObjects("Start"));

gdjs.NextMenuCode.condition0IsTrue_0.val = false;
{
gdjs.NextMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NextMenuCode.mapOfGDgdjs_46NextMenuCode_46GDStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.NextMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NextMenuCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.NextMenuCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.NextMenuCode.GDStartObjects1[i].setBold(false);
}
}}

}


{

gdjs.NextMenuCode.GDStartObjects1.createFrom(runtimeScene.getObjects("Start"));

gdjs.NextMenuCode.condition0IsTrue_0.val = false;
{
gdjs.NextMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NextMenuCode.mapOfGDgdjs_46NextMenuCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.NextMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NextMenuCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.NextMenuCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.NextMenuCode.GDStartObjects1[i].setBold(true);
}
}
{ //Subevents
gdjs.NextMenuCode.eventsList0x7772ec(runtimeScene);} //End of subevents
}

}


{


gdjs.NextMenuCode.condition0IsTrue_0.val = false;
{
gdjs.NextMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.NextMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NextMenuCode.eventsList0x77778c(runtimeScene);} //End of subevents
}

}


{

gdjs.NextMenuCode.GDQuitObjects1.createFrom(runtimeScene.getObjects("Quit"));

gdjs.NextMenuCode.condition0IsTrue_0.val = false;
{
gdjs.NextMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NextMenuCode.mapOfGDgdjs_46NextMenuCode_46GDQuitObjects1Objects, runtimeScene, true, true);
}if (gdjs.NextMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NextMenuCode.GDQuitObjects1 */
{for(var i = 0, len = gdjs.NextMenuCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.NextMenuCode.GDQuitObjects1[i].setBold(false);
}
}}

}


{

gdjs.NextMenuCode.GDQuitObjects1.createFrom(runtimeScene.getObjects("Quit"));

gdjs.NextMenuCode.condition0IsTrue_0.val = false;
{
gdjs.NextMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NextMenuCode.mapOfGDgdjs_46NextMenuCode_46GDQuitObjects1Objects, runtimeScene, true, false);
}if (gdjs.NextMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NextMenuCode.GDQuitObjects1 */
{for(var i = 0, len = gdjs.NextMenuCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.NextMenuCode.GDQuitObjects1[i].setBold(true);
}
}
{ //Subevents
gdjs.NextMenuCode.eventsList0x777c7c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.NextMenuCode.eventsList0x5b70b8


gdjs.NextMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NextMenuCode.GDSilverCountObjects1.length = 0;
gdjs.NextMenuCode.GDSilverCountObjects2.length = 0;
gdjs.NextMenuCode.GDDepthObjects1.length = 0;
gdjs.NextMenuCode.GDDepthObjects2.length = 0;
gdjs.NextMenuCode.GDForegroundObjects1.length = 0;
gdjs.NextMenuCode.GDForegroundObjects2.length = 0;
gdjs.NextMenuCode.GDMossObjects1.length = 0;
gdjs.NextMenuCode.GDMossObjects2.length = 0;
gdjs.NextMenuCode.GDFogObjects1.length = 0;
gdjs.NextMenuCode.GDFogObjects2.length = 0;
gdjs.NextMenuCode.GDGlassObjects1.length = 0;
gdjs.NextMenuCode.GDGlassObjects2.length = 0;
gdjs.NextMenuCode.GDLadderObjects1.length = 0;
gdjs.NextMenuCode.GDLadderObjects2.length = 0;
gdjs.NextMenuCode.GDDoorwayBackObjects1.length = 0;
gdjs.NextMenuCode.GDDoorwayBackObjects2.length = 0;
gdjs.NextMenuCode.GDDoorwayObjects1.length = 0;
gdjs.NextMenuCode.GDDoorwayObjects2.length = 0;
gdjs.NextMenuCode.GDDoorLightVerticalObjects1.length = 0;
gdjs.NextMenuCode.GDDoorLightVerticalObjects2.length = 0;
gdjs.NextMenuCode.GDDoorLightHorizontalObjects1.length = 0;
gdjs.NextMenuCode.GDDoorLightHorizontalObjects2.length = 0;
gdjs.NextMenuCode.GDDoorHeavyVerticalObjects1.length = 0;
gdjs.NextMenuCode.GDDoorHeavyVerticalObjects2.length = 0;
gdjs.NextMenuCode.GDDoorHeavyHorizontalObjects1.length = 0;
gdjs.NextMenuCode.GDDoorHeavyHorizontalObjects2.length = 0;
gdjs.NextMenuCode.GDCrystalObjects1.length = 0;
gdjs.NextMenuCode.GDCrystalObjects2.length = 0;
gdjs.NextMenuCode.GDDarknessObjects1.length = 0;
gdjs.NextMenuCode.GDDarknessObjects2.length = 0;
gdjs.NextMenuCode.GDLanternObjects1.length = 0;
gdjs.NextMenuCode.GDLanternObjects2.length = 0;
gdjs.NextMenuCode.GDSunlightSourceObjects1.length = 0;
gdjs.NextMenuCode.GDSunlightSourceObjects2.length = 0;
gdjs.NextMenuCode.GDSunlightObjects1.length = 0;
gdjs.NextMenuCode.GDSunlightObjects2.length = 0;
gdjs.NextMenuCode.GDMirrorStaticObjects1.length = 0;
gdjs.NextMenuCode.GDMirrorStaticObjects2.length = 0;
gdjs.NextMenuCode.GDMirrorObjects1.length = 0;
gdjs.NextMenuCode.GDMirrorObjects2.length = 0;
gdjs.NextMenuCode.GDSphereStaticObjects1.length = 0;
gdjs.NextMenuCode.GDSphereStaticObjects2.length = 0;
gdjs.NextMenuCode.GDSphereObjects1.length = 0;
gdjs.NextMenuCode.GDSphereObjects2.length = 0;
gdjs.NextMenuCode.GDPlayerObjects1.length = 0;
gdjs.NextMenuCode.GDPlayerObjects2.length = 0;
gdjs.NextMenuCode.GDVampireObjects1.length = 0;
gdjs.NextMenuCode.GDVampireObjects2.length = 0;
gdjs.NextMenuCode.GDSilverObjects1.length = 0;
gdjs.NextMenuCode.GDSilverObjects2.length = 0;
gdjs.NextMenuCode.GDUI_95ExitObjects1.length = 0;
gdjs.NextMenuCode.GDUI_95ExitObjects2.length = 0;
gdjs.NextMenuCode.GDUI_95InteractObjects1.length = 0;
gdjs.NextMenuCode.GDUI_95InteractObjects2.length = 0;
gdjs.NextMenuCode.GDUI_95JumpObjects1.length = 0;
gdjs.NextMenuCode.GDUI_95JumpObjects2.length = 0;
gdjs.NextMenuCode.GDUI_95Dir_95RightObjects1.length = 0;
gdjs.NextMenuCode.GDUI_95Dir_95RightObjects2.length = 0;
gdjs.NextMenuCode.GDUI_95Dir_95LeftObjects1.length = 0;
gdjs.NextMenuCode.GDUI_95Dir_95LeftObjects2.length = 0;
gdjs.NextMenuCode.GDUI_95Mir_95RightObjects1.length = 0;
gdjs.NextMenuCode.GDUI_95Mir_95RightObjects2.length = 0;
gdjs.NextMenuCode.GDUI_95Mir_95LeftObjects1.length = 0;
gdjs.NextMenuCode.GDUI_95Mir_95LeftObjects2.length = 0;
gdjs.NextMenuCode.GDrightObjects1.length = 0;
gdjs.NextMenuCode.GDrightObjects2.length = 0;
gdjs.NextMenuCode.GDleftObjects1.length = 0;
gdjs.NextMenuCode.GDleftObjects2.length = 0;
gdjs.NextMenuCode.GDInfoObjects1.length = 0;
gdjs.NextMenuCode.GDInfoObjects2.length = 0;
gdjs.NextMenuCode.GDScoreObjects1.length = 0;
gdjs.NextMenuCode.GDScoreObjects2.length = 0;
gdjs.NextMenuCode.GDBackgroundObjects1.length = 0;
gdjs.NextMenuCode.GDBackgroundObjects2.length = 0;
gdjs.NextMenuCode.GDTitleObjects1.length = 0;
gdjs.NextMenuCode.GDTitleObjects2.length = 0;
gdjs.NextMenuCode.GDStartObjects1.length = 0;
gdjs.NextMenuCode.GDStartObjects2.length = 0;
gdjs.NextMenuCode.GDQuitObjects1.length = 0;
gdjs.NextMenuCode.GDQuitObjects2.length = 0;

gdjs.NextMenuCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['NextMenuCode'] = gdjs.NextMenuCode;
