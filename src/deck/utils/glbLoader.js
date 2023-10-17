import { load } from "@loaders.gl/core";
import { GLTFLoader } from "@loaders.gl/gltf";
import GL from '@luma.gl/constants';

const CUBE_FACE_TO_DIRECTION = {
    [GL.TEXTURE_CUBE_MAP_POSITIVE_X]: 'right',
    [GL.TEXTURE_CUBE_MAP_NEGATIVE_X]: 'left',
    [GL.TEXTURE_CUBE_MAP_POSITIVE_Y]: 'top',
    [GL.TEXTURE_CUBE_MAP_NEGATIVE_Y]: 'bottom',
    [GL.TEXTURE_CUBE_MAP_POSITIVE_Z]: 'front',
    [GL.TEXTURE_CUBE_MAP_NEGATIVE_Z]: 'back'
};

const IMAGE_BASED_LIGHTING_ENVIRONMENT = {
    brdfLutUrl: '/cubeEnv1/brdfLUT.png',
    getTexUrl: (type, dir, mipLevel) => {
        return `/cubeEnv1/${CUBE_FACE_TO_DIRECTION[dir]}.png`
    },
    specularMipLevels: 0
};
let envLight = {
    _imageBasedLightingEnvironment: ({gl}) => 
    new GLTFEnvironment(gl, IMAGE_BASED_LIGHTING_ENVIRONMENT)
}

export {
    envLight
}