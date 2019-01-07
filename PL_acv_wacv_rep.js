function listPortlet(portlet, column)
{
    var employeeId = nlapiGetUser();
    var employeeRole = nlapiGetRole();
/*
    1050    Axioma Sales Rep
    1059    Axioma Sales Manager
*/
    var IsManager = false;
    portlet.setTitle("Sales Rep Open Pipeline KPI");
    var q1_param = "&Opprtnty_EXPECTEDCLOSEDATE=FQ1TFY";
    var q2_param = "&Opprtnty_EXPECTEDCLOSEDATE=FQ2TFY";
    var q3_param = "&Opprtnty_EXPECTEDCLOSEDATE=FQ3TFY";
    var q4_param = "&Opprtnty_EXPECTEDCLOSEDATE=FQ4TFY";
    var fy_param = "&Opprtnty_EXPECTEDCLOSEDATE=TFY";
    
    var filters = [];
    filters.push(new Array('internalid', 'is', 106));
    if (employeeRole == 1059)
    {   
        filters = [];
        filters.push(new Array('internalid', 'is', 107)); 
        portlet.setTitle("Sales Manager Open Pipeline KPI");
        IsManager = true;
    }
    
    /********************* BUDGET ********************/
  

    var cols = [];
    // Budget By Region
    cols.push(new nlobjSearchColumn('custrecord_kpi_q1_label2'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_q2_label2'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_q3_label2'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_q4_label2'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_fyt_label_2'));
    
    cols.push(new nlobjSearchColumn('custrecord_kpi_reg_1'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_reg_2'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_reg_3'));
  
    cols.push(new nlobjSearchColumn('custrecord_kpi_reg_q1_f1'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_reg_q2_f1'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_reg_q3_f1'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_reg_q4_f1'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_reg_fyt1_f1'));
      
    cols.push(new nlobjSearchColumn('custrecord_kpi_reg_q1_f2'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_reg_q2_f2'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_reg_q3_f2'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_reg_q4_f2'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_reg_fyt1_f2'));
    
    cols.push(new nlobjSearchColumn('custrecord_kpi_reg_q1_f3'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_reg_q2_f3'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_reg_q3_f3'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_reg_q4_f3'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_reg_fyt1_f3'));

    // Budget By Product
    cols.push(new nlobjSearchColumn('custrecord_kpi_q1_label'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_q2_label'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_q3_label'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_q4_label'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_fyt_label_1'));
    
    cols.push(new nlobjSearchColumn('custrecordkpi_pc_1'));
    cols.push(new nlobjSearchColumn('custrecordkpi_label_2'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_label_3'));
  
    cols.push(new nlobjSearchColumn('custrecord_kpi_q1_f1'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_q2_f1'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_q3_f1'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_q4_f1'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_fyt_f1'));
      
    cols.push(new nlobjSearchColumn('custrecord_kpi_q1_f2'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_q2_f2'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_q3_f2'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_q4_f2'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_fyt_f2'));
    
    cols.push(new nlobjSearchColumn('custrecord_kpi_q1_f3'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_q2_f3'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_q3_f3'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_q4_f3'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_fyt_f3'));

    // Actual and Diff Label 
    cols.push(new nlobjSearchColumn('custrecord_kpi_ac_label1'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_ac_label2'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_ac_label3'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_ac_label4'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_ac_label5'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_diff_label1'));

    // Actual Search Link
    cols.push(new nlobjSearchColumn('custrecord_kpi_open_pipe_pc1'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_open_pipe_pc2'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_open_pipe_pc3'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_open_pipe_reg1'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_open_pipe_reg2'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_open_pipe_reg3'));
    
    var q1_reg1 = 0;
    var q2_reg1 = 0;
    var q3_reg1 = 0;
    var q4_reg1 = 0;
    var fyt_reg1 =0;

    var q1_reg2 = 0;
    var q2_reg2 = 0;
    var q3_reg2 = 0;
    var q4_reg2 = 0;
    var fyt_reg2 = 0;

    var q1_reg3 = 0;
    var q2_reg3 = 0;
    var q3_reg3 = 0;
    var q4_reg3 = 0;
    var fyt_reg3 = 0;

    var q1_pc1 = 0;
    var q2_pc1 = 0;
    var q3_pc1 = 0;
    var q4_pc1 = 0;
    var fyt_pc1 = 0;

    var q1_pc2 = 0;
    var q2_pc2 = 0;
    var q3_pc2 = 0;
    var q4_pc2 = 0;
    var fyt_pc2 = 0;

    var q1_pc3 = 0;
    var q2_pc3 = 0;
    var q3_pc3 = 0;
    var q4_pc3 = 0;
    var fyt_pc3 = 0;

    var q1_pc1_act = 0;
    var q2_pc1_act = 0;
    var q3_pc1_act = 0;
    var q4_pc1_act = 0;
    var fyt_pc1_act = 0;

    var q1_pc2_act = 0;
    var q2_pc2_act = 0;
    var q3_pc2_act = 0;
    var q4_pc2_act = 0;
    var fyt_pc2_act = 0;

    var q1_pc3_act = 0;
    var q2_pc3_act = 0;
    var q3_pc3_act = 0;
    var q4_pc3_act = 0;
    var fyt_pc3_act = 0;

    var q1_pc_act_total = 0;
    var q2_pc_act_total = 0;
    var q3_pc_act_total = 0;
    var q4_pc_act_total = 0;
    var fyt_pc_act_total = 0;


    // Region
    var q1_reg1_act = 0;
    var q2_reg1_act = 0;
    var q3_reg1_act = 0;
    var q4_reg1_act = 0;
    var fyt_reg1_act = 0;

    var q1_reg2_act = 0;
    var q2_reg2_act = 0;
    var q3_reg2_act = 0;
    var q4_reg2_act = 0;
    var fyt_reg2_act = 0;

    var q1_reg3_act = 0;
    var q2_reg3_act = 0;
    var q3_reg3_act = 0;
    var q4_reg3_act = 0;
    var fyt_reg3_act = 0;

    var q1_act_total = 0;
    var q2_act_total = 0;
    var q3_act_total = 0;
    var q4_act_total = 0;
    var fyt_act_total = 0;

    var results = nlapiSearchRecord('customrecord_kpi_portlet', null, filters, cols);
    if (results && results.length > 0)
    {
        var element = results[0];
      
        var q1 = element.getValue(cols[0]);
        var q2 = element.getValue(cols[1]);
        var q3 = element.getValue(cols[2]);
        var q4 = element.getValue(cols[3]);
        var fyt = element.getValue(cols[4]);

        var reg1 = element.getText(cols[5]);
        var reg2 = element.getText(cols[6]);
        var reg3 = element.getText(cols[7]);

        var p_q1 = element.getValue(cols[23]);
        var p_q2 = element.getValue(cols[24]);
        var p_q3 = element.getValue(cols[25]);
        var p_q4 = element.getValue(cols[26]);
        var p_fyt = element.getValue(cols[27]);

        var pc1 = element.getText(cols[28]);
        var pc2 = element.getText(cols[29]);
        var pc3 = element.getText(cols[30]);

        var q1_act_label = element.getValue(cols[46]);
        var q2_act_label = element.getValue(cols[47]);
        var q3_act_label = element.getValue(cols[48]);
        var q4_act_label = element.getValue(cols[49]);
        var fyt_act_label = element.getValue(cols[50]);
        var diff_label = element.getValue(cols[51]);

        var link_pc_1 =  element.getValue(cols[52]);
        var link_pc_2 =  element.getValue(cols[53]);
        var link_pc_3 =  element.getValue(cols[54]);
        var link_reg_1 =  element.getValue(cols[55]);
        var link_reg_2 =  element.getValue(cols[56]);
        var link_reg_3 =  element.getValue(cols[57]);
    }

    var link_pc_1_search_id = getSearchId(link_pc_1);
    var link_pc_2_search_id = getSearchId(link_pc_2);
    var link_pc_3_search_id = getSearchId(link_pc_3);
    var link_reg_1_search_id = getSearchId(link_reg_1);
    var link_reg_2_search_id = getSearchId(link_reg_2);
    var link_reg_3_search_id = getSearchId(link_reg_3);

    /********************** ACV ***********************/
    // Product
    q1_pc1 = getActualPerPeriod('customsearch' + link_pc_1_search_id, '4/1/2018', '6/30/2018', 6, IsManager);
    q2_pc1 = getActualPerPeriod('customsearch' + link_pc_1_search_id, '7/1/2018', '9/30/2018', 6, IsManager);
    q3_pc1 = getActualPerPeriod('customsearch' + link_pc_1_search_id, '10/1/2018', '12/31/2018', 6, IsManager);
    q4_pc1 = getActualPerPeriod('customsearch' + link_pc_1_search_id, '1/1/2019', '3/31/2019', 6, IsManager);
    fyt_pc1 = q1_pc1 + q2_pc1 + q3_pc1 + q4_pc1;

    q1_pc2 = getActualPerPeriod('customsearch' + link_pc_2_search_id, '4/1/2018', '6/30/2018', 5, IsManager);
    q2_pc2 = getActualPerPeriod('customsearch' + link_pc_2_search_id, '7/1/2018', '9/30/2018', 5, IsManager);
    q3_pc2 = getActualPerPeriod('customsearch' + link_pc_2_search_id, '10/1/2018', '12/31/2018', 5, IsManager);
    q4_pc2 = getActualPerPeriod('customsearch' + link_pc_2_search_id, '1/1/2019', '3/31/2019', 5, IsManager);
    fyt_pc2 = q1_pc2 + q2_pc2 + q3_pc2 + q4_pc2;

    q1_pc3 = getActualPerPeriod('customsearch' + link_pc_3_search_id, '4/1/2018', '6/30/2018', 5, IsManager);
    q2_pc3 = getActualPerPeriod('customsearch' + link_pc_3_search_id, '7/1/2018', '9/30/2018', 5, IsManager);
    q3_pc3 = getActualPerPeriod('customsearch' + link_pc_3_search_id, '10/1/2018', '12/31/2018', 5, IsManager);
    q4_pc3 = getActualPerPeriod('customsearch' + link_pc_3_search_id, '1/1/2019', '3/31/2019', 5, IsManager);
    fyt_pc3 = q1_pc3 + q2_pc3 + q3_pc3 + q4_pc3;

    // Region
    q1_reg1 = getActualPerPeriod('customsearch' + link_reg_1_search_id, '4/1/2018', '6/30/2018', 5, IsManager);
    q2_reg1 = getActualPerPeriod('customsearch' + link_reg_1_search_id, '7/1/2018', '9/30/2018', 5, IsManager);
    q3_reg1 = getActualPerPeriod('customsearch' + link_reg_1_search_id, '10/1/2018', '12/31/2018', 5, IsManager);
    q4_reg1 = getActualPerPeriod('customsearch' + link_reg_1_search_id, '1/1/2019', '3/31/2019', 5, IsManager);
    fyt_reg1 = q1_reg1 + q2_reg1 + q3_reg1 + q4_reg1;

    q1_reg2 = getActualPerPeriod('customsearch' + link_reg_2_search_id, '4/1/2018', '6/30/2018', 5, IsManager);
    q2_reg2 = getActualPerPeriod('customsearch' + link_reg_2_search_id, '7/1/2018', '9/30/2018', 5, IsManager);
    q3_reg2 = getActualPerPeriod('customsearch' + link_reg_2_search_id, '10/1/2018', '12/31/2018', 5, IsManager);
    q4_reg2 = getActualPerPeriod('customsearch' + link_reg_2_search_id, '1/1/2019', '3/31/2019', 5, IsManager);
    fyt_reg2 = q1_reg2 + q2_reg2 + q3_reg2 + q4_reg2;

    q1_reg3 = getActualPerPeriod('customsearch' + link_reg_3_search_id, '4/1/2018', '6/30/2018', 5, IsManager);
    q2_reg3 = getActualPerPeriod('customsearch' + link_reg_3_search_id, '7/1/2018', '9/30/2018', 5, IsManager);
    q3_reg3 = getActualPerPeriod('customsearch' + link_reg_3_search_id, '10/1/2018', '12/31/2018', 5, IsManager);
    q4_reg3 = getActualPerPeriod('customsearch' + link_reg_3_search_id, '1/1/2019', '3/31/2019', 5, IsManager);
    fyt_reg3 = q1_reg3 + q2_reg3 + q3_reg3 + q4_reg3;


    /***************** WACV *****************/
    // Product
    q1_pc1_act = getActualPerPeriod('customsearch' + link_pc_1_search_id, '4/1/2018', '6/30/2018', 7, IsManager);
    q2_pc1_act = getActualPerPeriod('customsearch' + link_pc_1_search_id, '7/1/2018', '9/30/2018', 7, IsManager);
    q3_pc1_act = getActualPerPeriod('customsearch' + link_pc_1_search_id, '10/1/2018', '12/31/2018', 7, IsManager);
    q4_pc1_act = getActualPerPeriod('customsearch' + link_pc_1_search_id, '1/1/2019', '3/31/2019', 7, IsManager);
    fyt_pc1_act = q1_pc1_act + q2_pc1_act + q3_pc1_act + q4_pc1_act;

    q1_pc2_act = getActualPerPeriod('customsearch' + link_pc_2_search_id, '4/1/2018', '6/30/2018', 6, IsManager);
    q2_pc2_act = getActualPerPeriod('customsearch' + link_pc_2_search_id, '7/1/2018', '9/30/2018', 6, IsManager);
    q3_pc2_act = getActualPerPeriod('customsearch' + link_pc_2_search_id, '10/1/2018', '12/31/2018', 6, IsManager);
    q4_pc2_act = getActualPerPeriod('customsearch' + link_pc_2_search_id, '1/1/2019', '3/31/2019', 6, IsManager);
    fyt_pc2_act = q1_pc2_act + q2_pc2_act + q3_pc2_act + q4_pc2_act;

    q1_pc3_act = getActualPerPeriod('customsearch' + link_pc_3_search_id, '4/1/2018', '6/30/2018', 6, IsManager);
    q2_pc3_act = getActualPerPeriod('customsearch' + link_pc_3_search_id, '7/1/2018', '9/30/2018', 6, IsManager);
    q3_pc3_act = getActualPerPeriod('customsearch' + link_pc_3_search_id, '10/1/2018', '12/31/2018', 6, IsManager);
    q4_pc3_act = getActualPerPeriod('customsearch' + link_pc_3_search_id, '1/1/2019', '3/31/2019', 6, IsManager);
    fyt_pc3_act = q1_pc3_act + q2_pc3_act + q3_pc3_act + q4_pc3_act;

    q1_pc_act_total = (q1_pc1_act*1 + q1_pc2_act*1  + q1_pc3_act*1) * 1;
    q2_pc_act_total = (q2_pc1_act*1 + q2_pc2_act*1  + q2_pc3_act*1) * 1;
    q3_pc_act_total = (q3_pc1_act*1 + q3_pc2_act*1  + q3_pc3_act*1) * 1;
    q4_pc_act_total = (q4_pc1_act*1 + q4_pc2_act*1  + q4_pc3_act*1) * 1;
    fyt_pc_act_total = (fyt_pc1_act*1 + fyt_pc2_act*1  + fyt_pc3_act*1) * 1;

    // Region
    q1_reg1_act = getActualPerPeriod('customsearch' + link_reg_1_search_id, '4/1/2018', '6/30/2018', 6, IsManager);
    q2_reg1_act = getActualPerPeriod('customsearch' + link_reg_1_search_id, '7/1/2018', '9/30/2018', 6, IsManager);
    q3_reg1_act = getActualPerPeriod('customsearch' + link_reg_1_search_id, '10/1/2018', '12/31/2018', 6, IsManager);
    q4_reg1_act = getActualPerPeriod('customsearch' + link_reg_1_search_id, '1/1/2019', '3/31/2019', 6, IsManager);
    fyt_reg1_act = q1_reg1_act + q2_reg1_act + q3_reg1_act + q4_reg1_act;

    q1_reg2_act = getActualPerPeriod('customsearch' + link_reg_2_search_id, '4/1/2018', '6/30/2018', 6, IsManager);
    q2_reg2_act = getActualPerPeriod('customsearch' + link_reg_2_search_id, '7/1/2018', '9/30/2018', 6, IsManager);
    q3_reg2_act = getActualPerPeriod('customsearch' + link_reg_2_search_id, '10/1/2018', '12/31/2018', 6, IsManager);
    q4_reg2_act = getActualPerPeriod('customsearch' + link_reg_2_search_id, '1/1/2019', '3/31/2019', 6, IsManager);
    fyt_reg2_act = q1_reg2_act + q2_reg2_act + q3_reg2_act + q4_reg2_act;

    q1_reg3_act = getActualPerPeriod('customsearch' + link_reg_3_search_id, '4/1/2018', '6/30/2018', 6, IsManager);
    q2_reg3_act = getActualPerPeriod('customsearch' + link_reg_3_search_id, '7/1/2018', '9/30/2018', 6, IsManager);
    q3_reg3_act = getActualPerPeriod('customsearch' + link_reg_3_search_id, '10/1/2018', '12/31/2018', 6, IsManager);
    q4_reg3_act = getActualPerPeriod('customsearch' + link_reg_3_search_id, '1/1/2019', '3/31/2019', 6, IsManager);
    fyt_reg3_act = q1_reg3_act + q2_reg3_act + q3_reg3_act + q4_reg3_act;

    q1_act_total = (q1_reg1_act*1 + q1_reg2_act*1  + q1_reg3_act*1) * 1;
    q2_act_total = (q2_reg1_act*1 + q2_reg2_act*1  + q2_reg3_act*1) * 1;
    q3_act_total = (q3_reg1_act*1 + q3_reg2_act*1  + q3_reg3_act*1) * 1;
    q4_act_total = (q4_reg1_act*1 + q4_reg2_act*1  + q4_reg3_act*1) * 1;
    fyt_act_total = (fyt_reg1_act*1 + fyt_reg2_act*1  + fyt_reg3_act*1) * 1;

    if (!results || results.length == 0)
    {
        return;
    }

    var content = "<TD>";

    content += "<style type='text/css'>";
    content += ".table_main { border-collapse: collapse; margin: -0.5em -0.7em -0.5em -0.7em;}";
    content += ".label_col { width:193px; text-align:left; padding-top: 7px; padding-left: 18px; padding-bottom: 7px;  font-weight: bold  }";
    content += ".label_row { font-size: 8pt;}";
    content += ".value_col { text-align:left; padding-left: 10px; padding-right : 10px; color: rgb(61, 116, 172)}";
    content += ".value_col_2 { text-align:left; padding-left: 10px; padding-right : 10px;}";
    content += ".value_col_1 { text-align:left; padding-left: 10px; padding-right : 10px; font-weight: bold}";
    content += ".value_col_3 { text-align:left; padding-left: 10px; border-bottom: double; border-top: 1.5px solid red; padding-right : 10px; color: rgb(255, 0, 0)}";
    content += ".value_row { font-size: 10pt }";
    content += ".divider { height:26px; background-color: rgb(0, 0, 0); color: rgb(0, 0, 0) }";
    content += ".total { color: rgb(255, 0, 0); font-weight: bold }";
    content += ".diff { color: rgb(255, 0, 0); font-weight: bold }";
    content += ".budget_col { background-color: rgb(212, 240, 253);}";
    content += ".actual_col { background-color: rgb(214, 245, 214);}";
    content += "</style>";

    content += "<table class='table_main'>";
    content += "<tr>";
    content += "<td class='value_col_1'>BY PRODUCT</td>";

    content += "<td class='value_col_1 budget_col'>" + p_q1 + "</td>";
    content += "<td class='value_col_1 actual_col'>" + q1_act_label + "</td>";
//    content += "<td class='value_col_1'>" + diff_label + "</td>";

    content += "<td class='value_col_1 budget_col'>" + p_q2 + "</td>";
    content += "<td class='value_col_1 actual_col'>" + q2_act_label + "</td>";
//    content += "<td class='value_col_1'>" + diff_label + "</td>";

    content += "<td class='value_col_1 budget_col'>" + p_q3 + "</td>";
    content += "<td class='value_col_1 actual_col'>" + q3_act_label + "</td>";
//    content += "<td class='value_col_1'>" + diff_label + "</td>"; 

    content += "<td class='value_col_1 budget_col'>" + p_q4 + "</td>";
    content += "<td class='value_col_1 actual_col'>" + q4_act_label + "</td>";
//    content += "<td class='value_col_1'>" + diff_label + "</td>";

    content += "<td class='value_col_1 budget_col'>" + p_fyt + "</td>";
    content += "<td class='value_col_1 actual_col'>" + fyt_act_label + "</td>";
//    content += "<td class='value_col_1'>" + diff_label + "</td>";
    content += "</tr>";

    content += "<tr>";
    content += "<td class='value_col_2'>" + pc1 + "</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_pc_1+q1_param +"'>" + addCommas(parseFloat(q1_pc1*1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_1+q1_param +"'>" + addCommas(parseFloat(q1_pc1_act*1)) + "</a></td>";
//     content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q1_pc1_act*1 / q1_pc1 * 100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_pc_1+q2_param +"'>" + addCommas(parseFloat(q2_pc1*1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_1+q2_param +"'>" + addCommas(parseFloat(q2_pc1_act*1)) + "</a></td>";
//     content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q2_pc1_act*1 / q2_pc1 * 100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_pc_1+q3_param +"'>" + addCommas(parseFloat(q3_pc1*1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_1+q3_param +"'>" + addCommas(parseFloat(q3_pc1_act*1)) + "</a></td>";
//     content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q3_pc1_act*1 / q3_pc1 * 100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_pc_1+q4_param +"'>" + addCommas(parseFloat(q4_pc1*1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_1+q4_param +"'>" + addCommas(parseFloat(q4_pc1_act*1)) + "</a></td>";
//     content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q4_pc1_act*1 / q4_pc1 * 100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_pc_1+fy_param +"'>" + addCommas(parseFloat(fyt_pc1*1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_1+fy_param +"'>" + addCommas(parseFloat(fyt_pc1_act*1)) + "</a></td>";
//     content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(fyt_pc1_act*1 / fyt_pc1 * 100))) + " %</td>";
    content += "</tr>";

    content += "<tr>";
    content += "<td class='value_col_2'>" + pc2 + "</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_pc_2+q1_param +"'>" + addCommas(parseFloat(q1_pc2*1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_2+q1_param +"'>" + addCommas(parseFloat(q1_pc2_act*1)) + "</a></td>";
 //   content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q1_pc2_act*1/q1_pc2*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_pc_2+q2_param +"'>" + addCommas(parseFloat(q2_pc2*1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_2+q2_param +"'>"  + addCommas(parseFloat(q2_pc2_act*1)) + "</a></td>";
//    content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q2_pc2_act*1/q2_pc2*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_pc_2+q3_param +"'>" + addCommas(parseFloat(q3_pc2*1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_2+q3_param +"'>"  + addCommas(parseFloat(q3_pc2_act*1)) + "</a></td>";
//    content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q3_pc2_act*1/q3_pc2*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_pc_2+q4_param +"'>" + addCommas(parseFloat(q4_pc2*1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_2+q4_param +"'>" + addCommas(parseFloat(q4_pc2_act*1)) + "</a></td>";
//    content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q4_pc2_act*1/q4_pc2*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_pc_2+fy_param +"'>" + addCommas(parseFloat(fyt_pc2*1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_2+fy_param +"'>"  + addCommas(parseFloat(fyt_pc2_act*1)) + "</a></td>";
//     content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(fyt_pc2_act*1/fyt_pc2*100))) + " %</td>";
    content += "</tr>";

    content += "<tr>";
    content += "<td class='value_col_2'>" + pc3 + "</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_pc_3+q1_param +"'>" + addCommas(parseFloat(q1_pc3*1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_3+q1_param +"'>"  + addCommas(parseFloat(q1_pc3_act*1)) + "</a></td>";
//    content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q1_pc3_act*1/q1_pc3*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_pc_3+q2_param +"'>" + addCommas(parseFloat(q2_pc3*1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_3+q2_param +"'>" + addCommas(parseFloat(q2_pc3_act*1)) + "</a></td>";
//    content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q2_pc3_act*1/q2_pc3*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_pc_3+q3_param +"'>" + addCommas(parseFloat(q3_pc3*1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_3+q3_param +"'>" + addCommas(parseFloat(q3_pc3_act*1)) + "</a></td>";
//    content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q3_pc3_act*1/q3_pc3*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_pc_3+q4_param +"'>" + addCommas(parseFloat(q4_pc3*1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_3+q4_param +"'>" + addCommas(parseFloat(q4_pc3_act*1)) + "</a></td>";
//    content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q4_pc3_act*1/q4_pc3*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_pc_3+fy_param +"'>" + addCommas(parseFloat(fyt_pc3*1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_3+fy_param +"'>" + addCommas(parseFloat(fyt_pc3_act*1)) + "</a></td>";
//    content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(fyt_pc3_act*1/fyt_pc3*100))) + " %</td>";
    content += "</tr>";

    content += "<tr class='total'>";
    var q1_pc_total = (q1_pc1*1 + q1_pc2*1  + q1_pc3*1) * 1;
    var q2_pc_total = (q2_pc1*1 + q2_pc2*1  + q2_pc3*1) * 1;
    var q3_pc_total = (q3_pc1*1 + q3_pc2*1  + q3_pc3*1) * 1;
    var q4_pc_total = (q4_pc1*1 + q4_pc2*1  + q4_pc3*1) * 1;
    var fyt_pc_total = (fyt_pc1*1 + fyt_pc2*1  + fyt_pc3*1) * 1;
    content += "<td class='value_col_3'>TOTAL</td>";

    content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q1_pc_total)) + "</td>";
    content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q1_pc_act_total)) + "</td>";
//    content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q1_pc_act_total*1/q1_pc_total*100))) + " %</td>";

    content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q2_pc_total)) + "</td>";
    content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q2_pc_act_total)) + "</td>";
