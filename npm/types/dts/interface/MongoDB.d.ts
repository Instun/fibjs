/// <reference path="../interface/object.d.ts" />
/// <reference path="../interface/MongoCollection.d.ts" />
/// <reference path="../interface/MongoID.d.ts" />
/**
 * @description mongodb 数据库连接对象
 * 
 *  使用 db.open 或 db.openMongoDB 创建，创建方式：
 *  ```JavaScript
 *  var mdb = db.openMongoDB("mongodb://host/db");
 *  ```
 *  
 */
declare class Class_MongoDB extends Class_object {
    /**
     * @description 获取指定集合访问对象
     *     @param name 指定集合的名称
     *     @return 返回指定的集合对象
     *    
     */
    getCollection(): Class_MongoCollection;

    /**
     * @description 指定一个 MongoDB 数据库命令
     *     @param cmd 指定命令和参数的字典对象
     *     @return 返回命令执行结果
     *    
     */
    runCommand(): object;


    /**
     * @description 生成一个 mongodb _objectid 对象
     *     @param hexStr 初始化 16 进制字符串，缺省生成新的 id
     *     @return 新 _objectid 对象
     *    
     */
    oid(): Class_MongoID;

    /**
     * @description 关闭当前数据库连接 
     */
    close(): void;

}

