function listPortlet(portlet, column)
{
    portlet.setTitle("All Sales Rep Quota vs Actual");

    var employeeId = nlapiGetUser();
    var employeeRole = nlapiGetRole();

    var user_filters = [];
    user_filters.push(new Array('custrecord_kpi_employee', 'noneOf', '@NONE@'));
    user_filters.push("AND");
    user_filters.push(new Array('custrecord_kpi_show_rep', 'is', 'T'));
 
    /********************* BUDGET ********************/
    var cols = [];
    // Budget Label
    cols.push(new nlobjSearchColumn('custrecord_kpi_q1_label'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_q2_label'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_q3_label'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_q4_label'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_fyt_label_1'));

    // Actual and Diff Label 
    cols.push(new nlobjSearchColumn('custrecord_kpi_ac_label1'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_ac_label2'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_ac_label3'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_ac_label4'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_ac_label5'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_diff_label1'));
    
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

    // Actual Search Link
    cols.push(new nlobjSearchColumn('custrecord_kpi_as_pc1'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_as_pc2'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_as_pc3'));
    cols.push(new nlobjSearchColumn('custrecord_kpi_employee'));

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

    var q1_pc1_total = 0;
    var q2_pc1_total = 0;
    var q3_pc1_total = 0;
    var q4_pc1_total = 0;
    var fyt_pc1_total = 0;
    var q1_pc2_total = 0;
    var q2_pc2_total = 0;
    var q3_pc2_total = 0;
    var q4_pc2_total = 0;
    var fyt_pc2_total = 0;
    var q1_pc3_total = 0;
    var q2_pc3_total = 0;
    var q3_pc3_total = 0;
    var q4_pc3_total = 0;
    var fyt_pc3_total = 0;

    var q1_pc1_act_total = 0;
    var q2_pc1_act_total = 0;
    var q3_pc1_act_total = 0;
    var q4_pc1_act_total = 0;
    var fyt_pc1_act_total = 0;
    var q1_pc2_act_total = 0;
    var q2_pc2_act_total = 0;
    var q3_pc2_act_total = 0;
    var q4_pc2_act_total = 0;
    var fyt_pc2_act_total = 0;
    var q1_pc3_act_total = 0;
    var q2_pc3_act_total = 0;
    var q3_pc3_act_total = 0;
    var q4_pc3_act_total = 0;
    var fyt_pc3_act_total = 0;
    
    var salesRepIdList = [];
    var results = nlapiSearchRecord('customrecord_kpi_portlet', null, user_filters, cols);
    if (results && results.length > 0)
    {   
         for (var i = 0; i < results.length; i ++)
        {
            var element = results[i];
            var salesRepId =  element.getValue(cols[29]);
            salesRepIdList.push(salesRepId);
        }
        var portfolioActObj_q1 = getPortfolioActual('4/1/2018', '6/30/2018', salesRepIdList);
        var portfolioActObj_q2 = getPortfolioActual('7/1/2018', '9/30/2018', salesRepIdList);
        var portfolioActObj_q3 = getPortfolioActual('10/1/2018', '12/31/2018', salesRepIdList);
        var portfolioActObj_q4 = getPortfolioActual('1/1/2019', '3/31/2019', salesRepIdList);
        var riskActObj_q1 = getRiskActual('4/1/2018', '6/30/2018', salesRepIdList);
        var riskActObj_q2 = getRiskActual('7/1/2018', '9/30/2018', salesRepIdList);
        var riskActObj_q3 = getRiskActual('10/1/2018', '12/31/2018', salesRepIdList);
        var riskActObj_q4 = getRiskActual('1/1/2019', '3/31/2019', salesRepIdList);
        var regActObj_q1 = getRegActual('4/1/2018', '6/30/2018', salesRepIdList);
        var regActObj_q2 = getRegActual('7/1/2018', '9/30/2018', salesRepIdList);
        var regActObj_q3 = getRegActual('10/1/2018', '12/31/2018', salesRepIdList);
        var regActObj_q4 = getRegActual('1/1/2019', '3/31/2019', salesRepIdList);

        var content = createMenu(results[0], cols);
        for (var i = 0; i < results.length; i ++)
        {
            var element = results[i];
            
            q1_pc1 = element.getValue(cols[11]) * 1;
            q2_pc1 = element.getValue(cols[12]) * 1;
            q3_pc1 = element.getValue(cols[13]) * 1;
            q4_pc1 = element.getValue(cols[14]) * 1;
            fyt_pc1 = element.getValue(cols[15]) * 1;

            q1_pc1_total += q1_pc1;
            q2_pc1_total += q2_pc1;
            q3_pc1_total += q3_pc1;
            q4_pc1_total += q4_pc1;
            fyt_pc1_total += fyt_pc1;

            q1_pc2 = element.getValue(cols[16]) * 1;
            q2_pc2 = element.getValue(cols[17]) * 1;
            q3_pc2 = element.getValue(cols[18]) * 1;
            q4_pc2 = element.getValue(cols[19]) * 1;
            fyt_pc2 = element.getValue(cols[20]) * 1;

            q1_pc2_total += q1_pc2;
            q2_pc2_total += q2_pc2;
            q3_pc2_total += q3_pc2;
            q4_pc2_total += q4_pc2;
            fyt_pc2_total += fyt_pc2;

            q1_pc3 = element.getValue(cols[21]) * 1;
            q2_pc3 = element.getValue(cols[22]) * 1;
            q3_pc3 = element.getValue(cols[23]) * 1;
            q4_pc3 = element.getValue(cols[24]) * 1;
            fyt_pc3 = element.getValue(cols[25]) * 1;

            q1_pc3_total += q1_pc3;
            q2_pc3_total += q2_pc3;
            q3_pc3_total += q3_pc3;
            q4_pc3_total += q4_pc3;
            fyt_pc3_total += fyt_pc3;

            var link_pc_1 =  element.getValue(cols[26]);
            var link_pc_2 =  element.getValue(cols[27]);
            var link_pc_3 =  element.getValue(cols[28]);
        
            var salesRepId =  element.getValue(cols[29]);
            var salesRepName =  element.getText(cols[29]);
            
            var q1_param = "&CUSTBODY_LICENSE_START_DATE_OPP=FQ1TFY&Opprtnty_SALESTEAMMEMBER=" + salesRepId;
            var q2_param = "&CUSTBODY_LICENSE_START_DATE_OPP=FQ2TFY&Opprtnty_SALESTEAMMEMBER=" + salesRepId;
            var q3_param = "&CUSTBODY_LICENSE_START_DATE_OPP=FQ3TFY&Opprtnty_SALESTEAMMEMBER=" + salesRepId;
            var q4_param = "&CUSTBODY_LICENSE_START_DATE_OPP=FQ4TFY&Opprtnty_SALESTEAMMEMBER=" + salesRepId;
            var fy_param = "&CUSTBODY_LICENSE_START_DATE_OPP=TFY&Opprtnty_SALESTEAMMEMBER=" + salesRepId;
            
            q1_pc1_act = (portfolioActObj_q1[salesRepId] != undefined)?portfolioActObj_q1[salesRepId]:0;
            q2_pc1_act = (portfolioActObj_q2[salesRepId] != undefined)?portfolioActObj_q2[salesRepId]:0;
            q3_pc1_act = (portfolioActObj_q3[salesRepId] != undefined)?portfolioActObj_q3[salesRepId]:0;
            q4_pc1_act = (portfolioActObj_q4[salesRepId] != undefined)?portfolioActObj_q4[salesRepId]:0;

            q1_pc2_act = (riskActObj_q1[salesRepId] != undefined)?riskActObj_q1[salesRepId]:0;
            q2_pc2_act = (riskActObj_q2[salesRepId] != undefined)?riskActObj_q2[salesRepId]:0;
            q3_pc2_act = (riskActObj_q3[salesRepId] != undefined)?riskActObj_q3[salesRepId]:0;
            q4_pc2_act = (riskActObj_q4[salesRepId] != undefined)?riskActObj_q4[salesRepId]:0;

            q1_pc3_act = (regActObj_q1[salesRepId] != undefined)?regActObj_q1[salesRepId]:0;
            q2_pc3_act = (regActObj_q2[salesRepId] != undefined)?regActObj_q2[salesRepId]:0;
            q3_pc3_act = (regActObj_q3[salesRepId] != undefined)?regActObj_q3[salesRepId]:0;
            q4_pc3_act = (regActObj_q4[salesRepId] != undefined)?regActObj_q4[salesRepId]:0;

            fyt_pc1_act = q1_pc1_act + q2_pc1_act + q3_pc1_act + q4_pc1_act;
            fyt_pc2_act = q1_pc2_act + q2_pc2_act + q3_pc2_act + q4_pc2_act;
            fyt_pc3_act = q1_pc3_act + q2_pc3_act + q3_pc3_act + q4_pc3_act;
            
            q1_pc1_act_total += q1_pc1_act;
            q2_pc1_act_total += q2_pc1_act;
            q3_pc1_act_total += q3_pc1_act;
            q4_pc1_act_total += q4_pc1_act;
            fyt_pc1_act_total += fyt_pc1_act;
            q1_pc2_act_total += q1_pc2_act;
            q2_pc2_act_total += q2_pc2_act;
            q3_pc2_act_total += q3_pc2_act;
            q4_pc2_act_total += q4_pc2_act;
            fyt_pc2_act_total += fyt_pc2_act;
            q1_pc3_act_total += q1_pc3_act;
            q2_pc3_act_total += q2_pc3_act;
            q3_pc3_act_total += q3_pc3_act;
            q4_pc3_act_total += q4_pc3_act;
            fyt_pc3_act_total += fyt_pc3_act;
            
    /****************** Portfolio Solutions *******************/
            content += "<tr>";
            content += "<td class='value_col_2'>" + salesRepName + "</td>";
            content += "<td class='value_col budget_col'>" + addCommas(parseFloat(q1_pc1*1)) + "</td>";
            content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_1+q1_param +"'>" + addCommas(parseFloat(q1_pc1_act*1)) + "</a></td>";
            content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q1_pc1_act*1 / q1_pc1 * 100))) + "%</td>";

            content += "<td class='value_col budget_col'>" + addCommas(parseFloat(q2_pc1*1)) + "</td>";
            content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_1+q2_param +"'>" + addCommas(parseFloat(q2_pc1_act*1)) + "</a></td>";
            content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q2_pc1_act*1 / q2_pc1 * 100))) + "%</td>";

            content += "<td class='value_col budget_col'>" + addCommas(parseFloat(q3_pc1*1)) + "</td>";
            content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_1+q3_param +"'>" + addCommas(parseFloat(q3_pc1_act*1)) + "</a></td>";
            content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q3_pc1_act*1 / q3_pc1 * 100))) + "%</td>";

            content += "<td class='value_col budget_col'>" + addCommas(parseFloat(q4_pc1*1)) + "</td>";
            content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_1+q4_param +"'>" + addCommas(parseFloat(q4_pc1_act*1)) + "</a></td>";
            content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q4_pc1_act*1 / q4_pc1 * 100))) + "%</td>";

            content += "<td class='value_col budget_col'>" + addCommas(parseFloat(fyt_pc1*1)) + "</td>";
            content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_1+fy_param +"'>" + addCommas(parseFloat(fyt_pc1_act*1)) + "</a></td>";
            content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(fyt_pc1_act*1 / fyt_pc1 * 100))) + "%</td>";
     
    /****************** Regulatory Solutions ******************/
            content += "<td class='value_col budget_col'>" + addCommas(parseFloat(q1_pc2*1)) + "</td>";
            content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_2+q1_param +"'>" + addCommas(parseFloat(q1_pc2_act*1)) + "</a></td>";
            content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q1_pc2_act*1/q1_pc2*100))) + "%</td>";

            content += "<td class='value_col budget_col'>" + addCommas(parseFloat(q2_pc2*1)) + "</td>";
            content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_2+q2_param +"'>"  + addCommas(parseFloat(q2_pc2_act*1)) + "</a></td>";
            content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q2_pc2_act*1/q2_pc2*100))) + "%</td>";

            content += "<td class='value_col budget_col'>" + addCommas(parseFloat(q3_pc2*1)) + "</td>";
            content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_2+q3_param +"'>"  + addCommas(parseFloat(q3_pc2_act*1)) + "</a></td>";
            content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q3_pc2_act*1/q3_pc2*100))) + "%</td>";

            content += "<td class='value_col budget_col'>" + addCommas(parseFloat(q4_pc2*1)) + "</td>";
            content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_2+q4_param +"'>" + addCommas(parseFloat(q4_pc2_act*1)) + "</a></td>";
            content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q4_pc2_act*1/q4_pc2*100))) + "%</td>";

            content += "<td class='value_col budget_col'>" + addCommas(parseFloat(fyt_pc2*1)) + "</td>";
            content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_2+fy_param +"'>"  + addCommas(parseFloat(fyt_pc2_act*1)) + "</a></td>";
            content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(fyt_pc2_act*1/fyt_pc2*100))) + "%</td>";
     
    /****************** Regulatory Solutions ******************/
            content += "<td class='value_col budget_col'>" + addCommas(parseFloat(q1_pc3*1)) + "</td>";
            content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_3+q1_param +"'>"  + addCommas(parseFloat(q1_pc3_act*1)) + "</a></td>";
            content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q1_pc3_act*1/q1_pc3*100))) + "%</td>";

            content += "<td class='value_col budget_col'>" + addCommas(parseFloat(q2_pc3*1)) + "</td>";
            content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_3+q2_param +"'>" + addCommas(parseFloat(q2_pc3_act*1)) + "</a></td>";
            content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q2_pc3_act*1/q2_pc3*100))) + "%</td>";

            content += "<td class='value_col budget_col'>" + addCommas(parseFloat(q3_pc3*1)) + "</td>";
            content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_3+q3_param +"'>" + addCommas(parseFloat(q3_pc3_act*1)) + "</a></td>";
            content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q3_pc3_act*1/q3_pc3*100))) + "%</td>";

            content += "<td class='value_col budget_col'>" + addCommas(parseFloat(q4_pc3*1)) + "</td>";
            content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_3+q4_param +"'>" + addCommas(parseFloat(q4_pc3_act*1)) + "</a></td>";
            content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(q4_pc3_act*1/q4_pc3*100))) + "%</td>";

            content += "<td class='value_col budget_col'>" + addCommas(parseFloat(fyt_pc3*1)) + "</td>";
            content += "<td class='value_col actual_col'><a target='_blank' href='"+ link_pc_3+fy_param +"'>" + addCommas(parseFloat(fyt_pc3_act*1)) + "</a></td>";
            content += "<td class='value_col diff'>" + addCommas(parseFloat(Math.round(fyt_pc3_act*1/fyt_pc3*100))) + "%</td>";
            content += "</tr>";
        }
    /************************************** TOTAL ***************************************/

        content += "<tr class='total'>";
        content += "<td class='value_col_3'>TOTAL</td>";
        // Portfolio
        content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q1_pc1_total)) + "</td>";
        content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q1_pc1_act_total)) + "</td>";
        content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q1_pc1_act_total*1/q1_pc1_total*100))) + "%</td>";

        content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q2_pc1_total)) + "</td>";
        content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q2_pc1_act_total)) + "</td>";
        content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q2_pc1_act_total*1/q2_pc1_total*100))) + "%</td>";

        content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q3_pc1_total)) + "</td>";
        content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q3_pc1_act_total)) + "</td>";
        content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q3_pc1_act_total*1/q3_pc1_total*100))) + "%</td>";

        content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q4_pc1_total)) + "</td>";
        content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q4_pc1_act_total)) + "</td>";
        content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q4_pc1_act_total*1/q4_pc1_total*100))) + "%</td>";

        content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(fyt_pc1_total)) + "</td>";
        content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(fyt_pc1_act_total)) + "</td>";
        content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(fyt_pc1_act_total*1/fyt_pc1_total*100))) + "%</td>";
        // Risk
        content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q1_pc2_total)) + "</td>";
        content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q1_pc2_act_total)) + "</td>";
        content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q1_pc2_act_total*1/q1_pc2_total*100))) + "%</td>";

        content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q2_pc2_total)) + "</td>";
        content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q2_pc2_act_total)) + "</td>";
        content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q2_pc2_act_total*1/q2_pc2_total*100))) + "%</td>";

        content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q3_pc2_total)) + "</td>";
        content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q3_pc2_act_total)) + "</td>";
        content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q3_pc2_act_total*1/q3_pc2_total*100))) + "%</td>";

        content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q4_pc2_total)) + "</td>";
        content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q4_pc2_act_total)) + "</td>";
        content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q4_pc2_act_total*1/q4_pc2_total*100))) + "%</td>";

        content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(fyt_pc2_total)) + "</td>";
        content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(fyt_pc2_act_total)) + "</td>";
        content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(fyt_pc2_act_total*1/fyt_pc2_total*100))) + "%</td>";
        // Reg
        content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q1_pc3_total)) + "</td>";
        content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q1_pc3_act_total)) + "</td>";
        content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q1_pc3_act_total*1/q1_pc3_total*100))) + "%</td>";

        content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q2_pc3_total)) + "</td>";
        content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q2_pc3_act_total)) + "</td>";
        content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q2_pc3_act_total*1/q2_pc3_total*100))) + "%</td>";

        content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q3_pc3_total)) + "</td>";
        content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q3_pc3_act_total)) + "</td>";
        content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q3_pc3_act_total*1/q3_pc3_total*100))) + "%</td>";

        content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(q4_pc3_total)) + "</td>";
        content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(q4_pc3_act_total)) + "</td>";
        content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(q4_pc3_act_total*1/q4_pc3_total*100))) + "%</td>";

        content += "<td class='value_col_3 budget_col'>" + addCommas(parseFloat(fyt_pc3_total)) + "</td>";
        content += "<td class='value_col_3 actual_col'>" + addCommas(parseFloat(fyt_pc3_act_total)) + "</td>";
        content += "<td class='value_col_3 diff'>" + addCommas(parseFloat(Math.round(fyt_pc3_act_total*1/fyt_pc3_total*100))) + "%</td>";

        content += "<tr style='background: rgb(255, 255, 255);'>";
        content += "</table>";
   /*     content += "<script>";
        content += "alert('mkmkmk');";
        content += "$('.diff_col').unbind().bind('click', function(){";
        content += "alert( $(this).attr('class') );";
        content += "});";
        content += "</script>";*/
        content += "<iscript src='https://system.na3.netsuite.com/core/media/media.nl?id=3150544&c=ACCT77314&h=cfdf56c8e8e850ddce91&_xt=.js' async></iscript>";
        content += "</TD>";
        portlet.setHtml( content );
    }
}

