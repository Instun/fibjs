/// <reference path="../interface/object.d.ts" />
/// <reference path="../interface/Buffer.d.ts" />
/// <reference path="../interface/PKey.d.ts" />
/// <reference path="../interface/X509Cert.d.ts" />
/**
 * @description x509 证书请求对象
 * 
 *  X509Req 对象属于 crypto 模块，创建：
 *  ```JavaScript
 *  var k = new crypto.X509Req();
 *  ```
 *  
 */
declare class Class_X509Req extends Class_object {
    /**
     * @description X509Req 构造函数 
     */
    constructor();

    /**
     * @description 加载一个 DER 格式的证书请求
     *      @param derReq DER 格式的证书请求
     *     
     */
    load(): void;

    /**
     * @description 加载一个 PEM/DER 格式的证书请求，可多次调用
     *      @param filename 证书请求文件名
     *     
     */
    loadFile(): void;

    /**
     * @description 返回当前证书请求的 PEM 格式编码
     *      @return 当前证书请求的 PEM 格式编码
     *     
     */
    exportPem(): string;

    /**
     * @description 返回当前证书请求的 DER 格式编码
     *      @return 当前证书请求的 DER 格式编码
     *     
     */
    exportDer(): Class_Buffer;

    /**
     * @description 签名当前证书请求为正式证书
     * 
     *     opts 接收的字段如下：
     *     ```JavaScript
     *     {
     *         ca: false,      // 证书为 ca，缺省为 false
     *         pathlen: -1,    // 证书深度，缺省为 -1
     *         notBefore: "",  // 证书生效时间，缺省为当前时间
     *         notAfter: "",   // 证书失效时间，缺省为 notBefore 后一年
     *         usage: "",      // 证书使用范围，接收：digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment, keyAgreement, keyCertSign, cRLSign
     *         type: ""        // 证书 Netscape 证书类型，接收：client, server, email, objsign, reserved, sslCA, emailCA, objCA
     *     }
     *     ```
     *      @param issuer 签名机构的可分辨名称
     *      @param key 签名机构的私钥
     *      @param opts 其他可选参数
     *      @return 返回签名后的正式证书
     *      
     */
    sign(): Class_X509Cert;

    /**
     * @description 获取证书的主题可分辨名称 
     */
    readonly subject: string;

    /**
     * @description 获取证书的公钥 
     */
    readonly publicKey: Class_PKey;

}

