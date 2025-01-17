/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
			
		},
		{
			module: "calendar",
			header: "China Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://ics.calendarlabs.com/40/6e3db494/China_Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"	
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Suzhou",
				locationID: "1886760", 
				apiKey: "ba7276c5b5a754c98590919c7eb438df"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Suzhou",
				locationID: "1886760",
				apiKey: "ba7276c5b5a754c98590919c7eb438df"
			}
		},
		{
    			module: "updatenotification",
    			position: "top_center", // This can be any of the regions.
   			config: {
      				updates: [
        			// array of module update commands
        				{
          					// update of MMM-Test with embed npm script
          					"MMM-Test": "npm run update",
        				},
        				{
          					// update of MMM-OtherSample with "complex" process command
          					"MMM-OtherSample":
            					"rm -rf package-lock.json && git reset --hard && git pull && npm install",
        				},
        				{
          					// update of MMM-OtherSample2 with git pull && npm install command
          					"MMM-OtherSample2": "git pull && npm install",
        				},
        				{
          					// update of MMM-OtherSample3 with a simple git pull
          					"MMM-OtherSample3": "git pull",
        				},
      				],
    			},
  		},
		{
  			module: "MMM-Spotify",
  			position: "bottom_left", 
  			config: {
   				debug: false, // debug mode
    				style: "default", // "default" or "mini" available (inactive for miniBar)
    				moduleWidth: 360, // width of the module in px
    				control: "default", // "default" or "hidden"
    				showAlbumLabel: true, // if you want to show the label for the current song album
    				showVolumeLabel: true, // if you want to show the label for the current volume
    				showAccountName: false, // also show the current account name in the device label; usefull for multi account setup
    				showAccountButton: true, // if you want to show the "switch account" control button
    				showDeviceButton: true, // if you want to show the "switch device" control button
    				useExternalModal: false, // if you want to use MMM-Modal for account and device popup selection instead of the build-in one (which is restricted to the album image size)
    				updateInterval: 1000, // update interval when playing
    				idleInterval: 30000, // update interval on idle
    				defaultAccount: 0, // default account number, attention : 0 is the first account
    				onStart: {
						deviceName: "yuesiyu",
						spotifyUri: "spotify:track:2UE9XGbAzicJIyo4bB6sqM",
						},
				deviceDisplay: "Listen on",
				volumeStep: 5,
				miniBarConfig:{
							album: true,
							scroll: true,
							logo: true,
						},
    						
  				},
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "People's Daily Online News",
						url: "http://www.people.com.cn/rss/politics.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
  			module: "MMM-GoogleAssistant",
			position: "bottom_right",
  			configDeepMerge: true,
  			config: {
				stopCommand: "stop",
				otherStopCommands: ["ok stop"],	
    				assistantConfig: {
							lang: "en-US",      							
							latitude: 31.486866,
      							longitude: 121.169053,
							deviceRegistred: false
    						},
				responseConfig : {
							useFullscreen: false,
							responseOutputCSS: "response_output.css",
							screenOutputTimer: 5000,
							useChime: true,
							confirmationChime: true,
						chimes: {
								beep: "beep.mp3",
								error: "error.mp3",
								continue: "continue.mp3",
								open: "Google_beep_open.mp3",
								close: "Google_beep_close.mp3",
								warning: "warning.ogg"
							},
						imgStatus: {
								hook: "hook.gif",
  								standby: "standby.gif",
  								reply: "reply.gif",
  								error: "error.gif",
  								think: "think.gif",
  								continue: "continue.gif",
  								listen: "listen.gif",
  								confirmation: "confirmation.gif",
  								information: "information.gif",
  								warning: "warning.gif",
  								userError: "userError.gif"
							},
						zoom: {
								transcription: "80%",
								responseOutput: "60%"
							},
						},

  				}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
