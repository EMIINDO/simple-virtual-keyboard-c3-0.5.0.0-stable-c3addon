"use strict";

{
    globalThis.C3.Plugins.MassiveCube_SimpleKeyboard.Instance = class SimpleKeyboardInstance extends globalThis.ISDKInstanceBase
    {
        constructor()
        {
            super();

            const properties = this._getInitProperties();
            if (properties)
            {}

            this.Keyb = window["SimpleKeyboard"]["default"];

            this.div = document.createElement('div');
            this.div.setAttribute('class', 'simple-keyboard');

            this.parent = document.body;
            this.mcanvas = document.getElementsByTagName("canvas")[0]; // Get the <ul> element to insert a new node

            this.Adata = '';
            this.Bdata = {}
            this.Bdata["onChange"] = getinput => this.AonChange(getinput);
            this.Bdata["onKeyPress"] = getbutton => this.AonKeyPress(getbutton);

            this.objmerge = undefined;

            this.input = "";
            this.lastKey = "";

            this.AonChange = function(input)
            {
                this.input = input;
            }

            this.AonKeyPress = function(button)
            {
                this.lastKey = button;
                this._trigger(globalThis.C3.Plugins.MassiveCube_SimpleKeyboard.Cnds.callbackInput);
            }

            this.initKeyboard = function()
            {
                if (typeof this.keyboard == "undefined")
                {
                    this.parent.insertBefore(this.div, this.mcanvas);
                    this.keyboard = new this.Keyb(this.objmerge);
                }
            }

            this.removeKeyboard = function()
            {
                if (typeof this.keyboard !== "undefined")
                {
                    this.keyboard = undefined;
                    this.parent.removeChild(this.div);
                }
            }

        }

        _release()
        {
            super._release();
        }

        _saveToJson()
        {
            return {};
        }

        _loadFromJson(o)
        {}
    };
}