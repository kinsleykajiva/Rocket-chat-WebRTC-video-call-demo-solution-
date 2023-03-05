


Rocket chat WebRTC video call demo solution 


## Introduction

The purpose of this project is to demonstrate how to build a WebRTC video call Web client using the Rocket chat WebRTC video call demo solution.
In this demo app I have used **Janus as a WebRTC** media Server  amongst other option such as Kurento and OpenVidu.I have used Janus in my personal and professional projects and I have found it to be a very good media server for WebRTC applications. 
As i have used it to develop web ,mobile and desktop applications and it has been very reliable and stable , and has big community .

Relatable Links:
- Personal Similar Related Project :https://github.com/kinsleykajiva/click2call-About-Project-Descriptions-
- Personal Related Project tool: https://github.com/kinsleykajiva/Janus-gateway-landlord-Web-app
- Personal Related Project tool: https://github.com/kinsleykajiva/Janus-gateway-landlord-JavaFx-app



## WebRTC Background

WebRTC (Web Real-Time Communication) is an open-source technology that enables real-time communication between browsers and mobile applications. 
It allows for peer-to-peer communication between browsers without requiring any plugins or third-party software.

WebRTC uses a set of APIs that enable real-time communication such as video and audio streaming, data sharing, and 
screen sharing between two or more web browsers or mobile applications. 
Once can use a combination of technologies (theses are always platform related ) like Javascript, HTML,Go,Java,C++,Rust and signaling protocols such as Session Initiation Protocol (SIP) and Interactive Connectivity Establishment (ICE) to establish a connection between two devices.

One of the most popular examples of how WebRTC works is the `[AppRTC application](https://github.com/webrtc/apprtc)`,It  showcases the capabilities of WebRTC. AppRTC is a web-based application that demonstrates the capabilities of WebRTC (Web Real-Time Communication) technology. 
It allows users to initiate video, audio, and text communication between two or more browsers in real-time, without requiring any additional software or plugins.

In this demo I have prepared it aims to mimic the AppRTC application but with a few differences, that mine is anchored on a media server such Janus .
Since AppRTC works like User A opens the AppRTC website in their web browser and clicks on the "Start" button to begin a new call.AppRTC generates a unique room ID and a URL for the call and prompts the user to grant access to their camera and microphone.
User A shares the generated URL with User B via email, text, or any other messaging platform. User B clicks on the URL and joins the same room as User A. AppRTC establishes a peer-to-peer connection between the two browsers.
User A and User B can now communicate with each other through video, audio, or text in real-time, with no additional software or plugins required.
Behind the scenes, AppRTC uses a combination of WebRTC APIs, including getUserMedia, RTCPeerConnection, and RTCDataChannel, to facilitate the real-time communication between the browsers. 
It also uses a signaling server to exchange information about the call and coordinate the establishment of the WebRTC connection.

## Application Solution
This application attempts to answer the requirements of the tes that was give to me  of building  a **Build peer to peer WebRTC video calling Web client**.
In a bid to achieve this I have used the following technologies: index Html page for the front end, websockets for the backend and Janus as the media server.
- Index Html page for the front end - this is the page that the user will interact with, it is the page that will be served to the user when they visit the app . 
- Janus Media sever - this is the media server that will be responsible for the video and audio streaming. 
The bulk of the front end solution is from the demo page that was set up from their page ,I just made of the existing solution (not to reinvent the wheel) and added a few functionalities to it.
- Websockets - this is the backend of the application that will be responsible for tracking the users and the rooms they are in and also to further develop the application to save the data in a database.
At the core as well of the Janus video call solution we use or utilise [Websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)  that is responsible for the signaling between the users and the media server,its mostly termed or called Sips over Websockets or Sip ove sockets .

### Why Janus:

Here are some of the advantages of using Janus:

1. Scalability: Janus is highly scalable and can handle a large number of concurrent WebRTC connections. It uses a modular architecture that allows users to add or remove plugins as needed, making it easy to customize and scale the server to meet specific requirements.
2. 
3. Flexibility: Janus is a flexible media server that supports various use cases, including video conferencing, remote collaboration, gaming, and more. It provides a wide range of plugins that can be used to extend its functionality, such as the ability to stream video to multiple users simultaneously.
4. 
5. Open-source: Janus is an open-source media server that is freely available to use and modify. It is actively maintained by a community of developers, which ensures that it is constantly improving and adapting to changing needs.
6. 
7. Low latency: Janus provides low latency WebRTC connections, which are critical for real-time communication applications such as video conferencing, gaming, and more. It achieves this through its unique architecture, which separates signaling and media processing into different threads.
8. 
9. Extensibility: Janus provides an API that allows developers to create their own custom plugins and extend the functionality of the server. This makes it possible to add new features and customize the server to meet specific requirements.

## Deployment and Installation

Install an HTTP server such as Apache or Nginx.in my case i used xampp for my local development and testing.This is for running the front end of the application.

Install a websocket server such as Node.js . This is for running the backend of the application to track the users or you can further develop to save in a database .

Install a Janus webRTC media server  . This is which the media will flow through and will be responsible for the video and audio streaming.

Permissions - make sure you allow the frontend to access the camera and microphone of the user of a given browser.

Http Client - I have developed and tested this in a chromium based browser such as Google Chrome and Microsoft Edge.

Under the folder 'api' you will find the backend of the application. run the command `npm install` to install the dependencies and then run the command `npm run start` to start the server,just make ure you have 'nodemon' installed.

To install Janus please review of my documentation  - https://github.com/kinsleykajiva/Janus-gateway-landlord-Web-app/blob/master/docs/janus-installation-guide.md

For a fedora case look at this  - https://github.com/marijndegen/fedora-janus-installation-manual     or use the official instruction on how to install it .


Make sure that when the janus server is running check this url - remote set up  http://public-ap-address:8088/janus/info  or remote http://localhost:8088/janus/info to see if the server is running.


Please see screenshots below to see how the application works and looks:
<img src="screenshots/Screenshot from 2023-03-05 19-50-00.png" alt="screenshot of the client app"/>
<img src="screenshots/Screenshot from 2023-03-05 19-50-28.png" alt="janus installation"/>
<img src="screenshots/SScreenshot from 2023-03-05 19-53-36.png" alt="jscreeshot fo the app"/>
<img src="screenshots/Screenshot from 2023-03-05 19-54-38.png" alt="jscreeshot fo the app"/>
<img src="screenshots/Screenshot from 2023-03-05 19-54-56.png" alt="jscreeshot fo the app"/>
<img src="screenshots/Screenshot from 2023-03-05 19-56-20.png" alt="jscreeshot fo the app"/>
<img src="screenshots/Screenshot from 2023-03-05 19-56-38.png" alt="jscreeshot fo the app"/>
<img src="screenshots/Screenshot from 2023-03-05 19-57-06.png" alt="jscreeshot fo the app"/>





References:

- WebRTC official website: https://webrtc.org/
- ebRTC on MDN web docs: https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API
- apprtc on GitHub: https://github.com/webrtc/apprtc
- Janus on GitHub:https://github.com/meetecho/janus-gateway
- Personal Similar Related Project :https://github.com/kinsleykajiva/click2call-About-Project-Descriptions-
- Personal Related Project tool: https://github.com/kinsleykajiva/Janus-gateway-landlord-Web-app
- Personal Related Project tool: https://github.com/kinsleykajiva/Janus-gateway-landlord-JavaFx-app
- Websocket on MDN web docs: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API