---
title: {{ replace .Name "-" " " | title }}
subtitle: 
date: {{ .Date }}
timeframe: {{ (.Date | time.AsTime).Year }}
icon: /image/{{ .Name | lower }}.png
description: |
  
repository: https://github.com/marcus8448/{{ .Name }}
tools:
draft: true
---
