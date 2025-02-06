"use strict";

{
    const SDK = globalThis.SDK;
const PLUGIN_CLASS = SDK.Plugins.MassiveCube_SimpleKeyboard;

    PLUGIN_CLASS.Type = class SimpleKeyboardType extends SDK.ITypeBase
    {
        constructor(sdkPlugin, iObjectType)
        {
            super(sdkPlugin, iObjectType);
        }
    };
}