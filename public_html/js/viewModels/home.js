/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * home module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 
    'ojs/ojtable', 'ojs/ojarraytabledatasource', 'ojs/ojpagingcontrol',
    'ojs/ojpagingtabledatasource', 'ojs/ojmodel', 'ojs/ojcollectiontabledatasource', 
    'ojs/ojinputtext', 'ojs/ojdialog', 'ojs/ojbutton'
], function (oj, ko, $) {
    /**
     * The view model for the main content view template
     */
    function homeContentViewModel() {
        var self = this;
        
        var SCMModulesArray = [{RequestID: 1, SCMModule: 'Product Development', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup EFF on Item Class Hardware', Requestor: 'xxx@oracle.com', Status: 'Awaiting Approval'},
        {RequestID: 2, SCMModule: 'Order Management', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup DFF on Item Class Hardware', Requestor: 'xxx@oracle.com', Status: 'Awaiting Approval'},
        {RequestID: 3, SCMModule: 'Order Management', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup new Item Class', Requestor: 'xxx@oracle.com', Status: 'Awaiting Approval'},
        {RequestID: 4, SCMModule: 'Costing', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup EFF on Item Class', Requestor: 'xxx@oracle.com', Status: 'Scheduled'},
        {RequestID: 5, SCMModule: 'Costing', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup EFF on Item Class', Requestor: 'xxx@oracle.com', Status: 'Approved Requests'},
        {RequestID: 6, SCMModule: 'Product Development', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup DFF on Item Class Phantom', Requestor: 'xxx@oracle.com', Status: 'Approved Requests'},
        {RequestID: 7, SCMModule: 'Product Development', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup EFF on Item Class Phantom', Requestor: 'xxx@oracle.com', Status: 'Completed'},
        {RequestID: 8, SCMModule: 'Product Development', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup EFF on Item Class Phantom', Requestor: 'xxx@oracle.com', Status: 'Completed'},
        {RequestID: 9, SCMModule: 'Order Management', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup DFF on Item Class Hardware', Requestor: 'xxx@oracle.com', Status: 'Awaiting Approval'},
        {RequestID: 10, SCMModule: 'Order Management', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup new Item Class', Requestor: 'xxx@oracle.com', Status: 'Awaiting Approval'},
        {RequestID: 11, SCMModule: 'Costing', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup EFF on Item Class', Requestor: 'xxx@oracle.com', Status: 'Scheduled'},
        {RequestID: 12, SCMModule: 'Costing', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup EFF on Item Class', Requestor: 'xxx@oracle.com', Status: 'Approved Requests'},
        {RequestID: 13, SCMModule: 'Product Development', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup DFF on Item Class Phantom', Requestor: 'xxx@oracle.com', Status: 'Approved Requests'},
        {RequestID: 14, SCMModule: 'Product Development', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup EFF on Item Class Phantom', Requestor: 'xxx@oracle.com', Status: 'Completed'},
        {RequestID: 15, SCMModule: 'Product Development', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup EFF on Item Class Phantom', Requestor: 'xxx@oracle.com', Status: 'Completed'},
        {RequestID: 16, SCMModule: 'Costing', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup EFF on Item Class', Requestor: 'xxx@oracle.com', Status: 'Approved Requests'},
        {RequestID: 17, SCMModule: 'Product Development', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup DFF on Item Class Phantom', Requestor: 'xxx@oracle.com', Status: 'Approved Requests'},
        {RequestID: 18, SCMModule: 'Product Development', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup EFF on Item Class Phantom', Requestor: 'xxx@oracle.com', Status: 'Completed'},
        {RequestID: 19, SCMModule: 'Product Development', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup EFF on Item Class Phantom', Requestor: 'xxx@oracle.com', Status: 'Completed'},
        {RequestID: 20, SCMModule: 'Order Management', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup DFF on Item Class Hardware', Requestor: 'xxx@oracle.com', Status: 'Awaiting Approval'},
        {RequestID: 21, SCMModule: 'Order Management', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup new Item Class', Requestor: 'xxx@oracle.com', Status: 'Awaiting Approval'},
        {RequestID: 22, SCMModule: 'Costing', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup EFF on Item Class', Requestor: 'xxx@oracle.com', Status: 'Scheduled'}];
    
        self.pagingDatasource = new oj.PagingTableDataSource(new oj.ArrayTableDataSource(SCMModulesArray, {idAttribute: 'RequestID'}));
    
        //var obj = {};
        
        self.currentRowListener = function (event, ui) {
            console.log("hi");
                var newCurrentRow = ui.currentRow;
                self.pagingDatasource.at(newCurrentRow['rowIndex']).
                        then(function (rowObj) {
                            var obj = rowObj['data'];
                            console.log(obj);
                            $('#selectedDepartmentId').text(obj.SCMModule);
                            $('#selectedDepartmentName').text(obj.RequestType);
                            $("#modalDialog1").ojDialog("open");
                        });
         };
         
         self.handleOKClose = function() {
            $("#modalDialog1").ojDialog("close"); };
    }
    
    return homeContentViewModel;
});