function getPortfolioActual(startDate, endDate, employeeIdList)
{
    var empListObj = new Object;
    for (var i = 0; i < employeeIdList.length; i ++) {
        var employeeId = employeeIdList[i] * 1;
        empListObj[employeeId] = 0;
    }

    var filters = [];
    filters.push(new nlobjSearchFilter('custbody_license_start_date_opp', null, 'within', [startDate, endDate]));
    filters.push(new nlobjSearchFilter('salesteammember', null, 'anyof', employeeIdList));
    var results = nlapiSearchRecord( 'opportunity', 'customsearch2569', filters);
    
    if (results && results.length > 0)
    {   
        var cols = results[0].getAllColumns();
        for (var i = 0; i < results.length; i ++) 
        {
            var element = results[i];
            var tmpEmpId = element.getValue(cols[4]) * 1;
            var actual = element.getValue(cols[6]) * 1;

            if (empListObj[tmpEmpId] != undefined && empListObj[tmpEmpId] != 'undefined') {
                empListObj[tmpEmpId] += actual;
            } 
        }
    }

    return empListObj;
}

function getRiskActual(startDate, endDate, employeeIdList)
{
    var empListObj = new Object;
    for (var i = 0; i < employeeIdList.length; i ++) {
        var employeeId = employeeIdList[i] * 1;
        empListObj[employeeId] = 0;
    }

    var filters = [];
    filters.push(new nlobjSearchFilter('custbody_license_start_date_opp', null, 'within', [startDate, endDate]));
    filters.push(new nlobjSearchFilter('salesteammember', null, 'anyof', employeeIdList));
    var results = nlapiSearchRecord( 'opportunity', 'customsearch2568', filters);
    
    if (results && results.length > 0)
    {   
        var cols = results[0].getAllColumns();
        for (var i = 0; i < results.length; i ++) 
        {
            var element = results[i];
            var tmpEmpId = element.getValue(cols[4]) * 1;
            var actual = element.getValue(cols[6]) * 1;

            if (empListObj[tmpEmpId] != undefined && empListObj[tmpEmpId] != 'undefined') {
                empListObj[tmpEmpId] += actual;
            } 
        }
    }

    return empListObj;
}

