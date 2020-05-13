gdjs.DeathMenuCode = {};
gdjs.DeathMenuCode.GDSilverCountObjects1= [];
gdjs.DeathMenuCode.GDSilverCountObjects2= [];
gdjs.DeathMenuCode.GDDepthObjects1= [];
gdjs.DeathMenuCode.GDDepthObjects2= [];
gdjs.DeathMenuCode.GDForegroundObjects1= [];
gdjs.DeathMenuCode.GDForegroundObjects2= [];
gdjs.DeathMenuCode.GDMossObjects1= [];
gdjs.DeathMenuCode.GDMossObjects2= [];
gdjs.DeathMenuCode.GDFogObjects1= [];
gdjs.DeathMenuCode.GDFogObjects2= [];
gdjs.DeathMenuCode.GDGlassObjects1= [];
gdjs.DeathMenuCode.GDGlassObjects2= [];
gdjs.DeathMenuCode.GDLadderObjects1= [];
gdjs.DeathMenuCode.GDLadderObjects2= [];
gdjs.DeathMenuCode.GDDoorwayBackObjects1= [];
gdjs.DeathMenuCode.GDDoorwayBackObjects2= [];
gdjs.DeathMenuCode.GDDoorwayObjects1= [];
gdjs.DeathMenuCode.GDDoorwayObjects2= [];
gdjs.DeathMenuCode.GDDoorLightVerticalObjects1= [];
gdjs.DeathMenuCode.GDDoorLightVerticalObjects2= [];
gdjs.DeathMenuCode.GDDoorLightHorizontalObjects1= [];
gdjs.DeathMenuCode.GDDoorLightHorizontalObjects2= [];
gdjs.DeathMenuCode.GDDoorHeavyVerticalObjects1= [];
gdjs.DeathMenuCode.GDDoorHeavyVerticalObjects2= [];
gdjs.DeathMenuCode.GDDoorHeavyHorizontalObjects1= [];
gdjs.DeathMenuCode.GDDoorHeavyHorizontalObjects2= [];
gdjs.DeathMenuCode.GDCrystalObjects1= [];
gdjs.DeathMenuCode.GDCrystalObjects2= [];
gdjs.DeathMenuCode.GDDarknessObjects1= [];
gdjs.DeathMenuCode.GDDarknessObjects2= [];
gdjs.DeathMenuCode.GDLanternObjects1= [];
gdjs.DeathMenuCode.GDLanternObjects2= [];
gdjs.DeathMenuCode.GDSunlightSourceObjects1= [];
gdjs.DeathMenuCode.GDSunlightSourceObjects2= [];
gdjs.DeathMenuCode.GDSunlightObjects1= [];
gdjs.DeathMenuCode.GDSunlightObjects2= [];
gdjs.DeathMenuCode.GDMirrorStaticObjects1= [];
gdjs.DeathMenuCode.GDMirrorStaticObjects2= [];
gdjs.DeathMenuCode.GDMirrorObjects1= [];
gdjs.DeathMenuCode.GDMirrorObjects2= [];
gdjs.DeathMenuCode.GDSphereStaticObjects1= [];
gdjs.DeathMenuCode.GDSphereStaticObjects2= [];
gdjs.DeathMenuCode.GDSphereObjects1= [];
gdjs.DeathMenuCode.GDSphereObjects2= [];
gdjs.DeathMenuCode.GDPlayerObjects1= [];
gdjs.DeathMenuCode.GDPlayerObjects2= [];
gdjs.DeathMenuCode.GDVampireObjects1= [];
gdjs.DeathMenuCode.GDVampireObjects2= [];
gdjs.DeathMenuCode.GDSilverObjects1= [];
gdjs.DeathMenuCode.GDSilverObjects2= [];
gdjs.DeathMenuCode.GDUI_95ExitObjects1= [];
gdjs.DeathMenuCode.GDUI_95ExitObjects2= [];
gdjs.DeathMenuCode.GDUI_95InteractObjects1= [];
gdjs.DeathMenuCode.GDUI_95InteractObjects2= [];
gdjs.DeathMenuCode.GDUI_95JumpObjects1= [];
gdjs.DeathMenuCode.GDUI_95JumpObjects2= [];
gdjs.DeathMenuCode.GDUI_95Dir_95RightObjects1= [];
gdjs.DeathMenuCode.GDUI_95Dir_95RightObjects2= [];
gdjs.DeathMenuCode.GDUI_95Dir_95LeftObjects1= [];
gdjs.DeathMenuCode.GDUI_95Dir_95LeftObjects2= [];
gdjs.DeathMenuCode.GDUI_95Mir_95RightObjects1= [];
gdjs.DeathMenuCode.GDUI_95Mir_95RightObjects2= [];
gdjs.DeathMenuCode.GDUI_95Mir_95LeftObjects1= [];
gdjs.DeathMenuCode.GDUI_95Mir_95LeftObjects2= [];
gdjs.DeathMenuCode.GDrightObjects1= [];
gdjs.DeathMenuCode.GDrightObjects2= [];
gdjs.DeathMenuCode.GDleftObjects1= [];
gdjs.DeathMenuCode.GDleftObjects2= [];
gdjs.DeathMenuCode.GDBackgroundObjects1= [];
gdjs.DeathMenuCode.GDBackgroundObjects2= [];
gdjs.DeathMenuCode.GDTitleObjects1= [];
gdjs.DeathMenuCode.GDTitleObjects2= [];
gdjs.DeathMenuCode.GDStartObjects1= [];
gdjs.DeathMenuCode.GDStartObjects2= [];
gdjs.DeathMenuCode.GDQuitObjects1= [];
gdjs.DeathMenuCode.GDQuitObjects2= [];

