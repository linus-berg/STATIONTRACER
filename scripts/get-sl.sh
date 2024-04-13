#!/bin/bash
#
#
#
STATION=$1
curl -X 'GET' \
  "https://transport.integration.sl.se/v1/sites/${STATION}/departures?transport=BUS&forecast=1200" \
  -H 'Content-Type: application/json' -o sl.json