//     content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q2_pc_act_total*1/q2_pc_total*100))) + " %</td>";

    content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q3_pc_total)) + "</td>";
    content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q3_pc_act_total)) + "</td>";
//     content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q3_pc_act_total*1/q3_pc_total*100))) + " %</td>";

    content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q4_pc_total)) + "</td>";
    content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q4_pc_act_total)) + "</td>";
//     content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q4_pc_act_total*1/q4_pc_total*100))) + " %</td>";

    content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(fyt_pc_total)) + "</td>";
    content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(fyt_pc_act_total)) + "</td>";
//    content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(fyt_pc_act_total*1/fyt_pc_total*100))) + " %</td>";

    content += "<tr style='background: rgb(255, 255, 255);'>";
    content += "<td class='value_col_1'>BY REGION</td>";

    content += "<td class='value_col label budget_col'>" + q1 + "</td>";
    content += "<td class='value_col label actual_col'>" + q1 + "</td>";
 //   content += "<td class='value_col label'>" + q1 + "</td>";

    content += "<td class='value_col label budget_col'>" + q2 + "</td>";
    content += "<td class='value_col label actual_col'>" + q2 + "</td>";
 //   content += "<td class='value_col label'>" + q2 + "</td>";

    content += "<td class='value_col label budget_col'>" + q3 + "</td>";
    content += "<td class='value_col label actual_col'>" + q3 + "</td>";