gdjs.DeathMenuCode.conditionTrue_0 = {val:false};
gdjs.DeathMenuCode.condition0IsTrue_0 = {val:false};
gdjs.DeathMenuCode.condition1IsTrue_0 = {val:false};
gdjs.DeathMenuCode.condition2IsTrue_0 = {val:false};
gdjs.DeathMenuCode.conditionTrue_1 = {val:false};
gdjs.DeathMenuCode.condition0IsTrue_1 = {val:false};
gdjs.DeathMenuCode.condition1IsTrue_1 = {val:false};
gdjs.DeathMenuCode.condition2IsTrue_1 = {val:false};


gdjs.DeathMenuCode.mapOfGDgdjs_46DeathMenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.DeathMenuCode.GDStartObjects1});gdjs.DeathMenuCode.mapOfGDgdjs_46DeathMenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.DeathMenuCode.GDStartObjects1});gdjs.DeathMenuCode.userFunc0x8b3fd8 = function(runtimeScene) {
"use strict";

if(runtimeScene.getGame().getInputManager().isMouseButtonPressed(gdjs.InputManager.MOUSE_LEFT_BUTTON)){

    let lvl = runtimeScene.getGame().getVariables()._variables.items&&runtimeScene.getGame().getVariables()._variables.items.Level._value;

    console.log(lvl);
    
    runtimeScene.requestChange(gdjs.RuntimeScene.REPLACE_SCENE, (lvl>0 ? "Level_"+lvl : "StartMenu"));

}
};
gdjs.DeathMenuCode.eventsList0x8b3e6c = function(runtimeScene) {

{


gdjs.DeathMenuCode.userFunc0x8b3fd8(runtimeScene);

}


{


gdjs.DeathMenuCode.condition0IsTrue_0.val = false;
{
gdjs.DeathMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.DeathMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "", false);
}}

}


}; //End of gdjs.DeathMenuCode.eventsList0x8b3e6c
gdjs.DeathMenuCode.mapOfGDgdjs_46DeathMenuCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.DeathMenuCode.GDQuitObjects1});gdjs.DeathMenuCode.mapOfGDgdjs_46DeathMenuCode_46GDQuitObjects1Objects = Hashtable.newFrom({"Quit": gdjs.DeathMenuCode.GDQuitObjects1});gdjs.DeathMenuCode.eventsList0x8b4504 = function(runtimeScene) {

{


gdjs.DeathMenuCode.condition0IsTrue_0.val = false;
{
gdjs.DeathMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.DeathMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartMenu", false);
}}

}


}; //End of gdjs.DeathMenuCode.eventsList0x8b4504
gdjs.DeathMenuCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.DeathMenuCode.condition0IsTrue_0.val = false;
{
gdjs.DeathMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.DeathMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "_SFX\\333832__nick121087__demonic-woman-scream.wav", false, 100, 2);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scream");
}}

}


{


gdjs.DeathMenuCode.condition0IsTrue_0.val = false;
gdjs.DeathMenuCode.condition1IsTrue_0.val = false;
{
gdjs.DeathMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "scream");
}if ( gdjs.DeathMenuCode.condition0IsTrue_0.val ) {
{
{gdjs.DeathMenuCode.conditionTrue_1 = gdjs.DeathMenuCode.condition1IsTrue_0;
gdjs.DeathMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9124628);
}
}}
if (gdjs.DeathMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "_SFX\\234260__tyops__scary-piano-in-church.wav", true, 100, 1);
}}

}


