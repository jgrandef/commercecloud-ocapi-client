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
* The StatusModel model module.
* @module models/StatusModel
* @version 17.8
*/
export default class StatusModel {
    /**
    * Constructs a new <code>StatusModel</code>.
    * Document representing a status of an object.
    * @alias module:models/StatusModel
    * @class
    */
    constructor() {}

    /**
    * Constructs a <code>StatusModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/StatusModel} obj Optional instance to populate.
    * @return {module:models/StatusModel} The populated <code>StatusModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StatusModel()

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String')
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String')
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number')
            }
        }
        return obj
    }

    /**
    * The status code.
    * @member {String} code
    */
    code = undefined
    /**
    * The status message.
    * @member {String} message
    */
    message = undefined
    /**
    * The status.    For more information on the status values see dw.system.Status.OK and  dw.system.Status.ERROR.
    * @member {Number} status
    */
    status = undefined
}
