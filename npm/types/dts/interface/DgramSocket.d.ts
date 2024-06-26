/// <reference path="../_import/_fibjs.d.ts" />
/// <reference path="../interface/EventEmitter.d.ts" />
/// <reference path="../interface/Buffer.d.ts" />
/**
 * @description dgram.Socket 对象是一个封装了数据包函数功能的 EventEmitter。
 * 
 * DgramSocket 实例是由 dgram.createSocket() 创建的。创建 dgram.Socket 实例不需要使用 new 关键字。
 * 
 * 创建方法：
 * ```JavaScript
 * var dgram = require('dgram');
 * var sock = dgram.createSocket('udp4');
 * ```
 * 
 * ## 事件
 *  DgramSocket 继承于 EventEmitter，对象的状态变化，以及数据接受，都是以事件的方式实现。
 * 
 *  ### close 事件
 *  ** `close` 事件将在使用 `close()` 关闭一个 `socket` 之后触发。该事件一旦触发，这个 `socket` 上将不会触发新的 `message` 事件。**
 * 
 *  ### error 事件
 *  ** 当有任何错误发生时，`error` 事件将被触发。 **
 * 
 *  ### listening 事件
 *  ** 当一个 `socket` 开始监听数据包信息时，`listening` 事件将被触发。该事件会在创建 UDP socket 之后被立即触发。 **
 * 
 *  ### message 事件
 *  ** 当有新的数据包被 `socket` 接收时，`message` 事件会被触发。`msg` 和 `rinfo` 会作为参数传递到该事件的处理函数中。 **
 *  - msg: Buffer，消息
 *  - rinfo: Object，远程地址信息
 *     - address: string，发送方地址
 *     - family: string，地址类型 ('IPv4' or 'IPv6')
 *     - port: number，发送者端口
 *     - size: number，消息大小
 *  
 */
declare class Class_DgramSocket extends Class_EventEmitter {
    /**
     * @description 该方法会令 dgram.Socket 在指定的 `port` 和 `addr` 上监听数据包信息。绑定完成时会触发一个 `listening` 事件。
     *      @param port 指定绑定端口，若 `port` 未指定或为 0，操作系统会尝试绑定一个随机的端口
     *      @param addr 指定绑定地址，若 address 未指定，操作系统会尝试在所有地址上监听。
     *     
     */
    bind(port?: number, addr?: string): void;

    bind(port?: number, addr?: string, callback?: (err: Error | undefined | null)=>any): void;

    /**
     * @description 该方法会令 dgram.Socket 在 `opts` 指定的 `port` 和 `address` 上监听数据包信息。绑定完成时会触发一个 `listening` 事件。
     *      @param opts 指定绑定参数
     *     
     */
    bind(opts: FIBJS.GeneralObject): void;

    bind(opts: FIBJS.GeneralObject, callback: (err: Error | undefined | null)=>any): void;

    /**
     * @description 在 socket 上发送一个数据包
     *      @param msg 指定发送的数据
     *      @param port 指定发送的目的端口
     *      @param address 指定发送的目的地址
     *      @return 返回发送尺寸
     *     
     */
    send(msg: Class_Buffer, port: number, address?: string): number;

    send(msg: Class_Buffer, port: number, address?: string, callback?: (err: Error | undefined | null, retVal: number)=>any): void;

    /**
     * @description 在 socket 上发送一个数据包
     *      @param msg 指定发送的数据
     *      @param offset 从指定偏移开始发送
     *      @param length 之发送指定长度
     *      @param port 指定发送的目的端口
     *      @param address 指定发送的目的地址
     *      @return 返回发送尺寸
     *     
     */
    send(msg: Class_Buffer, offset: number, length: number, port: number, address?: string): number;

    send(msg: Class_Buffer, offset: number, length: number, port: number, address?: string, callback?: (err: Error | undefined | null, retVal: number)=>any): void;

    /**
     * @description 返回一个包含 socket 地址信息的对象。对于 UDP socket，该对象将包含 address、family 和 port 属性。 
     *      @return 返回对象绑定地址
     *     
     */
    address(): FIBJS.GeneralObject;

    /**
     * @description 关闭当前 socket 
     */
    close(): void;

    /**
     * @description 关闭当前 socket
     *      @param callback 关闭完成后的回调函数，它相当于为 `close` 事件添加了一个监听器
     *     
     */
    close(callback: (...args: any[])=>any): void;

    /**
     * @description 查询 socket 接收缓冲区大小 
     *      @return 返回查询结果
     *     
     */
    getRecvBufferSize(): number;

    /**
     * @description 查询 socket 发送缓冲区大小
     *      @return 返回查询结果
     *     
     */
    getSendBufferSize(): number;

    /**
     * @description 使用 IP_ADD_MEMBERSHIP 套接字选项加入给定 multicastAddress 和 multicastInterface 处的多播组。如果未指定 multicastInterface 参数，操作系统将选择一个接口并向其添加成员资格。要向每个可用接口添加成员资格，请多次调用 addMembership ，每个接口调用一次。
     *      @param multicastAddress 指定要加入的多播组地址
     *      @param multicastInterface 指定要加入的多播组接口
     *      
     */
    addMembership(multicastAddress: string, multicastInterface?: string): void;

    /**
     * @description 使用 IP_DROP_MEMBERSHIP 套接字选项在 multicastAddress 处留下多播组。当套接字关闭或进程终止时，内核会自动调用此方法，因此大多数应用程序永远没有理由调用此方法。
     *      @param multicastAddress 指定要删除的多播组地址
     *      @param multicastInterface 指定要删除的多播组接口
     *      
     */
    dropMembership(multicastAddress: string, multicastInterface?: string): void;

    /**
     * @description 设置 IP_MULTICAST_TTL 套接字选项
     *      @param ttl 指定要设置的 ttl，ttl 参数可以介于 0 和 255 之间。大多数系统上的默认值为 1。
     *      
     */
    setMulticastTTL(ttl: number): void;

    /**
     * @description 设置 socket 接收缓冲区大小 
     *      @param size 指定要设置的尺寸
     *     
     */
    setRecvBufferSize(size: number): void;

    /**
     * @description 设置 socket 发送缓冲区大小
     *      @param size 指定要设置的尺寸
     *     
     */
    setSendBufferSize(size: number): void;

    /**
     * @description 设置或清除 SO_BROADCAST socket 选项
     *      @param flag 当设置为 true, UDP包会被发送到一个本地接口的广播地址
     *     
     */
    setBroadcast(flag: boolean): void;

    /**
     * @description 维持 fibjs 进程不退出，在对象绑定期间阻止 fibjs 进程退出
     *      @return 返回当前对象
     *     
     */
    ref(): Class_DgramSocket;

    /**
     * @description 允许 fibjs 进程退出，在对象绑定期间允许 fibjs 进程退出
     *      @return 返回当前对象
     *     
     */
    unref(): Class_DgramSocket;

}

