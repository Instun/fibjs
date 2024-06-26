/*
 * Condition.cpp
 *
 *  Created on: Apr 25, 2012
 *      Author: lion
 */

#include "object.h"
#include "Condition.h"

namespace fibjs {

result_t Condition_base::_new(obj_ptr<Condition_base>& retVal, v8::Local<v8::Object> This)
{
    retVal = new Condition();

    return 0;
}

result_t Condition_base::_new(Lock_base* lock, obj_ptr<Condition_base>& retVal,
    v8::Local<v8::Object> This)
{
    retVal = new Condition(lock);

    return 0;
}

result_t Condition::acquire(bool blocking, bool& retVal)
{
    return m_lockCond->acquire(blocking, retVal);
}

result_t Condition::release()
{
    return m_lockCond->release();
}

result_t Condition::count(int32_t& retVal)
{
    retVal = m_cond.count();
    return 0;
}

result_t Condition::wait(int32_t timeout, bool& retVal)
{
    if (!m_lockCond->m_lock.owned())
        return CHECK_ERROR(CALL_E_INVALID_CALL);

    Isolate::LeaveJsScope _rt(holder());
    retVal = m_cond.wait(m_lockCond->m_lock, timeout);

    return _rt.is_terminating() ? CALL_E_TIMEOUT : 0;
}

result_t Condition::notify()
{
    result_t hr = m_lockCond->release();
    if (hr < 0)
        return hr;

    m_cond.notify_one();

    return 0;
}

result_t Condition::notifyAll()
{
    result_t hr = m_lockCond->release();
    if (hr < 0)
        return hr;

    m_cond.notify_all();

    return 0;
}
}
