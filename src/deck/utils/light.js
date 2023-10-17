import { _SunLight as SunLight } from '@deck.gl/core';
import { AmbientLight, LightingEffect } from '@deck.gl/core';
function addLight(gui, deck) {
    let params = {
        ambientIntensity: 5,
        ambientColor: [230, 230, 230],
        hasSunLight:false,
        sunIntensity: 5,
        sunColor: [255, 255, 255]
    }
    let lightGui = gui.addFolder('light')
    function add(){
        let ambientLight = new AmbientLight({
            color: params.ambientColor,
            intensity: params.ambientIntensity
        });
        let sunLight = new SunLight({
            color: params.sunColor,
            timestamp: 1624114652000, 
            intensity: params.sunIntensity
        });
        let lightingEffect
        if(params.hasSunLight){
            lightingEffect = new LightingEffect({ ambientLight, sunLight });
        }else {
            lightingEffect = new LightingEffect({ ambientLight });
        }
       
        deck.setProps({
            effects: [lightingEffect]
        })
    }
    add()
    lightGui.add(params, 'ambientIntensity').step(1).min(0).max(20).onChange(val => {
        add()
    })
    lightGui.addColor(params, 'ambientColor').onChange(val => {
        add()
    })

    lightGui.add(params, 'hasSunLight').onChange(val => {
        add()
    })
    lightGui.add(params, 'sunIntensity').step(1).min(0).max(20).onChange(val => {
        add()
    })
    lightGui.addColor(params, 'sunColor').onChange(val => {
        add()
    })

}

export default addLight