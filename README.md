﻿# Zebra Scanner - IoT Connector Demo
 Zebra IoT Connector for scanner is a utility capable of collecting and write scanner events/statistics/data to text files, Windows Event log or HTTP Post endpoints.
 This sample NodeJS app aims to demonstrate how to configure the connector and send data to HTTP Post endpoints.
 For more info you can refer to the official documentation [here]([https://pages.github.com/](https://techdocs.zebra.com/dcs/scanners/iot-connector/about/)).
 
 **This demo works in both Windows and Linux environments.**

## Supported OS
- Windows 11 64bit
- Windows 10 32bit
- Windows 10 64bit
- All Linux distros mentioned [here](https://techdocs.zebra.com/dcs/scanners/sdk-linux/about/#supportedlinuxdistribution)

## Supported Devices
 - Almost all Zebra Scanners. Compatible HW Information can be found [here](https://www.zebra.com/us/en/support-downloads/software/scanner-software/scanner-sdk-for-linux.html)

## Project Structure
- **IoT Connector executable files** - [IoTConnector.exe](IoTConnector.exe) for Windows and [IoTConnector](IoTConnector) for linux.
- [IoTConnector-Config.xml](IoTConnector-Config.xml) - It contains connector configuration including endpoints where it should send data.
- [app.js](app.js) - Simple NodeJS app that expose one HTTP Post endpoint and start the connector.
- [docs/attributes_list.txt](docs/attributes_list.txt) - Here you can see the full list of attributes you can get from Zebra scanners.

## Configuration
You can configure the IoT Connector from its config file [IoTConnector-Config.xml](IoTConnector-Config.xml).
All the available configurations are well documented using comments.
In particular, if you wish to change the endpoint, you can do it from here:
https://github.com/spoZebra/zebra-scanner-iot-connector/blob/494ea868a35a4147f7801d87aa26f15dae98374b/IoTConnector-Config.xml#L10-L25

## Setup
Run the following command to start the app
```
node app.js
```
The app creates a local HTTP Server and run the Connector.
Connect a scanner and enjoy :zebra:
