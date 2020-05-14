gdjs.PreCode = {};
gdjs.PreCode.GDSilverCountObjects1= [];
gdjs.PreCode.GDSilverCountObjects2= [];
gdjs.PreCode.GDDepthObjects1= [];
gdjs.PreCode.GDDepthObjects2= [];
gdjs.PreCode.GDForegroundObjects1= [];
gdjs.PreCode.GDForegroundObjects2= [];
gdjs.PreCode.GDMossObjects1= [];
gdjs.PreCode.GDMossObjects2= [];
gdjs.PreCode.GDFogObjects1= [];
gdjs.PreCode.GDFogObjects2= [];
gdjs.PreCode.GDGlassObjects1= [];
gdjs.PreCode.GDGlassObjects2= [];
gdjs.PreCode.GDLadderObjects1= [];
gdjs.PreCode.GDLadderObjects2= [];
gdjs.PreCode.GDDoorwayBackObjects1= [];
gdjs.PreCode.GDDoorwayBackObjects2= [];
gdjs.PreCode.GDDoorwayObjects1= [];
gdjs.PreCode.GDDoorwayObjects2= [];
gdjs.PreCode.GDDoorLightVerticalObjects1= [];
gdjs.PreCode.GDDoorLightVerticalObjects2= [];
gdjs.PreCode.GDDoorLightHorizontalObjects1= [];
gdjs.PreCode.GDDoorLightHorizontalObjects2= [];
gdjs.PreCode.GDDoorHeavyVerticalObjects1= [];
gdjs.PreCode.GDDoorHeavyVerticalObjects2= [];
gdjs.PreCode.GDDoorHeavyHorizontalObjects1= [];
gdjs.PreCode.GDDoorHeavyHorizontalObjects2= [];
gdjs.PreCode.GDCrystalObjects1= [];
gdjs.PreCode.GDCrystalObjects2= [];
gdjs.PreCode.GDDarknessObjects1= [];
gdjs.PreCode.GDDarknessObjects2= [];
gdjs.PreCode.GDLanternObjects1= [];
gdjs.PreCode.GDLanternObjects2= [];
gdjs.PreCode.GDSunlightSourceObjects1= [];
gdjs.PreCode.GDSunlightSourceObjects2= [];
gdjs.PreCode.GDSunlightObjects1= [];
gdjs.PreCode.GDSunlightObjects2= [];
gdjs.PreCode.GDMirrorStaticObjects1= [];
gdjs.PreCode.GDMirrorStaticObjects2= [];
gdjs.PreCode.GDMirrorObjects1= [];
gdjs.PreCode.GDMirrorObjects2= [];
gdjs.PreCode.GDSphereStaticObjects1= [];
gdjs.PreCode.GDSphereStaticObjects2= [];
gdjs.PreCode.GDSphereObjects1= [];
gdjs.PreCode.GDSphereObjects2= [];
gdjs.PreCode.GDPlayerObjects1= [];
gdjs.PreCode.GDPlayerObjects2= [];
gdjs.PreCode.GDVampireObjects1= [];
gdjs.PreCode.GDVampireObjects2= [];
gdjs.PreCode.GDSilverObjects1= [];
gdjs.PreCode.GDSilverObjects2= [];
gdjs.PreCode.GDUI_95ExitObjects1= [];
gdjs.PreCode.GDUI_95ExitObjects2= [];
gdjs.PreCode.GDUI_95InteractObjects1= [];
gdjs.PreCode.GDUI_95InteractObjects2= [];
gdjs.PreCode.GDUI_95JumpObjects1= [];
gdjs.PreCode.GDUI_95JumpObjects2= [];
gdjs.PreCode.GDUI_95Dir_95RightObjects1= [];
gdjs.PreCode.GDUI_95Dir_95RightObjects2= [];
gdjs.PreCode.GDUI_95Dir_95LeftObjects1= [];
gdjs.PreCode.GDUI_95Dir_95LeftObjects2= [];
gdjs.PreCode.GDUI_95Mir_95RightObjects1= [];
gdjs.PreCode.GDUI_95Mir_95RightObjects2= [];
gdjs.PreCode.GDUI_95Mir_95LeftObjects1= [];
gdjs.PreCode.GDUI_95Mir_95LeftObjects2= [];
gdjs.PreCode.GDrightObjects1= [];
gdjs.PreCode.GDrightObjects2= [];
gdjs.PreCode.GDleftObjects1= [];
gdjs.PreCode.GDleftObjects2= [];
gdjs.PreCode.GDInfoObjects1= [];
gdjs.PreCode.GDInfoObjects2= [];
gdjs.PreCode.GDBackgroundObjects1= [];
gdjs.PreCode.GDBackgroundObjects2= [];
gdjs.PreCode.GDTitleObjects1= [];
gdjs.PreCode.GDTitleObjects2= [];
gdjs.PreCode.GDCheatsObjects1= [];
gdjs.PreCode.GDCheatsObjects2= [];
gdjs.PreCode.GDStartObjects1= [];
gdjs.PreCode.GDStartObjects2= [];
gdjs.PreCode.GDQuitObjects1= [];
gdjs.PreCode.GDQuitObjects2= [];

