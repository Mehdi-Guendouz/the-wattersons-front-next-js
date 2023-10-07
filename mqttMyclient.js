// mqttClient.js (or mqttClient.ts)

const mqtt = require("mqtt");

const brokerUrl = "http://13.38.173.241:1883"; // Replace with your MQTT broker's URL
const options = {
  clientId: "your-client-id", // Replace with a unique client ID
  clean: true, // Set to true to start a clean session
};

const client = mqtt.connect(brokerUrl, options);

co; // mqttClient.js (or mqttClient.ts)

// ... (previous code)

const topic1 = "uav2/state";
const topic2 = "uav2/armed";
const topic3 = "uav2/in_air";
const topic4 = "uav2/mav_msg";
const topic5 = "uav2/health";
const topic6 = "uav2/fm";
const topic7 = "uav2/gps/fx";
const topic8 = "uav2/gps/ns";
const topic9 = "uav2/gps/lat";
const topic10 = "uav2/gps/lon";
const topic11 = "uav2/gps/abs";
const topic12 = "uav2/gps/rel";
const topic13 = "uav2/bat/id";
const topic14 = "uav2/bat/vl";
const topic15 = "uav2/bat/pt";

// Handle connection events
client.on("connect", () => {
  console.log("Connected to MQTT broker");
  // Subscribe to topics or perform other actions here

  client.subscribe(
    [
      topic1,
      topic2,
      topic3,
      topic4,
      topic5,
      topic6,
      topic7,
      topic8,
      topic9,
      topic10,
      topic11,
      topic12,
      topic13,
      topic14,
      topic15,
    ],
    (err) => {
      if (err) {
        console.error("Subscription error:", err);
      } else {
        console.log(
          "Subscribed to topics:",
          topic1,
          topic2,
          topic3,
          topic4,
          topic5,
          topic6,
          topic7,
          topic8,
          topic9,
          topic10,
          topic11,
          topic12,
          topic13,
          topic14,
          topic15
        );
      }
    }
  );
});

client.on("error", (error) => {
  console.error("Error:", error);
});

// Handle incoming messages
client.on("message", (topic, message) => {
  console.log(
    `Received message on topic ${topic}: ${message.toString()} ${message}`
  );
  // Process the received message as needed
});

// Handle disconnection events
client.on("close", () => {
  console.log("Disconnected from MQTT broker");
});

// Handle other MQTT events as needed
// ...

// Subscribe to MQTT topics if needed
