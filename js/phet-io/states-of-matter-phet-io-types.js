/* eslint-disable */
window.phet.phetio.phetioTypes = assert &&
  {
    "AccordionBoxIO": {
      "documentation": "A traditional accordionBox",
      "events": [
        "expanded",
        "collapsed"
      ],
      "methodOrder": [],
      "methods": {},
      "supertype": "NodeIO",
      "typeName": "AccordionBoxIO"
    },
    "ActionIO<>": {
      "documentation": "Executes when an event occurs.",
      "events": [
        "emitted"
      ],
      "methodOrder": [],
      "methods": {
        "execute": {
          "documentation": "Executes the function the Action is wrapping.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [],
      "supertype": "ObjectIO",
      "typeName": "ActionIO<>"
    },
    "ActionIO<BooleanIO>": {
      "documentation": "Executes when an event occurs.",
      "events": [
        "emitted"
      ],
      "methodOrder": [],
      "methods": {
        "execute": {
          "documentation": "Executes the function the Action is wrapping.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "BooleanIO"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "BooleanIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "ActionIO<BooleanIO>"
    },
    "ActionIO<EventIO>": {
      "documentation": "Executes when an event occurs.",
      "events": [
        "emitted"
      ],
      "methodOrder": [],
      "methods": {
        "execute": {
          "documentation": "Executes the function the Action is wrapping.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "EventIO"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "EventIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "ActionIO<EventIO>"
    },
    "ActionIO<NullableIO<SceneryEventIO>>": {
      "documentation": "Executes when an event occurs.",
      "events": [
        "emitted"
      ],
      "methodOrder": [],
      "methods": {
        "execute": {
          "documentation": "Executes the function the Action is wrapping.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "NullableIO<SceneryEventIO>"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "NullableIO<SceneryEventIO>"
      ],
      "supertype": "ObjectIO",
      "typeName": "ActionIO<NullableIO<SceneryEventIO>>"
    },
    "ActionIO<NumberIO, NumberIO>": {
      "documentation": "Executes when an event occurs.",
      "events": [
        "emitted"
      ],
      "methodOrder": [],
      "methods": {
        "execute": {
          "documentation": "Executes the function the Action is wrapping.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "NumberIO",
            "NumberIO"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "NumberIO",
        "NumberIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "ActionIO<NumberIO, NumberIO>"
    },
    "ActionIO<NumberIO, Vector2IO, EventIO>": {
      "documentation": "Executes when an event occurs.",
      "events": [
        "emitted"
      ],
      "methodOrder": [],
      "methods": {
        "execute": {
          "documentation": "Executes the function the Action is wrapping.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "NumberIO",
            "Vector2IO",
            "EventIO"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "NumberIO",
        "Vector2IO",
        "EventIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "ActionIO<NumberIO, Vector2IO, EventIO>"
    },
    "ActionIO<NumberIO>": {
      "documentation": "Executes when an event occurs.",
      "events": [
        "emitted"
      ],
      "methodOrder": [],
      "methods": {
        "execute": {
          "documentation": "Executes the function the Action is wrapping.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "NumberIO"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "NumberIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "ActionIO<NumberIO>"
    },
    "ActionIO<SceneryEventIO>": {
      "documentation": "Executes when an event occurs.",
      "events": [
        "emitted"
      ],
      "methodOrder": [],
      "methods": {
        "execute": {
          "documentation": "Executes the function the Action is wrapping.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "SceneryEventIO"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "SceneryEventIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "ActionIO<SceneryEventIO>"
    },
    "ActionIO<Vector2IO, EventIO>": {
      "documentation": "Executes when an event occurs.",
      "events": [
        "emitted"
      ],
      "methodOrder": [],
      "methods": {
        "execute": {
          "documentation": "Executes the function the Action is wrapping.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "Vector2IO",
            "EventIO"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "Vector2IO",
        "EventIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "ActionIO<Vector2IO, EventIO>"
    },
    "ActionIO<Vector2IO>": {
      "documentation": "Executes when an event occurs.",
      "events": [
        "emitted"
      ],
      "methodOrder": [],
      "methods": {
        "execute": {
          "documentation": "Executes the function the Action is wrapping.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "Vector2IO"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "Vector2IO"
      ],
      "supertype": "ObjectIO",
      "typeName": "ActionIO<Vector2IO>"
    },
    "ArrayIO<StringIO>": {
      "documentation": "A wrapper for the built-in JS array type, with the element type specified.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "ArrayIO<StringIO>"
    },
    "BooleanIO": {
      "documentation": "Wrapper for the built-in JS boolean type (true/false)",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "BooleanIO"
    },
    "ComboBoxIO": {
      "documentation": "A combo box is composed of a push button and a listbox. The listbox contains items that represent choices. Pressing the button pops up the listbox. Selecting from an item in the listbox sets the value of an associated Property. The button shows the item that is currently selected.",
      "events": [
        "listBoxShown",
        "listBoxHidden"
      ],
      "methodOrder": [],
      "methods": {},
      "supertype": "NodeIO",
      "typeName": "ComboBoxIO"
    },
    "DerivedPropertyIO<BooleanIO>": {
      "documentation": "Like PropertyIO, but not settable.  Instead it is derived from other DerivedPropertyIO or PropertyIO instances",
      "events": [
        "changed"
      ],
      "methodOrder": [],
      "methods": {
        "setValue": {
          "documentation": "Errors out when you try to set a derived property.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "BooleanIO"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "BooleanIO"
      ],
      "supertype": "PropertyIO<BooleanIO>",
      "typeName": "DerivedPropertyIO<BooleanIO>"
    },
    "DialogIO": {
      "documentation": "A dialog panel",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "NodeIO",
      "typeName": "DialogIO"
    },
    "EmitterIO<>": {
      "documentation": "Emits when an event occurs and calls added listeners.",
      "events": [
        "emitted"
      ],
      "methodOrder": [],
      "methods": {
        "addListener": {
          "documentation": "Adds a listener which will be called when the emitter emits.",
          "parameterTypes": [
            "FunctionIO()=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "emit": {
          "documentation": "Emits a single event to all listeners.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [],
      "supertype": "ActionIO<>",
      "typeName": "EmitterIO<>"
    },
    "EmitterIO<NullableIO<SceneryEventIO>>": {
      "documentation": "Emits when an event occurs and calls added listeners.",
      "events": [
        "emitted"
      ],
      "methodOrder": [],
      "methods": {
        "addListener": {
          "documentation": "Adds a listener which will be called when the emitter emits.",
          "parameterTypes": [
            "FunctionIO(NullableIO<SceneryEventIO>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "emit": {
          "documentation": "Emits a single event to all listeners.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "NullableIO<SceneryEventIO>"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "NullableIO<SceneryEventIO>"
      ],
      "supertype": "ActionIO<NullableIO<SceneryEventIO>>",
      "typeName": "EmitterIO<NullableIO<SceneryEventIO>>"
    },
    "EnumerationIO(COMPONENTS|TOTAL|HIDDEN)": {
      "documentation": "Possible values: COMPONENTS,TOTAL,HIDDEN.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "EnumerationIO(COMPONENTS|TOTAL|HIDDEN)"
    },
    "EnumerationIO(KELVIN|CELSIUS)": {
      "documentation": "Possible values: KELVIN,CELSIUS.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "EnumerationIO(KELVIN|CELSIUS)"
    },
    "EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE)": {
      "documentation": "Possible values: NEON_NEON,ARGON_ARGON,OXYGEN_OXYGEN,NEON_ARGON,NEON_OXYGEN,ARGON_OXYGEN,ADJUSTABLE.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE)"
    },
    "EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM)": {
      "documentation": "Possible values: NEON,ARGON,DIATOMIC_OXYGEN,WATER,ADJUSTABLE_ATOM.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM)"
    },
    "EnumerationIO(NORMAL|SLOW_MOTION)": {
      "documentation": "Possible values: NORMAL,SLOW_MOTION.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "EnumerationIO(NORMAL|SLOW_MOTION)"
    },
    "EventIO": {
      "documentation": "A DOM Event",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "EventIO"
    },
    "FocusIO": {
      "documentation": "A IO type for the instance in the simulation which currently has keyboard focus. FocusIO is serialized into and Object with key `focusedPhetioElement` that is a list of PhET-iO elements, from parent-most to child-most cooresponding to the PhET-iO element that was instrumented.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "FocusIO"
    },
    "FontIO": {
      "documentation": "Font handling for text drawing. Options:<ul><li><strong>style:</strong> normal      &mdash; normal | italic | oblique </li><li><strong>variant:</strong> normal    &mdash; normal | small-caps </li><li><strong>weight:</strong> normal     &mdash; normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 </li><li><strong>stretch:</strong> normal    &mdash; normal | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded </li><li><strong>size:</strong> 10px         &mdash; absolute-size | relative-size | length | percentage -- unitless number interpreted as px. absolute suffixes: cm, mm, in, pt, pc, px. relative suffixes: em, ex, ch, rem, vw, vh, vmin, vmax. </li><li><strong>lineHeight:</strong> normal &mdash; normal | number | length | percentage -- NOTE: Canvas spec forces line-height to normal </li><li><strong>family:</strong> sans-serif &mdash; comma-separated list of families, including generic families (serif, sans-serif, cursive, fantasy, monospace). ideally escape with double-quotes</li></ul>",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "FontIO"
    },
    "FunctionIO()=>VoidIO": {
      "documentation": "Wrapper for the built-in JS function type.<br><strong>Arguments:</strong> VoidIO<br><strong>Return Type:</strong> VoidIO",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "VoidIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "FunctionIO()=>VoidIO"
    },
    "FunctionIO(BooleanIO,NullableIO<BooleanIO>)=>VoidIO": {
      "documentation": "Wrapper for the built-in JS function type.<br><strong>Arguments:</strong> BooleanIO, NullableIO<BooleanIO><br><strong>Return Type:</strong> VoidIO",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "BooleanIO",
        "NullableIO<BooleanIO>",
        "VoidIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "FunctionIO(BooleanIO,NullableIO<BooleanIO>)=>VoidIO"
    },
    "FunctionIO(EnumerationIO(COMPONENTS|TOTAL|HIDDEN),NullableIO<EnumerationIO(COMPONENTS|TOTAL|HIDDEN)>)=>VoidIO": {
      "documentation": "Wrapper for the built-in JS function type.<br><strong>Arguments:</strong> EnumerationIO(COMPONENTS|TOTAL|HIDDEN), NullableIO<EnumerationIO(COMPONENTS|TOTAL|HIDDEN)><br><strong>Return Type:</strong> VoidIO",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "EnumerationIO(COMPONENTS|TOTAL|HIDDEN)",
        "NullableIO<EnumerationIO(COMPONENTS|TOTAL|HIDDEN)>",
        "VoidIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "FunctionIO(EnumerationIO(COMPONENTS|TOTAL|HIDDEN),NullableIO<EnumerationIO(COMPONENTS|TOTAL|HIDDEN)>)=>VoidIO"
    },
    "FunctionIO(EnumerationIO(KELVIN|CELSIUS),NullableIO<EnumerationIO(KELVIN|CELSIUS)>)=>VoidIO": {
      "documentation": "Wrapper for the built-in JS function type.<br><strong>Arguments:</strong> EnumerationIO(KELVIN|CELSIUS), NullableIO<EnumerationIO(KELVIN|CELSIUS)><br><strong>Return Type:</strong> VoidIO",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "EnumerationIO(KELVIN|CELSIUS)",
        "NullableIO<EnumerationIO(KELVIN|CELSIUS)>",
        "VoidIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "FunctionIO(EnumerationIO(KELVIN|CELSIUS),NullableIO<EnumerationIO(KELVIN|CELSIUS)>)=>VoidIO"
    },
    "FunctionIO(EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE),NullableIO<EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE)>)=>VoidIO": {
      "documentation": "Wrapper for the built-in JS function type.<br><strong>Arguments:</strong> EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE), NullableIO<EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE)><br><strong>Return Type:</strong> VoidIO",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE)",
        "NullableIO<EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE)>",
        "VoidIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "FunctionIO(EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE),NullableIO<EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE)>)=>VoidIO"
    },
    "FunctionIO(EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM),NullableIO<EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM)>)=>VoidIO": {
      "documentation": "Wrapper for the built-in JS function type.<br><strong>Arguments:</strong> EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM), NullableIO<EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM)><br><strong>Return Type:</strong> VoidIO",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM)",
        "NullableIO<EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM)>",
        "VoidIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "FunctionIO(EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM),NullableIO<EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM)>)=>VoidIO"
    },
    "FunctionIO(EnumerationIO(NORMAL|SLOW_MOTION),NullableIO<EnumerationIO(NORMAL|SLOW_MOTION)>)=>VoidIO": {
      "documentation": "Wrapper for the built-in JS function type.<br><strong>Arguments:</strong> EnumerationIO(NORMAL|SLOW_MOTION), NullableIO<EnumerationIO(NORMAL|SLOW_MOTION)><br><strong>Return Type:</strong> VoidIO",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "EnumerationIO(NORMAL|SLOW_MOTION)",
        "NullableIO<EnumerationIO(NORMAL|SLOW_MOTION)>",
        "VoidIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "FunctionIO(EnumerationIO(NORMAL|SLOW_MOTION),NullableIO<EnumerationIO(NORMAL|SLOW_MOTION)>)=>VoidIO"
    },
    "FunctionIO(NullableIO<BooleanIO>,NullableIO<NullableIO<BooleanIO>>)=>VoidIO": {
      "documentation": "Wrapper for the built-in JS function type.<br><strong>Arguments:</strong> NullableIO<BooleanIO>, NullableIO<NullableIO<BooleanIO>><br><strong>Return Type:</strong> VoidIO",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "NullableIO<BooleanIO>",
        "NullableIO<NullableIO<BooleanIO>>",
        "VoidIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "FunctionIO(NullableIO<BooleanIO>,NullableIO<NullableIO<BooleanIO>>)=>VoidIO"
    },
    "FunctionIO(NullableIO<FocusIO>,NullableIO<NullableIO<FocusIO>>)=>VoidIO": {
      "documentation": "Wrapper for the built-in JS function type.<br><strong>Arguments:</strong> NullableIO<FocusIO>, NullableIO<NullableIO<FocusIO>><br><strong>Return Type:</strong> VoidIO",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "NullableIO<FocusIO>",
        "NullableIO<NullableIO<FocusIO>>",
        "VoidIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "FunctionIO(NullableIO<FocusIO>,NullableIO<NullableIO<FocusIO>>)=>VoidIO"
    },
    "FunctionIO(NullableIO<SceneryEventIO>)=>VoidIO": {
      "documentation": "Wrapper for the built-in JS function type.<br><strong>Arguments:</strong> NullableIO<SceneryEventIO><br><strong>Return Type:</strong> VoidIO",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "NullableIO<SceneryEventIO>",
        "VoidIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "FunctionIO(NullableIO<SceneryEventIO>)=>VoidIO"
    },
    "FunctionIO(NumberIO,NullableIO<NumberIO>)=>VoidIO": {
      "documentation": "Wrapper for the built-in JS function type.<br><strong>Arguments:</strong> NumberIO, NullableIO<NumberIO><br><strong>Return Type:</strong> VoidIO",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "NumberIO",
        "NullableIO<NumberIO>",
        "VoidIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "FunctionIO(NumberIO,NullableIO<NumberIO>)=>VoidIO"
    },
    "FunctionIO(ObjectIO)=>VoidIO": {
      "documentation": "Wrapper for the built-in JS function type.<br><strong>Arguments:</strong> ObjectIO<br><strong>Return Type:</strong> VoidIO",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "ObjectIO",
        "VoidIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "FunctionIO(ObjectIO)=>VoidIO"
    },
    "FunctionIO(RangeIO,NullableIO<RangeIO>)=>VoidIO": {
      "documentation": "Wrapper for the built-in JS function type.<br><strong>Arguments:</strong> RangeIO, NullableIO<RangeIO><br><strong>Return Type:</strong> VoidIO",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "RangeIO",
        "NullableIO<RangeIO>",
        "VoidIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "FunctionIO(RangeIO,NullableIO<RangeIO>)=>VoidIO"
    },
    "FunctionIO(StringIO,NullableIO<StringIO>)=>VoidIO": {
      "documentation": "Wrapper for the built-in JS function type.<br><strong>Arguments:</strong> StringIO, NullableIO<StringIO><br><strong>Return Type:</strong> VoidIO",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "StringIO",
        "NullableIO<StringIO>",
        "VoidIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "FunctionIO(StringIO,NullableIO<StringIO>)=>VoidIO"
    },
    "FunctionIO(StringIO,ObjectIO,ObjectIO)=>VoidIO": {
      "documentation": "Wrapper for the built-in JS function type.<br><strong>Arguments:</strong> StringIO, ObjectIO, ObjectIO<br><strong>Return Type:</strong> VoidIO",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "StringIO",
        "ObjectIO",
        "ObjectIO",
        "VoidIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "FunctionIO(StringIO,ObjectIO,ObjectIO)=>VoidIO"
    },
    "FunctionIO(StringIO,StringIO)=>VoidIO": {
      "documentation": "Wrapper for the built-in JS function type.<br><strong>Arguments:</strong> StringIO, StringIO<br><strong>Return Type:</strong> VoidIO",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "StringIO",
        "StringIO",
        "VoidIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "FunctionIO(StringIO,StringIO)=>VoidIO"
    },
    "LinkedElementIO": {
      "documentation": "A LinkedElement",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "LinkedElementIO"
    },
    "NodeIO": {
      "documentation": "The base type for graphical and potentially interactive objects.  NodeIO has nested PropertyIO values for visibility, pickability and opacity.<br><br>Pickable can take one of three values:<br><ul><li>null: pass-through behavior. Nodes with input listeners are pickable, but nodes without input listeners won't block events for nodes behind it.</li><li>false: The node cannot be interacted with, and it blocks events for nodes behind it.</li><li>true: The node can be interacted with (if it has an input listener).</li></ul>For more about Scenery node pickability, please see <a href=\"http://phetsims.github.io/scenery/doc/implementation-notes#pickability\">http://phetsims.github.io/scenery/doc/implementation-notes#pickability</a>",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "NodeIO"
    },
    "NullableIO<BooleanIO>": {
      "documentation": "A wrapper to wrap another IOType, adding support for null.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "BooleanIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "NullableIO<BooleanIO>"
    },
    "NullableIO<EnumerationIO(COMPONENTS|TOTAL|HIDDEN)>": {
      "documentation": "A wrapper to wrap another IOType, adding support for null.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "EnumerationIO(COMPONENTS|TOTAL|HIDDEN)"
      ],
      "supertype": "ObjectIO",
      "typeName": "NullableIO<EnumerationIO(COMPONENTS|TOTAL|HIDDEN)>"
    },
    "NullableIO<EnumerationIO(KELVIN|CELSIUS)>": {
      "documentation": "A wrapper to wrap another IOType, adding support for null.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "EnumerationIO(KELVIN|CELSIUS)"
      ],
      "supertype": "ObjectIO",
      "typeName": "NullableIO<EnumerationIO(KELVIN|CELSIUS)>"
    },
    "NullableIO<EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE)>": {
      "documentation": "A wrapper to wrap another IOType, adding support for null.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE)"
      ],
      "supertype": "ObjectIO",
      "typeName": "NullableIO<EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE)>"
    },
    "NullableIO<EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM)>": {
      "documentation": "A wrapper to wrap another IOType, adding support for null.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM)"
      ],
      "supertype": "ObjectIO",
      "typeName": "NullableIO<EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM)>"
    },
    "NullableIO<EnumerationIO(NORMAL|SLOW_MOTION)>": {
      "documentation": "A wrapper to wrap another IOType, adding support for null.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "EnumerationIO(NORMAL|SLOW_MOTION)"
      ],
      "supertype": "ObjectIO",
      "typeName": "NullableIO<EnumerationIO(NORMAL|SLOW_MOTION)>"
    },
    "NullableIO<FocusIO>": {
      "documentation": "A wrapper to wrap another IOType, adding support for null.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "FocusIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "NullableIO<FocusIO>"
    },
    "NullableIO<NullableIO<BooleanIO>>": {
      "documentation": "A wrapper to wrap another IOType, adding support for null.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "NullableIO<BooleanIO>"
      ],
      "supertype": "ObjectIO",
      "typeName": "NullableIO<NullableIO<BooleanIO>>"
    },
    "NullableIO<NullableIO<FocusIO>>": {
      "documentation": "A wrapper to wrap another IOType, adding support for null.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "NullableIO<FocusIO>"
      ],
      "supertype": "ObjectIO",
      "typeName": "NullableIO<NullableIO<FocusIO>>"
    },
    "NullableIO<NumberIO>": {
      "documentation": "A wrapper to wrap another IOType, adding support for null.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "NumberIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "NullableIO<NumberIO>"
    },
    "NullableIO<RangeIO>": {
      "documentation": "A wrapper to wrap another IOType, adding support for null.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "RangeIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "NullableIO<RangeIO>"
    },
    "NullableIO<SceneryEventIO>": {
      "documentation": "A wrapper to wrap another IOType, adding support for null.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "SceneryEventIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "NullableIO<SceneryEventIO>"
    },
    "NullableIO<StringIO>": {
      "documentation": "A wrapper to wrap another IOType, adding support for null.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "StringIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "NullableIO<StringIO>"
    },
    "NumberIO": {
      "documentation": "Wrapper for the built-in JS number type (floating point, but also represents integers)",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "NumberIO"
    },
    "NumberPropertyIO": {
      "documentation": "Extends PropertyIO to add values for the numeric range ( min, max ) and numberType ( 'FloatingPoint' | 'Integer' )",
      "events": [
        "changed"
      ],
      "methodOrder": [],
      "methods": {
        "getValue": {
          "documentation": "Gets the current value.",
          "parameterTypes": [],
          "returnType": "NumberIO"
        },
        "lazyLink": {
          "documentation": "Adds a listener which will be called when the value changes. This method is like \"link\", but without the current-value callback on registration. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(NumberIO,NullableIO<NumberIO>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "link": {
          "documentation": "Adds a listener which will be called when the value changes. On registration, the listener is also called with the current value. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(NumberIO,NullableIO<NumberIO>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "setValue": {
          "documentation": "Sets the value of the Property. If the value differs from the previous value, listeners are notified with the new value.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "NumberIO"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "NumberIO"
      ],
      "supertype": "PropertyIO<NumberIO>",
      "typeName": "NumberPropertyIO"
    },
    "ObjectIO": {
      "documentation": "The root of the wrapper object hierarchy.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": null,
      "typeName": "ObjectIO"
    },
    "PhetButtonIO": {
      "documentation": "The PhET Button in the bottom right of the screen",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "PhetButtonIO"
    },
    "PhetMenuIO": {
      "documentation": "The PhET Menu in the bottom right of the screen",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "PhetMenuIO"
    },
    "PhetioCapsuleIO<DialogIO>": {
      "documentation": "An array that sends notifications when its values have changed.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "parameterTypes": [
        "DialogIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "PhetioCapsuleIO<DialogIO>"
    },
    "PhetioCommandProcessorIO": {
      "documentation": "Invokes PhET-iO API commands on a running simulation.",
      "events": [
        "invoked"
      ],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "PhetioCommandProcessorIO"
    },
    "PhetioEngineIO": {
      "documentation": "Mediator for the phet-io module, with system-wide methods for communicating with the sim and other globals",
      "events": [
        "simStarted",
        "state"
      ],
      "methodOrder": [
        "addPhetioElementAddedListener",
        "addPhetioElementRemovedListener",
        "addEventListener",
        "getScreenshotDataURL",
        "getPhetioIDs",
        "getValues",
        "getState",
        "setState",
        "getChangedState",
        "getStateForObject",
        "getPhetioElementMetadata",
        "setRandomSeed",
        "getRandomSeed",
        "setDisplaySize",
        "setPlaybackMode",
        "setInteractive",
        "isInteractive",
        "startEvent",
        "endEvent",
        "triggerEvent",
        "stepSimulation",
        "launchSimulation",
        "invokeControllerInputEvent",
        "setSimStartedMetadata",
        "simulateError"
      ],
      "methods": {
        "addEventListener": {
          "documentation": "Adds a listener to the PhET-iO dataStream, which can be used to respond to events or for data analysis. Unlike Client.launchSim( {onEvent} ) which is called recursively for each parsed child event, this is only called with stringified top-level events.",
          "parameterTypes": [
            "FunctionIO(ObjectIO)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "addPhetioElementAddedListener": {
          "documentation": "Adds a listener that receives a callback when a PhET-iO Element has been added.Arguments for the function: \n<ul><li><strong>phetioID:</strong> {String}\n</li><li><strong>metadata:</strong> {Object} - element specific metadata like documentation and type, see PhetioEngineIO.getPhetioElementMetadata().</li><li><strong>state:</strong> {Object} - a snapshot of the initial state of the PhET-iO Element.</li></ul>",
          "parameterTypes": [
            "FunctionIO(StringIO,ObjectIO,ObjectIO)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "addPhetioElementRemovedListener": {
          "documentation": "Removes a listener that was added with addPhetioElementAddedListener",
          "parameterTypes": [
            "FunctionIO(StringIO,StringIO)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "endEvent": {
          "documentation": "Ends a previously started wrapper event message.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "NumberIO"
          ],
          "returnType": "VoidIO"
        },
        "getChangedState": {
          "documentation": "Gets the state of the simulation, only returning values that have changed from their initial state. PhET-iO elements that have been deleted will be displayed with the value \"DELETED\".",
          "parameterTypes": [],
          "returnType": "ObjectIO"
        },
        "getPhetioElementMetadata": {
          "documentation": "Get metadata about the PhET-iO element. This includes the following keys:<ul><li><strong>phetioTypeName:</strong> The name of the PhET-iO Type\n</li><li><strong>phetioState:</strong> default - true. When true, includes the PhET-iO element in the PhET-iO state\n</li><li><strong>phetioReadOnly:</strong> default - false. When true, you can only get values from the PhET-iO element; no setting allowed.\n</li><li><strong>phetioDocumentation:</strong> default - null. Useful notes about a PhET-iO element, shown in the PhET-iO Studio Wrapper</li></ul>",
          "parameterTypes": [
            "StringIO"
          ],
          "returnType": "ObjectIO"
        },
        "getPhetioIDs": {
          "documentation": "Gets a list of all of the PhET-iO elements.",
          "parameterTypes": [],
          "returnType": "ArrayIO<StringIO>"
        },
        "getRandomSeed": {
          "documentation": "Gets the random seed, used for replicable playbacks",
          "parameterTypes": [],
          "returnType": "NumberIO"
        },
        "getScreenshotDataURL": {
          "documentation": "Gets a base64 string representation of a screenshot of the simulation as a data url.",
          "parameterTypes": [],
          "returnType": "StringIO"
        },
        "getState": {
          "documentation": "Gets the full state of the simulation, including parts that have not changed from startup.",
          "parameterTypes": [],
          "returnType": "ObjectIO"
        },
        "getStateForObject": {
          "documentation": "Gets the state object for a PhET-iO element or null if phetioID does not exist.",
          "parameterTypes": [
            "StringIO"
          ],
          "returnType": "ObjectIO"
        },
        "getValues": {
          "documentation": "Get the current values for multiple Property/DerivedProperty elements at the same time. Useful for collecting data to be plotted, so values will be consistent.",
          "parameterTypes": [
            "ArrayIO<StringIO>"
          ],
          "returnType": "ObjectIO"
        },
        "invokeControllerInputEvent": {
          "documentation": "Plays back a recorded input event into the simulation.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "ObjectIO"
          ],
          "returnType": "VoidIO"
        },
        "isInteractive": {
          "documentation": "Gets whether the sim can be interacted with (via mouse/touch/keyboard).",
          "parameterTypes": [],
          "returnType": "BooleanIO"
        },
        "launchSimulation": {
          "documentation": "Finishes launching the simulation, called from a wrapper after all cross-frame initialization is complete. Note: cannot be invoked with other commands.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [],
          "returnType": "VoidIO"
        },
        "setDisplaySize": {
          "documentation": "Sets the size of the visible region for the simulation.  In most cases, it would be recommended to set the size of the iframe, but this method can be used to set the size of the display inside the iframe.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "NumberIO",
            "NumberIO"
          ],
          "returnType": "VoidIO"
        },
        "setInteractive": {
          "documentation": "Sets whether the sim can be interacted with (via mouse/touch/keyboard). When set to false, the sim animations and model will still step.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "BooleanIO"
          ],
          "returnType": "VoidIO"
        },
        "setPlaybackMode": {
          "documentation": "Sets whether the sim is in \"playback mode\", which is used for playing back recorded events.  In this mode, the simulation clock will only advance based on the played back events.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "BooleanIO"
          ],
          "returnType": "VoidIO"
        },
        "setRandomSeed": {
          "documentation": "Sets the random seed so that the simulation will have reproducible \"randomness\" between runs.  This must be set before the PhET-iO simulation is launched so that all of the random variables will take on deterministic values.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "NumberIO"
          ],
          "returnType": "VoidIO"
        },
        "setSimStartedMetadata": {
          "documentation": "Sets additional data that is added to the simStarted event, which will appear in the PhET-iO event stream. It can be used to record startup parameters or other information specified by the wrapper.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "ObjectIO"
          ],
          "returnType": "VoidIO"
        },
        "setState": {
          "documentation": "Sets the simulation state based on the keys provided. The parameter is a map where the keys are phetioIDs and the values are the corresponding states for each PhET-iO element. This method expectsa complete list of state supported phetioIDs, which can be found by calling getState().",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "ObjectIO"
          ],
          "returnType": "VoidIO"
        },
        "simulateError": {
          "documentation": "Simulates an error in the simulation frame for testing purposes.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "NullableIO<StringIO>"
          ],
          "returnType": "VoidIO"
        },
        "startEvent": {
          "documentation": "Begins a message from the wrapper and interleaves it in the PhET-iO Simulation's data stream. Takes an object with entries like: <br><strong>{string} phetioID</strong> - the id of the specific element that created the event in camelCasing like 'frictionCheckbox'<br><strong>{{typeName: string, events: String[]}}componentType </strong> - The Type that is emitting the event. The event being started must be included in the \"events\" array.<br><strong>{string} event</strong> - the name of the action that occurred, in camelCase, like 'pressed'<br><strong>{Object} [parameters]</strong> - key/value pairs of arguments for the event, to provide further description of the event.       It is the programmer's responsibility to make sure the optional arguments don't collide with the other key names<br>.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "ObjectIO"
          ],
          "returnType": "NumberIO"
        },
        "stepSimulation": {
          "documentation": "Steps one frame of the simulation.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "NumberIO"
          ],
          "returnType": "VoidIO"
        },
        "triggerEvent": {
          "documentation": "Start and end a message from the wrapper, interleaving it into the PhET-iO Simulation's data stream. Takes an object with entries like: <br><strong>{string} phetioID</strong> - the id of the specific element that created the event in camelCasing like 'frictionCheckbox'<br><strong>{{typeName: string, events: String[]}} type</strong> - The Type that is emitting the event. The event being triggered must be included in the \"events\" array.<br><strong>{string} event</strong> - the name of the action that occurred, in camelCase, like 'pressed'<br><strong>{Object} [parameters]</strong> - key/value pairs of arguments for the event, to provide further description of the event.       It is the programmer's responsibility to make sure the optional arguments don't collide with the other key names<br>.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "ObjectIO"
          ],
          "returnType": "VoidIO"
        }
      },
      "supertype": "ObjectIO",
      "typeName": "PhetioEngineIO"
    },
    "PropertyIO<BooleanIO>": {
      "documentation": "Observable values that send out notifications when the value changes. This differs from the traditional listener pattern in that added listeners also receive a callback with the current value when the listeners are registered. This is a widely-used pattern in PhET-iO simulations.",
      "events": [
        "changed"
      ],
      "methodOrder": [
        "link",
        "lazyLink"
      ],
      "methods": {
        "getValue": {
          "documentation": "Gets the current value.",
          "parameterTypes": [],
          "returnType": "BooleanIO"
        },
        "lazyLink": {
          "documentation": "Adds a listener which will be called when the value changes. This method is like \"link\", but without the current-value callback on registration. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(BooleanIO,NullableIO<BooleanIO>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "link": {
          "documentation": "Adds a listener which will be called when the value changes. On registration, the listener is also called with the current value. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(BooleanIO,NullableIO<BooleanIO>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "setValue": {
          "documentation": "Sets the value of the Property. If the value differs from the previous value, listeners are notified with the new value.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "BooleanIO"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "BooleanIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "PropertyIO<BooleanIO>"
    },
    "PropertyIO<EnumerationIO(COMPONENTS|TOTAL|HIDDEN)>": {
      "documentation": "Observable values that send out notifications when the value changes. This differs from the traditional listener pattern in that added listeners also receive a callback with the current value when the listeners are registered. This is a widely-used pattern in PhET-iO simulations.",
      "events": [
        "changed"
      ],
      "methodOrder": [
        "link",
        "lazyLink"
      ],
      "methods": {
        "getValue": {
          "documentation": "Gets the current value.",
          "parameterTypes": [],
          "returnType": "EnumerationIO(COMPONENTS|TOTAL|HIDDEN)"
        },
        "lazyLink": {
          "documentation": "Adds a listener which will be called when the value changes. This method is like \"link\", but without the current-value callback on registration. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(EnumerationIO(COMPONENTS|TOTAL|HIDDEN),NullableIO<EnumerationIO(COMPONENTS|TOTAL|HIDDEN)>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "link": {
          "documentation": "Adds a listener which will be called when the value changes. On registration, the listener is also called with the current value. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(EnumerationIO(COMPONENTS|TOTAL|HIDDEN),NullableIO<EnumerationIO(COMPONENTS|TOTAL|HIDDEN)>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "setValue": {
          "documentation": "Sets the value of the Property. If the value differs from the previous value, listeners are notified with the new value.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "EnumerationIO(COMPONENTS|TOTAL|HIDDEN)"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "EnumerationIO(COMPONENTS|TOTAL|HIDDEN)"
      ],
      "supertype": "ObjectIO",
      "typeName": "PropertyIO<EnumerationIO(COMPONENTS|TOTAL|HIDDEN)>"
    },
    "PropertyIO<EnumerationIO(KELVIN|CELSIUS)>": {
      "documentation": "Observable values that send out notifications when the value changes. This differs from the traditional listener pattern in that added listeners also receive a callback with the current value when the listeners are registered. This is a widely-used pattern in PhET-iO simulations.",
      "events": [
        "changed"
      ],
      "methodOrder": [
        "link",
        "lazyLink"
      ],
      "methods": {
        "getValue": {
          "documentation": "Gets the current value.",
          "parameterTypes": [],
          "returnType": "EnumerationIO(KELVIN|CELSIUS)"
        },
        "lazyLink": {
          "documentation": "Adds a listener which will be called when the value changes. This method is like \"link\", but without the current-value callback on registration. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(EnumerationIO(KELVIN|CELSIUS),NullableIO<EnumerationIO(KELVIN|CELSIUS)>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "link": {
          "documentation": "Adds a listener which will be called when the value changes. On registration, the listener is also called with the current value. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(EnumerationIO(KELVIN|CELSIUS),NullableIO<EnumerationIO(KELVIN|CELSIUS)>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "setValue": {
          "documentation": "Sets the value of the Property. If the value differs from the previous value, listeners are notified with the new value.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "EnumerationIO(KELVIN|CELSIUS)"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "EnumerationIO(KELVIN|CELSIUS)"
      ],
      "supertype": "ObjectIO",
      "typeName": "PropertyIO<EnumerationIO(KELVIN|CELSIUS)>"
    },
    "PropertyIO<EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE)>": {
      "documentation": "Observable values that send out notifications when the value changes. This differs from the traditional listener pattern in that added listeners also receive a callback with the current value when the listeners are registered. This is a widely-used pattern in PhET-iO simulations.",
      "events": [
        "changed"
      ],
      "methodOrder": [
        "link",
        "lazyLink"
      ],
      "methods": {
        "getValue": {
          "documentation": "Gets the current value.",
          "parameterTypes": [],
          "returnType": "EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE)"
        },
        "lazyLink": {
          "documentation": "Adds a listener which will be called when the value changes. This method is like \"link\", but without the current-value callback on registration. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE),NullableIO<EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE)>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "link": {
          "documentation": "Adds a listener which will be called when the value changes. On registration, the listener is also called with the current value. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE),NullableIO<EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE)>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "setValue": {
          "documentation": "Sets the value of the Property. If the value differs from the previous value, listeners are notified with the new value.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE)"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE)"
      ],
      "supertype": "ObjectIO",
      "typeName": "PropertyIO<EnumerationIO(NEON_NEON|ARGON_ARGON|OXYGEN_OXYGEN|NEON_ARGON|NEON_OXYGEN|ARGON_OXYGEN|ADJUSTABLE)>"
    },
    "PropertyIO<EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM)>": {
      "documentation": "Observable values that send out notifications when the value changes. This differs from the traditional listener pattern in that added listeners also receive a callback with the current value when the listeners are registered. This is a widely-used pattern in PhET-iO simulations.",
      "events": [
        "changed"
      ],
      "methodOrder": [
        "link",
        "lazyLink"
      ],
      "methods": {
        "getValue": {
          "documentation": "Gets the current value.",
          "parameterTypes": [],
          "returnType": "EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM)"
        },
        "lazyLink": {
          "documentation": "Adds a listener which will be called when the value changes. This method is like \"link\", but without the current-value callback on registration. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM),NullableIO<EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM)>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "link": {
          "documentation": "Adds a listener which will be called when the value changes. On registration, the listener is also called with the current value. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM),NullableIO<EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM)>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "setValue": {
          "documentation": "Sets the value of the Property. If the value differs from the previous value, listeners are notified with the new value.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM)"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM)"
      ],
      "supertype": "ObjectIO",
      "typeName": "PropertyIO<EnumerationIO(NEON|ARGON|DIATOMIC_OXYGEN|WATER|ADJUSTABLE_ATOM)>"
    },
    "PropertyIO<EnumerationIO(NORMAL|SLOW_MOTION)>": {
      "documentation": "Observable values that send out notifications when the value changes. This differs from the traditional listener pattern in that added listeners also receive a callback with the current value when the listeners are registered. This is a widely-used pattern in PhET-iO simulations.",
      "events": [
        "changed"
      ],
      "methodOrder": [
        "link",
        "lazyLink"
      ],
      "methods": {
        "getValue": {
          "documentation": "Gets the current value.",
          "parameterTypes": [],
          "returnType": "EnumerationIO(NORMAL|SLOW_MOTION)"
        },
        "lazyLink": {
          "documentation": "Adds a listener which will be called when the value changes. This method is like \"link\", but without the current-value callback on registration. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(EnumerationIO(NORMAL|SLOW_MOTION),NullableIO<EnumerationIO(NORMAL|SLOW_MOTION)>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "link": {
          "documentation": "Adds a listener which will be called when the value changes. On registration, the listener is also called with the current value. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(EnumerationIO(NORMAL|SLOW_MOTION),NullableIO<EnumerationIO(NORMAL|SLOW_MOTION)>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "setValue": {
          "documentation": "Sets the value of the Property. If the value differs from the previous value, listeners are notified with the new value.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "EnumerationIO(NORMAL|SLOW_MOTION)"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "EnumerationIO(NORMAL|SLOW_MOTION)"
      ],
      "supertype": "ObjectIO",
      "typeName": "PropertyIO<EnumerationIO(NORMAL|SLOW_MOTION)>"
    },
    "PropertyIO<NullableIO<BooleanIO>>": {
      "documentation": "Observable values that send out notifications when the value changes. This differs from the traditional listener pattern in that added listeners also receive a callback with the current value when the listeners are registered. This is a widely-used pattern in PhET-iO simulations.",
      "events": [
        "changed"
      ],
      "methodOrder": [
        "link",
        "lazyLink"
      ],
      "methods": {
        "getValue": {
          "documentation": "Gets the current value.",
          "parameterTypes": [],
          "returnType": "NullableIO<BooleanIO>"
        },
        "lazyLink": {
          "documentation": "Adds a listener which will be called when the value changes. This method is like \"link\", but without the current-value callback on registration. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(NullableIO<BooleanIO>,NullableIO<NullableIO<BooleanIO>>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "link": {
          "documentation": "Adds a listener which will be called when the value changes. On registration, the listener is also called with the current value. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(NullableIO<BooleanIO>,NullableIO<NullableIO<BooleanIO>>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "setValue": {
          "documentation": "Sets the value of the Property. If the value differs from the previous value, listeners are notified with the new value.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "NullableIO<BooleanIO>"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "NullableIO<BooleanIO>"
      ],
      "supertype": "ObjectIO",
      "typeName": "PropertyIO<NullableIO<BooleanIO>>"
    },
    "PropertyIO<NullableIO<FocusIO>>": {
      "documentation": "Observable values that send out notifications when the value changes. This differs from the traditional listener pattern in that added listeners also receive a callback with the current value when the listeners are registered. This is a widely-used pattern in PhET-iO simulations.",
      "events": [
        "changed"
      ],
      "methodOrder": [
        "link",
        "lazyLink"
      ],
      "methods": {
        "getValue": {
          "documentation": "Gets the current value.",
          "parameterTypes": [],
          "returnType": "NullableIO<FocusIO>"
        },
        "lazyLink": {
          "documentation": "Adds a listener which will be called when the value changes. This method is like \"link\", but without the current-value callback on registration. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(NullableIO<FocusIO>,NullableIO<NullableIO<FocusIO>>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "link": {
          "documentation": "Adds a listener which will be called when the value changes. On registration, the listener is also called with the current value. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(NullableIO<FocusIO>,NullableIO<NullableIO<FocusIO>>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "setValue": {
          "documentation": "Sets the value of the Property. If the value differs from the previous value, listeners are notified with the new value.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "NullableIO<FocusIO>"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "NullableIO<FocusIO>"
      ],
      "supertype": "ObjectIO",
      "typeName": "PropertyIO<NullableIO<FocusIO>>"
    },
    "PropertyIO<NumberIO>": {
      "documentation": "Observable values that send out notifications when the value changes. This differs from the traditional listener pattern in that added listeners also receive a callback with the current value when the listeners are registered. This is a widely-used pattern in PhET-iO simulations.",
      "events": [
        "changed"
      ],
      "methodOrder": [
        "link",
        "lazyLink"
      ],
      "methods": {
        "getValue": {
          "documentation": "Gets the current value.",
          "parameterTypes": [],
          "returnType": "NumberIO"
        },
        "lazyLink": {
          "documentation": "Adds a listener which will be called when the value changes. This method is like \"link\", but without the current-value callback on registration. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(NumberIO,NullableIO<NumberIO>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "link": {
          "documentation": "Adds a listener which will be called when the value changes. On registration, the listener is also called with the current value. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(NumberIO,NullableIO<NumberIO>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "setValue": {
          "documentation": "Sets the value of the Property. If the value differs from the previous value, listeners are notified with the new value.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "NumberIO"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "NumberIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "PropertyIO<NumberIO>"
    },
    "PropertyIO<RangeIO>": {
      "documentation": "Observable values that send out notifications when the value changes. This differs from the traditional listener pattern in that added listeners also receive a callback with the current value when the listeners are registered. This is a widely-used pattern in PhET-iO simulations.",
      "events": [
        "changed"
      ],
      "methodOrder": [
        "link",
        "lazyLink"
      ],
      "methods": {
        "getValue": {
          "documentation": "Gets the current value.",
          "parameterTypes": [],
          "returnType": "RangeIO"
        },
        "lazyLink": {
          "documentation": "Adds a listener which will be called when the value changes. This method is like \"link\", but without the current-value callback on registration. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(RangeIO,NullableIO<RangeIO>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "link": {
          "documentation": "Adds a listener which will be called when the value changes. On registration, the listener is also called with the current value. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(RangeIO,NullableIO<RangeIO>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "setValue": {
          "documentation": "Sets the value of the Property. If the value differs from the previous value, listeners are notified with the new value.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "RangeIO"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "RangeIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "PropertyIO<RangeIO>"
    },
    "PropertyIO<StringIO>": {
      "documentation": "Observable values that send out notifications when the value changes. This differs from the traditional listener pattern in that added listeners also receive a callback with the current value when the listeners are registered. This is a widely-used pattern in PhET-iO simulations.",
      "events": [
        "changed"
      ],
      "methodOrder": [
        "link",
        "lazyLink"
      ],
      "methods": {
        "getValue": {
          "documentation": "Gets the current value.",
          "parameterTypes": [],
          "returnType": "StringIO"
        },
        "lazyLink": {
          "documentation": "Adds a listener which will be called when the value changes. This method is like \"link\", but without the current-value callback on registration. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(StringIO,NullableIO<StringIO>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "link": {
          "documentation": "Adds a listener which will be called when the value changes. On registration, the listener is also called with the current value. The listener takes two arguments, the new value and the previous value.",
          "parameterTypes": [
            "FunctionIO(StringIO,NullableIO<StringIO>)=>VoidIO"
          ],
          "returnType": "VoidIO"
        },
        "setValue": {
          "documentation": "Sets the value of the Property. If the value differs from the previous value, listeners are notified with the new value.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "StringIO"
          ],
          "returnType": "VoidIO"
        }
      },
      "parameterTypes": [
        "StringIO"
      ],
      "supertype": "ObjectIO",
      "typeName": "PropertyIO<StringIO>"
    },
    "RangeIO": {
      "documentation": "A range with \"min\" and a \"max\" members.",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "RangeIO"
    },
    "ResetAllButtonIO": {
      "documentation": "Button that performs an action while it is being pressed, and stops the action when released",
      "events": [
        "pressed",
        "released",
        "releasedDisabled"
      ],
      "methodOrder": [],
      "methods": {},
      "supertype": "NodeIO",
      "typeName": "ResetAllButtonIO"
    },
    "RichTextIO": {
      "documentation": "The tandem IO type for the scenery RichText node",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "NodeIO",
      "typeName": "RichTextIO"
    },
    "SceneryEventIO": {
      "documentation": "An event, with a point",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "SceneryEventIO"
    },
    "SliderIO": {
      "documentation": "A traditional slider component, with a knob and possibly tick marks",
      "events": [],
      "methodOrder": [],
      "methods": {
        "setMajorTicksVisible": {
          "documentation": "Set whether the major tick marks should be shown",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "BooleanIO"
          ],
          "returnType": "VoidIO"
        },
        "setMinorTicksVisible": {
          "documentation": "Set whether the minor tick marks should be shown",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "BooleanIO"
          ],
          "returnType": "VoidIO"
        }
      },
      "supertype": "NodeIO",
      "typeName": "SliderIO"
    },
    "StringIO": {
      "documentation": "Wrapper for the built-in JS string type",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "StringIO"
    },
    "TextIO": {
      "documentation": "Text that is displayed in the simulation. TextIO has a nested PropertyIO.&lt;String&gt; for the current string value.",
      "events": [],
      "methodOrder": [],
      "methods": {
        "getFontOptions": {
          "documentation": "Gets font options for this TextIO instance as an object",
          "parameterTypes": [],
          "returnType": "FontIO"
        },
        "getMaxWidth": {
          "documentation": "Gets the maximum width of text box",
          "parameterTypes": [],
          "returnType": "NumberIO"
        },
        "setFontOptions": {
          "documentation": "Sets font options for this TextIO instance, e.g. {size: 16, weight: bold}. If increasing the font size does not make the text size larger, you may need to increase the maxWidth of the TextIO also.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "FontIO"
          ],
          "returnType": "VoidIO"
        },
        "setMaxWidth": {
          "documentation": "Sets the maximum width of text box. If the text width exceeds maxWidth, it is scaled down to fit.",
          "invocableForReadOnlyElements": false,
          "parameterTypes": [
            "NumberIO"
          ],
          "returnType": "VoidIO"
        }
      },
      "supertype": "NodeIO",
      "typeName": "TextIO"
    },
    "ToggleButtonIO": {
      "documentation": "A button that toggles state (in/out) when pressed",
      "events": [
        "toggled"
      ],
      "methodOrder": [],
      "methods": {},
      "supertype": "NodeIO",
      "typeName": "ToggleButtonIO"
    },
    "Vector2IO": {
      "documentation": "A numerical object with x and y properties, like {x:3,y:4}",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "Vector2IO"
    },
    "VoidIO": {
      "documentation": "Type for which there is no instance, usually to mark functions without a return value",
      "events": [],
      "methodOrder": [],
      "methods": {},
      "supertype": "ObjectIO",
      "typeName": "VoidIO"
    }
  };