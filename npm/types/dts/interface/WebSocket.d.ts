/// <reference path="../interface/EventEmitter.d.ts" />
/**
 * @description WebSocket 包协议转换处理器
 * 
 *   用以将 Http 协议转换为 WebSocket 包协议消息。创建方式：
 *   ```JavaScript
 *   var ws = require('ws');
 *   var http = require('http');
 * 
 *   var serv = new http.Server(8811, ws.upgrade((conn) => {
 *   conn.onmessage = msg => {
 *       conn.send(new Date());
 *   };
 *   }));
 * 
 *   serv.run(r => 0);
 * 
 *   var sock = new ws.Socket('ws://127.0.0.1:8811');
 *   sock.on('open', () => {
 *       setInterval(() => {
 *           sock.send('get date');
 *       }, 1000);
 *   });
 * 
 *   sock.onmessage = evt => {
 *     console.log(evt.data);
 *   }
 *   ```
 *  
 */
declare class Class_WebSocket extends Class_EventEmitter {
    /**
     * @description WebSocket 构造函数
     *      @param url 指定连接的服务器
     *      @param protocol 指定握手协议，缺省为 ""
     *      @param origin 指定握手时模拟的源，缺省为 ""
     *     
     */
    constructor(url: string, protocol: string, origin: string);

    /**
     * @description 查询当前对象连接的服务器 
     */
    readonly url: string;

    /**
     * @description 查询当前对象连接时的协议 
     */
    readonly protocol: string;

    /**
     * @description 查询当前对象连接的源 
     */
    readonly origin: string;

    /**
     * @description 查询当前对象的连接状态，参见 ws 
     */
    readonly readyState: number;

    /**
     * @description 关闭当前连接，此操作会向对方发送 CLOSE 数据包，并等待对方响应
     *      @param code 指定关闭的代码，允许值为 3000-4999 或者 1000，缺省为 1000
     *      @param reason 指定关闭的原因，缺省为 ""
     *     
     */
    close(): void;

    /**
     * @description 向对方发送一段文本
     *      @param data 指定发送的文本
     *     
     */
    send(): void;

    /**
     * @description 查询和绑定连接成功事件，相当于 on("open", func); 
     */
    onopen: ()=>any;

    /**
     * @description 查询和绑定接受到对方消息的事件，相当于 on("message", func); 
     */
    onmessage: ()=>any;

    /**
     * @description 查询和绑定连接关闭的事件，相当于 on("close", func); 
     */
    onclose: ()=>any;

    /**
     * @description 查询和绑定错误发生的事件，相当于 on("error", func); 
     */
    onerror: ()=>any;

    /**
     * @description 维持 fibjs 进程不退出，在对象绑定期间阻止 fibjs 进程退出
     *      @return 返回当前对象
     *     
     */
    ref(): Class_WebSocket;

    /**
     * @description 允许 fibjs 进程退出，在对象绑定期间允许 fibjs 进程退出
     *      @return 返回当前对象
     *     
     */
    unref(): Class_WebSocket;

}

