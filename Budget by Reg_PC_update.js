function listPortlet(portlet, column)
{
    portlet.setTitle("Budget vs. Actual KPI")
    
    var filters = [];
    filters.push(new nlobjSearchFilter('internalid', null, 'is', 2));
  
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

        var q1_reg1 = element.getValue(cols[8]);
        var q2_reg1 = element.getValue(cols[9]);
        var q3_reg1 = element.getValue(cols[10]);
        var q4_reg1 = element.getValue(cols[11]);
        var fyt_reg1 = element.getValue(cols[12]);

        var q1_reg2 = element.getValue(cols[13]);
        var q2_reg2 = element.getValue(cols[14]);
        var q3_reg2 = element.getValue(cols[15]);
        var q4_reg2 = element.getValue(cols[16]);
        var fyt_reg2 = element.getValue(cols[17]);

        var q1_reg3 = element.getValue(cols[18]);
        var q2_reg3 = element.getValue(cols[19]);
        var q3_reg3 = element.getValue(cols[20]);
        var q4_reg3 = element.getValue(cols[21]);
        var fyt_reg3 = element.getValue(cols[22]);

        var p_q1 = element.getValue(cols[23]);
        var p_q2 = element.getValue(cols[24]);
        var p_q3 = element.getValue(cols[25]);
        var p_q4 = element.getValue(cols[26]);
        var p_fyt = element.getValue(cols[27]);

        var pc1 = element.getText(cols[28]);
        var pc2 = element.getText(cols[29]);
        var pc3 = element.getText(cols[30]);

        var q1_pc1 = element.getValue(cols[31]);
        var q2_pc1 = element.getValue(cols[32]);
        var q3_pc1 = element.getValue(cols[33]);
        var q4_pc1 = element.getValue(cols[34]);
        var fyt_pc1 = element.getValue(cols[35]);

        var q1_pc2 = element.getValue(cols[36]);
        var q2_pc2 = element.getValue(cols[37]);
        var q3_pc2 = element.getValue(cols[38]);
        var q4_pc2 = element.getValue(cols[39]);
        var fyt_pc2 = element.getValue(cols[40]);

        var q1_pc3 = element.getValue(cols[41]);
        var q2_pc3 = element.getValue(cols[42]);
        var q3_pc3 = element.getValue(cols[43]);
        var q4_pc3 = element.getValue(cols[44]);
        var fyt_pc3 = element.getValue(cols[45]);

        var content = "<TD>";

        content += "<style type='text/css'>";
        content += ".table_main { border-collapse: collapse; margin: -0.5em -0.7em -0.5em -0.7em;}";
        content += ".label_col { width:193px; text-align:left; padding-top: 7px; padding-left: 18px; padding-bottom: 7px;  }";
        content += ".label_row { font-size: 8pt;}";
        content += ".value_col { text-align:left; padding-left: 10px; padding-right : 10px }";
        content += ".value_row { font-size: 10pt }";
        content += ".divider { height:26px; background-color: rgb(0, 0, 0); color: rgb(0, 0, 0) }";
      content += ".total { color: rgb(255, 0, 0); font-weight: bold }";
        content += "</style>";

        content += "<table class='table_main'>";
        content += "<td class='label_col label'>BY PRODUCT CATEGORY</td>" + "<td class='value_col'>" + p_q1 + "</td>" + "<td class='value_col'>" + p_q2 + "</td>" + "<td class='value_col'>" + p_q3 + "</td>" + "<td class='value_col'>" + p_q4 + "</td>" + "<td class='value_col'>" + p_fyt + "</td>";
        content += "</tr>";
        content += "<tr>";
        content += "<td class='label_col'>" + pc1 + "</td>" + "<td class='value_col'>" + q1_pc1 + "</td>" + "<td class='value_col'>" + q2_pc1 + "</td>" + "<td class='value_col'>" + q3_pc1 + "</td>" + "<td class='value_col'>" + q4_pc1 + "</td>" + "<td class='value_col'>" + fyt_pc1 + "</td>";
        content += "</tr>";
        content += "<tr>";
        content += "<td class='label_col'>" + pc2 + "</td>" + "<td class='value_col'>" + q1_pc2 + "</td>" + "<td class='value_col'>" + q2_pc2 + "</td>" + "<td class='value_col'>" + q3_pc2 + "</td>" + "<td class='value_col'>" + q4_pc2 + "</td>" + "<td class='value_col'>" + fyt_pc2 + "</td>";
        content += "</tr>";
        content += "<tr>";
        content += "<td class='label_col'>" + pc3 + "</td>" + "<td class='value_col'>" + q1_pc3 + "</td>" + "<td class='value_col'>" + q2_pc3 + "</td>" + "<td class='value_col'>" + q3_pc3 + "</td>" + "<td class='value_col'>" + q4_pc3 + "</td>" + "<td class='value_col'>" + fyt_pc3 + "</td>";
        content += "</tr>";
        content += "<tr class='total'>";
        var q1_pc_total = (q1_pc1*1 + q1_pc2*1  + q1_pc3*1) * 1;
        var q2_pc_total = (q2_pc1*1 + q2_pc2*1  + q2_pc3*1) * 1;
        var q3_pc_total = (q3_pc1*1 + q3_pc2*1  + q3_pc3*1) * 1;
        var q4_pc_total = (q4_pc1*1 + q4_pc2*1  + q4_pc3*1) * 1;
        var fyt_pc_total = (fyt_pc1*1 + fyt_pc2*1  + fyt_pc3*1) * 1;
        content += "<td class='label_col'>TOTAL</td>" + "<td class='value_col'>" + q1_pc_total + "</td>" + "<td class='value_col'>" + q2_pc_total + "</td>" + "<td class='value_col'>" + q3_pc_total + "</td>" + "<td class='value_col'>" + q4_pc_total + "</td>" + "<td class='value_col'>" + fyt_pc_total + "</td>";
             content += "<tr style='background: rgb(255, 255, 255);'>";
        content += "<td class='label_col label'>BY REGION</td>" + "<td class='value_col label'>" + q1 + "</td>" + "<td class='value_col label'>" + q2 + "</td>" + "<td class='value_col label'>" + q3 + "</td>" + "<td class='value_col label'>" + q4 + "</td>" + "<td class='value_col label'>" + fyt + "</td>";
        content += "</tr>";
        content += "<tr>";
        content += "<td class='label_col'>" + reg1 + "</td>" + "<td class='value_col'>" + q1_reg1 + "</td>" + "<td class='value_col'>" + q2_reg1 + "</td>" + "<td class='value_col'>" + q3_reg1 + "</td>" + "<td class='value_col'>" + q4_reg1 + "</td>" + "<td class='value_col'>" + fyt_reg1 + "</td>";
        content += "</tr>";
        content += "<tr>";
        content += "<td class='label_col'>" + reg2 + "</td>" + "<td class='value_col'>" + q1_reg2 + "</td>" + "<td class='value_col'>" + q2_reg2 + "</td>" + "<td class='value_col'>" + q3_reg2 + "</td>" + "<td class='value_col'>" + q4_reg2 + "</td>" + "<td class='value_col'>" + fyt_reg2 + "</td>";
        content += "</tr>";
        content += "<tr>";
        content += "<td class='label_col'>" + reg3 + "</td>" + "<td class='value_col'>" + q1_reg3 + "</td>" + "<td class='value_col'>" + q2_reg3 + "</td>" + "<td class='value_col'>" + q3_reg3 + "</td>" + "<td class='value_col'>" + q4_reg3 + "</td>" + "<td class='value_col'>" + fyt_reg3 + "</td>";
        content += "</tr>";
        content += "<tr class='total'>";
        var q1_total = (q1_reg1*1 + q1_reg2*1  + q1_reg3*1) * 1;
        var q2_total = (q2_reg1*1 + q2_reg2*1  + q2_reg3*1) * 1;
        var q3_total = (q3_reg1*1 + q3_reg2*1  + q3_reg3*1) * 1;
        var q4_total = (q4_reg1*1 + q4_reg2*1  + q4_reg3*1) * 1;
        var fyt_total = (fyt_reg1*1 + fyt_reg2*1  + fyt_reg3*1) * 1;
        content += "<td class='label_col'>TOTAL</td>" + "<td class='value_col'>" + q1_total + "</td>" + "<td class='value_col'>" + q2_total + "</td>" + "<td class='value_col'>" + q3_total + "</td>" + "<td class='value_col'>" + q4_total + "</td>" + "<td class='value_col'>" + fyt_total + "</td>";
        content += "</table>";

        content += "</TD>";
        portlet.setHtml( content );
    }
}