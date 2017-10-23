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
import QueryModel from './QueryModel'
import SortModel from './SortModel'

/**
* The OrderSearchRequestModel model module.
* @module models/OrderSearchRequestModel
* @version 17.8
*/
export default class OrderSearchRequestModel {
    /**
    * Constructs a new <code>OrderSearchRequestModel</code>.
    * Document representing an order search request.
    * @alias module:models/OrderSearchRequestModel
    * @class
    * @param query {module:models/QueryModel} The query to apply
    */
    constructor(query) {
        this['query'] = query
    }

    /**
    * Constructs a <code>OrderSearchRequestModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/OrderSearchRequestModel} obj Optional instance to populate.
    * @return {module:models/OrderSearchRequestModel} The populated <code>OrderSearchRequestModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderSearchRequestModel()

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number')
            }
            if (data.hasOwnProperty('expand')) {
                obj['expand'] = ApiClient.convertToType(data['expand'], ['String']);
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = QueryModel.constructFromObject(data['query']);
            }
            if (data.hasOwnProperty('select')) {
                obj['select'] = ApiClient.convertToType(data['select'], 'String')
            }
            if (data.hasOwnProperty('sorts')) {
                obj['sorts'] = ApiClient.convertToType(data['sorts'], [SortModel]);
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Number')
            }
        }

        return obj
    }

    /**
    * The number of returned documents.
    * @member {Number} count
    */
    count = undefined
    /**
    * List of expansions to be applied to each search results. Expands are optional.
    * @member {Array.<String>} expand
    */
    expand = undefined
    /**
    * The query to apply
    * @member {module:models/QueryModel} query
    */
    query = undefined
    /**
    * The field to be selected.
    * @member {String} select
    */
    select = undefined
    /**
    * The list of sort clauses configured for the search request. Sort clauses are optional.
    * @member {Array.<module:models/SortModel>} sorts
    */
    sorts = undefined
    /**
    * The zero-based index of the first search hit to include in the result.
    * @member {Number} start
    */
    start = undefined
}
