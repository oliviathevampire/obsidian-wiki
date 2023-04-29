# Blocks

Block definitions go in the `block` directory in the obsidian addon.

E.g.
```
content/examplepack/block/mud.json
```

## Basic structure of the JSON file

```json
{
  "information": {
    "name": {
      "translations": {
        "en_us": "Mud"
      }
    },
    "parent_block": "minecraft:cobblestone",
    "block_properties": {
      "sound_group": "minecraft:stone"
    },
    "item_properties": {
      "item_group": "minecraft:building_blocks"
    }
  },
  "rendering": {
    "block_model": {
      "parent": "block/cube_all",
      "textures": {
        "all": "examplepack:block/mud"
      }
    },
    "item_model": "examplepack:block/mud"
  }
}
```

# "information"

Defines the information about the block, like the properties of the block and also the item, it also handles the translations.

## "parent_block"

Defines another block to copy properties from.

Optional. Default: no parent.

Must be a resource location string like `"stone"`, or `"minecraft:dirt"`. Like on loot table jsons and other vanilla files,
if the namespace (the part before the colon) is missing "minecraft" is implied.

## "name"

### "id"

if "id" if included it sets the name of the block to that, else it defaults to the file name. 

### "translations"

This is a map with the language id and whatever you want it to be called in that language.

## "block_properties"

Defines the base properties of the block.

### "sound_group"

This defines the sounds the block will make when placed, breaked, walked on and more.
Can either be an identifier to a vanilla or a custom one, or can even be the object itself.

## "map_color"

Defines the color displayed in a map, from the choices available in the map color palette.

Required.

Must be either a string, or a positive integer between 0 and 63 (inclusive).

## "properties"

Defines the blockstate properties contained in the mod.

Optional. Default: no properties, single state.

Must be a json object (`{}`) containing keys for the property names.

The values in the object can be of 2 types:
* A String: the name of a stock property provided by vanilla minecraft. New stock properties can be added via mod code.
* A json object (`{}`) containing some of these keys:
    ```json
      {
        "type": "string",
        "values": []
      } 
    ```
  * `"type"`: One of the property implementations available. Required.
    * `"boolean"`: The values will be `false` and `true`.
    * `"int"`: The values will be a set of integers. The valid range must be specified in the `min` and `max` keys.
    * `"string"`: The values will be a set of strings. The valid strings must be specified in the `values` list.
    * `"direction"`: The values will be cardinal directions. A subset of the directions can be specified in the `values` list.
    * `"enum"`: The values will be the values in the enum given by the `class` key. A subset of the directions can be specified in the `values` list.
  * `"values"`: For `string`, `direction` and `enum` properties, a json array (`[]`) containing the strings corresponding to the allowed values. Required for `string` properties only.
  * `"min"` and `"max"`: For `int` properties, the range of integers available. Required for `int` properties.
  * `"class"`: For `enum` properties, the fully qualified name of the Enum class. Required for `enum` properties.
 
## "default_state"

Defines the default value of each property, when the value is not provided explicitly.

Optional. Default: the property's first valid value. The default is subject to change unexpectedly and not recommended.

Must be a json object (`{}`) containing property names as keys, with valid values for those properties.

```json
{
  "facing": "east",
  "age": 3
}
```

## "shape_rotation"

Defines the name of a property that is used to rotate the voxel shapes used in collision and hit checks.

Optional. Default: no facing property used.

Must be a string value corresponding to one of the defined properties or one of the default properties from the block type.

The referenced property must be of `direction` type.

## "shape"

Defines the general shape of the block, which should roughly match the model's shape.

Shapes are made out of axis-aligned boxes and cannot be rotated arbitrarily. This is a vanilla limitation.

Optional. Default: use the default shape for the block type.

See [Voxel Shapes](./VoxelShapes.md) for details on the syntax.

## "collision_shape"

Defines the collision shape of the block, used for entity and player movement collisions.

Shapes are made out of axis-aligned boxes and cannot be rotated arbitrarily. This is a vanilla limitation.

