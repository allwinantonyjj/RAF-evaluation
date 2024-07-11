/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
/**
 *  * Author: Jobin and Jismi IT Services
 * 
 * Date Created: 05-July-2024
 * 
 */
define(['N/email', 'N/file', 'N/url', 'N/search', 'N/render', 'N/runtime'],
    /**
 * @param{email} email
 * @param{file} file
 * @param{url} url
 */
    (email, file, url, search, render, runtime) => {
        /**
         * Defines the function definition that is executed before record is loaded.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @since 2015.2
         */
        const beforeLoad = (scriptContext) => {

        }

        /**
         * Defines the function definition that is executed before record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const beforeSubmit = (scriptContext) => {

        }

        /**
         * Defines the function definition that is executed after record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const afterSubmit = (scriptContext) => {
            try {
                let queryRec = scriptContext.newRecord;
                let name = queryRec.getValue({
                    fieldId: 'custrecord_jj_name_tuition'
                });
                let country = queryRec.getValue({
                    fieldId: 'custrecord_jj_country_tuition'
                });
                let age = queryRec.getValue({
                    fieldId: 'custrecord_jj_age_tuition'
                });
                let phone = queryRec.getValue({
                    fieldId: 'custrecord_jj_phone_tuition'
                });
                let email = queryRec.getValue({
                    fieldId: 'custrecord_jj_email_tuition'
                });
                let language = queryRec.getValue({
                    fieldId: 'custrecord_jj_language_tuition'
                });
                let baseCurr = queryRec.getValue({
                    fieldId: 'custrecord_jj_base_currency_tuition'
                });
                let transCurr = queryRec.getValue({
                    fieldId: 'custrecord_jj_trans_currency_tuition'
                });
                let feeAmount = queryRec.getValue({
                    fieldId: 'custrecord_jj_fee_amount'
                });
                let exchCurr = queryRec.getValue({
                    fieldId: 'custrecord_jj_exch_rate_tuition'
                });

                let recordUrl = url.resolveRecord({
                    recordType: scriptContext.newRecord.type,
                    recordId: scriptContext.newRecord.id
                });
                log.debug('https://td2920317.app.netsuite.com/' + recordUrl);
                let pdf = `
                            Name-${name} \n
                            Country-${country} \n
                            Age-${age} \n
                            Phone-${phone} \n
                            Email-${email} \n
                            Language-${language} \n
                            Base Currency-${baseCurr} \n
                            Transaction Currency-${transCurr} \n
                            Fee Amount-${feeAmount} \n
                            Exchange Rate-${exchCurr} \n
                            url to record-${recordUrl}
                        `;

                let adminSearch = search.create({
                    type: 'employee',
                    filters: ['role', 'anyof', '3'],
                    columns: ['email']
                });
                let searchResults = adminSearch.run();
                searchResults.each(function (obj) {
                    let emailId = obj.getValue('email');
                    log.debug(emailId);
                    email.send({
                        author: runtime.getCurrentUser().id,
                        body: "New record added to query record" + pdf,
                        recipients: emailId,
                        subject: "RAF TASK"
                        // attachments: [pdf]
                    });
                    return true;
                });
            } catch (error) {
                log.debug('error in afterSubmit', error);
            }

        }

        return { beforeLoad, beforeSubmit, afterSubmit }

    });
