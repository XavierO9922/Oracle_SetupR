/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * home module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 
    'ojs/ojtable', 'ojs/ojarraytabledatasource'
], function (oj, ko, $) {
    /**
     * The view model for the main content view template
     */
    function homeContentViewModel() {
        var self = this;
        
        var deptArray = [{SCMModule: 'Product Development', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup EFF on Item Class Hardware', Requestor: 'xxx@oracle.com', Status: 'Awaiting Approval'},
        {SCMModule: 'Order Management', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup DFF on Item Class Hardware', Requestor: 'xxx@oracle.com', Status: 'Awaiting Approval'},
        {SCMModule: 'Order Management', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup new Item Class', Requestor: 'xxx@oracle.com', Status: 'Awaiting Approval'},
        {SCMModule: 'Costing', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup EFF on Item Class', Requestor: 'xxx@oracle.com', Status: 'Awaiting Approval'},
        {SCMModule: 'Costing', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup EFF on Item Class', Requestor: 'xxx@oracle.com', Status: 'Awaiting Approval'},
        {SCMModule: 'Product Development', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup DFF on Item Class Phantom', Requestor: 'xxx@oracle.com', Status: 'Awaiting Approval'},
        {SCMModule: 'Product Development', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup EFF on Item Class Phantom', Requestor: 'xxx@oracle.com', Status: 'Awaiting Approval'},
        {SCMModule: 'Product Development', RequestType: 'EFF Attribute setup', RequestDetails: 'Setup EFF on Item Class Phantom', Requestor: 'xxx@oracle.com', Status: 'Awaiting Approval'}];
    
        self.datasource = new oj.ArrayTableDataSource(deptArray, {idAttribute: 'SCMModule'});
    }
    
    return homeContentViewModel;
});
