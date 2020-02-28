local trends = redis.call("ZREVRANGE", "trends", 0, -1)
local ret = {}
for i,key in ipairs(trends) do
  local ex = redis.call("EXISTS", key)
  if ex == 1 then
    local t = redis.call("ZREVRANGE", key, KEYS[1], KEYS[2])
    ret[i] = t
  end
end
return ret