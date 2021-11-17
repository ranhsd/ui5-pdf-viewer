sap.ui.define([
  "com/ui5/myUI5App/controller/BaseController"
], function(Controller) {
  "use strict";

  return Controller.extend("com.ui5.myUI5App.controller.main", {
    handleFileChange: function(oEvent) {
      var file = oEvent.getParameter("files")[0];

      var pdfViewer = this.getView().byId("pdfViewer");
      this.getFileForPreview(file, function(source) {
        if (source) {
          pdfViewer.setPdfSource(source);
          pdfViewer.setVisible(true);
        }        
      });
    },

    getFileForPreview: function(file, callback){
      var reader = new FileReader();
      reader.onload = function() {
        callback(reader.result);
      }
      reader.onerror = function() {
        callback(null);
      }
      reader.readAsDataURL(file); 
    }
  });
});