{

gdjs.DeathMenuCode.GDStartObjects1.createFrom(runtimeScene.getObjects("Start"));

gdjs.DeathMenuCode.condition0IsTrue_0.val = false;
{
gdjs.DeathMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathMenuCode.mapOfGDgdjs_46DeathMenuCode_46GDStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.DeathMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DeathMenuCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.DeathMenuCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.DeathMenuCode.GDStartObjects1[i].setBold(false);
}
}}

}


{

gdjs.DeathMenuCode.GDStartObjects1.createFrom(runtimeScene.getObjects("Start"));

gdjs.DeathMenuCode.condition0IsTrue_0.val = false;
{
gdjs.DeathMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathMenuCode.mapOfGDgdjs_46DeathMenuCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.DeathMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DeathMenuCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.DeathMenuCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.DeathMenuCode.GDStartObjects1[i].setBold(true);
}
}
{ //Subevents
gdjs.DeathMenuCode.eventsList0x8b3e6c(runtimeScene);} //End of subevents
}

}


{

gdjs.DeathMenuCode.GDQuitObjects1.createFrom(runtimeScene.getObjects("Quit"));

gdjs.DeathMenuCode.condition0IsTrue_0.val = false;
{
gdjs.DeathMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathMenuCode.mapOfGDgdjs_46DeathMenuCode_46GDQuitObjects1Objects, runtimeScene, true, true);
}if (gdjs.DeathMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DeathMenuCode.GDQuitObjects1 */
{for(var i = 0, len = gdjs.DeathMenuCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.DeathMenuCode.GDQuitObjects1[i].setBold(false);
}
}}

}


