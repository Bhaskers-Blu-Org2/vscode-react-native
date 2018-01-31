/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * ExportConfigurations
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the ExportClient.
 */
export interface ExportConfigurations {


    /**
     * List export configurations.
     *
     * @param {string} appName The name of the application
     *
     * @param {string} ownerName The name of the owner
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ExportConfigurationListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(appName: string, ownerName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ExportConfigurationListResult>>;

    /**
     * List export configurations.
     *
     * @param {string} appName The name of the application
     *
     * @param {string} ownerName The name of the owner
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {ExportConfigurationListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {ExportConfigurationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ExportConfigurationListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(appName: string, ownerName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ExportConfigurationListResult>;
    list(appName: string, ownerName: string, callback: ServiceCallback<models.ExportConfigurationListResult>): void;
    list(appName: string, ownerName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ExportConfigurationListResult>): void;


    /**
     * Create new export configuration
     *
     * @param {string} appName The name of the application
     *
     * @param {string} ownerName The name of the owner
     *
     * @param {object} properties Export configurations.
     *
     * @param {string} [properties.resourceName] The resource name on azure
     *
     * @param {string} [properties.resourceGroup] The resource group name on azure
     *
     * @param {string} properties.type Polymorphic Discriminator
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createWithHttpOperationResponse(appName: string, ownerName: string, properties: models.ExportConfiguration, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Create new export configuration
     *
     * @param {string} appName The name of the application
     *
     * @param {string} ownerName The name of the owner
     *
     * @param {object} properties Export configurations.
     *
     * @param {string} [properties.resourceName] The resource name on azure
     *
     * @param {string} [properties.resourceGroup] The resource group name on azure
     *
     * @param {string} properties.type Polymorphic Discriminator
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    create(appName: string, ownerName: string, properties: models.ExportConfiguration, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    create(appName: string, ownerName: string, properties: models.ExportConfiguration, callback: ServiceCallback<void>): void;
    create(appName: string, ownerName: string, properties: models.ExportConfiguration, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Get export configuration.
     *
     * @param {string} appName The name of the application
     *
     * @param {string} exportConfigurationId The id of the export configuration.
     *
     * @param {string} ownerName The name of the owner
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ExportConfigurationResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(appName: string, exportConfigurationId: string, ownerName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ExportConfigurationResult>>;

    /**
     * Get export configuration.
     *
     * @param {string} appName The name of the application
     *
     * @param {string} exportConfigurationId The id of the export configuration.
     *
     * @param {string} ownerName The name of the owner
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {ExportConfigurationResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {ExportConfigurationResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ExportConfigurationResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(appName: string, exportConfigurationId: string, ownerName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ExportConfigurationResult>;
    get(appName: string, exportConfigurationId: string, ownerName: string, callback: ServiceCallback<models.ExportConfigurationResult>): void;
    get(appName: string, exportConfigurationId: string, ownerName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ExportConfigurationResult>): void;


    /**
     * Partially update export configuration.
     *
     * @param {string} appName The name of the application
     *
     * @param {string} exportConfigurationId The id of the export configuration.
     *
     * @param {string} ownerName The name of the owner
     *
     * @param {object} properties Export configurations.
     *
     * @param {string} [properties.resourceName] The resource name on azure
     *
     * @param {string} [properties.resourceGroup] The resource group name on azure
     *
     * @param {string} properties.type Polymorphic Discriminator
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ExportConfigurationResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    partialUpdateWithHttpOperationResponse(appName: string, exportConfigurationId: string, ownerName: string, properties: models.ExportConfiguration, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ExportConfigurationResult>>;

    /**
     * Partially update export configuration.
     *
     * @param {string} appName The name of the application
     *
     * @param {string} exportConfigurationId The id of the export configuration.
     *
     * @param {string} ownerName The name of the owner
     *
     * @param {object} properties Export configurations.
     *
     * @param {string} [properties.resourceName] The resource name on azure
     *
     * @param {string} [properties.resourceGroup] The resource group name on azure
     *
     * @param {string} properties.type Polymorphic Discriminator
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {ExportConfigurationResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {ExportConfigurationResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ExportConfigurationResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    partialUpdate(appName: string, exportConfigurationId: string, ownerName: string, properties: models.ExportConfiguration, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ExportConfigurationResult>;
    partialUpdate(appName: string, exportConfigurationId: string, ownerName: string, properties: models.ExportConfiguration, callback: ServiceCallback<models.ExportConfigurationResult>): void;
    partialUpdate(appName: string, exportConfigurationId: string, ownerName: string, properties: models.ExportConfiguration, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ExportConfigurationResult>): void;


    /**
     * Delete export configuration.
     *
     * @param {string} appName The name of the application
     *
     * @param {string} exportConfigurationId The id of the export configuration.
     *
     * @param {string} ownerName The name of the owner
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(appName: string, exportConfigurationId: string, ownerName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Delete export configuration.
     *
     * @param {string} appName The name of the application
     *
     * @param {string} exportConfigurationId The id of the export configuration.
     *
     * @param {string} ownerName The name of the owner
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(appName: string, exportConfigurationId: string, ownerName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    deleteMethod(appName: string, exportConfigurationId: string, ownerName: string, callback: ServiceCallback<void>): void;
    deleteMethod(appName: string, exportConfigurationId: string, ownerName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Disable export configuration.
     *
     * @param {string} appName The name of the application
     *
     * @param {string} exportConfigurationId The id of the export configuration.
     *
     * @param {string} ownerName The name of the owner
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    disableWithHttpOperationResponse(appName: string, exportConfigurationId: string, ownerName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Disable export configuration.
     *
     * @param {string} appName The name of the application
     *
     * @param {string} exportConfigurationId The id of the export configuration.
     *
     * @param {string} ownerName The name of the owner
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    disable(appName: string, exportConfigurationId: string, ownerName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    disable(appName: string, exportConfigurationId: string, ownerName: string, callback: ServiceCallback<void>): void;
    disable(appName: string, exportConfigurationId: string, ownerName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Enable export configuration.
     *
     * @param {string} appName The name of the application
     *
     * @param {string} exportConfigurationId The id of the export configuration.
     *
     * @param {string} ownerName The name of the owner
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    enableWithHttpOperationResponse(appName: string, exportConfigurationId: string, ownerName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Enable export configuration.
     *
     * @param {string} appName The name of the application
     *
     * @param {string} exportConfigurationId The id of the export configuration.
     *
     * @param {string} ownerName The name of the owner
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    enable(appName: string, exportConfigurationId: string, ownerName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    enable(appName: string, exportConfigurationId: string, ownerName: string, callback: ServiceCallback<void>): void;
    enable(appName: string, exportConfigurationId: string, ownerName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
}
