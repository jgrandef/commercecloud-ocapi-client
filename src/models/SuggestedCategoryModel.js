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
* The SuggestedCategoryModel model module.
* @module models/SuggestedCategoryModel
* @version 17.8
*/
export default class SuggestedCategoryModel {
    /**
    * Constructs a new <code>SuggestedCategoryModel</code>.
    * @alias module:models/SuggestedCategoryModel
    * @class
    */
    constructor() {}

    /**
    * Constructs a <code>SuggestedCategoryModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/SuggestedCategoryModel} obj Optional instance to populate.
    * @return {module:models/SuggestedCategoryModel} The populated <code>SuggestedCategoryModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SuggestedCategoryModel()

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String')
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String')
            }
            if (data.hasOwnProperty('parent_category_name')) {
                obj['parent_category_name'] = ApiClient.convertToType(data['parent_category_name'], 'String')
            }
        }

        return obj
    }

    /**
    * The id of the category.
    * @member {String} id
    */
    id = undefined
    /**
    * The URL addressing the category.
    * @member {String} link
    */
    link = undefined
    /**
    * The localized name of the category.
    * @member {String} name
    */
    name = undefined
    /**
    * The name of the parent category.
    * @member {String} parent_category_name
    */
    parent_category_name = undefined
}
