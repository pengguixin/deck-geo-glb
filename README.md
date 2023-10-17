    [The following text is translated through machine translation. If there is any disrespect, please understand.]

# The model is not aligned with geojson.

I have a set of border.json that I need to create a simulation model based on, and import it into Deck.gl to match the existing border.json.

## How to make the model?
![alt geo-glb](/public/assets/textures/geo-glb.png)
    My model production mainly involves converting geojson into shp, and then importing it into blender through blenderGIS (a blender plugin) to complete the model production.

## trouble
    When I imported the model and border.json into the deck, I found that the model was larger than border.json. I scaled the model, but none of them fully matched border.json.
![alt geo-glb](/public/assets/textures/geo+glb.png)
    So I exported the model as shp, and then converted it into blender.json to match the original border.json. I found that it could match completely, so I don't think the proportion of the model was wrong. Moreover, the model cannot fully match blender.json, and there is no problem with the center point of the model.
![alt geo-glb](/public/assets/textures/blender_json.png)
    I have doubts about whether the size of the model is too large, so I took a part of border.json and turned it into a part_ Of_ Bridge.json, it was found that the model cannot match it either.
![alt geo-glb](/public/assets/textures/part_of_bridge-geo.png)

## final
![alt geo-glb](/public/assets/textures/geo-glb.png)

## I hope to receive help on this issue, thank you very much!
Is there any way to make the model perfectly match JSON, or is there any other way to create a model that matches JSON.

I hope to receive help, thank you very much!
