import zipJson from './json/zipjson'
import mapConfig from './json/mapConfig';
import { GeoJsonLayer } from '@deck.gl/layers';
import dat from "dat.gui";
import { Deck } from "@deck.gl/core";
import { load } from "@loaders.gl/core";
import { GLTFLoader } from "@loaders.gl/gltf";
import glbTestFun from './utils/glbTest'

let gui = new dat.GUI()
const blender = await load("/assets/models/blender.glb", [GLTFLoader]);
let PORT_NAME = 'ysg';
let geojsons = await zipJson('ysg', ['border', 'blender_json','part_of_bridge', 'marker'])
console.log(geojsons.obj.border)

const deck = new Deck({
  initialViewState: { ...mapConfig[PORT_NAME].viewState },
  controller: true,
  layers: [

    glbTestFun({ // border.glb
      center: [121.95490395, 30.76732420],
      glb: blender,
      sizeScale:0.858545
    }, gui),

    new GeoJsonLayer({ // border
      id: 'border-layer',
      data: geojsons.obj.border,
      lineWidthMinPixels: 1,
      lineWidthMaxPixels: 1,
      lineWidthUnits: 'meters',
      getLineWidth: 1,
      getLineColor: d => {
        return [0, 155, 155]
      },
    }),

    new GeoJsonLayer({ // part_of_border
      id: 'part_of_border',
      data: geojsons.obj.part_of_bridge,
      lineWidthMinPixels: 1,
      lineWidthMaxPixels: 1,
      lineWidthUnits: 'pixels',
      getLineWidth: 1,
      pickable: false,
      highPrecision: true,
      getLineColor: d => {
        return [155, 155, 0]
      },
    }),

    // new GeoJsonLayer({ // blender_json
    //   id: 'blender_json',
    //   data: geojsons.obj.blender_json,
    //   lineWidthMinPixels: 1,
    //   lineWidthMaxPixels: 1,
    //   lineWidthUnits: 'meters',
    //   getLineWidth: 1,
    //   getLineColor: d => {
    //     return [0, 255, 0]
    //   },
    // }),
  ],
});