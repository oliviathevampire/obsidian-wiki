# Commands

Commands ... something something something...

Commands go in the `commands` directory in the content pack part of the addon.

E.g.
```
content/examplepack/commands/cookies.json
```

## Basic structure of the JSON file

```json
{
    "name": "testing",
    "op_level": 2,
    "arguments": {
        "target_pos" : {
            "type": "block_pos",
            "executes": [
                "tp @s {target_pos}"
            ]
        },
        "user": {
            "type": "player",
            "executes": [
                "tp @s {user}"
            ],
            "arguments": {
                "target": {
                    "type": "player",
                    "executes": [
                        "tp {user} {target}"
                    ]
                }
            }
        }
    }
}
```

## "op_level"

Op levels are a number between 0 and 4, you can look [here](https://minecraft.fandom.com/wiki/Permission_level#Effect) for more info.

## "arguments"

Arguments is an array of all the arguments you want the command to have, can be in child objects also.

### "type"

This defines the type of argument that the entry will be.

If you want to see all the possible values you can go to [Command Argument Types](/guide/command-argument-types)

### "executes"

Executes is an array of commands you can run.
You can use the names of the existing arguments in ``{}`` in the commands and it will use that value. 

**_Example:_** ``"tp {user} {target}"``

This will use the user and target arguments in the tp command as it's arguments.