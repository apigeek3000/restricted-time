# restricted-time
A proxy which is restricted to only be called between two UTC times

## Instructions

In this repo there is an example, target-less proxy to demonstrate how you can restrict a proxy to only field request during a certain time of day. Any requests outside the established time range will raise a fault and return a 400 error.

To use a zip file download it to your local system, navigate to Apigee Dashboard > API Proxies > Create New > Upload Proxy Bundle, and upload the zip file there.