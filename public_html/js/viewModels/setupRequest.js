/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * setupRequest module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 
        'ojs/ojtree', 'ojs/ojinputtext', 'ojs/ojselectcombobox', 'ojs/ojbutton'],
    
    function(oj, ko, $)
    {   
            function setupRequest()
            {
            //ko.applyBindings(null, document.getElementById('tree'));
                this.val = ko.observableArray(["Jesus Flores"]);
                //this.clickedButton = ko.observable("(None clicked yet)");
                this.buttonClick = function(data, event){
                this.clickedButton(event.currentTarget.id);
                    return true;
                };
                $("#tree").on("ojoptionchange", function (e, ui) {
                   if (ui.option == "selection") {
                     // show selected nodes
                     var selected = _arrayToStr(ui.value) ;
                     $("#results").text("id = " + selected) ;
                   }
                });
            }
            return setupRequest();
    }
);

function  getJson(node, fn)       // get local json
  {
    var data = [
                    { 
                   "title": "Items",
                   "attr": {"id": "items"},
                   "children": [ { "title": "Manage Item Attribute Groups and Attributes",
                                   "attr": {"id": "mngIAGaA"}
                                 },
                                 { "title": "Manage Item Class Descriptive Flexfileds",
                                   "attr": {"id": "mngICDF"}
                                 },
                                 { "title": "Manage Item Classes",
                                   "attr": {"id": "mngIC"}
                                 },
                                 { "title": "Manage Item Cost Profiles",
                                   "attr": {"id": "mngICP"}
                                 },
                                 { "title": "Manage Item Descriptive Flexfiled",
                                   "attr": {"id": "mngIDF"}
                                 },
                                 { "title": "Manage Item Groups for Revenue Management",
                                   "attr": {"id": "mngIGfRM"}
                                 },
                                 { "title": "Manage Item Import Formats Configuration",
                                   "attr": {"id": "mngIIFC"}
                                 },
                                 { "title": "Manage Item Keyword Search Attributes",
                                   "attr": {"id": "mngIKSA"}
                                 },
                                 { "title": "Manage Item Organizations",
                                   "attr": {"id": "mngIO"}
                                 },
                                 { "title": "Manage Item Organizations Descriptive Flexfields",
                                   "attr": {"id": "mngIODF"}
                                 }
                               ]
                 },
                 {
                   "title": "Item Organization", 
                   "attr": {"id": "itemOrganization"},
                   "children": [ { "title": "Item 01",
                                   "attr": {"id": "itemO1"}
                                 },
                                 { "title": "Item 02",
                                   "attr": {"id": "itemO2"}
                                 }
                               ]
                 },
                 { 
                   "title": "Catalogs",
                   "attr": {"id": "catalogs"},
                   "children": [ { "title": "Item 01",
                                   "attr": {"id": "catO1"}
                                 },
                                 { "title": "Item 02",
                                   "attr": {"id": "catO2"}
                                 }
                               ]
                 },
                 { 
                   "title": "Structures",
                   "attr": {"id": "structures"},
                   "children": [ { "title": "Item 01",
                                   "attr": {"id": "structureO1"}
                                 },
                                 { "title": "Item 02",
                                   "attr": {"id": "structureO2"}
                                 }
                               ]
                 },
                 { 
                   "title": "Item Mass Update",
                   "attr": {"id": "itemMassU"},
                   "children": [ { "title": "Item 01",
                                   "attr": {"id": "imuO1"}
                                 },
                                 { "title": "Item 02",
                                   "attr": {"id": "imuO2"}
                                 }
                               ]
                 },
                 { 
                   "title": "New Item Request",
                   "attr": {"id": "neIReq"},
                   "children": [ { "title": "Item 01",
                                   "attr": {"id": "nirO1"}
                                 },
                                 { "title": "Item 02",
                                   "attr": {"id": "nirO2"}
                                 }
                               ]
                 },
                 { 
                   "title": "Change Orders",
                   "attr": {"id": "changeO"},
                   "children": [ { "title": "Item 01",
                                   "attr": {"id": "chanOrO1"}
                                 },
                                 { "title": "Item 02",
                                   "attr": {"id": "chanOrO2"}
                                 }
                               ]
                 },
                 { 
                   "title": "Product Rules",
                   "attr": {"id": "productR"},
                   "children": [ { "title": "Item 01",
                                   "attr": {"id": "prodRO1"}
                                 },
                                 { "title": "Item 02",
                                   "attr": {"id": "prodRO1"}
                                 }
                               ]
                 },
                 { 
                   "title": "Suppliers for Product Management",
                   "attr": {"id": "suppfPM"},
                   "children": [ { "title": "Item 01",
                                   "attr": {"id": "SupfPMO1"}
                                 },
                                 { "title": "Item 02",
                                   "attr": {"id": "SupfPMO2"}
                                 }
                               ]
                 },
                 { 
                   "title": "Advanced Catalogs",
                   "attr": {"id": "advancedCat"},
                   "children": [ { "title": "Item 01",
                                   "attr": {"id": "advancCaO1"}
                                 },
                                 { "title": "Item 02",
                                   "attr": {"id": "advancCaO2"}
                                 }                               ]
                 }
              ];

     fn(data) ;  // pass to ojTree using supplied function
  };

  // Convert a jQuery list of html element nodes to string containing node id's.
  function _arrayToStr(arr)
  {
     var s = "" ;
     $.each(arr, function(i, val)
        {
          if (i) {
            s += ", " ;
          }
          s += $(arr[i]).attr("id") ;
        }) ;

     return s ;
  };