function getRegActual(startDate, endDate, employeeIdList)
{
    var empListObj = new Object;
    for (var i = 0; i < employeeIdList.length; i ++) {
        var employeeId = employeeIdList[i] * 1;
        empListObj[employeeId] = 0;
    }

    var filters = [];
    filters.push(new nlobjSearchFilter('custbody_license_start_date_opp', null, 'within', [startDate, endDate]));
    filters.push(new nlobjSearchFilter('salesteammember', null, 'anyof', employeeIdList));
    var results = nlapiSearchRecord( 'opportunity', 'customsearch2570', filters);
    
    if (results && results.length > 0)
    {   
        var cols = results[0].getAllColumns();
        for (var i = 0; i < results.length; i ++) 
        {
            var element = results[i];
            var tmpEmpId = element.getValue(cols[4]) * 1;
            var actual = element.getValue(cols[6]) * 1;

            if (empListObj[tmpEmpId] != undefined && empListObj[tmpEmpId] != 'undefined') {
                empListObj[tmpEmpId] += actual;
            } 
        }
    }

    return empListObj;
}

function createMenu(element, cols)
{
    var p_q1 = element.getValue(cols[0]);
    var p_q2 = element.getValue(cols[1]);
    var p_q3 = element.getValue(cols[2]);
    var p_q4 = element.getValue(cols[3]);
    var p_fyt = element.getValue(cols[4]);

    var q1_act_label = element.getValue(cols[5]);
    var q2_act_label = element.getValue(cols[6]);
    var q3_act_label = element.getValue(cols[7]);
    var q4_act_label = element.getValue(cols[8]);
    var fyt_act_label = element.getValue(cols[9]);
    var diff_label = element.getValue(cols[10]);

    var content = "<TD>";
    content += "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>"
    content += "<style type='text/css'>";
    content += ".table_main { border-collapse: collapse; margin: -0.5em -0.7em -0.5em -0.7em;}";
    content += ".label_col { width:193px; text-align:left; padding-top: 7px; padding-left: 18px; padding-bottom: 7px;  font-weight: bold  }";
    content += ".label_row { font-size: 8pt;}";
    content += ".value_col { text-align:left; padding-left: 10px; padding-right : 10px; color: rgb(61, 116, 172)}";
    content += ".value_col_2 { text-align:left; padding-left: 10px; padding-right : 10px;}";
    content += ".value_col_1 { text-align:left; padding-left: 10px; padding-right : 10px; font-weight: bold}";
    content += ".value_col_3 { text-align:left; padding-left: 10px; border-bottom: double; border-top: 1.5px solid red; padding-right : 10px; color: rgb(255, 0, 0)}";
    content += ".diff_col { text-align:left; padding-left: 10px; padding-right : 10px; font-weight: bold}";
    content += ".value_row { font-size: 10pt }";
    content += ".divider { height:26px; background-color: rgb(0, 0, 0); color: rgb(0, 0, 0) }";
    content += ".total { color: rgb(255, 0, 0); font-weight: bold }";
    content += ".diff { color: rgb(255, 0, 0); font-weight: bold }";
    content += ".budget_col { background-color: rgb(212, 240, 253);}";
    content += ".actual_col { background-color: rgb(214, 245, 214);}";
    content += ".menu_title_col { border-left: 1px solid rgb(212, 240, 253); border-bottom: 1px solid rgb(212, 240, 253); text-align:center; font-weight: bold}";
  content += ".diff_col:hover{cursor:pointer}";
    content += "</style>";
    content += "<table id='table_budget_actual' class='table_main'>";

/******************** Menu ******************/       
    content += "<tr>";
    content += "<td class='value_col_1'><div style='width:150px'>Employee</div></td>";
    content += "<td colspan=15 class='menu_title_col' style='color:black; background-color: rgb(196, 211, 245)'>Portfolio Solutions</td>";
    content += "<td colspan=15 class='menu_title_col' style='color:black; background-color: #cccccc'>Risk Solutions</td>";
    content += "<td colspan=15 class='menu_title_col' style='color:black; background-color: #bbe0bb'>Regulatory Solutions</td>";
    content += "</tr>";

    content += "<tr>";
    content += "<td class='value_col_1'></td>";
    content += "<td class='value_col_1 budget_col'>" + p_q1 + "</td>";
    content += "<td class='value_col_1 actual_col'>" + q1_act_label + "</td>";
    content += "<td class='diff_col' id='test'>" + diff_label + 'AAA' + "</td>";
 //   content += "<script type='text/javascript'>function testFunc(){alert('kkk');}</script>";
    content += "<td class='value_col_1 budget_col'>" + p_q2 + "</td>";
    content += "<td class='value_col_1 actual_col'>" + q2_act_label + "</td>";
    content += "<td class='diff_col'>" + diff_label + "</td>";
    content += "<td class='value_col_1 budget_col'>" + p_q3 + "</td>";
    content += "<td class='value_col_1 actual_col'>" + q3_act_label + "</td>";
    content += "<td class='diff_col'>" + diff_label + "</td>"; 
    content += "<td class='value_col_1 budget_col'>" + p_q4 + "</td>";
    content += "<td class='value_col_1 actual_col'>" + q4_act_label + "</td>";
    content += "<td class='diff_col'>" + diff_label + "</td>";
    content += "<td class='value_col_1 budget_col'>" + p_fyt + "</td>";
    content += "<td class='value_col_1 actual_col'>" + fyt_act_label + "</td>";
    content += "<td class='diff_col'>" + diff_label + "</td>";

    content += "<td class='value_col_1 budget_col'>" + p_q1 + "</td>";
    content += "<td class='value_col_1 actual_col'>" + q1_act_label + "</td>";
    content += "<td class='diff_col'>" + diff_label + "</td>";
    content += "<td class='value_col_1 budget_col'>" + p_q2 + "</td>";
    content += "<td class='value_col_1 actual_col'>" + q2_act_label + "</td>";
    content += "<td class='diff_col'>" + diff_label + "</td>";
    content += "<td class='value_col_1 budget_col'>" + p_q3 + "</td>";
    content += "<td class='value_col_1 actual_col'>" + q3_act_label + "</td>";
    content += "<td class='diff_col'>" + diff_label + "</td>"; 
    content += "<td class='value_col_1 budget_col'>" + p_q4 + "</td>";
    content += "<td class='value_col_1 actual_col'>" + q4_act_label + "</td>";
    content += "<td class='diff_col'>" + diff_label + "</td>";
    content += "<td class='value_col_1 budget_col'>" + p_fyt + "</td>";
    content += "<td class='value_col_1 actual_col'>" + fyt_act_label + "</td>";
    content += "<td class='diff_col'>" + diff_label + "</td>";

    content += "<td class='value_col_1 budget_col'>" + p_q1 + "</td>";
    content += "<td class='value_col_1 actual_col'>" + q1_act_label + "</td>";
    content += "<td class='diff_col'>" + diff_label + "</td>";
    content += "<td class='value_col_1 budget_col'>" + p_q2 + "</td>";
    content += "<td class='value_col_1 actual_col'>" + q2_act_label + "</td>";
    content += "<td class='diff_col'>" + diff_label + "</td>";
    content += "<td class='value_col_1 budget_col'>" + p_q3 + "</td>";
    content += "<td class='value_col_1 actual_col'>" + q3_act_label + "</td>";
    content += "<td class='diff_col'>" + diff_label + "</td>"; 
    content += "<td class='value_col_1 budget_col'>" + p_q4 + "</td>";
    content += "<td class='value_col_1 actual_col'>" + q4_act_label + "</td>";
    content += "<td class='diff_col'>" + diff_label + "</td>";
    content += "<td class='value_col_1 budget_col'>" + p_fyt + "</td>";
    content += "<td class='value_col_1 actual_col'>" + fyt_act_label + "</td>";
    content += "<td class='diff_col'>" + diff_label + "</td>";
    content += "</tr>";
    
    

    return content;
}

function getActualPerPeriod(savedSearchId, startDate, endDate, colNum, employeeIdList)
{
    var filters = [];
    filters.push(new nlobjSearchFilter('custbody_license_start_date_opp', null, 'within', [startDate, endDate]));
    filters.push(new nlobjSearchFilter('salesteammember', null, 'anyof', employeeIdList));
    var results = nlapiSearchRecord( 'opportunity', savedSearchId, filters);
    
    var total = 0;
    if (results && results.length > 0)
    {   
        var cols = results[0].getAllColumns();
        for (var i = 0; i < results.length; i ++) 
        {
            var element = results[i];
            var actual = element.getValue(cols[colNum]) * 1;
            total += actual;
        }
    }

    return total * 1;
}

function dLog(title, details)
{
    nlapiLogExecution('Debug', title, details);
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