/*
 * PKey.h
 *
 *  Created on: Apr 11, 2014
 *      Author: lion
 */

#pragma once

#define MBEDTLS_ALLOW_PRIVATE_ACCESS

#include "ifs/PKey.h"
#include <mbedtls/mbedtls/mbedtls_config.h>
#include <mbedtls/mbedtls/pk.h>

namespace fibjs {

#define MBEDTLS_ECP_DP_ED25519 1001
#define MBEDTLS_ECP_DP_BLS12381_G1 1002
#define MBEDTLS_ECP_DP_BLS12381_G2 1003

class PKey {
public:
    PKey();
    PKey(mbedtls_pk_context& key);
    virtual ~PKey();

public:
    static PKey_base* create(mbedtls_pk_context& key, bool clone = false);

public:
    // object_base
    result_t toString(exlib::string& retVal);
    result_t toJSON(exlib::string key, v8::Local<v8::Value>& retVal);

public:
    // PKey_base
    result_t get_name(exlib::string& retVal);
    result_t get_keySize(int32_t& retVal);
    result_t get_alg(exlib::string& retVal);
    result_t set_alg(exlib::string newVal);
    result_t get_publicKey(obj_ptr<PKey_base>& retVal);
    result_t isPrivate(bool& retVal);
    result_t clone(obj_ptr<PKey_base>& retVal);
    result_t pem(exlib::string& retVal);
    result_t der(obj_ptr<Buffer_base>& retVal);
    result_t json(v8::Local<v8::Object> opts, v8::Local<v8::Object>& retVal);
    result_t equals(PKey_base* key, bool& retVal);
    result_t encrypt(Buffer_base* data, obj_ptr<Buffer_base>& retVal, AsyncEvent* ac);
    result_t decrypt(Buffer_base* data, obj_ptr<Buffer_base>& retVal, AsyncEvent* ac);
    result_t sign(Buffer_base* data, v8::Local<v8::Object> opts, obj_ptr<Buffer_base>& retVal, AsyncEvent* ac);
    result_t verify(Buffer_base* data, Buffer_base* sign, v8::Local<v8::Object> opts, bool& retVal, AsyncEvent* ac);

public:
    static mbedtls_pk_context& key(PKey_base* key);

public:
    mbedtls_pk_context m_key;
    exlib::string m_alg;
};
}
