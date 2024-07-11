/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
/**
 *  * Author: Jobin and Jismi IT Services
 * 
 * Date Created: 05-July-2024
 * 
 */
define(['N/currentRecord', 'N/record', 'N/search', 'N/url'],
    /**
     * @param{currentRecord} currentRecord
     * @param{email} email
     * @param{file} file
     * @param{log} log
     * @param{record} record
     * @param{search} search
     * @param{url} url
     */
    function (currentRecord, record, search, url) {

        /**
         * Function to be executed after page is initialized.
         *
         * @param {Object} scriptContext
         * @param {Record} scriptContext.currentRecord - Current form record
         * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
         *
         * @since 2015.2
         */
        function pageInit(scriptContext) {

        }

        /**
         * Function to be executed when field is changed.
         *
         * @param {Object} scriptContext
         * @param {Record} scriptContext.currentRecord - Current form record
         * @param {string} scriptContext.sublistId - Sublist name
         * @param {string} scriptContext.fieldId - Field name
         * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
         * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
         *
         * @since 2015.2
         */
        function fieldChanged(scriptContext) {
            let queryRec = scriptContext.currentRecord;
            try {
                if (scriptContext.fieldId == 'custrecord_jj_language_tuition') {
                    let languageChosen = queryRec.getValue({
                        fieldId: 'custrecord_jj_language_tuition'
                    });

                    let feeDetailsRec = record.load({
                        type: 'customrecord_jj_tuition_fee_details',
                        id: 1,
                        isDynamic: true
                    });
                    let engFee = feeDetailsRec.getValue({
                        fieldId: 'custrecord_jj_english_tuition'
                    });
                    let freFee = feeDetailsRec.getValue({
                        fieldId: 'custrecord_jj_french_tuition'
                    });
                    let gerFee = feeDetailsRec.getValue({
                        fieldId: 'custrecord_jj_german_tuition'
                    });

                    if (languageChosen == 1) {
                        queryRec.setValue({
                            fieldId: 'custrecord_jj_fee_amount',
                            value: engFee,
                        });
                    }
                    else if (languageChosen == 2) {
                        queryRec.setValue({
                            fieldId: 'custrecord_jj_fee_amount',
                            value: freFee,
                        });
                    }
                    else if (languageChosen == 3) {
                        queryRec.setValue({
                            fieldId: 'custrecord_jj_fee_amount',
                            value: gerFee,
                        });
                    }
                }
            } catch (error) {
                log.debug('error in field changed', error);
            }
        }

        /**
         * Function to be executed when field is slaved.
         *
         * @param {Object} scriptContext
         * @param {Record} scriptContext.currentRecord - Current form record
         * @param {string} scriptContext.sublistId - Sublist name
         * @param {string} scriptContext.fieldId - Field name
         *
         * @since 2015.2
         */
        function postSourcing(scriptContext) {

        }

        /**
         * Function to be executed after sublist is inserted, removed, or edited.
         *
         * @param {Object} scriptContext
         * @param {Record} scriptContext.currentRecord - Current form record
         * @param {string} scriptContext.sublistId - Sublist name
         *
         * @since 2015.2
         */
        function sublistChanged(scriptContext) {

        }

        /**
         * Function to be executed after line is selected.
         *
         * @param {Object} scriptContext
         * @param {Record} scriptContext.currentRecord - Current form record
         * @param {string} scriptContext.sublistId - Sublist name
         *
         * @since 2015.2
         */
        function lineInit(scriptContext) {

        }

        /**
         * Validation function to be executed when field is changed.
         *
         * @param {Object} scriptContext
         * @param {Record} scriptContext.currentRecord - Current form record
         * @param {string} scriptContext.sublistId - Sublist name
         * @param {string} scriptContext.fieldId - Field name
         * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
         * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
         *
         * @returns {boolean} Return true if field is valid
         *
         * @since 2015.2
         */
        function validateField(scriptContext) {

        }

        /**
         * Validation function to be executed when sublist line is committed.
         *
         * @param {Object} scriptContext
         * @param {Record} scriptContext.currentRecord - Current form record
         * @param {string} scriptContext.sublistId - Sublist name
         *
         * @returns {boolean} Return true if sublist line is valid
         *
         * @since 2015.2
         */
        function validateLine(scriptContext) {

        }

        /**
         * Validation function to be executed when sublist line is inserted.
         *
         * @param {Object} scriptContext
         * @param {Record} scriptContext.currentRecord - Current form record
         * @param {string} scriptContext.sublistId - Sublist name
         *
         * @returns {boolean} Return true if sublist line is valid
         *
         * @since 2015.2
         */
        function validateInsert(scriptContext) {

        }

        /**
         * Validation function to be executed when record is deleted.
         *
         * @param {Object} scriptContext
         * @param {Record} scriptContext.currentRecord - Current form record
         * @param {string} scriptContext.sublistId - Sublist name
         *
         * @returns {boolean} Return true if sublist line is valid
         *
         * @since 2015.2
         */
        function validateDelete(scriptContext) {

        }

        /**
         * Validation function to be executed when record is saved.
         *
         * @param {Object} scriptContext
         * @param {Record} scriptContext.currentRecord - Current form record
         * @returns {boolean} Return true if record is valid
         *
         * @since 2015.2
         */
        function saveRecord(scriptContext) {

        }

        return {
            // pageInit: pageInit,
            fieldChanged: fieldChanged
            // postSourcing: postSourcing,
            // sublistChanged: sublistChanged,
            // lineInit: lineInit,
            // validateField: validateField,
            // validateLine: validateLine,
            // validateInsert: validateInsert,
            // validateDelete: validateDelete,
            // saveRecord: saveRecord
        };

    });
