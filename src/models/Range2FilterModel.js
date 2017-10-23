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
* The Range2FilterModel model module.
* @module models/Range2FilterModel
* @version 17.8
*/
export default class Range2FilterModel {
    /**
    * Constructs a new <code>Range2FilterModel</code>.
    * Document representing a range compare with range filter, named Range2Filter.
    * @alias module:models/Range2FilterModel
    * @class
    * @param fromField {String} The field name of the field that start the range 1.
    * @param toField {String} The field name of the field that end the range 1.
    */
    constructor(fromField, toField) {
        this['from_field'] = fromField;this['to_field'] = toField
    }

    /**
    * Constructs a <code>Range2FilterModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/Range2FilterModel} obj Optional instance to populate.
    * @return {module:models/Range2FilterModel} The populated <code>Range2FilterModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Range2FilterModel()

            if (data.hasOwnProperty('filter_mode')) {
                obj['filter_mode'] = ApiClient.convertToType(data['filter_mode'], 'String')
            }
            if (data.hasOwnProperty('from_field')) {
                obj['from_field'] = ApiClient.convertToType(data['from_field'], 'String')
            }
            if (data.hasOwnProperty('from_inclusive')) {
                obj['from_inclusive'] = ApiClient.convertToType(data['from_inclusive'], 'Boolean')
            }
            if (data.hasOwnProperty('from_value')) {
                obj['from_value'] = ApiClient.convertToType(data['from_value'], Object)
            }
            if (data.hasOwnProperty('to_field')) {
                obj['to_field'] = ApiClient.convertToType(data['to_field'], 'String')
            }
            if (data.hasOwnProperty('to_inclusive')) {
                obj['to_inclusive'] = ApiClient.convertToType(data['to_inclusive'], 'Boolean')
            }
            if (data.hasOwnProperty('to_value')) {
                obj['to_value'] = ApiClient.convertToType(data['to_value'], Object);
            }
        }

        return obj
    }

    /**
    * compare mode: overlap, containing, contained (default to \"overlap\"). It is optional.
    * @member {module:models/Range2FilterModel.FilterModeEnum} filter_mode
    */
    filter_mode = undefined
    /**
    * The field name of the field that start the range 1.
    * @member {String} from_field
    */
    from_field = undefined
    /**
    * A flag indicating whether the lower bound of the range is inclusive (or exclusive). The default is true (which means that the given  lower bound is inclusive).
    * @member {Boolean} from_inclusive
    */
    from_inclusive = undefined
    /**
    * The configured lower bound of the filter range. The lower bound is optional. If not given, the range is  open ended with respect to the lower bound.
    * @member {Object} from_value
    */
    from_value = undefined
    /**
    * The field name of the field that end the range 1.
    * @member {String} to_field
    */
    to_field = undefined
    /**
    * A flag indicating whether the upper bound of the range is inclusive (or exclusive). The default is true (which means that the given  upper bound is inclusive).
    * @member {Boolean} to_inclusive
    */
    to_inclusive = undefined
    /**
    * The configured upper bound of the filter range. The upper bound is optional. If not given, the range is  open ended with respect to the upper bound.
    * @member {Object} to_value
    */
    to_value = undefined

    /**
    * Allowed values for the <code>filter_mode</code> property.
    * @enum {String}
    * @readonly
    */
    static FilterModeEnum = {

        /**
         * value: "overlap"
         * @const
         */
        "overlap": "overlap",

        /**
         * value: "containing"
         * @const
         */
        "containing": "containing",

        /**
         * value: "contained"
         * @const
         */
        "contained": "contained"
    }
}
