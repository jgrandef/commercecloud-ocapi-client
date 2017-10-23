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
import CustomerAddressLinkModel from './CustomerAddressLinkModel'
import CustomerProductListItemLinkModel from './CustomerProductListItemLinkModel'
import CustomerProductListItemModel from './CustomerProductListItemModel'
import CustomerProductListRegistrantModel from './CustomerProductListRegistrantModel'
import ProductListEventModel from './ProductListEventModel'
import ProductListShippingAddressModel from './ProductListShippingAddressModel'

/**
* The CustomerProductListModel model module.
* @module models/CustomerProductListModel
* @version 17.8
*/
export default class CustomerProductListModel {
    /**
    * Constructs a new <code>CustomerProductListModel</code>.
    * Document representing a customer product List.
    * @alias module:models/CustomerProductListModel
    * @class
    */
    constructor() {}

    /**
    * Constructs a <code>CustomerProductListModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/CustomerProductListModel} obj Optional instance to populate.
    * @return {module:models/CustomerProductListModel} The populated <code>CustomerProductListModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerProductListModel()

            if (data.hasOwnProperty('co_registrant')) {
                obj['co_registrant'] = CustomerProductListRegistrantModel.constructFromObject(data['co_registrant'])
            }
            if (data.hasOwnProperty('creation_date')) {
                obj['creation_date'] = ApiClient.convertToType(data['creation_date'], 'Date')
            }
            if (data.hasOwnProperty('current_shipping_address_link')) {
                obj['current_shipping_address_link'] = CustomerAddressLinkModel.constructFromObject(data['current_shipping_address_link'])
            }
            if (data.hasOwnProperty('customer_product_list_items')) {
                obj['customer_product_list_items'] = ApiClient.convertToType(data['customer_product_list_items'], [CustomerProductListItemModel])
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String')
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = ProductListEventModel.constructFromObject(data['event'])
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String')
            }
            if (data.hasOwnProperty('items_link')) {
                obj['items_link'] = CustomerProductListItemLinkModel.constructFromObject(data['items_link'])
            }
            if (data.hasOwnProperty('last_modified')) {
                obj['last_modified'] = ApiClient.convertToType(data['last_modified'], 'Date')
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String')
            }
            if (data.hasOwnProperty('post_event_shipping_address_link')) {
                obj['post_event_shipping_address_link'] = CustomerAddressLinkModel.constructFromObject(data['post_event_shipping_address_link'])
            }
            if (data.hasOwnProperty('product_list_shipping_address')) {
                obj['product_list_shipping_address'] = ProductListShippingAddressModel.constructFromObject(data['product_list_shipping_address'])
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean')
            }
            if (data.hasOwnProperty('registrant')) {
                obj['registrant'] = CustomerProductListRegistrantModel.constructFromObject(data['registrant'])
            }
            if (data.hasOwnProperty('shipping_address_link')) {
                obj['shipping_address_link'] = CustomerAddressLinkModel.constructFromObject(data['shipping_address_link'])
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String')
            }
        }

        return obj
    }

    /**
    * The coRegistrant of this product list.
    * @member {module:models/CustomerProductListRegistrantModel} co_registrant
    */
    co_registrant = undefined
    /**
    * Returns the value of attribute 'creationDate'.
    * @member {Date} creation_date
    */
    creation_date = undefined
    /**
    * The resource link to the current shipping address of this customer product list.
    * @member {module:models/CustomerAddressLinkModel} current_shipping_address_link
    */
    current_shipping_address_link = undefined
    /**
    * The list of customer product list items.
    * @member {Array.<module:models/CustomerProductListItemModel>} customer_product_list_items
    */
    customer_product_list_items = undefined
    /**
    * The description of this product list.
    * @member {String} description
    */
    description = undefined
    /**
    * The event of this product list.
    * @member {module:models/ProductListEventModel} event
    */
    event = undefined
    /**
    * The id of this product list.
    * @member {String} id
    */
    id = undefined
    /**
    * The resource link to the items of this customer product list.
    * @member {module:models/CustomerProductListItemLinkModel} items_link
    */
    items_link = undefined
    /**
    * Returns the value of attribute 'lastModified'.
    * @member {Date} last_modified
    */
    last_modified = undefined
    /**
    * The name of this product list.
    * @member {String} name
    */
    name = undefined
    /**
    * The resource link to the post event shipping address of this customer product list.
    * @member {module:models/CustomerAddressLinkModel} post_event_shipping_address_link
    */
    post_event_shipping_address_link = undefined
    /**
    * The abbreviated shipping address of this product list representing what anonymous user can see.
    * @member {module:models/ProductListShippingAddressModel} product_list_shipping_address
    */
    product_list_shipping_address = undefined
    /**
    * Indicates whether the owner made this product list available for access by other customers.
    * @member {Boolean} public
    */
    public = undefined
    /**
    * The registrant of this product list.
    * @member {module:models/CustomerProductListRegistrantModel} registrant
    */
    registrant = undefined
    /**
    * The resource link to the shipping address of this customer product list.
    * @member {module:models/CustomerAddressLinkModel} shipping_address_link
    */
    shipping_address_link = undefined
    /**
    * The type of the product list.
    * @member {module:models/CustomerProductListModel.TypeEnum} type
    */
    type = undefined

    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {

        /**
         * value: "wish_list"
         * @const
         */
        "wish_list": "wish_list",

        /**
         * value: "gift_registry"
         * @const
         */
        "gift_registry": "gift_registry",

        /**
         * value: "shopping_list"
         * @const
         */
        "shopping_list": "shopping_list",

        /**
         * value: "custom_1"
         * @const
         */
        "custom_1": "custom_1",

        /**
         * value: "custom_2"
         * @const
         */
        "custom_2": "custom_2",

        /**
         * value: "custom_3"
         * @const
         */
        "custom_3": "custom_3"
    }
}
