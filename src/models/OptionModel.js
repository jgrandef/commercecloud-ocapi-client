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
import OptionValueModel from './OptionValueModel'

/**
* The OptionModel model module.
* @module models/OptionModel
* @version 17.8
*/
export default class OptionModel {
    /**
    * Constructs a new <code>OptionModel</code>.
    * Document representing a product option.
    * @alias module:models/OptionModel
    * @class
    * @param id {String} The id of the option.
    */
    constructor(id) {
        this['id'] = id
    }

    /**
    * Constructs a <code>OptionModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/OptionModel} obj Optional instance to populate.
    * @return {module:models/OptionModel} The populated <code>OptionModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptionModel()


            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String')
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String')
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String')
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [OptionValueModel]);
            }
        }

        return obj
    }

    /**
    * The localized description of the option.
    * @member {String} description
    */
    description = undefined
    /**
    * The id of the option.
    * @member {String} id
    */
    id = undefined
    /**
    * The URL to the option image.
    * @member {String} image
    */
    image = undefined
    /**
    * The localized name of the option.
    * @member {String} name
    */
    name = undefined
    /**
    * The array of option values. This array can be empty.
    * @member {Array.<module:models/OptionValueModel>} values
    */
    values = undefined
}