//    content += "<td class='value_col label'>" + q3 + "</td>";

    content += "<td class='value_col label budget_col'>" + q4 + "</td>";
    content += "<td class='value_col label actual_col'>" + q4 + "</td>";
//    content += "<td class='value_col label'>" + q4 + "</td>";

    content += "<td class='value_col label budget_col'>" + fyt + "</td>";
    content += "<td class='value_col label actual_col'>" + fyt + "</td>";
//    content += "<td class='value_col label'>" + fyt + "</td>";
    content += "</tr>";

    content += "<tr>";
    content += "<td class='value_col_2'>" + reg1 + "</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_reg_1+q1_param +"'>" + addCommas(parseFloat(q1_reg1*1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_reg_1+q1_param +"'>" + addCommas(parseFloat(q1_reg1_act*1)) + "</a></td>";
//     content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q1_reg1_act*1/q1_reg1*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_reg_1+q2_param +"'>" + addCommas(parseFloat(q2_reg1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_reg_1+q2_param +"'>" + addCommas(parseFloat(q2_reg1_act)) + "</a></td>";
//    content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q2_reg1_act*1/q2_reg1*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_reg_1+q3_param +"'>" + addCommas(parseFloat(q3_reg1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_reg_1+q3_param +"'>" + addCommas(parseFloat(q3_reg1_act)) + "</a></td>";
//    content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q3_reg1_act*1/q3_reg1*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_reg_1+q4_param +"'>" + addCommas(parseFloat(q4_reg1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_reg_1+q4_param +"'>" + addCommas(parseFloat(q4_reg1_act)) + "</a></td>";
//    content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q4_reg1_act*1/q4_reg1*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_reg_1+fy_param +"'>" + addCommas(parseFloat(fyt_reg1)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_reg_1+fy_param +"'>" + addCommas(parseFloat(fyt_reg1_act)) + "</a></td>";
//     content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(fyt_reg1_act*1/fyt_reg1*100))) + " %</td>";
    content += "</tr>";

    content += "<tr>";
    content += "<td class='value_col_2'>" + reg2 + "</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_reg_2+q1_param +"'>" + addCommas(parseFloat(q1_reg2)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_reg_2+q1_param +"'>" + addCommas(parseFloat(q1_reg2_act)) + "</a></td>";
