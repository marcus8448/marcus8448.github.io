+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName `-` ` ` | title }}'
subtitle = ''
description = ''
timeframe = '{{ (.Date | time.AsTime).Year }}'
icon = '/image/{{ .Name | lower }}.png'
repository = 'https://github.com/marcus8448/{{ .File.ContentBaseName }}'
tools = []
+++