{

gdjs.DeathMenuCode.GDQuitObjects1.createFrom(runtimeScene.getObjects("Quit"));

gdjs.DeathMenuCode.condition0IsTrue_0.val = false;
{
gdjs.DeathMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathMenuCode.mapOfGDgdjs_46DeathMenuCode_46GDQuitObjects1Objects, runtimeScene, true, false);
}if (gdjs.DeathMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DeathMenuCode.GDQuitObjects1 */
{for(var i = 0, len = gdjs.DeathMenuCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.DeathMenuCode.GDQuitObjects1[i].setBold(true);
}
}
{ //Subevents
gdjs.DeathMenuCode.eventsList0x8b4504(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.DeathMenuCode.eventsList0x5b70b8


gdjs.DeathMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeathMenuCode.GDSilverCountObjects1.length = 0;
gdjs.DeathMenuCode.GDSilverCountObjects2.length = 0;
gdjs.DeathMenuCode.GDDepthObjects1.length = 0;
gdjs.DeathMenuCode.GDDepthObjects2.length = 0;
gdjs.DeathMenuCode.GDForegroundObjects1.length = 0;
gdjs.DeathMenuCode.GDForegroundObjects2.length = 0;
gdjs.DeathMenuCode.GDMossObjects1.length = 0;
gdjs.DeathMenuCode.GDMossObjects2.length = 0;
gdjs.DeathMenuCode.GDFogObjects1.length = 0;
gdjs.DeathMenuCode.GDFogObjects2.length = 0;
gdjs.DeathMenuCode.GDGlassObjects1.length = 0;
gdjs.DeathMenuCode.GDGlassObjects2.length = 0;
gdjs.DeathMenuCode.GDLadderObjects1.length = 0;
gdjs.DeathMenuCode.GDLadderObjects2.length = 0;
gdjs.DeathMenuCode.GDDoorwayBackObjects1.length = 0;
gdjs.DeathMenuCode.GDDoorwayBackObjects2.length = 0;
gdjs.DeathMenuCode.GDDoorwayObjects1.length = 0;
gdjs.DeathMenuCode.GDDoorwayObjects2.length = 0;
gdjs.DeathMenuCode.GDDoorLightVerticalObjects1.length = 0;
gdjs.DeathMenuCode.GDDoorLightVerticalObjects2.length = 0;
gdjs.DeathMenuCode.GDDoorLightHorizontalObjects1.length = 0;
gdjs.DeathMenuCode.GDDoorLightHorizontalObjects2.length = 0;
gdjs.DeathMenuCode.GDDoorHeavyVerticalObjects1.length = 0;
gdjs.DeathMenuCode.GDDoorHeavyVerticalObjects2.length = 0;
gdjs.DeathMenuCode.GDDoorHeavyHorizontalObjects1.length = 0;
gdjs.DeathMenuCode.GDDoorHeavyHorizontalObjects2.length = 0;
gdjs.DeathMenuCode.GDCrystalObjects1.length = 0;
gdjs.DeathMenuCode.GDCrystalObjects2.length = 0;
gdjs.DeathMenuCode.GDDarknessObjects1.length = 0;
gdjs.DeathMenuCode.GDDarknessObjects2.length = 0;
gdjs.DeathMenuCode.GDLanternObjects1.length = 0;
gdjs.DeathMenuCode.GDLanternObjects2.length = 0;
gdjs.DeathMenuCode.GDSunlightSourceObjects1.length = 0;
gdjs.DeathMenuCode.GDSunlightSourceObjects2.length = 0;
gdjs.DeathMenuCode.GDSunlightObjects1.length = 0;
gdjs.DeathMenuCode.GDSunlightObjects2.length = 0;
gdjs.DeathMenuCode.GDMirrorStaticObjects1.length = 0;
gdjs.DeathMenuCode.GDMirrorStaticObjects2.length = 0;
gdjs.DeathMenuCode.GDMirrorObjects1.length = 0;
gdjs.DeathMenuCode.GDMirrorObjects2.length = 0;
gdjs.DeathMenuCode.GDSphereStaticObjects1.length = 0;
gdjs.DeathMenuCode.GDSphereStaticObjects2.length = 0;
gdjs.DeathMenuCode.GDSphereObjects1.length = 0;
gdjs.DeathMenuCode.GDSphereObjects2.length = 0;
gdjs.DeathMenuCode.GDPlayerObjects1.length = 0;
gdjs.DeathMenuCode.GDPlayerObjects2.length = 0;
gdjs.DeathMenuCode.GDVampireObjects1.length = 0;
gdjs.DeathMenuCode.GDVampireObjects2.length = 0;
gdjs.DeathMenuCode.GDSilverObjects1.length = 0;
gdjs.DeathMenuCode.GDSilverObjects2.length = 0;
gdjs.DeathMenuCode.GDUI_95ExitObjects1.length = 0;
gdjs.DeathMenuCode.GDUI_95ExitObjects2.length = 0;
gdjs.DeathMenuCode.GDUI_95InteractObjects1.length = 0;
gdjs.DeathMenuCode.GDUI_95InteractObjects2.length = 0;
gdjs.DeathMenuCode.GDUI_95JumpObjects1.length = 0;
gdjs.DeathMenuCode.GDUI_95JumpObjects2.length = 0;
gdjs.DeathMenuCode.GDUI_95Dir_95RightObjects1.length = 0;
gdjs.DeathMenuCode.GDUI_95Dir_95RightObjects2.length = 0;
gdjs.DeathMenuCode.GDUI_95Dir_95LeftObjects1.length = 0;
gdjs.DeathMenuCode.GDUI_95Dir_95LeftObjects2.length = 0;
gdjs.DeathMenuCode.GDUI_95Mir_95RightObjects1.length = 0;
gdjs.DeathMenuCode.GDUI_95Mir_95RightObjects2.length = 0;
gdjs.DeathMenuCode.GDUI_95Mir_95LeftObjects1.length = 0;
gdjs.DeathMenuCode.GDUI_95Mir_95LeftObjects2.length = 0;
gdjs.DeathMenuCode.GDrightObjects1.length = 0;
gdjs.DeathMenuCode.GDrightObjects2.length = 0;
gdjs.DeathMenuCode.GDleftObjects1.length = 0;
gdjs.DeathMenuCode.GDleftObjects2.length = 0;
gdjs.DeathMenuCode.GDBackgroundObjects1.length = 0;
gdjs.DeathMenuCode.GDBackgroundObjects2.length = 0;
gdjs.DeathMenuCode.GDTitleObjects1.length = 0;
gdjs.DeathMenuCode.GDTitleObjects2.length = 0;
gdjs.DeathMenuCode.GDStartObjects1.length = 0;
gdjs.DeathMenuCode.GDStartObjects2.length = 0;
gdjs.DeathMenuCode.GDQuitObjects1.length = 0;
gdjs.DeathMenuCode.GDQuitObjects2.length = 0;

gdjs.DeathMenuCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['DeathMenuCode'] = gdjs.DeathMenuCode;