//     content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q1_reg2_act*1/q1_reg2*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_reg_2+q2_param +"'>" + addCommas(parseFloat(q2_reg2)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_reg_2+q2_param +"'>" + addCommas(parseFloat(q2_reg2_act)) + "</a></td>";
//    content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q2_reg2_act*1/q2_reg2*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_reg_2+q3_param +"'>" + addCommas(parseFloat(q3_reg2)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_reg_2+q3_param +"'>" + addCommas(parseFloat(q3_reg2_act)) + "</a></td>";
//     content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q3_reg2_act*1/q3_reg2*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_reg_2+q4_param +"'>" + addCommas(parseFloat(q4_reg2)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_reg_2+q4_param +"'>" + addCommas(parseFloat(q4_reg2_act)) + "</a></td>";
//     content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q4_reg2_act*1/q4_reg2*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_reg_2+fy_param +"'>" + addCommas(parseFloat(fyt_reg2)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_reg_2+fy_param +"'>" + addCommas(parseFloat(fyt_reg2_act)) + "</a></td>";
//     content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(fyt_reg2_act*1/fyt_reg2*100))) + " %</td>";
    content += "</tr>";

    content += "<tr>";
    content += "<td class='value_col_2'>" + reg3 + "</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_reg_3+q1_param +"'>" + addCommas(parseFloat(q1_reg3)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_reg_3+q1_param +"'>" + addCommas(parseFloat(q1_reg3_act)) + "</a></td>";
