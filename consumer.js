const kafka = require("kafka-node");

const client = new kafka.KafkaClient();
const consumer = new kafka.Consumer(client, [{ topic: "test" }]);

consumer.on("message", (message) => {
  console.log(`Received message: ${message.value}`);
});

consumer.on("error", (error) => {
  console.error(error);
});
