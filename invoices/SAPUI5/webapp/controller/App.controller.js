sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     */

    function (Controller,MessageToast) {
        "use strict";

        return Controller.extend("logaligroup.SAPUI5.controller.App", {
            onInit: function(){

            },
            onShowHellow: function () {
                //leer del modelo i18n
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                //leer de modelo de data
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("hellomessage",[sRecipient]);
                MessageToast.show(sMsg);
                
            }
        })
    });