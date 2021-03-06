/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/* eslint-disable dot-notation */
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
import Product from './Product'
import ProductSimpleLink from './ProductSimpleLink'

/**
* The CustomerProductListItem model module.
* @module models/CustomerProductListItem
* @version 17.8
*/
export default class CustomerProductListItem {
    /**
    * Constructs a new <code>CustomerProductListItem</code>.
    * Document representing a customer product list item.
    * @alias module:models/CustomerProductListItem
    * @class
    */
    constructor() {
        /**
        * The id of this product list item.
        * @member {String} id
        */
        this.id = undefined

        /**
        * The priority of the item.
        * @member {Number} priority
        */
        this.priority = undefined

        /**
        * The product item
        * @member {module:models/Product} product
        */
        this.product = undefined

        /**
        * A link to the product.
        * @member {module:models/ProductSimpleLink} product_details_link
        */
        this.product_details_link = undefined

        /**
        * The id of the product.
        * @member {String} product_id
        */
        this.product_id = undefined

        /**
        * Is this product list item available for access by other customers?
        * @member {Boolean} public
        */
        this.public = undefined

        /**
        * The quantity of products already purchased.
        * @member {Number} purchased_quantity
        */
        this.purchased_quantity = undefined

        /**
        * The quantity of this product list item.
        * @member {Number} quantity
        */
        this.quantity = undefined

        /**
        * The type of the item.
        * @member {module:models/CustomerProductListItem.TypeEnum} type
        */
        this.type = undefined
    }

    /**
    * Constructs a <code>CustomerProductListItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/CustomerProductListItem} obj Optional instance to populate.
    * @return {module:models/CustomerProductListItem} The populated <code>CustomerProductListItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerProductListItem()

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String')
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number')
            }
            if (data.hasOwnProperty('product')) {
                obj['product'] = Product.constructFromObject(data['product'])
            }
            if (data.hasOwnProperty('product_details_link')) {
                obj['product_details_link'] = ProductSimpleLink.constructFromObject(data['product_details_link'])
            }
            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'String')
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean')
            }
            if (data.hasOwnProperty('purchased_quantity')) {
                obj['purchased_quantity'] = ApiClient.convertToType(data['purchased_quantity'], 'Number')
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number')
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String')
            }
        }

        return obj
    }
}

/**
* Allowed values for the <code>type</code> property.
* @enum {String}
* @readonly
*/
CustomerProductListItem.TypeEnum = {

    /**
     * value: "product"
     * @const
     */
    product: 'product',

    /**
     * value: "gift_certificate"
     * @const
     */
    gift_certificate: 'gift_certificate'
}
