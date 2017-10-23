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
import DiscountModel from './DiscountModel'

/**
* The PriceAdjustmentModel model module.
* @module models/PriceAdjustmentModel
* @version 17.8
*/
export default class PriceAdjustmentModel {
    /**
    * Constructs a new <code>PriceAdjustmentModel</code>.
    * Document representing a price adjustment within a basket or order. Price adjustments  can be assigned at the order, product, or shipping level. They can be created by the  promotion engine (if the custom flag is set to false) or can be added by custom logic (if the custom  flag is set to true). For custom price adjustments created by a user, the manual flag should be  set to true; this is always the case for price adjustments created using OCAPI.
    * @alias module:models/PriceAdjustmentModel
    * @class
    */
    constructor() {}

    /**
    * Constructs a <code>PriceAdjustmentModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/PriceAdjustmentModel} obj Optional instance to populate.
    * @return {module:models/PriceAdjustmentModel} The populated <code>PriceAdjustmentModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PriceAdjustmentModel()

            if (data.hasOwnProperty('applied_discount')) {
                obj['applied_discount'] = DiscountModel.constructFromObject(data['applied_discount']);
            }
            if (data.hasOwnProperty('coupon_code')) {
                obj['coupon_code'] = ApiClient.convertToType(data['coupon_code'], 'String')
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = ApiClient.convertToType(data['created_by'], 'String')
            }
            if (data.hasOwnProperty('creation_date')) {
                obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date')
            }
            if (data.hasOwnProperty('custom')) {
                obj['custom'] = ApiClient.convertToType(data['custom'], 'Boolean')
            }
            if (data.hasOwnProperty('item_text')) {
                obj['item_text'] = ApiClient.convertToType(data['item_text'], 'String')
            }
            if (data.hasOwnProperty('last_modified')) {
                obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'Date')
            }
            if (data.hasOwnProperty('manual')) {
                obj['manual'] = ApiClient.convertToType(data['manual'], 'Boolean')
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number')
            }
            if (data.hasOwnProperty('price_adjustment_id')) {
                obj['price_adjustment_id'] = ApiClient.convertToType(data['price_adjustment_id'], 'String')
            }
            if (data.hasOwnProperty('promotion_id')) {
                obj['promotion_id'] = ApiClient.convertToType(data['promotion_id'], 'String')
            }
            if (data.hasOwnProperty('promotion_link')) {
                obj['promotion_link'] = ApiClient.convertToType(data['promotion_link'], 'String')
            }
            if (data.hasOwnProperty('reason_code')) {
                obj['reason_code'] = ApiClient.convertToType(data['reason_code'], 'String')
            }
        }
        return obj
    }

    /**
    * A price adjustment that provides details of the discount that was applied.  This is null for custom price adjustments created  without discount details.
    * @member {module:models/DiscountModel} applied_discount
    */
    applied_discount = undefined
    /**
    * The coupon code that triggered the promotion, provided  the price adjustment was created as the result of a promotion  being triggered by a coupon.
    * @member {String} coupon_code
    */
    coupon_code = undefined
    /**
    * The user who created the price adjustment.
    * @member {String} created_by
    */
    created_by = undefined
    /**
    * Returns the value of attribute 'creationDate'.
    * @member {Date} creation_date
    */
    creation_date = undefined
    /**
    * A flag indicating whether this price adjustment was created by custom logic. This flag is  set to true unless the price adjustment was created by the promotion engine.
    * @member {Boolean} custom
    */
    custom = undefined
    /**
    * The text describing the item in more detail.
    * @member {String} item_text
    */
    item_text = undefined
    /**
    * Returns the value of attribute 'lastModified'.
    * @member {Date} last_modified
    */
    last_modified = undefined
    /**
    * A flag indicating whether this price adjustment was created in a manual process.    For custom price adjustments created using the shop API, this always  returns true. Using the scripting API, however, it is possible to set this to true  or false, according to the use case.
    * @member {Boolean} manual
    */
    manual = undefined
    /**
    * The adjustment price.
    * @member {Number} price
    */
    price = undefined
    /**
    * The price adjustment id (uuid).
    * @member {String} price_adjustment_id
    */
    price_adjustment_id = undefined
    /**
    * The id of the related promotion. Custom price adjustments  can be assigned any promotion id so long it is not  used by a price adjustment belonging to the same item  and is not used by promotion defined in the promotion engine.  If not specified, a promotion id is generated.
    * @member {String} promotion_id
    */
    promotion_id = undefined
    /**
    * The URL addressing the related promotion.
    * @member {String} promotion_link
    */
    promotion_link = undefined
    /**
    * The reason why this price adjustment was made.
    * @member {module:models/PriceAdjustmentModel.ReasonCodeEnum} reason_code
    */
    reason_code = undefined

    /**
    * Allowed values for the <code>reason_code</code> property.
    * @enum {String}
    * @readonly
    */
    static ReasonCodeEnum = {

        /**
         * value: "PRICE_MATCH"
         * @const
         */
        "PRICE_MATCH": "PRICE_MATCH",

        /**
         * value: "BACKORDER"
         * @const
         */
        "BACKORDER": "BACKORDER",

        /**
         * value: "EVEN_EXCHANGE"
         * @const
         */
        "EVEN_EXCHANGE": "EVEN_EXCHANGE"
    }
}
