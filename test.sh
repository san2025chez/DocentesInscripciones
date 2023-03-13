#!/bin/bash

curl -X POST http://localhost/ -H "Content-Type: application/json" -d  @usuarios.txt
