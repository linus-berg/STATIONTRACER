#!/bin/bash
#
#
#
curl -X 'GET' \
  'https://transport.integration.sl.se/v1/sites/$1/departures?transport=BUS&forecast=1200' \
  -H 'Content-Type: application/json' -o sl.json
