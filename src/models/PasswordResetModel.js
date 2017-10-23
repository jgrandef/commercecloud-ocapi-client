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
* The PasswordResetModel model module.
* @module models/PasswordResetModel
* @version 17.8
*/
export default class PasswordResetModel {
    /**
    * Constructs a new <code>PasswordResetModel</code>.
    * Document representing a password reset request.
    * @alias module:models/PasswordResetModel
    * @class
    */
    constructor() {}

    /**
    * Constructs a <code>PasswordResetModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/PasswordResetModel} obj Optional instance to populate.
    * @return {module:models/PasswordResetModel} The populated <code>PasswordResetModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PasswordResetModel()

            if (data.hasOwnProperty('identification')) {
                obj['identification'] = ApiClient.convertToType(data['identification'], 'String')
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String')
            }
        }

        return obj
    }

    /**
    * The customer's login or the customer's email depending on the type value.
    * @member {String} identification
    */
    identification = undefined
    /**
    * The type of customer identification.
    * @member {module:models/PasswordResetModel.TypeEnum} type
    */
    type = undefined

    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {

        /**
         * value: "email"
         * @const
         */
        "email": "email",

        /**
         * value: "login"
         * @const
         */
        "login": "login"
    }
}