//     content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q1_reg3_act*1/q1_reg3*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_reg_3+q2_param +"'>" + addCommas(parseFloat(q2_reg3)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_reg_3+q2_param +"'>" + addCommas(parseFloat(q2_reg3_act)) + "</a></td>";
//    content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q2_reg3_act*1/q2_reg3*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_reg_3+q3_param +"'>" + addCommas(parseFloat(q3_reg3)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_reg_3+q3_param +"'>" + addCommas(parseFloat(q3_reg3_act)) + "</a></td>";
//    content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q3_reg3_act*1/q3_reg3*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_reg_3+q4_param +"'>" + addCommas(parseFloat(q4_reg3)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_reg_3+q4_param +"'>" + addCommas(parseFloat(q4_reg3_act)) + "</a></td>";
//    content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q4_reg3_act*1/q4_reg3*100))) + " %</td>";

    content += "<td class='value_col budget_col'><a target='_blank' href='"+ link_reg_3+fy_param +"'>" + addCommas(parseFloat(fyt_reg3)) + "</a></td>";
    content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_reg_3+fy_param +"'>" + addCommas(parseFloat(fyt_reg3_act)) + "</a></td>";
//     content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(fyt_reg3_act*1/fyt_reg3*100))) + " %</td>";
    content += "</tr>";

    content += "<tr class='total'>";
    var q1_total = (q1_reg1*1 + q1_reg2*1  + q1_reg3*1) * 1;
    var q2_total = (q2_reg1*1 + q2_reg2*1  + q2_reg3*1) * 1;
    var q3_total = (q3_reg1*1 + q3_reg2*1  + q3_reg3*1) * 1;
    var q4_total = (q4_reg1*1 + q4_reg2*1  + q4_reg3*1) * 1;
    var fyt_total = (fyt_reg1*1 + fyt_reg2*1  + fyt_reg3*1) * 1;
    content += "<td class='value_col_3'>TOTAL</td>";

    content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q1_total)) + "</td>";
    content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q1_act_total)) + "</td>";
