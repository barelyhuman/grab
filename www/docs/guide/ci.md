# ci


## bypassing rate limiting

Usage in CI might trigger more calls on the provider's API than required and this might lead to 
blocking based on their rate limiting. 

To avoid this, most providers do provide a way to bypass this rate limit or increase it using 
an authorized token, you can provide this token using the env variable `GRAB_TOKEN` or the flag `--token` 
and this will be passed to the client or resolver that's trying to make a request.