gdjs.PreCode.conditionTrue_0 = {val:false};
gdjs.PreCode.condition0IsTrue_0 = {val:false};
gdjs.PreCode.condition1IsTrue_0 = {val:false};


gdjs.PreCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.PreCode.condition0IsTrue_0.val = false;
{
gdjs.PreCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.PreCode.condition0IsTrue_0.val) {
gdjs.PreCode.GDTitleObjects1.createFrom(runtimeScene.getObjects("Title"));
{for(var i = 0, len = gdjs.PreCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.PreCode.GDTitleObjects1[i].setString("loading...");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartMenu", false);
}}

}


}; //End of gdjs.PreCode.eventsList0x5b70b8


gdjs.PreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PreCode.GDSilverCountObjects1.length = 0;
gdjs.PreCode.GDSilverCountObjects2.length = 0;
gdjs.PreCode.GDDepthObjects1.length = 0;
gdjs.PreCode.GDDepthObjects2.length = 0;
gdjs.PreCode.GDForegroundObjects1.length = 0;
gdjs.PreCode.GDForegroundObjects2.length = 0;
gdjs.PreCode.GDMossObjects1.length = 0;
gdjs.PreCode.GDMossObjects2.length = 0;
gdjs.PreCode.GDFogObjects1.length = 0;
gdjs.PreCode.GDFogObjects2.length = 0;
gdjs.PreCode.GDGlassObjects1.length = 0;
gdjs.PreCode.GDGlassObjects2.length = 0;
gdjs.PreCode.GDLadderObjects1.length = 0;
gdjs.PreCode.GDLadderObjects2.length = 0;
gdjs.PreCode.GDDoorwayBackObjects1.length = 0;
gdjs.PreCode.GDDoorwayBackObjects2.length = 0;
gdjs.PreCode.GDDoorwayObjects1.length = 0;
gdjs.PreCode.GDDoorwayObjects2.length = 0;
gdjs.PreCode.GDDoorLightVerticalObjects1.length = 0;
gdjs.PreCode.GDDoorLightVerticalObjects2.length = 0;
gdjs.PreCode.GDDoorLightHorizontalObjects1.length = 0;
gdjs.PreCode.GDDoorLightHorizontalObjects2.length = 0;
gdjs.PreCode.GDDoorHeavyVerticalObjects1.length = 0;
gdjs.PreCode.GDDoorHeavyVerticalObjects2.length = 0;
gdjs.PreCode.GDDoorHeavyHorizontalObjects1.length = 0;
gdjs.PreCode.GDDoorHeavyHorizontalObjects2.length = 0;
gdjs.PreCode.GDCrystalObjects1.length = 0;
gdjs.PreCode.GDCrystalObjects2.length = 0;
gdjs.PreCode.GDDarknessObjects1.length = 0;
gdjs.PreCode.GDDarknessObjects2.length = 0;
gdjs.PreCode.GDLanternObjects1.length = 0;
gdjs.PreCode.GDLanternObjects2.length = 0;
gdjs.PreCode.GDSunlightSourceObjects1.length = 0;
gdjs.PreCode.GDSunlightSourceObjects2.length = 0;
gdjs.PreCode.GDSunlightObjects1.length = 0;
gdjs.PreCode.GDSunlightObjects2.length = 0;
gdjs.PreCode.GDMirrorStaticObjects1.length = 0;
gdjs.PreCode.GDMirrorStaticObjects2.length = 0;
gdjs.PreCode.GDMirrorObjects1.length = 0;
gdjs.PreCode.GDMirrorObjects2.length = 0;
gdjs.PreCode.GDSphereStaticObjects1.length = 0;
gdjs.PreCode.GDSphereStaticObjects2.length = 0;
gdjs.PreCode.GDSphereObjects1.length = 0;
gdjs.PreCode.GDSphereObjects2.length = 0;
gdjs.PreCode.GDPlayerObjects1.length = 0;
gdjs.PreCode.GDPlayerObjects2.length = 0;
gdjs.PreCode.GDVampireObjects1.length = 0;
gdjs.PreCode.GDVampireObjects2.length = 0;
gdjs.PreCode.GDSilverObjects1.length = 0;
gdjs.PreCode.GDSilverObjects2.length = 0;
gdjs.PreCode.GDUI_95ExitObjects1.length = 0;
gdjs.PreCode.GDUI_95ExitObjects2.length = 0;
gdjs.PreCode.GDUI_95InteractObjects1.length = 0;
gdjs.PreCode.GDUI_95InteractObjects2.length = 0;
gdjs.PreCode.GDUI_95JumpObjects1.length = 0;
gdjs.PreCode.GDUI_95JumpObjects2.length = 0;
gdjs.PreCode.GDUI_95Dir_95RightObjects1.length = 0;
gdjs.PreCode.GDUI_95Dir_95RightObjects2.length = 0;
gdjs.PreCode.GDUI_95Dir_95LeftObjects1.length = 0;
gdjs.PreCode.GDUI_95Dir_95LeftObjects2.length = 0;
gdjs.PreCode.GDUI_95Mir_95RightObjects1.length = 0;
gdjs.PreCode.GDUI_95Mir_95RightObjects2.length = 0;
gdjs.PreCode.GDUI_95Mir_95LeftObjects1.length = 0;
gdjs.PreCode.GDUI_95Mir_95LeftObjects2.length = 0;
gdjs.PreCode.GDrightObjects1.length = 0;
gdjs.PreCode.GDrightObjects2.length = 0;
gdjs.PreCode.GDleftObjects1.length = 0;
gdjs.PreCode.GDleftObjects2.length = 0;
gdjs.PreCode.GDInfoObjects1.length = 0;
gdjs.PreCode.GDInfoObjects2.length = 0;
gdjs.PreCode.GDBackgroundObjects1.length = 0;
gdjs.PreCode.GDBackgroundObjects2.length = 0;
gdjs.PreCode.GDTitleObjects1.length = 0;
gdjs.PreCode.GDTitleObjects2.length = 0;
gdjs.PreCode.GDCheatsObjects1.length = 0;
gdjs.PreCode.GDCheatsObjects2.length = 0;
gdjs.PreCode.GDStartObjects1.length = 0;
gdjs.PreCode.GDStartObjects2.length = 0;
gdjs.PreCode.GDQuitObjects1.length = 0;
gdjs.PreCode.GDQuitObjects2.length = 0;

gdjs.PreCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['PreCode'] = gdjs.PreCode;