//     content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q1_act_total*1/q1_total*100))) + " %</td>";

    content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q2_total)) + "</td>";
    content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q2_act_total)) + "</td>";
//     content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q2_act_total*1/q2_total*100))) + " %</td>";

    content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q3_total)) + "</td>";
    content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q3_act_total)) + "</td>";
//    content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q3_act_total*1/q3_total*100))) + " %</td>";

    content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q4_total)) + "</td>";
    content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q4_act_total)) + "</td>";
//     content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q4_act_total*1/q4_total*100))) + " %</td>";

    content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(fyt_total)) + "</td>";
    content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(fyt_act_total)) + "</td>";
//     content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(fyt_act_total*1/fyt_total*100))) + " %</td>";
    content += "</table>";
    
    content += "</TD>";
    portlet.setHtml( content );
}

function getSearchId(searchLink)
{
    var searchId = 0;
    if (searchLink)
    {
        var res = searchLink.split("=");
        if (res.length > 0)
        {
            searchId = res[1];
        }
    }
    return searchId;
}

function getActualPerPeriod(savedSearchId, startDate, endDate, colNum, IsManager)
{
    var filters = [];
    filters.push(new nlobjSearchFilter('expectedclosedate', null, 'within', [startDate, endDate]));
  /*  if (IsManager)
    {
        filters.push(new nlobjSearchFilter('salesteammember', null, 'anyof', "@CURRENT@"));
    }
    else
    {
        filters.push(new nlobjSearchFilter('salesteammember', null, 'anyof', "@HIERARCHY@"));
    }*/
    var results = nlapiSearchRecord( 'opportunity', savedSearchId, filters );
    
    var total = 0;
    if (results && results.length > 0)
    {   
        var cols = results[0].getAllColumns();
        for (var i = 0; i < results.length; i ++) 
        {
            var element = results[i];
            var actual = element.getValue(cols[colNum]) * 1;
            total += actual;

            nlapiLogExecution('Debug', savedSearchId, actual);
        }
    }

    return Math.round(total);
}

function addCommas(nStr)
{
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    
    if (isNaN(parseInt(x1 + x2)) == false) {
                    return x1 + x2;
                } else {
                    return 0.00;
                }
}