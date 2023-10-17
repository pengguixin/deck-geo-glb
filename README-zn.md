    [The following text is translated through machine translation. If there is any disrespect, please understand.]

# The model is not aligned with geojson.

我有一组border.json，需要根据border.json创建一个仿真模型，并导入到deck.gl中和原有的border.json进行匹配。

## How to make the model?
![alt geo-glb](/public/assets/textures/geo-glb.png)
我的模型制作主要是通过将geojson转换成shp，然后通过blenderGIS（一款blender的插件）导入到blender中，完成模型制作。

## trouble
当我把模型和border.json导入到deck中，发现模型比border.json要大，我进行模型比例缩放，但都无法完整匹配border.json。
![alt geo-glb](/public/assets/textures/geo+glb.png)
于是我将模型导出成shp，再将shp转换成blender.json与原有的border.json进行匹配，发现能够完整匹配，所以我觉得模型的比例没有出错。而且模型与blender.json也无法完整匹配，模型的中心点没有问题。
![alt geo-glb](/public/assets/textures/blender_json.png)
我有怀疑是不是模型的尺寸太大，所以我将border.json截取一部分变成part_of_bridge.json，发现模型与之也无法匹配。
![alt geo-glb](/public/assets/textures/part_of_bridge-geo.png)

## 总结一下
![alt geo-glb](/public/assets/textures/geo-glb.png)

## 关于这个问题希望能得到帮助，非常非常感谢！
有什么办法可以让模型和json完美匹配，又或者有什么其他的办法来制作与json能匹配的模型。
希望能得到帮助，不胜感激！
