"use strict";
{
    globalThis.C3.Plugins.MassiveCube_SimpleKeyboard.Acts = {
        inkeyboard()
        {
            this.initKeyboard();
        },

        remkeyboard()
        {
            this.removeKeyboard();
        },

        changeSetupData(newData)
        {
            this.Adata = newData;
            let jsondata = JSON.parse(this.Adata);
            if (typeof jsondata === 'object' && jsondata !== null)
            {
                this.objmerge = Object.assign(this.Bdata, jsondata);
            }
        },

        changeLayoutName(name)
        {
            if (typeof this.keyboard !== "undefined")
            {
                var dtTemp = {};
                dtTemp["layoutName"] = name;
                this.keyboard["setOptions"](dtTemp);
            }
        },

        clearInp()
        {
            this.input = "";
            this.keyboard["clearInput"]();
        }
    };
}