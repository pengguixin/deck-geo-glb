import { CompositeLayer,COORDINATE_SYSTEM } from "@deck.gl/core";
import { ScenegraphLayer } from "@deck.gl/mesh-layers";

class GlbTestLayer extends CompositeLayer {
    static layerName = 'GlbTestLayer'
    setProps(props) {
        this.setState({
            ...props,
        });
    }

    updateState({ props, oldProps, changeFlags }) {
        if (changeFlags.dataChanged) {
            this.setProps(props);
        }
    }

    renderLayers() {
        const { glbData, scenegraph, sizeScale } = this.state;
        console.log(scenegraph)
        let id =Math.random().toString(16).substr(2, 8)
        return [
            new ScenegraphLayer({
                id: 'glb_test',
                data: [...glbData],
                _lighting: "pbr",
                lineWidthMinPixels: 1,
                lineWidthMaxPixels: 1,
                getOrientation: d => {
                    console.log(d.getOrientation)
                    return d.getOrientation
                },
                getPosition: (d) => d.coordinates,
                sizeScale: sizeScale || 1,
                pickable: true,
                coordinateSystem:COORDINATE_SYSTEM.LNGLAT,
                getTranslation: d => d.getTranslation,
                scenegraph: scenegraph,
            }),
        ];
    }
}

function glbTestFun({ center = [0, 0], glb,sizeScale=1 }, gui) {
    const glbTestParams = {
        sizeScale,
        x: 0,
        y: 0,
        z: 0,
        xMove: 0,
        yMove: 0,
        zMove: 0,
    }
    let glbTestData = [{
        coordinates: center,
        getOrientation: [glbTestParams.x, glbTestParams.y, glbTestParams.z],
        getTranslation: [glbTestParams.xMove, glbTestParams.yMove, glbTestParams.zMove]
    }]
    const glbTest = new GlbTestLayer({
        glbData: glbTestData,
        scenegraph: glb,
        sizeScale: glbTestParams.sizeScale,
    })

    if (gui) {
        let guiName = 'Model debug'
        let glbTestGui = gui.addFolder(guiName)
        glbTestGui.add(glbTestParams, 'sizeScale').min(0.0000001).max(2).step(0.000001).onChange(val => {
            glbTest.setProps({
                sizeScale: val
            })
        })
        glbTestGui.add(glbTestParams, 'x').min(-90).max(90).step(0.001).onChange(val => {
            glbTestData[0].getOrientation[0] = val
            glbTest.setProps({
                glbData: glbTestData
            })
        })
        glbTestGui.add(glbTestParams, 'y').min(-90).max(90).step(0.001).onChange(val => {
            glbTestData[0].getOrientation[1] = val
            glbTest.setProps({
                glbData: glbTestData
            })
        })
        glbTestGui.add(glbTestParams, 'z').min(-90).max(90).step(0.001).onChange(val => {
            glbTestData[0].getOrientation[2] = val
            glbTest.setProps({
                glbData: glbTestData
            })
        })

        glbTestGui.add(glbTestParams, 'xMove').min(-500).max(500).step(0.01).onChange(val => {
            glbTestData[0].getTranslation[0] = val
            glbTest.setProps({
                glbData: glbTestData
            })
        })
        glbTestGui.add(glbTestParams, 'yMove').min(-500).max(500).step(0.01).onChange(val => {
            glbTestData[0].getTranslation[1] = val
            glbTest.setProps({
                glbData: glbTestData
            })
        })
        glbTestGui.add(glbTestParams, 'zMove').min(-500).max(500).step(0.01).onChange(val => {
            glbTestData[0].getTranslation[2] = val
            glbTest.setProps({
                glbData: glbTestData
            })
        })
    }
    return glbTest
}
export default glbTestFun;


// glbTestLayer({
//     center: [121.64433925170457, 31.335870840557643],
//     glb:"/null.gltf"
// },gui)