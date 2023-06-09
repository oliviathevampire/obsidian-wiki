# Command Argument Types

Command argument types can be used to define what type each of the arguments of a command is and their child arguments.

## Basic Arguments

Come basic argument types are:
- "integer"
- "float"
- "boolean"
- "double"


## String Argumennts

These are all related to text in commands.

### "word"
The ``"word"`` argument is used to represent a single word. These words can only contain alphanumeric characters (A-Z, a-z and 0-9), and the underscore character.

Accepted ``"word"`` argument values:
```
Hello
123
hello123
Hello_world
```

Rejected ``"word"`` argument values:
```
hello@email.com
yesn't
```
- These are invalid cause they have other characters than (A-Z, a-z and 0-9) and underscore.

::card
#title
Examples of ``"word"`` argument uses
#description
- Entering strings to identify offline players
::

### "string"
These can be single words, like the ``"word"`` argument, or have additional characters (e.g. spaces, symbols) **if surrounded by quotes**. To type quotation marks, you can use ``\"`` (as similar to Java) to escape these special characters.

Accepted ``"string"`` argument values:
```
hello
"hello world!"
"hello@gmail.com"
"this has \" <<-- speech marks! "
```

Rejected ``"string"`` values:
```
hello world
私
"speech marks: ""
```
- These are invalid cause they either don't have quotation marks or have extra ones incorrectly, or special characters that is not english ones or normal characters.

::card
#title
Examples of ``"string"`` argument uses
#description
- Editing the contents of a sign
- A command that requires multiple text arguments (say, username and password?)
::

### "greedy"
The ``"greedy""`` argument takes the string arguments a step further. Any characters and symbols are allowed and quotation marks are not required.

::card
#title
Example - Messaging Command
#description
Say we have a simple message command of the following form:
<br>
<br>
```/message <target> <message>```
<br>
<br>
This would be ideal for a greedy string, since it can consume all text after the player's name:
```json
{
    "op_level": 0,
    "arguments": {
        "target" : {
            "type": "player",
            "arguments": {
                "message": {
                    "type": "greedy",
                    "executes": [
                        "msg {target} {message}"
                    ]
                }
            }
        }
    }
}
```
Any text entered after the ``<target>`` argument would be sent to the player. For example, the command could be used as follows:
```
/message Skepter This is some incredibly long string with "symbols" and $p3c!aL characters~
```
::card
#title
Examples of ``"string"`` argument uses
#description
- A messaging/whisper command (as shown in the example above)
- A mailing command
- Any command involving lots of text, such as a command to write the contents of a book
- Any command which involves an unreasonable/unknown amount of arguments
- Any command where you want to parse arguments similar to how regular Bukkit would
::