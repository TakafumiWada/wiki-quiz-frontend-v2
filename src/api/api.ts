/* tslint:disable */
/* eslint-disable */
/**
 * wiki-quiz-api-spec
 * [QuizWiki](https://www.quiz-wiki.com/)のAPI仕様書です。
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Confirm
 */
export interface Confirm {
    /**
     * 
     * @type {boolean}
     * @memberof Confirm
     */
    isCorrect?: boolean;
}
/**
 * 
 * @export
 * @interface ConfirmReq
 */
export interface ConfirmReq {
    /**
     * 
     * @type {string}
     * @memberof ConfirmReq
     */
    searchWord?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfirmReq
     */
    answer?: string;
}
/**
 * 
 * @export
 * @interface Question
 */
export interface Question {
    /**
     * 
     * @type {string}
     * @memberof Question
     */
    title?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Question
     */
    categories?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Question
     */
    words?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Question
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof Question
     */
    url?: string;
}

/**
 * QuestionApi - axios parameter creator
 * @export
 */
export const QuestionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 問題文を取得します
         * @summary 問題データの取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        questionGet: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/question`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Wikipediaの記事データをランダムで取得します
         * @summary 回答と一致するかを検証
         * @param {ConfirmReq} body Pet object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        questionconfirmPost: async (body: ConfirmReq, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('questionconfirmPost', 'body', body)
            const localVarPath = `/question:confirm`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * QuestionApi - functional programming interface
 * @export
 */
export const QuestionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = QuestionApiAxiosParamCreator(configuration)
    return {
        /**
         * 問題文を取得します
         * @summary 問題データの取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async questionGet(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Question>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.questionGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Wikipediaの記事データをランダムで取得します
         * @summary 回答と一致するかを検証
         * @param {ConfirmReq} body Pet object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async questionconfirmPost(body: ConfirmReq, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Confirm>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.questionconfirmPost(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * QuestionApi - factory interface
 * @export
 */
export const QuestionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = QuestionApiFp(configuration)
    return {
        /**
         * 問題文を取得します
         * @summary 問題データの取得
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        questionGet(options?: any): AxiosPromise<Question> {
            return localVarFp.questionGet(options).then((request) => request(axios, basePath));
        },
        /**
         * Wikipediaの記事データをランダムで取得します
         * @summary 回答と一致するかを検証
         * @param {ConfirmReq} body Pet object that needs to be added to the store
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        questionconfirmPost(body: ConfirmReq, options?: any): AxiosPromise<Confirm> {
            return localVarFp.questionconfirmPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * QuestionApi - object-oriented interface
 * @export
 * @class QuestionApi
 * @extends {BaseAPI}
 */
export class QuestionApi extends BaseAPI {
    /**
     * 問題文を取得します
     * @summary 問題データの取得
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuestionApi
     */
    public questionGet(options?: any) {
        return QuestionApiFp(this.configuration).questionGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Wikipediaの記事データをランダムで取得します
     * @summary 回答と一致するかを検証
     * @param {ConfirmReq} body Pet object that needs to be added to the store
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QuestionApi
     */
    public questionconfirmPost(body: ConfirmReq, options?: any) {
        return QuestionApiFp(this.configuration).questionconfirmPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}


