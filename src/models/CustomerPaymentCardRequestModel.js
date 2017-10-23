/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 17.8
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient'

/**
* The CustomerPaymentCardRequestModel model module.
* @module models/CustomerPaymentCardRequestModel
* @version 17.8
*/
export default class CustomerPaymentCardRequestModel {
    /**
    * Constructs a new <code>CustomerPaymentCardRequestModel</code>.
    * Document representing a customer payment card request.
    * @alias module:models/CustomerPaymentCardRequestModel
    * @class
    */
    constructor() {}

    /**
    * Constructs a <code>CustomerPaymentCardRequestModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/CustomerPaymentCardRequestModel} obj Optional instance to populate.
    * @return {module:models/CustomerPaymentCardRequestModel} The populated <code>CustomerPaymentCardRequestModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerPaymentCardRequestModel()

            if (data.hasOwnProperty('card_type')) {
                obj['card_type'] = ApiClient.convertToType(data['card_type'], 'String')
            }
            if (data.hasOwnProperty('credit_card_token')) {
                obj['credit_card_token'] = ApiClient.convertToType(data['credit_card_token'], 'String')
            }
            if (data.hasOwnProperty('expiration_month')) {
                obj['expiration_month'] = ApiClient.convertToType(data['expiration_month'], 'Number')
            }
            if (data.hasOwnProperty('expiration_year')) {
                obj['expiration_year'] = ApiClient.convertToType(data['expiration_year'], 'Number')
            }
            if (data.hasOwnProperty('holder')) {
                obj['holder'] = ApiClient.convertToType(data['holder'], 'String')
            }
            if (data.hasOwnProperty('issue_number')) {
                obj['issue_number'] = ApiClient.convertToType(data['issue_number'], 'String')
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String')
            }
            if (data.hasOwnProperty('valid_from_month')) {
                obj['valid_from_month'] = ApiClient.convertToType(data['valid_from_month'], 'Number')
            }
            if (data.hasOwnProperty('valid_from_year')) {
                obj['valid_from_year'] = ApiClient.convertToType(data['valid_from_year'], 'Number')
            }
        }

        return obj
    }

    /**
    * The payment card type (for example, 'Visa').
    * @member {String} card_type
    */
    card_type = undefined
    /**
    * A credit card token. If a credit card is tokenized, the token can be used to look up the credit card data at the  token store.
    * @member {String} credit_card_token
    */
    credit_card_token = undefined
    /**
    * The month when the payment card expires.
    * @member {Number} expiration_month
    */
    expiration_month = undefined
    /**
    * The year when the payment card expires.
    * @member {Number} expiration_year
    */
    expiration_year = undefined
    /**
    * The payment card holder.
    * @member {String} holder
    */
    holder = undefined
    /**
    * The payment card issue number.
    * @member {String} issue_number
    */
    issue_number = undefined
    /**
    * The payment card number.
    * @member {String} number
    */
    number = undefined
    /**
    * The payment card valid from month.
    * @member {Number} valid_from_month
    */
    valid_from_month = undefined
    /**
    * The payment card valid from year.
    * @member {Number} valid_from_year
    */
    valid_from_year = undefined
}
