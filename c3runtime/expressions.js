"use strict";
{
    globalThis.C3.Plugins.MassiveCube_SimpleKeyboard.Exps = {
        getLastKey()
        {
            return this.lastKey;
        },

        getInput()
        {
            return this.input;
        },

        getLayoutName()
        {
            return this.keyboard["options"]["layoutName"];
        }
    };
}