Optional. Default: the general shape, or the default collision shape for the block type if a general shape is not defined.

See [Voxel Shapes](./VoxelShapes.md) for details on the syntax.

## "raytrace_shape"

Defines the raytrace shape of the block, used for hit detection and line of sight detection.

Shapes are made out of axis-aligned boxes and cannot be rotated arbitrarily. This is a vanilla limitation.

Optional. Default: the general shape, or the default raytrace shape for the block type if a general shape is not defined.

See [Voxel Shapes](./VoxelShapes.md) for details on the syntax.

## "render_shape"

Defines the render shape of the block, used to decide when neighbouring block culling can be performed.

Shapes are made out of axis-aligned boxes and cannot be rotated arbitrarily. This is a vanilla limitation.

Optional. Default: the general shape, or the default render shape for the block type if a general shape is not defined.

See [Voxel Shapes](./VoxelShapes.md) for details on the syntax.

## "render_layer"

**REMOVED in 1.19**: Use the "render_type" value in the model json instead.

## "not_solid"

Defines that the block is see-through and neighbour face culling should not be performed.

Optional. Default: false (solid).

Must be a boolean (`false` or `true`).

## "requires_tool_for_drops"

Defines that the block requires using the right tool to drop loot.

Optional. Default: tool not required.

Must be a boolean (`false` or `true`).

## "is_air"

Defines that the block is equivalent to air.

Optional. Default: false.

Must be a boolean (`false` or `true`).

## "has_collision"

Defines that the block prevents entities from passing through the collision box.

Optional. Default: true.

Must be a boolean (`false` or `true`).

## "ticks_randomly"

Defines that the block receives random ticks. Not relevant until the scripting system is in place.

Optional. Default: false.

Must be a boolean (`false` or `true`).

## "light_emission"

Defines the amount of light emitted by the block.

Optional. Default: 0.

Must be an integer between 0 and 15 (inclusive.

## "explosion_resistance"

Defines the amount explosion power required to break the block.

Optional. Default: 0.0.

Must be a positive number or zero.

## "destroy_time"

Defines the amount time needed to mine the block without a tool.

Optional. Default: 0.0.

Must be a positive number or zero.

## "friction"

Defines the friction coeficient applied to changes in movement. 

The values can be unintuitive: Values close to 0 mean fast changes (high friction), while values close to 1 mean slow changes (low friction).

Optional. Default: 0.6.

Must be a number between 0 and 1. Decimals allowed.

## "speed_factor"

Defines the speed factor applied to the maximum movement speed. A value of 1 means default speed.

Optional. Default: 1.

Must be a positive number or zero1. Decimals allowed.

## "jump_factor"

Defines the jump factor applied to the maximum jump height. A value of 1 means default jump height.

Optional. Default: 1.

Must be a positive number or zero1. Decimals allowed.

## "color_handler"

Defines a color handler for the block. Color handler provides tint values based on context.

Optional. Default: no tinting.

Must be a resource location string like `"foliage"`, or `"minecraft:tall_grass"`. Like on recipe jsons and other vanilla files,
if the namespace (the part before the colon) is missing "minecraft" is implied.

By default, only 2 color handlers are defined: `"foliage"` and `"tall_grass"`. More can be defined by mod code, and in the future it will be possible to define them via scripting.

## "sound_type"

Defines the sound type used to define the sound events that play when the block is placed, broken, or stepped on.

Optional. Default: wood sound.

Must be a resource location string like `"wood"`, or `"minecraft:powder_snow"`. Like on recipe jsons and other vanilla files,
if the namespace (the part before the colon) is missing "minecraft" is implied.

## "item"

Defines the block's item form.

Optional. Default: no item. If not used, the block will not be able to exist in the inventory at all. No creative menu, no recipes, not used as loot.

Can be one of 2 types:
* A Boolean: If `true`, the block item will have all the default properties.
* A json object (`{}`) containing the definition of an item, as seen in the [Items](./Items.md) page.